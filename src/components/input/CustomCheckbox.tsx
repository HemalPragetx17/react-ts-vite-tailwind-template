import React, { forwardRef, useId } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ──────────────────────────────────────────────────────────────────

export type CheckboxColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxRadius = "none" | "sm" | "md" | "lg" | "full";

interface CustomCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form" | "onChange" | "size"> {
  label?: string;
  error?: string;
  touched?: boolean;
  options?: { label: string; value: string | number; description?: string }[];
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  indeterminate?: boolean;
  onChange?: ((value: any) => void) | any;

  // HeroUI-style props
  size?: CheckboxSize;
  color?: CheckboxColor;
  radius?: CheckboxRadius;
  isIndeterminate?: boolean;
  lineThrough?: boolean;
  icon?: React.ReactNode;

  // Formik integration
  field?: FieldInputProps<any>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

// ─── Color Maps ──────────────────────────────────────────────────────────────

export const bgColorMap: Record<CheckboxColor, string> = {
  default:   "bg-secondary-600",
  primary:   "bg-primary",
  secondary: "bg-secondary",
  success:   "bg-success",
  warning:   "bg-warning",
  danger:    "bg-danger",
};

export const borderColorMap: Record<CheckboxColor, string> = {
  default:   "border-secondary-600",
  primary:   "border-primary",
  secondary: "border-secondary",
  success:   "border-success",
  warning:   "border-warning",
  danger:    "border-danger",
};

// ─── Size Maps ───────────────────────────────────────────────────────────────

export const sizeMap: Record<CheckboxSize, { box: string; icon: number; text: string }> = {
  sm: { box: "w-4 h-4",   icon: 10, text: "text-sm" },
  md: { box: "w-5 h-5",   icon: 12, text: "text-sm" },
  lg: { box: "w-6 h-6",   icon: 14, text: "text-base" },
};

export const radiusMap: Record<CheckboxRadius, string> = {
  none: "rounded-none",
  sm:   "rounded-sm",
  md:   "rounded-md",
  lg:   "rounded-lg",
  full: "rounded-full",
};

// ─── Animated Check Icon ─────────────────────────────────────────────────────

const CheckIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 10"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.path
      d="M1.5 5L4.5 8L10.5 1.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  </svg>
);

// Indeterminate dash icon
const DashIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 10"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <motion.line
      x1="1.5" y1="5" x2="10.5" y2="5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    />
  </svg>
);

// ─── Single Checkbox Atom (exported for reuse in CustomCheckboxGroup) ───────

export interface CheckAtomProps {
  id?: string;
  name?: string;
  checked: boolean;
  onToggle: () => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  label?: string | React.ReactNode;
  description?: string;
  size: CheckboxSize;
  color: CheckboxColor;
  radius: CheckboxRadius;
  isIndeterminate?: boolean;
  lineThrough?: boolean;
  icon?: React.ReactNode;
  labelClassName?: string;
  disabled?: boolean;
}

export const CheckAtom: React.FC<CheckAtomProps> = ({
  id,
  name,
  checked,
  onToggle,
  onBlur,
  label,
  description,
  size,
  color,
  radius,
  isIndeterminate = false,
  lineThrough = false,
  icon,
  labelClassName = "",
  disabled = false,
}) => {
  const sc = sizeMap[size];
  const isActive = isIndeterminate || checked;
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <label
      htmlFor={inputId}
      className={`relative inline-flex items-start gap-2.5 cursor-pointer group select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {/* Hidden native input */}
      <input
        id={inputId}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        onBlur={onBlur}
        disabled={disabled}
        className="sr-only"
      />

      {/* Custom box */}
      <span
        className={`
          relative mt-0.5 flex items-center justify-center shrink-0 border-2 transition-colors duration-200
          ${sc.box}
          ${radiusMap[radius]}
          ${isActive ? `${bgColorMap[color]} ${borderColorMap[color]}` : `border-neutral-300 dark:border-neutral-600 bg-transparent`}
        `}
      >
        <AnimatePresence mode="wait">
          {isIndeterminate ? (
            <motion.span key="dash" className="absolute inset-0 flex items-center justify-center">
              {icon ?? <DashIcon size={sc.icon} />}
            </motion.span>
          ) : checked ? (
            <motion.span key="check" className="absolute inset-0 flex items-center justify-center">
              {icon ?? <CheckIcon size={sc.icon} />}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </span>

      {/* Label */}
      {(label || description) && (
        <span className="flex flex-col leading-tight mt-[1.5px]">
          {label && (
            <span
              className={`font-medium text-neutral-700 dark:text-neutral-300 transition-colors transition-opacity duration-200 ${sc.text} ${
                lineThrough && checked ? "line-through opacity-60" : ""
              } ${labelClassName}`}
            >
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const CustomCheckbox = forwardRef<HTMLDivElement, CustomCheckboxProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    options = [],
    containerClassName = "",
    labelClassName = "",
    errorClassName = "",
    size = "md",
    color = "primary",
    radius = "md",
    isIndeterminate: propIsIndeterminate = false,
    indeterminate = false,
    lineThrough = false,
    icon,
    field,
    form,
    value,
    onChange,
    disabled = false,
    ...restProps
  } = props;

  const fieldName = field?.name || (props.name as string | undefined);

  const fieldError =
    fieldName && form?.errors?.[fieldName]
      ? (form.errors[fieldName] as string)
      : error;
  const fieldTouched =
    fieldName && form?.touched?.[fieldName] ? true : touched;

  const currentValue = value !== undefined ? value : (field?.value ?? restProps.checked ?? "");
  const isMulti = options && options.length > 0;
  const activeIndeterminate = propIsIndeterminate || indeterminate;

  // ── Multi-checkbox toggle ────────────────────────────────────────────────
  const handleMultiToggle = (optValue: string | number) => {
    const currentArray = Array.isArray(currentValue) ? currentValue : [];
    const exists = currentArray.includes(optValue);
    const newArray = exists
      ? currentArray.filter((v) => v !== optValue)
      : [...currentArray, optValue];

    if (form?.setFieldValue && fieldName) {
      form.setFieldValue(fieldName, newArray);
    } else if (field?.onChange) {
      const evt = {
        target: { name: fieldName || "", value: newArray },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      field.onChange(evt);
    }
    if (onChange) onChange(newArray);
  };

  // ── Single toggle ────────────────────────────────────────────────────────
  const handleSingleToggle = () => {
    const isChecked = restProps.checked !== undefined ? !!restProps.checked : !!currentValue;
    const next = !isChecked;
    if (form?.setFieldValue && fieldName) {
      form.setFieldValue(fieldName, next);
    } else if (field?.onChange) {
      const evt = {
        target: { name: fieldName || "", value: next, checked: next },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      field.onChange(evt);
    }
    if (onChange) {
      // Pass both boolean and synthetic event structure support if possible, or forward boolean
      // Many custom handlers expect a boolean. If a handler expects event, pass a dual-compatible or forward boolean
      onChange(next);
    }
  };

  return (
    <div className={`w-full ${containerClassName}`} ref={ref}>
      {/* Group label (only for multi) */}
      {label && isMulti && (
        <p className={`text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 select-none ${labelClassName}`}>
          {label}
        </p>
      )}

      {/* Multi-select group */}
      {isMulti ? (
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {options.map((opt, i) => {
            const currentArray = Array.isArray(currentValue) ? currentValue : [];
            const isChecked = currentArray.includes(opt.value);
            return (
              <CheckAtom
                key={i}
                id={`${fieldName}-${i}`}
                name={fieldName}
                checked={isChecked}
                onToggle={() => handleMultiToggle(opt.value)}
                onBlur={field?.onBlur || props.onBlur}
                label={opt.label}
                description={opt.description}
                size={size}
                color={color}
                radius={radius}
                isIndeterminate={activeIndeterminate}
                lineThrough={lineThrough}
                icon={icon}
                labelClassName={labelClassName}
                disabled={disabled as boolean}
              />
            );
          })}
        </div>
      ) : (
        /* Single checkbox */
        <CheckAtom
          id={field?.name || props.id || props.name}
          name={fieldName}
          checked={restProps.checked !== undefined ? !!restProps.checked : !!currentValue}
          onToggle={handleSingleToggle}
          onBlur={field?.onBlur || props.onBlur}
          label={label}
          size={size}
          color={color}
          radius={radius}
          isIndeterminate={activeIndeterminate}
          lineThrough={lineThrough}
          icon={icon}
          labelClassName={labelClassName}
          disabled={disabled as boolean}
        />
      )}

      {/* Error */}
      <AnimatePresence>
        {fieldTouched && fieldError && (
          <motion.p
            key="error"
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
});

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;
