import React, { useState, useLayoutEffect, useRef } from "react";
import Select, { components } from "react-select";
import type {
  MultiValue,
  OptionProps,
  SingleValue,
  DropdownIndicatorProps,
  ClearIndicatorProps,
  MultiValueRemoveProps,
} from "react-select";
import type { FieldProps } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import type { CheckboxColor } from "./CustomCheckbox";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface SelectOption {
  label: string;
  value: string | number;
}

type SelectVariant = "flat" | "bordered" | "underlined" | "faded";
type SelectSize = "sm" | "md" | "lg";
type SelectRadius = "none" | "sm" | "md" | "lg" | "full";
type SelectColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type SelectLabelPlacement = "inside" | "outside" | "outside-left" | "outside-top";

interface CustomSelectProps extends FieldProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];

  isMulti?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  showCheckbox?: boolean;
  closeMenuOnSelect?: boolean;
  /** Max chips shown before showing "+N more" badge (default: 3) */
  maxVisibleChips?: number;

  onInputChange?: (value: string) => void;
  isLoading?: boolean;
  isApiSearch?: boolean;

  // HeroUI-style props
  variant?: SelectVariant;
  size?: SelectSize;
  radius?: SelectRadius;
  color?: SelectColor;
  labelPlacement?: SelectLabelPlacement;

  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

/* -------------------------------------------------------------------------- */
/*                              Color Tokens                                  */
/* -------------------------------------------------------------------------- */

const colorTokens: Record<
  SelectColor,
  { bg: string; text: string; multiValueBg: string; multiValueText: string; focusBorder: string }
> = {
  default:   { bg: "bg-secondary-600",   text: "text-white",      multiValueBg: "bg-secondary-600",   multiValueText: "text-white",      focusBorder: "border-secondary-600"  },
  primary:   { bg: "bg-primary",      text: "text-white",      multiValueBg: "bg-primary",      multiValueText: "text-white",      focusBorder: "border-primary"     },
  secondary: { bg: "bg-secondary",    text: "text-white",      multiValueBg: "bg-secondary",    multiValueText: "text-white",      focusBorder: "border-secondary"   },
  success:   { bg: "bg-success",   text: "text-white",      multiValueBg: "bg-success",   multiValueText: "text-white",      focusBorder: "border-success"  },
  warning:   { bg: "bg-warning",     text: "text-neutral-900",multiValueBg: "bg-warning",     multiValueText: "text-neutral-900",focusBorder: "border-warning"    },
  danger:    { bg: "bg-danger",      text: "text-white",      multiValueBg: "bg-danger",      multiValueText: "text-white",      focusBorder: "border-danger"     },
};

/* -------------------------------------------------------------------------- */
/*                              Size Tokens                                   */
/* -------------------------------------------------------------------------- */

const sizeTokens: Record<
  SelectSize,
  {
    minH: string;
    textSize: string;
    labelSize: string;
    ptInside: string;
    pb: string;
    px: string;
    floatY: number;
    floatX: number;
    floatScale: number;
    insideMinH: string;
  }
> = {
  sm: {
    minH: "!min-h-[36px]",
    textSize: "text-xs",
    labelSize: "text-[10px]",
    ptInside: "pt-4",
    pb: "",
    px: "px-2.5",
    floatY: -42,
    floatX: -10,
    floatScale: 0.83,
    insideMinH: "!min-h-12",
  },
  md: {
    minH: "!min-h-[40px]",
    textSize: "text-sm",
    labelSize: "text-xs",
    ptInside: "pt-5",
    pb: "",
    px: "px-3",
    floatY: -46.5,
    floatX: -12,
    floatScale: 0.85,
    insideMinH: "!min-h-14",
  },
  lg: {
    minH: "!min-h-[52px]",
    textSize: "text-base",
    labelSize: "text-sm",
    ptInside: "pt-6",
    pb: "",
    px: "px-4",
    floatY: -52,
    floatX: -16,
    floatScale: 0.87,
    insideMinH: "!min-h-16",
  },
};

/* -------------------------------------------------------------------------- */
/*                           Variant / Radius Tokens                          */
/* -------------------------------------------------------------------------- */

const variantBase: Record<SelectVariant, string> = {
  flat:       "bg-neutral-100 dark:bg-neutral-800 border-2 border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700",
  bordered:   "bg-transparent border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500",
  underlined: "bg-transparent border-b-2 border-transparent rounded-none relative",
  faded:      "bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300",
};

const radiusMap: Record<SelectRadius, string> = {
  none: "rounded-none",
  sm:   "rounded-sm",
  md:   "rounded-md",
  lg:   "rounded-lg",
  full: "rounded-full",
};

/* -------------------------------------------------------------------------- */
/*                         Custom Dropdown Indicator                          */
/* -------------------------------------------------------------------------- */

const CustomDropdownIndicator = (props: DropdownIndicatorProps<SelectOption, boolean>) => {
  return (
    <components.DropdownIndicator {...props}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 text-neutral-400"
        animate={{ rotate: props.selectProps.menuIsOpen ? 180 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <polyline points="6 9 12 15 18 9" />
      </motion.svg>
    </components.DropdownIndicator>
  );
};

/* -------------------------------------------------------------------------- */
/*                         Custom Clear Indicator                             */
/* -------------------------------------------------------------------------- */

const CustomClearIndicator = (props: ClearIndicatorProps<SelectOption, boolean>) => {
  return (
    <components.ClearIndicator {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </components.ClearIndicator>
  );
};

/* -------------------------------------------------------------------------- */
/*                       Custom Multi-Value Remove                            */
/* -------------------------------------------------------------------------- */

const CustomMultiValueRemove = (props: MultiValueRemoveProps<SelectOption>) => {
  return (
    <components.MultiValueRemove {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="w-3 h-3 text-white"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </components.MultiValueRemove>
  );
};

/* -------------------------------------------------------------------------- */
/*       Custom Multi-Value: limits visible chips, shows "+N more" badge      */
/* -------------------------------------------------------------------------- */

const CustomMultiValue = (props: any) => {
  const maxVisible: number = (props.selectProps as any)?.maxVisibleChips ?? 3;
  const total: number = props.getValue().length;
  const { index } = props;

  // Within limit — render normally
  if (index < maxVisible) {
    return <components.MultiValue {...props} />;
  }

  // First chip beyond limit → show "+N more" badge (rendered once)
  if (index === maxVisible) {
    const hiddenCount = total - maxVisible;
    const colorProp: SelectColor = (props.selectProps as any)?.colorProp ?? "primary";
    const tokens = colorTokens[colorProp];
    return (
      <span className={`inline-flex items-center shrink-0 rounded-md px-2 py-1.5 text-sm font-semibold whitespace-nowrap ${tokens.multiValueBg} ${tokens.multiValueText}`}>
        +{hiddenCount}
      </span>
    );
  }

  // All further chips are invisible
  return null;
};

/* -------------------------------------------------------------------------- */
/*              Static Option Checkbox (no animation = no height shift)       */
/* -------------------------------------------------------------------------- */

const StaticCheckbox = ({ checked, color }: { checked: boolean; color: CheckboxColor }) => {
  const bgMap: Record<CheckboxColor, string> = {
    default:   "bg-secondary-600",
    primary:   "bg-primary",
    secondary: "bg-secondary",
    success:   "bg-success",
    warning:   "bg-warning",
    danger:    "bg-danger",
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center shrink-0 w-5 h-5 rounded-md border-2 transition-colors duration-150
        ${checked ? `${bgMap[color]} border-transparent` : `bg-transparent}`}
      `}
    >
      {/* SVG always in DOM — opacity toggles so box height never shifts */}
      <svg
        viewBox="0 0 12 10"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-3 h-3 transition-opacity duration-150 ${checked ? "opacity-100" : "opacity-0"}`}
      >
        <path d="M1.5 5L4.5 8L10.5 1.5" />
      </svg>
    </span>
  );
};

/* -------------------------------------------------------------------------- */
/*                             Custom Option                                  */
/* -------------------------------------------------------------------------- */

const CustomOption = (props: OptionProps<SelectOption, boolean>) => {
  const { isSelected, isDisabled } = props;
  const showCheckbox = !!((props.selectProps as any)?.showCheckbox);
  const colorProp: CheckboxColor = (props.selectProps as any)?.colorProp ?? "primary";

  return (
    <components.Option {...props}>
      <div className={`flex items-center justify-between w-full gap-2 ${isDisabled ? "opacity-40 pointer-events-none" : ""}`}>
        <div className="min-w-0 flex items-center gap-2 overflow-hidden">
          {showCheckbox && (
            <StaticCheckbox checked={isSelected} color={colorProp} />
          )}
          <span className="whitespace-nowrap text-sm text-neutral-700 dark:text-neutral-200">
            {props.children}
          </span>
        </div>
        {/* Checkmark for single-select */}
        {!showCheckbox && isSelected && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            className="w-4 h-4 shrink-0 text-neutral-700 dark:text-neutral-200">
            <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2a1 1 0 111.414-1.414l2.493 2.493 6.493-6.493a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </components.Option>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Select Component                              */
/* -------------------------------------------------------------------------- */

const CustomSelect: React.FC<CustomSelectProps> = ({
  field,
  form,
  label,
  options,
  placeholder = "",
  isMulti = false,
  isClearable = false,
  isDisabled = false,
  isSearchable = false,
  showCheckbox = false,
  closeMenuOnSelect,
  onInputChange,
  isLoading = false,
  isApiSearch = true,

  variant = "bordered",
  size = "md",
  radius = "md",
  color = "primary",
  labelPlacement = "outside",

  containerClassName = "",
  labelClassName = "",
  errorClassName = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [maxVisibleChips, setMaxVisibleChips] = useState<number>(999);
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const { name, value } = field;
  const { setFieldValue, setFieldTouched, touched, errors } = form;

  const hasError = !!(touched[name] && errors[name]);
  const errorMsg = hasError ? String(errors[name]) : undefined;

  const normalizedValue = isMulti
    ? options.filter((o) => Array.isArray(value) && value.includes(o.value))
    : options.find((o) => o.value === value) || null;

  const hasValue = isMulti
    ? Array.isArray(normalizedValue) && normalizedValue.length > 0
    : normalizedValue !== null && normalizedValue !== undefined;

  const tokens = colorTokens[color];
  const sz = sizeTokens[size];
  const isInside = labelPlacement === "inside";
  const isOutsideLeft = labelPlacement === "outside-left";

  const isFloating = labelPlacement === "inside" || labelPlacement === "outside";
  const shouldFloat = isFocused || hasValue || (isFloating && !!placeholder);

  const radiusClass = variant === "underlined" ? "rounded-none" : radiusMap[radius];
  const variantClass = variantBase[variant];

  // Dynamic layout measurement for multi-select overflow chips
  useLayoutEffect(() => {
    if (!isMulti || !Array.isArray(normalizedValue) || normalizedValue.length === 0) return;

    const updateMeasurements = () => {
      if (!containerRef.current || !measureRef.current) return;
      // Reserve ~120px buffer for right-side indicators, input field cursor, padding, and "+N more" badge
      const availableWidth = containerRef.current.clientWidth - 120;

      const chipNodes = Array.from(measureRef.current.children) as HTMLElement[];
      let currentWidth = 0;
      let count = 0;

      for (let i = 0; i < chipNodes.length; i++) {
        const nodeWidth = chipNodes[i].offsetWidth + 4; // account for gap-1 (4px)
        if (currentWidth + nodeWidth > availableWidth && i > 0) {
          break;
        }
        currentWidth += nodeWidth;
        count++;
      }

      setMaxVisibleChips(count < normalizedValue.length ? count : normalizedValue.length);
    };

    updateMeasurements();

    const observer = new ResizeObserver(() => {
      updateMeasurements();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMulti, normalizedValue]);



  // ── Render external label ──────────────────────────────────────────────────
  const renderExternalLabel = () => {
    if (!label || isFloating) return null;
    return (
      <label
        htmlFor={name}
        className={`block font-medium select-none transition-colors duration-200 ${
          isOutsideLeft ? "shrink-0 mb-0" : "mb-1.5"
        } ${sz.labelSize} ${labelClassName} ${
          isFocused 
            ? "text-[var(--color-primary,#2196f3)]" 
            : "text-neutral-700 dark:text-neutral-300"
        }`}
      >
        {label}
      </label>
    );
  };

  const handleChange = (selected: MultiValue<SelectOption> | SingleValue<SelectOption>) => {
    if (isMulti) {
      const values = selected ? (selected as MultiValue<SelectOption>).map((s) => s.value) : [];
      setFieldValue(name, values);
    } else {
      const val = selected ? (selected as SingleValue<SelectOption>)?.value ?? null : null;
      setFieldValue(name, val);
    }
  };

  return (
    <div className={`w-full ${containerClassName}`}>
      <div className={isOutsideLeft ? "flex items-center gap-3 w-full" : "w-full"}>
        {/* Render external label if outside or outside-left/top */}
        {renderExternalLabel()}

        {/* Wrapper container */}
        <div
          ref={containerRef}
          className={`
            relative w-full transition-all duration-200 ease-in-out
            ${isFocused ? "z-40" : "z-30"}
            ${variantClass}
            ${radiusClass}
            ${hasError ? "!border-red-500 dark:!border-red-500" : ""}
            ${isFocused && !hasError
              ? variant === "bordered" || variant === "faded"
                ? "border-neutral-800 dark:border-neutral-200"
                : ""
              : ""}
            ${labelPlacement === "inside" ? "" : (isFloating && label ? "mt-6" : "")}
          `}
        >
          {/* Hidden measuring container for dynamic multi-select chip overflow */}
          {isMulti && Array.isArray(normalizedValue) && normalizedValue.length > 0 && (
            <div
              ref={measureRef}
              aria-hidden="true"
              className="absolute top-0 left-0 invisible pointer-events-none flex gap-1 h-0 overflow-hidden"
            >
              {normalizedValue.map((opt) => (
                <div
                  key={opt.value}
                  className={`inline-flex items-center gap-1 ${
                    sz.textSize === "text-xs" ? "text-xs" : "text-sm"
                  } rounded-md px-2 py-1.5 font-medium whitespace-nowrap`}
                >
                  <span className="leading-normal">{opt.label}</span>
                  <div className="w-3 h-3 ml-0.5" />
                </div>
              ))}
            </div>
          )}

          {/* Floating label */}
          {isFloating && label && (
            <motion.label
              htmlFor={name}
              initial={false}
              animate={{
                top: shouldFloat
                  ? labelPlacement === "inside"
                    ? "0.3rem"
                    : "50%"
                  : "50%",
                y: shouldFloat
                  ? labelPlacement === "inside"
                    ? "0%"
                    : sz.floatY
                  : "-50%",
                x: shouldFloat
                  ? labelPlacement === "inside"
                    ? 0
                    : sz.floatX
                  : 0,
                scale: shouldFloat ? sz.floatScale : 1,
              }}
              className={`absolute left-0 ${sz.px} font-medium select-none origin-top-left pointer-events-none whitespace-nowrap z-10 ${sz.textSize} ${labelClassName} transition-colors duration-200 ${
                shouldFloat
                  ? isFocused
                    ? "text-[var(--color-primary,#2196f3)]"
                    : "text-neutral-700 dark:text-neutral-300"
                  : "text-neutral-400 dark:text-neutral-500"
              }`}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "top left" }}
            >
              {label}
            </motion.label>
          )}

          {/* Central Stack for Select */}
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            {/* react-select */}
            <Select
              {...({ showCheckbox, colorProp: color, maxVisibleChips } as any)}
              inputId={name}
              name={name}
              options={options}
              value={normalizedValue}
              onChange={handleChange}
              onBlur={() => { setFieldTouched(name, true); setIsFocused(false); }}
              onFocus={() => setIsFocused(true)}
              isMulti={isMulti}
              isClearable={isClearable}
              isDisabled={isDisabled}
              isSearchable={isSearchable}
              closeMenuOnSelect={closeMenuOnSelect ?? (!isMulti)}
              hideSelectedOptions={false}
              menuPortalTarget={typeof document !== "undefined" ? document.body : null}
              menuPosition="fixed"
              placeholder={
                !isFloating || shouldFloat ? placeholder : ""
              }
              onInputChange={onInputChange}
              isLoading={isLoading}
              filterOption={isApiSearch ? null : undefined}
              components={{
                Option: CustomOption,
                DropdownIndicator: CustomDropdownIndicator,
                ClearIndicator: CustomClearIndicator,
                MultiValueRemove: CustomMultiValueRemove,
                MultiValue: CustomMultiValue,
                IndicatorSeparator: () => null,
              }}
              unstyled
              classNames={{
                container: () => "w-full",

                control: () =>
                  `flex items-center w-full cursor-pointer bg-transparent ${labelPlacement === "inside" ? sz.insideMinH : sz.minH} ${sz.px} ${labelPlacement === "inside" && isFloating && shouldFloat ? sz.ptInside : ""} ${sz.pb}`,

                placeholder: () =>
                  `${sz.textSize} text-neutral-400 dark:text-neutral-500 select-none truncate`,

                singleValue: () =>
                  `${sz.textSize} text-neutral-800 dark:text-neutral-100`,

                valueContainer: () => "flex flex-nowrap items-center gap-1 flex-1 min-w-0 overflow-hidden",

                input: () =>
                  `${sz.textSize} text-neutral-800 dark:text-neutral-100 outline-none`,

                indicatorsContainer: () => "flex items-center gap-1 shrink-0 pr-1",

                menu: () =>
                  `mt-1.5 border border-neutral-200 dark:border-neutral-700 ${radiusClass} overflow-hidden shadow-xl bg-white dark:bg-neutral-900 z-50`,

                menuList: () => "py-1",

                option: ({ isSelected, isFocused: optFocused, isDisabled }) =>
                  `px-3 py-2 transition-colors duration-100
                  ${ isDisabled
                      ? "cursor-not-allowed text-neutral-400 dark:text-neutral-600"
                      : "cursor-pointer text-neutral-700 dark:text-neutral-200"
                  }
                  ${ optFocused && !isSelected && !isDisabled
                      ? "bg-neutral-100 dark:bg-neutral-800"
                      : "bg-transparent"
                  }`,

                noOptionsMessage: () =>
                  "px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400",

                loadingMessage: () =>
                  "px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400",

                multiValue: () =>
                  `inline-flex items-center gap-1 ${sz.textSize === "text-xs" ? "text-xs" : "text-sm"} ${tokens.multiValueBg} ${tokens.multiValueText} rounded-md px-2 py-1.5 font-medium whitespace-nowrap`,

                multiValueLabel: () => "leading-normal",

                multiValueRemove: () =>
                  "ml-0.5 flex items-center justify-center text-white opacity-70 hover:opacity-100 cursor-pointer transition-opacity",

                clearIndicator: () =>
                  "flex items-center justify-center p-1 cursor-pointer",

                dropdownIndicator: () =>
                  "flex items-center justify-center p-1 cursor-pointer",

                menuPortal: () => "!z-[9999]",
              }}
              noOptionsMessage={() => "No data found"}
            />
          </div>

          {/* Underline Animation for Underlined Variant */}
          {variant === "underlined" && (
            <motion.div
              className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-neutral-800 dark:bg-neutral-200 z-20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isFocused ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ originX: 0.5 }}
            />
          )}
        </div>
      </div>

      {/* Error */}
      <AnimatePresence>
        {hasError && (
          <motion.p
            key="err"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={`mt-1.5 text-sm text-red-500 ${errorClassName}`}
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
