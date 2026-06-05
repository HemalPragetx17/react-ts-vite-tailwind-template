import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React, { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form" | "size"> {
  label?: string;
  error?: string;
  touched?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  isPasswordToggle?: boolean;
  numInputs?: number;
  isClearable?: boolean;

  // Premium HeroUI Variants
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  labelPlacement?: "inside" | "outside" | "outside-left" | "outside-top";

  // Formik integration
  field?: FieldInputProps<string>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    startContent,
    endContent,
    containerClassName = "",
    inputClassName = "",
    labelClassName = "",
    errorClassName = "",
    isPasswordToggle = false,
    numInputs: _numInputs,
    isClearable = false,
    size = "md",
    variant = "bordered",
    radius = "md",
    labelPlacement = "outside",
    type = "text",
    field,
    form,
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    disabled = false,
    ...restProps
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  // Determine if the component is controlled (either via value prop or Formik field)
  const isControlled = value !== undefined || field !== undefined;

  // Prioritize explicitly passed value prop, fallback to Formik field value, then internal state
  const inputValue = isControlled
    ? (value !== undefined ? value : (field?.value ?? ""))
    : internalValue;

  const hasValue = String(inputValue).length > 0;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
    if (field?.onBlur) field.onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
    if (field?.onChange) {
      field.onChange(e);
    }
  };

  const handleClear = () => {
    if (form?.setFieldValue && field?.name) {
      form.setFieldValue(field.name, "");
    } else if (field?.onChange) {
      const syntheticEvent = {
        target: {
          name: field.name || "",
          value: "",
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      field.onChange(syntheticEvent);
    }
    if (onChange) {
      const syntheticEvent = {
        target: {
          name: field?.name || props.name || "",
          value: "",
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  // Extract field name for accessing error and touched state from form
  const fieldName = field?.name || (props.name as string | undefined);

  // Determine error and touched state - prioritize Formik form data
  const fieldError = fieldName && form?.errors?.[fieldName] ? (form.errors[fieldName] as string) : error;
  const fieldTouched = fieldName && form?.touched?.[fieldName] ? true : touched;

  const isPassword = type === "password";

  const inputType =
    isPassword && isPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

  // Size Configurations
  const sizeConfigs = {
    sm: {
      wrapperPadding: labelPlacement === "inside" && label ? "py-1 px-2.5" : "py-1.5 px-2.5",
      textSize: "text-xs",
      labelSize: "text-[10px]",
      insideHeight: "h-12",
      outsideHeight: "h-10",
      floatY: labelPlacement === "inside" && label ? -20 : -10,
      floatX: labelPlacement === "inside" && label ? -3 : 0,
      initialY: -8,
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
      floatX: labelPlacement === "inside" && label ? 3 : 0,
      initialY: -12,
      floatYOutside: -54,
      floatXOutside: -14,
      floatScale: 0.87,
    },
  };

  // Variant Configurations
  const variantConfigs = {
    flat: "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus-within:bg-neutral-200 dark:focus-within:bg-neutral-700 border-2 border-transparent",
    bordered: "bg-transparent border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 focus-within:border-neutral-800 dark:focus-within:border-neutral-200",
    underlined: "bg-transparent border-b-2 border-transparent rounded-none relative",
    faded: "bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 focus-within:border-neutral-600",
  };

  // Radius Configurations
  const radiusConfigs = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const currentSize = sizeConfigs[size] || sizeConfigs.md;
  const currentVariantClass = variantConfigs[variant] || variantConfigs.flat;
  const currentRadiusClass = variant === "underlined" ? "rounded-none" : (radiusConfigs[radius] || radiusConfigs.md);

  // Fallback map for start/end content maintaining backwards compatibility
  const actualStartContent = startContent;
  const actualEndContent = endContent;

  const isFloating = labelPlacement === "inside" || labelPlacement === "outside";
  const shouldFloat = isFocused || hasValue || (isFloating && !!placeholder);

  // Render Label Helper
  const renderExternalLabel = () => {
    if (!label || isFloating) return null;
    return (
      <label
        htmlFor={field?.name || props.id || props.name}
        className={`block font-medium select-none transition-colors duration-200 ${labelPlacement === "outside-left" ? "mb-0 shrink-0" : "mb-1.5"
          } ${currentSize.labelSize} ${labelClassName} ${isFocused
            ? "text-[var(--color-primary,#2196f3)]"
            : "text-neutral-700 dark:text-neutral-300"
          }`}
      >
        {label}
      </label>
    );
  };

  const isOutsideLeft = labelPlacement === "outside-left";

  const resolvedPlaceholder = placeholder || "";

  return (
    <div className={`w-full flow-root ${containerClassName}`}>
      {/* Outer Layout Strategy based on labelPlacement */}
      <div className={`${isOutsideLeft ? "flex items-center gap-3 w-full" : "w-full"}`}>
        {/* Render external label if outside or outside-left/top */}
        {renderExternalLabel()}

        {/* Input Wrapper Container */}
        <div
          className={`
            relative flex items-center gap-2.5 w-full transition-all duration-200 ease-in-out box-border
            ${currentVariantClass}
            ${currentRadiusClass}
            ${currentSize.wrapperPadding}
            ${fieldTouched && fieldError ? "!border-red-500 dark:!border-red-500" : ""}
            ${labelPlacement === "inside" ? currentSize.insideHeight : `${currentSize.outsideHeight} ${isFloating && label ? "mt-6" : ""}`}
            ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
          `}
        >
          {/* Floating Label */}
          {isFloating && label && (
            <motion.label
              htmlFor={field?.name || props.id || props.name}
              initial={false}
              animate={{
                y: shouldFloat
                  ? (labelPlacement === "inside" ? currentSize.floatY : currentSize.floatYOutside)
                  : currentSize.initialY,
                x: shouldFloat
                  ? (labelPlacement === "inside" ? currentSize.floatX : currentSize.floatXOutside)
                  : (actualStartContent ? 32 : 0),
                scale: shouldFloat ? currentSize.floatScale : 1,
              }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className={`
                absolute left-3 top-1/2 z-10 font-medium pointer-events-none origin-left transition-colors duration-200
                ${currentSize.textSize} ${labelClassName} ${shouldFloat
                  ? isFocused
                    ? "text-[var(--color-primary,#2196f3)]"
                    : "text-neutral-700 dark:text-neutral-300"
                  : "text-neutral-400 dark:text-neutral-500"
                }
              `}
            >
              {label}
            </motion.label>
          )}

          {/* Start Content / Icon */}
          {actualStartContent && (
            <div className="flex items-center justify-center shrink-0 text-neutral-500">
              {actualStartContent}
            </div>
          )}

          {/* Central Stack: Input */}
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            <input
              {...restProps}
              id={field?.name || props.id || props.name}
              name={field?.name || props.name}
              value={inputValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onWheel={(e) => {
                if (type === "number") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              ref={ref}
              type={inputType}
              placeholder={!isFloating || shouldFloat ? resolvedPlaceholder : ""}
              disabled={disabled}
              className={`
                w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 p-0
                text-neutral-800 dark:text-neutral-100 placeholder-neutral-400
                ${currentSize.textSize}
                ${labelPlacement === "inside" && isFloating && shouldFloat ? (size === "sm" ? "mt-3" : size === "lg" ? "mt-5" : "mt-4") : ""}
                ${inputClassName}
              `}
            />
          </div>

          {/* Clear Button */}
          {isClearable && hasValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              tabIndex={-1}
              aria-label="Clear value"
              className="flex items-center justify-center shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition p-0.5 rounded-full"
            >
              <FaXmark className="w-4 h-4" aria-hidden />
            </button>
          )}

          {/* End Content / Password Toggle */}
          {isPassword && isPasswordToggle ? (
            <button
              type="button"
              disabled={disabled}
              onClick={() => !disabled && setShowPassword((prev) => !prev)}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="flex items-center justify-center shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition"
            >
              {showPassword ? (
                <FiEyeOff className="w-6 h-6 opacity-75" aria-hidden />
              ) : (
                <FiEye className="w-6 h-6 opacity-75" aria-hidden />
              )}
            </button>
          ) : (
            actualEndContent && (
              <div className="flex items-center justify-center shrink-0 text-neutral-500">
                {actualEndContent}
              </div>
            )
          )}

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
        {fieldTouched && fieldError && (
          <motion.p
            key="err"
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

Input.displayName = "Input";

export default Input;
