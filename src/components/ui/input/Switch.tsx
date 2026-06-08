import React, { forwardRef } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { motion, AnimatePresence } from "framer-motion";

interface SwitchProps {
  label?: string;
  activeLabel?: string;
  inactiveLabel?: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  disabled?: boolean;
  name?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  onBlur?: (e: any) => void;

  // Premium Variants & Customization Props
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  thumbIcon?: React.ReactNode | ((isChecked: boolean) => React.ReactNode);
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  // Formik integration
  field?: FieldInputProps<any>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    label,
    activeLabel,
    inactiveLabel,
    error,
    touched,
    containerClassName = "",
    labelClassName = "",
    errorClassName = "",
    disabled = false,
    size = "md",
    color = "primary",
    thumbIcon,
    startContent,
    endContent,
    field,
    form,
    value,
    onChange,
    onBlur,
  } = props;

  // Extract field name for accessing error and touched state from form
  const fieldName = field?.name || props.name;

  // Determine error and touched state - prioritize Formik form data
  const fieldError =
    fieldName && form?.errors?.[fieldName] ? (form.errors[fieldName] as string) : error;
  const fieldTouched = fieldName && form?.touched?.[fieldName] ? true : touched;

  // Current value prioritization: true/false boolean
  const currentValue = !!(value !== undefined ? value : (field?.value ?? false));

  const handleToggle = () => {
    if (disabled) return;
    const nextValue = !currentValue;

    if (form?.setFieldValue && fieldName) {
      form.setFieldValue(fieldName, nextValue);
    } else if (field?.onChange) {
      const syntheticEvent = {
        target: {
          name: fieldName || "",
          value: nextValue,
          checked: nextValue,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      field.onChange(syntheticEvent);
    }

    if (onChange) onChange(nextValue);
  };

  // ─── Size Configurations ─────────────────────────────────────────────────
  const sizeConfigs = {
    sm: {
      track: "w-9 h-5",
      trackPadding: 2,     // px
      thumbSize: 16,        // px (w-4 h-4)
      iconSize: "text-[10px]",
    },
    md: {
      track: "w-11 h-6",
      trackPadding: 2,
      thumbSize: 20,        // px (w-5 h-5)
      iconSize: "text-xs",
    },
    lg: {
      track: "w-14 h-7",
      trackPadding: 2,
      thumbSize: 24,        // px (w-6 h-6)
      iconSize: "text-sm",
    },
  };

  // ─── Color Configurations ────────────────────────────────────────────────
  const colorConfigs = {
    default:   "bg-secondary-600",
    primary:   "bg-primary",
    secondary: "bg-secondary",
    success:   "bg-success",
    warning:   "bg-warning",
    danger:    "bg-danger",
  };

  const currentSize = sizeConfigs[size] || sizeConfigs.md;
  const activeColorClass = colorConfigs[color] || colorConfigs.primary;

  // Calculate thumb translate X: track width - thumb size - 2×padding
  const trackWidthMap = { sm: 36, md: 44, lg: 56 }; // matches w-9/w-11/w-14
  const trackWidth = trackWidthMap[size] || 44;
  const thumbX = trackWidth - currentSize.thumbSize - currentSize.trackPadding * 2;

  // Render Thumb Icon safely
  const renderedThumbIcon =
    typeof thumbIcon === "function" ? thumbIcon(currentValue) : thumbIcon;

  return (
    <div className={`${containerClassName}`} ref={ref}>
      {/* Top Label */}
      {label && (
        <label
          className={`block font-medium text-neutral-700 dark:text-neutral-300 ${
            size === "sm" ? "text-[10px] mb-1.5" : size === "lg" ? "text-sm mb-1.5" : "text-xs mb-1.5"
          } ${labelClassName}`}
        >
          {label}
        </label>
      )}

      {/* Switch Control Area */}
      <div className="flex items-center gap-3 mt-1">
        <button
          id={fieldName}
          name={fieldName}
          type="button"
          role="switch"
          aria-checked={currentValue}
          disabled={disabled}
          onClick={handleToggle}
          onBlur={field?.onBlur || onBlur}
          className={`
            relative inline-flex shrink-0 cursor-pointer rounded-full
            transition-colors duration-300 ease-in-out focus:outline-none
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${currentValue ? activeColorClass : "bg-neutral-200 dark:bg-neutral-700"}
            ${currentSize.track}
          `}
          style={{ padding: currentSize.trackPadding }}
        >
          <span className="sr-only">{label || fieldName || "Toggle switch"}</span>

          {/* Start Content — visible when ON */}
          {startContent && (
            <motion.div
              className={`absolute left-1.5 inset-y-0 flex items-center justify-center pointer-events-none z-0 ${currentSize.iconSize} text-white`}
              initial={false}
              animate={{ opacity: currentValue ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {startContent}
            </motion.div>
          )}

          {/* End Content — visible when OFF */}
          {endContent && (
            <motion.div
              className={`absolute right-1.5 inset-y-0 flex items-center justify-center pointer-events-none z-0 ${currentSize.iconSize} text-neutral-600`}
              initial={false}
              animate={{ opacity: currentValue ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {endContent}
            </motion.div>
          )}

          {/* ── Animated Thumb ── */}
          <motion.span
            aria-hidden="true"
            className={`
              pointer-events-none flex items-center justify-center rounded-full bg-white shadow-md z-10
              ${currentSize.iconSize}
              ${currentValue ? "text-neutral-800" : "text-neutral-600"}
            `}
            style={{
              width: currentSize.thumbSize,
              height: currentSize.thumbSize,
            }}
            initial={false}
            animate={{ x: currentValue ? thumbX : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {renderedThumbIcon}
          </motion.span>
        </button>

        {/* Optional Inline Status Label */}
        {(activeLabel || inactiveLabel) && (
          <span
            onClick={handleToggle}
            className={`select-none font-medium cursor-pointer transition-colors duration-200 ${
              size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm"
            } ${
              currentValue
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
          >
            {currentValue ? activeLabel || "True" : inactiveLabel || "False"}
          </span>
        )}
      </div>

      {/* Error Message */}
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

Switch.displayName = "Switch";

export default Switch;
