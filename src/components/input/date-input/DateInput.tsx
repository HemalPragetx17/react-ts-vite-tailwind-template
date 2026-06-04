import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { createPortal } from "react-dom";
import DatePicker from "react-datepicker";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type PickerVariant = "flat" | "bordered" | "underlined" | "faded";
type PickerSize = "sm" | "md" | "lg";
type PickerRadius = "none" | "sm" | "md" | "lg" | "full";
type PickerColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type PickerLabelPlacement = "inside" | "outside" | "outside-left" | "outside-top";

export interface DateInputProps {
  label?: string;
  placeholder?: string;
  selectsRange?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
  endDateName?: string;

  // Custom static props if not using Formik
  value?: any;
  onChange?: ((dateOrRange: any) => void) | any;
  onRangeChange?: (startDate: Date | null, endDate: Date | null) => void;

  error?: string;
  touched?: boolean;

  // Premium HeroUI-style tokens
  variant?: PickerVariant;
  size?: PickerSize;
  radius?: PickerRadius;
  color?: PickerColor;
  labelPlacement?: PickerLabelPlacement;

  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  enableMonthYearPicker?: boolean;

  // Formik integration
  field?: FieldInputProps<any>;
  form?: {
    values: any;
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
    setFieldTouched?: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
    setValues?: (values: any, shouldValidate?: boolean) => void;
  };
}

/* -------------------------------------------------------------------------- */
/*                              Tokens & Helpers                              */
/* -------------------------------------------------------------------------- */



const variantBase: Record<PickerVariant, string> = {
  flat: "bg-secondary-100 border-2 border-transparent hover:bg-secondary-200 ",
  bordered:
    "bg-transparent border-2 border-secondary-300 hover:border-secondary-400 ",
  underlined:
    "bg-transparent border-b-2 border-transparent rounded-none",
  faded:
    "bg-secondary-50 border-2 border-secondary-200 hover:border-secondary-300",
};

const radiusMap: Record<PickerRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const monthOptions = [
  { value: 0, label: "January" },
  { value: 1, label: "February" },
  { value: 2, label: "March" },
  { value: 3, label: "April" },
  { value: 4, label: "May" },
  { value: 5, label: "June" },
  { value: 6, label: "July" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "October" },
  { value: 10, label: "November" },
  { value: 11, label: "December" },
];

const yearOptions = Array.from({ length: 60 }, (_, index) => {
  const year = new Date().getFullYear() - 40 + index;
  return { value: year, label: String(year) };
});

function stripTime(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function toLocalYYYYMMDD(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function isSameDate(a: Date | null, b: Date | null): boolean {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDateDisplay(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDisplayRange(start: Date | null, end: Date | null): string {
  if (!start && !end) return "";
  if (start && !end) return formatDateDisplay(start);
  return `${formatDateDisplay(start)} – ${formatDisplayRange(end, null)}`;
}

/* -------------------------------------------------------------------------- */
/*                              Subcomponents                                 */
/* -------------------------------------------------------------------------- */

function CalendarIcon() {
  return (
    <FaCalendar size={16} className="text-secondary shrink-0" aria-hidden />
  );
}

function ClearIcon({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Clear date"
      tabIndex={-1}
      type="button"
      className="flex items-center justify-center text-secondary-400 hover:text-secondary-700 transition-colors p-1 rounded-full"
    >
      <FaXmark className="w-3.5 h-3.5" aria-hidden />
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                         iOS Drum-Roll Picker Hook                          */
/* -------------------------------------------------------------------------- */

const ITEM_HEIGHT = 44; // px — height of each row in the drum
const VISIBLE_ITEMS = 7; // must be odd so center = selected — 7 rows covers calendar date grid
const DRUM_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS; // 308px

/**
 * useDrumPicker
 * Framer-motion powered scroll for a single drum column.
 *
 * - animate() drives scrollTop with a spring so it feels physical
 * - scrollY MotionValue tracks live scroll position for per-item transforms
 * - Native scroll still works (touch/wheel); on scroll-end we snap with spring
 */
/* -------------------------------------------------------------------------- */
/* 3. REPLACE YOUR useDrumPicker() WITH THIS */
/* -------------------------------------------------------------------------- */

function useDrumPicker<T extends { value: number; label: string }>(
  items: T[],
  currentValue: number,
  onChange: (value: number) => void,
) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const programmaticRef = useRef(false);

  const scrollY = useMotionValue(0);

  const PADDING = ((VISIBLE_ITEMS - 1) / 2) * ITEM_HEIGHT;

  const indexToScrollTop = useCallback((idx: number) => idx * ITEM_HEIGHT, []);

  const scrollTopToIndex = useCallback(
    (scrollTop: number) => Math.round(scrollTop / ITEM_HEIGHT),
    [],
  );

  /* ---------------------------------------------------------------------- */
  /* SMOOTH SPRING */
  /* ---------------------------------------------------------------------- */

  const animateToIndex = useCallback(
    (idx: number, instant = false) => {
      const el = containerRef.current;

      if (!el) return;

      const target = indexToScrollTop(idx);

      programmaticRef.current = true;

      if (instant) {
        el.scrollTop = target;
        scrollY.set(target);
        programmaticRef.current = false;
        return;
      }

      animate(scrollY, target, {
        type: "spring",

        stiffness: 140,
        damping: 24,
        mass: 0.8,

        restDelta: 0.2,
        restSpeed: 0.2,

        onUpdate: (v) => {
          if (el) {
            el.scrollTop = v;
          }
        },

        onComplete: () => {
          programmaticRef.current = false;
        },
      });
    },
    [indexToScrollTop, scrollY],
  );

  /* ---------------------------------------------------------------------- */
  /* INITIAL POSITION */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const idx = items.findIndex((it) => it.value === currentValue);

    if (idx !== -1) {
      animateToIndex(idx, true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);

  /* ---------------------------------------------------------------------- */
  /* SCROLL */
  /* ---------------------------------------------------------------------- */

  const handleScroll = useCallback(() => {
    const el = containerRef.current;

    if (!el) return;

    scrollY.set(el.scrollTop);

    if (programmaticRef.current) return;

    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    scrollTimerRef.current = setTimeout(() => {
      const idx = Math.max(
        0,
        Math.min(scrollTopToIndex(el.scrollTop), items.length - 1),
      );

      animateToIndex(idx);

      if (items[idx] && items[idx].value !== currentValue) {
        onChange(items[idx].value);
      }
    }, 60);
  }, [
    scrollY,
    scrollTopToIndex,
    animateToIndex,
    items,
    currentValue,
    onChange,
  ]);

  /* ---------------------------------------------------------------------- */
  /* CLICK */
  /* ---------------------------------------------------------------------- */

  const handleItemClick = useCallback(
    (idx: number) => {
      animateToIndex(idx);
      onChange(items[idx].value);
    },
    [animateToIndex, items, onChange],
  );

  return {
    containerRef,
    handleScroll,
    handleItemClick,
    scrollY,
    PADDING,
  };
}

/* -------------------------------------------------------------------------- */
/*                           DateInput Component                       */
/* -------------------------------------------------------------------------- */

const DateInput: React.FC<DateInputProps> = ({
  field,
  form,
  label,
  placeholder,
  selectsRange = false,
  isClearable = false,
  disabled = false,
  value,
  onChange,
  onRangeChange,
  error,
  touched,
  endDateName,

  variant = "bordered",
  size = "md",
  radius = "md",
  color = "primary",
  labelPlacement = "outside",

  containerClassName = "",
  labelClassName = "",
  errorClassName = "",

  enableMonthYearPicker = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [dropdownCoords, setDropdownCoords] = useState<{
    top: number | "auto";
    bottom: number | "auto";
    left: number;
    position: "top" | "bottom";
  } | null>(null);

  const updateCoords = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    
    const spaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 370; // standard calendar height + margin
    
    let top: number | "auto" = 0;
    let bottom: number | "auto" = "auto";
    let position: "top" | "bottom" = "bottom";
    
    if (spaceBelow < dropdownHeight && rect.top > spaceBelow) {
      top = "auto";
      bottom = window.innerHeight - rect.top - 16;
      position = "top";
    } else {
      top = rect.bottom + 6;
      bottom = "auto";
      position = "bottom";
    }
    
    setDropdownCoords({
      top,
      bottom,
      left: rect.left,
      position,
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      updateCoords();
      window.addEventListener("scroll", updateCoords, true);
      window.addEventListener("resize", updateCoords);
      return () => {
        window.removeEventListener("scroll", updateCoords, true);
        window.removeEventListener("resize", updateCoords);
      };
    }
  }, [isOpen, updateCoords]);

  // Field Name extraction
  const fieldName = field?.name || "";

  // Resolved values
  const parseDate = (val: any): Date | null => {
    if (!val) return null;
    if (val instanceof Date) return isNaN(val.getTime()) ? null : val;
    const parsed = new Date(val);
    return isNaN(parsed.getTime()) ? null : parsed;
  };

  const resolvedValue = value !== undefined ? value : field?.value;

  const startDate = selectsRange
    ? endDateName
      ? parseDate(resolvedValue)
      : Array.isArray(resolvedValue)
      ? parseDate(resolvedValue[0])
      : null
    : parseDate(resolvedValue);

  const endDate = selectsRange
    ? endDateName
      ? parseDate(form?.values?.[endDateName])
      : Array.isArray(resolvedValue)
      ? parseDate(resolvedValue[1])
      : null
    : null;

  const hasValue = selectsRange ? !!(startDate && endDate) : !!startDate;
  const displayString = selectsRange
    ? formatDisplayRange(startDate, endDate)
    : formatDateDisplay(startDate);

  const isFloating = labelPlacement === "inside" || labelPlacement === "outside";
  const shouldFloat = isOpen || hasValue || (isFloating && !!placeholder);
  const resolvedPlaceholder = placeholder || (isFloating ? "" : "Select Date");

  const sizeConfigs = {
    sm: {
      wrapperPadding: labelPlacement === "inside" && label ? "py-1 px-2.5" : "py-1.5 px-2.5",
      textSize: "text-xs",
      labelSize: "text-[10px]",
      insideHeight: "h-12",
      outsideHeight: "h-10",
      floatY: labelPlacement === "inside" && label ? -20 : -10,
      floatX: labelPlacement === "inside" && label ? -2 : 0,
      initialY: -8,
      initialX: -1,
      floatYOutside: -41,
      floatXOutside: -14,
      floatScale: 0.83,
    },
    md: {
      wrapperPadding: labelPlacement === "inside" && label ? "py-1.5 px-3" : "py-2.5 px-3",
      textSize: "text-sm",
      labelSize: "text-xs",
      insideHeight: "h-14",
      outsideHeight: "h-12",
      floatY: labelPlacement === "inside" && label ? -23 : -12,
      floatX: labelPlacement === "inside" && label ? 0 : 0,
      initialY: -10,
      initialX: 1,
      floatYOutside: -47,
      floatXOutside: -14,
      floatScale: 0.85,
    },
    lg: {
      wrapperPadding: labelPlacement === "inside" && label ? "py-2 px-4" : "py-3.5 px-4",
      textSize: "text-base",
      labelSize: "text-sm",
      insideHeight: "h-16",
      outsideHeight: "h-14",
      floatY: labelPlacement === "inside" && label ? -26 : -14,
      floatX: labelPlacement === "inside" && label ? 4 : 0,
      initialY: -12,
      initialX: 5,
      floatYOutside: -54,
      floatXOutside: -14,
      floatScale: 0.87,
    },
  };

  const sz = sizeConfigs[size] || sizeConfigs.md;

  // Determine Formik errors / touched state safely
  const startError =
    fieldName && form?.errors?.[fieldName]
      ? String(form.errors[fieldName])
      : error;
  const startTouched = fieldName && form?.touched?.[fieldName] ? true : touched;

  const endError =
    endDateName && form?.errors?.[endDateName]
      ? String(form.errors[endDateName])
      : undefined;
  const endTouched = endDateName && form?.touched?.[endDateName] ? true : false;

  // Since it's a range picker, if either field is touched, we treat the whole component as touched.
  const isTouched = selectsRange ? (startTouched || endTouched) : startTouched;

  const fieldError = isTouched ? (startError || endError) : undefined;
  const hasError = !!fieldError;

  // Track if the picker has been opened to set touched when closed
  const wasOpenedRef = useRef(false);
  useEffect(() => {
    if (isOpen) {
      wasOpenedRef.current = true;
    } else if (wasOpenedRef.current) {
      if (form?.setFieldTouched && fieldName) {
        form.setFieldTouched(fieldName, true);
        if (endDateName) {
          form.setFieldTouched(endDateName, true);
        }
      }
    }
  }, [isOpen, fieldName, endDateName, form]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(target) &&
        calendarRef.current &&
        !calendarRef.current.contains(target)
      ) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Date selection change event
  const handleDateChange = (dates: any) => {
    if (selectsRange) {
      const [start, end] = Array.isArray(dates) ? dates : [dates, null];
      const cleanStart = start ? stripTime(start) : null;
      const cleanEnd = end ? stripTime(end) : null;

      if (endDateName) {
        const formattedStart = cleanStart ? toLocalYYYYMMDD(cleanStart) : null;
        const formattedEnd = cleanEnd ? toLocalYYYYMMDD(cleanEnd) : null;

        if (form?.setValues) {
          form.setValues({
            ...form.values,
            [fieldName]: formattedStart,
            [endDateName]: formattedEnd,
          });
        } else if (form?.setFieldValue && fieldName) {
          form.setFieldValue(fieldName, formattedStart);
          form.setFieldValue(endDateName, formattedEnd);
        }
        onRangeChange?.(cleanStart, cleanEnd);
        if (onChange) onChange([formattedStart, formattedEnd]);

        if (cleanStart && cleanEnd) {
          if (form?.setFieldTouched) {
            form.setFieldTouched(fieldName, true, false);
            form.setFieldTouched(endDateName, true, false);
          }
          setTimeout(() => setIsOpen(false), 80);
        }
      } else {
        const valArr = [
          cleanStart ? toLocalYYYYMMDD(cleanStart) : null,
          cleanEnd ? toLocalYYYYMMDD(cleanEnd) : null,
        ];

        if (form?.setFieldValue && fieldName) {
          form.setFieldValue(fieldName, valArr);
        }
        onRangeChange?.(cleanStart, cleanEnd);
        if (onChange) onChange(valArr);

        if (cleanStart && cleanEnd) {
          if (form?.setFieldTouched && fieldName) {
            form.setFieldTouched(fieldName, true, false);
          }
          setTimeout(() => setIsOpen(false), 80);
        }
      }
    } else {
      const singleDate = Array.isArray(dates) ? dates[0] : dates;
      const cleanDate = singleDate ? stripTime(singleDate) : null;
      const valStr = cleanDate ? toLocalYYYYMMDD(cleanDate) : "";

      if (form?.setFieldValue && fieldName) {
        form.setFieldValue(fieldName, valStr);
        if (form.setFieldTouched) {
          form.setFieldTouched(fieldName, true, false);
        }
      } else if (field?.onChange) {
        const syntheticEvent = {
          target: { name: fieldName, value: valStr },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        field.onChange(syntheticEvent);
      }
      if (onChange) onChange(valStr);

      setTimeout(() => setIsOpen(false), 80);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectsRange) {
      if (endDateName) {
        if (form?.setValues) {
          form.setValues({
            ...form.values,
            [fieldName]: null,
            [endDateName]: null,
          });
          if (form.setFieldTouched) {
            form.setFieldTouched(fieldName, true, false);
            form.setFieldTouched(endDateName, true, false);
          }
        } else if (form?.setFieldValue && fieldName) {
          form.setFieldValue(fieldName, null);
          form.setFieldValue(endDateName, null);
          if (form.setFieldTouched) {
            form.setFieldTouched(fieldName, true, false);
            form.setFieldTouched(endDateName, true, false);
          }
        }
        onRangeChange?.(null, null);
        if (onChange) onChange([null, null]);
      } else {
        if (form?.setFieldValue && fieldName) {
          form.setFieldValue(fieldName, []);
          if (form.setFieldTouched) {
            form.setFieldTouched(fieldName, true, false);
          }
        }
        onRangeChange?.(null, null);
        if (onChange) onChange([]);
      }
    } else {
      if (form?.setFieldValue && fieldName) {
        form.setFieldValue(fieldName, "");
        if (form.setFieldTouched) {
          form.setFieldTouched(fieldName, true, false);
        }
      } else if (field?.onChange) {
        const syntheticEvent = {
          target: { name: fieldName, value: "" },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        field.onChange(syntheticEvent);
      }
      if (onChange) onChange("");
    }
  };

  const variantClass = variantBase[variant];
  const radiusClass =
    variant === "underlined" ? "rounded-none" : radiusMap[radius];

  const isOutsideLeft = labelPlacement === "outside-left";

  const renderOutsideLabel = () => {
    if (!label || isFloating) return null;
    return (
      <label
        htmlFor={fieldName}
        className={`block font-medium select-none transition-colors duration-200 ${
          isOutsideLeft ? "shrink-0 mb-0" : "mb-1.5"
        } ${sz.labelSize} ${labelClassName} ${
          isOpen
            ? "text-[var(--color-primary,#2196f3)]"
            : "text-neutral-700 dark:text-neutral-300"
        }`}
      >
        {label}
      </label>
    );
  };

  const [showMonthYearPicker, setShowMonthYearPicker] = useState(false);

  /* -------------------------------------------------------------------------- */
  /* CUSTOM HEADER */
  /* -------------------------------------------------------------------------- */

  const renderHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    changeMonth,
    changeYear,
  }: any) => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const monthYearLabel = `${date.toLocaleString("en-US", {
      month: "short",
    })} ${currentYear}`;

    return (
      <div className="relative flex flex-col bg-white">
        {/* HEADER ROW */}
        <div className="relative flex items-center justify-between w-full px-2 pt-3 pb-2">
          {/* LEFT */}
          <div className="flex items-center justify-center w-9 h-9">
            <AnimatePresence mode="wait">
              {!showMonthYearPicker && (
                <motion.button
                  key="prev-btn"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.15 }}
                  type="button"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="
                  flex items-center justify-center
                  w-9 h-9
                  rounded-full
                  border border-secondary-200
                  bg-secondary-50
                  text-secondary-600
                  hover:bg-secondary-100
                  disabled:opacity-40
                  transition-colors
                "
                >
                  <FaChevronLeft className="w-4 h-4" aria-hidden />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* MONTH YEAR BUTTON */}
          <div className="relative flex-1 flex justify-center">
            {enableMonthYearPicker ? (
              <>
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMonthYearPicker((prev) => !prev);
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 24,
                  }}
                  className={`
          inline-flex items-center justify-center gap-2
          px-4 py-2
          text-sm font-semibold
          transition-all duration-300 ease-out

          ${
            showMonthYearPicker
              ? `
                rounded-full
                border border-secondary-200
                bg-secondary-100
                shadow-none
                text-secondary-900
              `
              : `
                rounded-full
                border border-secondary-200
                bg-secondary-50
                shadow-sm
                text-secondary-900
                hover:bg-secondary-100
              `
          }
        `}
                >
                  <motion.span
                    key={monthYearLabel}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 26,
                    }}
                  >
                    {monthYearLabel}
                  </motion.span>

                  <motion.div
                    className="w-3.5 h-3.5 flex items-center justify-center"
                    animate={{
                      rotate: showMonthYearPicker ? 180 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 24,
                    }}
                  >
                    <FaChevronDown className="w-3.5 h-3.5" aria-hidden />
                  </motion.div>
                </motion.button>

                {/* DRUM OVERLAY */}
                <AnimatePresence>
                  {showMonthYearPicker && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.98,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 28,
                      }}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "calc(100% + 8px)",
                        x: "-50%",
                        zIndex: 50,
                      }}
                    >
                      <DrumOverlay
                        currentMonth={currentMonth}
                        currentYear={currentYear}
                        onMonthChange={(m) => {
                          changeMonth(m);
                        }}
                        onYearChange={(y) => {
                          changeYear(y);
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <div
                className="
        inline-flex items-center justify-center
        px-4 py-2
        text-sm font-semibold
        rounded-full
        border border-secondary-200
        bg-secondary-50
        text-secondary-900
      "
              >
                {monthYearLabel}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center w-9 h-9">
            <AnimatePresence mode="wait">
              {!showMonthYearPicker && (
                <motion.button
                  key="next-btn"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.15 }}
                  type="button"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="
                  flex items-center justify-center
                  w-9 h-9
                  rounded-full
                  border border-secondary-200
                  bg-secondary-50
                  text-secondary-600
                  hover:bg-secondary-100
                  disabled:opacity-40
                  transition-colors
                "
                >
                  <FaChevronRight className="w-4 h-4" aria-hidden />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  };

  const getDayClass = (date: Date) => {
    const cleanDate = stripTime(date);
    if (selectsRange) {
      if (isSameDate(cleanDate, startDate)) return "drp-day--range-start";
      if (isSameDate(cleanDate, endDate)) return "drp-day--range-end";
      if (startDate && endDate && cleanDate > startDate && cleanDate < endDate)
        return "drp-day--in-range";
    } else {
      if (isSameDate(cleanDate, startDate)) return "drp-day--selected-single";
    }
    return "";
  };

  return (
    <div className={`w-full flow-root ${containerClassName}`} ref={wrapperRef}>
      <div
        className={isOutsideLeft ? "flex items-center gap-3 w-full" : "w-full"}
      >
        {renderOutsideLabel()}

        <div
          className={`
            relative flex items-center justify-between w-full transition-all duration-200 ease-in-out cursor-pointer select-none box-border
            ${variantClass}
            ${radiusClass}
            ${sz.wrapperPadding}
            ${labelPlacement === "inside" ? sz.insideHeight : `${sz.outsideHeight} ${isFloating && label ? "mt-6" : ""}`}
            ${hasError ? "!border-danger" : ""}
            ${
              isOpen && !hasError
                ? variant === "bordered" || variant === "faded"
                  ? "border-secondary-800"
                  : ""
                : ""
            }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
        >
          {/* Floating Label */}
          {isFloating && label && (
            <motion.label
              htmlFor={fieldName}
              initial={false}
              animate={{
                y: shouldFloat 
                  ? (labelPlacement === "inside" ? sz.floatY : sz.floatYOutside) 
                  : sz.initialY,
                x: shouldFloat 
                  ? (labelPlacement === "inside" ? sz.floatX : sz.floatXOutside) 
                  : sz.initialX,
                scale: shouldFloat ? sz.floatScale : 1,
              }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className={`
                absolute left-3 top-1/2 z-10 font-medium pointer-events-none origin-left transition-colors duration-200
                ${sz.textSize} ${labelClassName} ${
                  shouldFloat
                    ? isOpen
                      ? "text-[var(--color-primary,#2196f3)]"
                      : "text-neutral-700 dark:text-neutral-300"
                    : "text-neutral-400 dark:text-neutral-500"
                }
              `}
            >
              {label}
            </motion.label>
          )}

          {/* Central Stack: Label + Value */}
          <div 
            className={`
              flex flex-col flex-1 min-w-0 justify-center
              ${labelPlacement === "inside" && isFloating && shouldFloat ? (size === "sm" ? "mt-3" : size === "lg" ? "mt-5" : "mt-4") : ""}
            `}
          >
            {labelPlacement === "inside" && !isFloating && label && (
              <span
                className={`
                  block font-medium select-none mb-0.5 text-secondary-500
                  ${sz.labelSize} ${labelClassName}
                `}
              >
                {label}
              </span>
            )}

            <div
              className={`
                flex-1 min-w-0 truncate pr-2
              `}
            >
              {!displayString ? (
                <span
                  className={`text-secondary truncate select-none ${sz.textSize}`}
                >
                  {((!isFloating || shouldFloat) && resolvedPlaceholder) ? resolvedPlaceholder : "\u200b"}
                </span>
              ) : (
                <span
                  className={`text-secondary-800 font-medium truncate select-none ${sz.textSize}`}
                >
                  {displayString}
                </span>
              )}
            </div>
          </div>

          {/* Action icon: Clear or Calendar */}
          <div className="flex items-center justify-center shrink-0 ml-1">
            {isClearable && hasValue && !disabled ? (
              <ClearIcon onClick={handleClear} />
            ) : (
              <CalendarIcon />
            )}
          </div>

          {/* Dropdown Calendar Portal Wrapper */}
          {createPortal(
            <AnimatePresence>
              {isOpen && !disabled && dropdownCoords && (
                <motion.div
                  ref={calendarRef}
                  initial={{
                    opacity: 0,
                    y: dropdownCoords.position === "bottom" ? -10 : 10,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: dropdownCoords.position === "bottom" ? -10 : 10,
                    scale: 0.97,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                  }}
                  className={`fixed z-[99999] bg-background border border-secondary-200 rounded-xl shadow-xl overflow-hidden drp-calendar-wrapper--${color}`}
                  style={{
                    width: 256,
                    height: 325,
                    top: dropdownCoords.top,
                    bottom: dropdownCoords.bottom,
                    left: dropdownCoords.left,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <DatePicker
                    {...({
                      selected: startDate,
                      onChange: handleDateChange,
                      startDate: startDate,
                      endDate: endDate,
                      selectsRange: selectsRange,
                      shouldCloseOnSelect: false,
                      inline: true,
                      calendarClassName:
                        "drp-calendar !border-none !rounded-xl !shadow-none",
                      dayClassName: getDayClass,
                      renderCustomHeader: renderHeader,
                      fixedHeight: true,
                    } as any)}
                  />
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}

          {/* Underline Animation for Underlined Variant */}
          {variant === "underlined" && (
            <motion.div
              className={`absolute bottom-[-2px] left-0 right-0 h-[2px] z-20 ${
                hasError ? "bg-danger" : "bg-secondary-800"
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ originX: 0.5 }}
            />
          )}
        </div>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={`mt-1.5 text-sm text-red-500 ${errorClassName}`}
          >
            {fieldError}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

DateInput.displayName = "DateInput";

export default DateInput;

/* -------------------------------------------------------------------------- */
/*                           DrumOverlay Component                            */
/* -------------------------------------------------------------------------- */

/**
 * DrumOverlay
 * Renders two side-by-side iOS-style drum columns (month | year).
 * - Fixed selection band sits at the vertical centre (pointer-events: none)
 * - Month and year lists scroll independently behind it
 * - Fade masks at top/bottom created via CSS (see index.css .drp-drum-*)
 */
interface DrumOverlayProps {
  currentMonth: number;
  currentYear: number;
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
}

/* -------------------------------------------------------------------------- */
/* DRUM OVERLAY */
/* -------------------------------------------------------------------------- */

const DrumOverlay: React.FC<DrumOverlayProps> = ({
  currentMonth,
  currentYear,
  onMonthChange,
  onYearChange,
}) => {
  const {
    containerRef: monthRef,
    handleScroll: handleMonthScroll,
    handleItemClick: handleMonthClick,
    scrollY: monthScrollY,
    PADDING,
  } = useDrumPicker(monthOptions, currentMonth, onMonthChange);

  const {
    containerRef: yearRef,
    handleScroll: handleYearScroll,
    handleItemClick: handleYearClick,
    scrollY: yearScrollY,
  } = useDrumPicker(yearOptions, currentYear, onYearChange);

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-secondary-100
        border-0
        shadow-none
      "
      style={{
        width: 256,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* ACTIVE CENTER BAND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-2 right-2"
        style={{
          top: "50%",
          height: ITEM_HEIGHT - 4,
          transform: "translateY(-50%)",
          zIndex: 0,
          borderRadius: 16,

          background: "color-mix(in srgb, var(--color-background) 85%, transparent)",
          backdropFilter: "blur(10px)",
          border: "1px solid color-mix(in srgb, var(--color-background) 75%, transparent)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      />

      {/* DRUMS */}
      <div
        className="flex"
        style={{
          height: DRUM_HEIGHT,
        }}
      >
        {/* MONTH */}
        <DrumColumn
          items={monthOptions}
          selectedValue={currentMonth}
          containerRef={monthRef}
          onScroll={handleMonthScroll}
          onItemClick={handleMonthClick}
          scrollY={monthScrollY}
          padding={PADDING}
          align="center"
        />

        {/* YEAR */}
        <DrumColumn
          items={yearOptions}
          selectedValue={currentYear}
          containerRef={yearRef}
          onScroll={handleYearScroll}
          onItemClick={handleYearClick}
          scrollY={yearScrollY}
          padding={PADDING}
          align="center"
        />
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                           DrumColumn Component                             */
/* -------------------------------------------------------------------------- */

interface DrumColumnProps {
  items: { value: number; label: string }[];
  selectedValue: number;
  containerRef: React.RefObject<HTMLDivElement>;
  onScroll: () => void;
  onItemClick: (idx: number) => void;
  scrollY: ReturnType<typeof useMotionValue<number>>;
  padding: number;
  align: "left" | "center" | "right";
}

const DrumColumn: React.FC<DrumColumnProps> = ({
  items,
  selectedValue,
  containerRef,
  onScroll,
  onItemClick,
  scrollY,
  padding,
  align,
}) => {
  return (
    /* Outer wrapper: clips content + applies fade mask via CSS class */
    <div className="relative flex-1 overflow-hidden drp-drum-fade">
      {/* Scrollable list — no native scroll-snap; framer spring handles snapping */}
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="drp-drum-scroll h-full overflow-y-scroll"
      >
        {/* Top padding spacer so first item can reach centre */}
        <div style={{ height: padding, flexShrink: 0 }} />

        {items.map((item, idx) => {
          /**
           * Per-item animated transforms driven by scrollY MotionValue.
           * scrollY tracks live scrollTop, so these update on every scroll frame.
           *
           * itemCenter  = exact scrollTop where this item is centred
           * offset      = distance of item from the current centre (in px)
           * We map |offset| → opacity and scale so items physically recede.
           */
          const itemCenter = idx * ITEM_HEIGHT;

          // useTransform requires a MotionValue — derive opacity + scale live
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(
            scrollY,
            [
              itemCenter - ITEM_HEIGHT * 3,
              itemCenter - ITEM_HEIGHT,
              itemCenter,
              itemCenter + ITEM_HEIGHT,
              itemCenter + ITEM_HEIGHT * 3,
            ],
            [0.25, 0.55, 1, 0.55, 0.25],
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(
            scrollY,
            [
              itemCenter - ITEM_HEIGHT * 2,
              itemCenter,
              itemCenter + ITEM_HEIGHT * 2,
            ],
            [0.88, 1, 0.88],
          );

          const isSelected = item.value === selectedValue;

          return (
            <motion.div
              key={item.value}
              onClick={() => onItemClick(idx)}
              style={{
                height: ITEM_HEIGHT,
                opacity,
                scale,
              }}
              className={`
                relative z-10 flex items-center cursor-pointer px-4 text-base
                ${align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center"}
                ${isSelected ? "text-secondary-900 font-semibold" : "text-secondary-700 font-medium"}
              `}
            >
              {item.label}
            </motion.div>
          );
        })}

        {/* Bottom padding spacer so last item can reach centre */}
        <div style={{ height: padding, flexShrink: 0 }} />
      </div>
    </div>
  );
};
