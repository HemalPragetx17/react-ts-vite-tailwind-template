import React, { forwardRef } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ──────────────────────────────────────────────────────────────────

type RadioColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

type RadioOrientation = "horizontal" | "vertical";

interface CustomRadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  label?: string;
  error?: string;
  touched?: boolean;
  options?: { label: string; value: string | number; description?: string }[];
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  orientation?: RadioOrientation;
  color?: RadioColor;
  // Formik integration
  field?: FieldInputProps<string>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

// ─── Color Maps ─────────────────────────────────────────────────────────────

const ringColorMap: Record<RadioColor, string> = {
  default:   "border-neutral-400 dark:border-neutral-500",
  primary:   "border-blue-500",
  secondary: "border-purple-500",
  success:   "border-emerald-500",
  warning:   "border-amber-500",
  danger:    "border-red-500",
};

const checkedRingColorMap: Record<RadioColor, string> = {
  default:   "border-neutral-600 dark:border-neutral-300",
  primary:   "border-blue-500",
  secondary: "border-purple-500",
  success:   "border-emerald-500",
  warning:   "border-amber-500",
  danger:    "border-red-500",
};

const dotColorMap: Record<RadioColor, string> = {
  default:   "bg-neutral-600 dark:bg-neutral-300",
  primary:   "bg-blue-500",
  secondary: "bg-purple-500",
  success:   "bg-emerald-500",
  warning:   "bg-amber-500",
  danger:    "bg-red-500",
};

// ─── Component ───────────────────────────────────────────────────────────────

const CustomRadio = forwardRef<HTMLDivElement, CustomRadioProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    options = [],
    containerClassName = "",
    labelClassName = "",
    errorClassName = "",
    orientation = "vertical",
    color = "primary",
    field,
    form,
    value,
    onChange,
    ...restProps
  } = props;

  // Extract field name for error/touched lookup
  const fieldName = field?.name || (props.name as string | undefined);

  const fieldError =
    fieldName && form?.errors?.[fieldName]
      ? (form.errors[fieldName] as string)
      : error;
  const fieldTouched =
    fieldName && form?.touched?.[fieldName] ? true : touched;

  // Current selected value
  const currentValue = value !== undefined ? value : (field?.value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    if (field?.onChange) field.onChange(e);
  };

  const isHorizontal = orientation === "horizontal";

  return (
    <div className={`w-full ${containerClassName}`} ref={ref}>
      {/* Group Label */}
      {label && (
        <p
          className={`text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 select-none ${labelClassName}`}
        >
          {label}
        </p>
      )}

      {/* Radio Options */}
      <div
        className={`flex ${isHorizontal ? "flex-row flex-wrap gap-x-6 gap-y-3" : "flex-col gap-2"}`}
      >
        {options.map((opt, i) => {
          const isChecked = String(currentValue) === String(opt.value);
          const optId = `${fieldName ?? "radio"}-${i}`;

          return (
            <label
              key={i}
              htmlFor={optId}
              className="inline-flex items-start gap-3 cursor-pointer group select-none"
            >
              {/* Hidden native input */}
              <input
                {...restProps}
                id={optId}
                type="radio"
                name={fieldName}
                value={opt.value}
                checked={isChecked}
                onChange={handleChange}
                onBlur={field?.onBlur || props.onBlur}
                className="sr-only"
              />

              {/* Custom Radio Circle */}
              <span
                className={`
                  relative mt-0.5 flex items-center justify-center shrink-0
                  w-5 h-5 rounded-full border-2 transition-all duration-200
                  ${isChecked
                    ? checkedRingColorMap[color]
                    : `${ringColorMap[color]} group-hover:border-opacity-80`
                  }
                `}
              >
                <AnimatePresence>
                  {isChecked && (
                    <motion.span
                      key="dot"
                      className={`block w-2.5 h-2.5 rounded-full ${dotColorMap[color]}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 28, duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>
              </span>

              {/* Label Text (+ optional description) */}
              <span className="flex flex-col leading-tight">
                <span
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-150"
                >
                  {opt.label}
                </span>
                {opt.description && (
                  <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                    {opt.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
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
            className={`mt-2 text-xs text-red-500 ${errorClassName}`}
          >
            {fieldError}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

CustomRadio.displayName = "CustomRadio";

export default CustomRadio;
