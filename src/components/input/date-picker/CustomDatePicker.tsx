import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import type { FieldProps } from "formik";
import { motion, AnimatePresence } from "framer-motion";
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
type PickerLabelPlacement = "inside" | "outside" | "outside-left";

export interface CustomDatePickerProps extends Partial<FieldProps> {
  label?: string;
  placeholder?: string;
  selectsRange?: boolean;
  isClearable?: boolean;
  disabled?: boolean;

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
}

/* -------------------------------------------------------------------------- */
/*                              Tokens & Helpers                              */
/* -------------------------------------------------------------------------- */

const sizeTokens: Record<PickerSize, { minH: string; textSize: string; labelSize: string; ptInside: string; pb: string; px: string }> = {
  sm: { minH: "min-h-[36px]", textSize: "text-xs",   labelSize: "text-[10px]", ptInside: "pt-4", pb: "", px: "px-2.5" },
  md: { minH: "min-h-[44px]", textSize: "text-sm",   labelSize: "text-xs",    ptInside: "pt-5", pb: "", px: "px-3"   },
  lg: { minH: "min-h-[52px]", textSize: "text-base", labelSize: "text-sm",    ptInside: "pt-6", pb: "", px: "px-4"   },
};

const variantBase: Record<PickerVariant, string> = {
  flat:       "bg-neutral-100 dark:bg-neutral-800 border-2 border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700",
  bordered:   "bg-transparent border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500",
  underlined: "bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 rounded-none",
  faded:      "bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300",
};

const radiusMap: Record<PickerRadius, string> = {
  none: "rounded-none",
  sm:   "rounded-sm",
  md:   "rounded-md",
  lg:   "rounded-lg",
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
  return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
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
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-neutral-400 shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClearIcon({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Clear date"
      tabIndex={-1}
      type="button"
      className="flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors p-1 rounded-full"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                           CustomDatePicker Component                       */
/* -------------------------------------------------------------------------- */

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  field,
  form,
  label,
  placeholder = "Select Date",
  selectsRange = false,
  isClearable = false,
  disabled = false,
  value,
  onChange,
  onRangeChange,
  error,
  touched,

  variant = "bordered",
  size = "md",
  radius = "md",
  color = "primary",
  labelPlacement = "outside",

  containerClassName = "",
  labelClassName = "",
  errorClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    ? Array.isArray(resolvedValue)
      ? parseDate(resolvedValue[0])
      : null
    : parseDate(resolvedValue);

  const endDate = selectsRange
    ? Array.isArray(resolvedValue)
      ? parseDate(resolvedValue[1])
      : null
    : null;

  const hasValue = selectsRange ? !!(startDate || endDate) : !!startDate;
  const displayString = selectsRange
    ? formatDisplayRange(startDate, endDate)
    : formatDateDisplay(startDate);

  // Determine Formik errors / touched state safely
  const fieldError = fieldName && form?.errors?.[fieldName] ? String(form.errors[fieldName]) : error;
  const fieldTouched = fieldName && form?.touched?.[fieldName] ? true : touched;
  const hasError = !!(fieldTouched && fieldError);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
          if (form?.setFieldTouched && fieldName) {
            form.setFieldTouched(fieldName, true);
          }
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, form, fieldName]);

  // Date selection change event
  const handleDateChange = (dates: any, event?: React.SyntheticEvent<any>) => {
    if (selectsRange) {
      const [start, end] = Array.isArray(dates) ? dates : [dates, null];
      const cleanStart = start ? stripTime(start) : null;
      const cleanEnd = end ? stripTime(end) : null;

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
        setTimeout(() => setIsOpen(false), 80);
      }
    } else {
      const singleDate = Array.isArray(dates) ? dates[0] : dates;
      const cleanDate = singleDate ? stripTime(singleDate) : null;
      const valStr = cleanDate ? toLocalYYYYMMDD(cleanDate) : "";

      if (form?.setFieldValue && fieldName) {
        form.setFieldValue(fieldName, valStr);
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
      if (form?.setFieldValue && fieldName) form.setFieldValue(fieldName, []);
      onRangeChange?.(null, null);
      if (onChange) onChange([]);
    } else {
      if (form?.setFieldValue && fieldName) form.setFieldValue(fieldName, "");
      else if (field?.onChange) {
        const syntheticEvent = {
          target: { name: fieldName, value: "" },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        field.onChange(syntheticEvent);
      }
      if (onChange) onChange("");
    }
  };

  const sz = sizeTokens[size];
  const variantClass = variantBase[variant];
  const radiusClass = variant === "underlined" ? "rounded-none" : radiusMap[radius];

  const isInside = labelPlacement === "inside";
  const isOutsideLeft = labelPlacement === "outside-left";
  const isLabelActive = isOpen || hasValue;

  const insideLabelVariants = {
    default: { top: "50%", y: "-50%", scale: 1 },
    active:  { top: "0.3rem", y: "0%", scale: 0.82 },
  };

  const renderOutsideLabel = () => {
    if (!label || isInside) return null;
    return (
      <label
        htmlFor={fieldName}
        className={`block font-medium text-neutral-700 dark:text-neutral-300 select-none ${
          isOutsideLeft ? "shrink-0 mb-0" : "mb-1.5"
        } ${sz.labelSize} ${labelClassName}`}
      >
        {label}
      </label>
    );
  };

  // Custom react-datepicker header styling mapping
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

    const selectStyles = {
      control: (base: any) => ({
        ...base,
        minHeight: 30,
        height: 30,
        borderRadius: 8,
        borderColor: "#d1d5db",
        backgroundColor: "#ffffff",
        boxShadow: "none",
        fontSize: "12px",
      }),
      valueContainer: (base: any) => ({
        ...base,
        padding: "0 8px",
        height: 30,
      }),
      indicatorsContainer: (base: any) => ({
        ...base,
        paddingRight: 4,
      }),
      singleValue: (base: any) => ({
        ...base,
        lineHeight: "30px",
      }),
      dropdownIndicator: (base: any) => ({
        ...base,
        padding: 2,
      }),
      menu: (base: any) => ({
        ...base,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        zIndex: 99999,
      }),
      menuPortal: (base: any) => ({
        ...base,
        zIndex: 99999,
      }),
      menuList: (base: any) => ({
        ...base,
        padding: 0,
        maxHeight: 180,
      }),
      option: (base: any, state: any) => ({
        ...base,
        padding: "4px 8px",
        fontSize: "12px",
        backgroundColor: state.isFocused ? "#eff6ff" : "#fff",
        color: "#111827",
      }),
    };

    return (
      <div className="flex flex-col items-center gap-2 px-2 pb-2 pt-1 bg-white select-none">
        <div className="flex items-center justify-between w-full">
          <button
            type="button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 disabled:opacity-40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <span className="text-xs font-bold text-gray-800">
            {date.toLocaleString("en-US", { month: "short" })} {currentYear}
          </span>
          <button
            type="button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 disabled:opacity-40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 w-full mt-1">
          <div className="flex-1">
            <Select
              value={monthOptions[currentMonth]}
              options={monthOptions}
              onChange={(option) => changeMonth((option as any).value)}
              isSearchable={false}
              menuPlacement="auto"
              menuPortalTarget={typeof document !== "undefined" ? document.body : undefined}
              styles={selectStyles}
            />
          </div>
          <div className="w-20">
            <Select
              value={{ value: currentYear, label: String(currentYear) }}
              options={yearOptions}
              onChange={(option) => changeYear((option as any).value)}
              isSearchable={false}
              menuPlacement="auto"
              menuPortalTarget={typeof document !== "undefined" ? document.body : undefined}
              styles={selectStyles}
            />
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
    <div className={`w-full ${containerClassName}`} ref={wrapperRef}>
      <div className={isOutsideLeft ? "flex items-center gap-3 w-full" : "w-full"}>
        {renderOutsideLabel()}

        {/* Trigger input box */}
        <div
          className={`
            relative flex items-center justify-between w-full transition-all duration-200 ease-in-out cursor-pointer select-none box-border
            ${variantClass}
            ${radiusClass}
            ${sz.minH}
            ${sz.px}
            ${isInside && label ? sz.ptInside : ""}
            ${hasError ? "!border-red-500 dark:!border-red-500" : ""}
            ${isOpen && !hasError
              ? variant === "bordered" || variant === "faded"
                ? "border-neutral-800 dark:border-neutral-200"
                : ""
              : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
        >
          {/* Inside floating label */}
          {isInside && label && (
            <motion.label
              className={`absolute left-0 ${sz.px} font-medium text-neutral-500 dark:text-neutral-400 select-none origin-top-left pointer-events-none whitespace-nowrap z-10 ${sz.labelSize} ${labelClassName}`}
              variants={insideLabelVariants}
              initial={isLabelActive ? "active" : "default"}
              animate={isLabelActive ? "active" : "default"}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "top left" }}
            >
              {label}
            </motion.label>
          )}

          {/* Value Display */}
          <div className="flex-1 min-w-0 truncate pr-2">
            {!displayString ? (
              <span className={`text-neutral-400 dark:text-neutral-500 truncate select-none ${sz.textSize}`}>
                {isInside ? (isLabelActive ? placeholder : "") : placeholder}
              </span>
            ) : (
              <span className={`text-neutral-800 dark:text-neutral-100 font-medium truncate select-none ${sz.textSize}`}>
                {displayString}
              </span>
            )}
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
          {isOpen && !disabled && (
            <div
              className="absolute left-0 top-[calc(100%+6px)] z-50 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
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
                  calendarClassName: "drp-calendar !border-none !rounded-xl !shadow-none",
                  dayClassName: getDayClass,
                  renderCustomHeader: renderHeader,
                } as any)}
              />
            </div>
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
            className={`mt-1.5 text-xs text-red-500 ${errorClassName}`}
          >
            {fieldError}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

CustomDatePicker.displayName = "CustomDatePicker";

export default CustomDatePicker;