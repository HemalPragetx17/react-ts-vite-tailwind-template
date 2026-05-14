import React, { forwardRef, useState } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import EyeIcon from "../../assets/eye.svg";
import EyeOffIcon from "../../assets/eye-slash.svg";

interface CustomInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form" | "size"> {
  label?: string;
  error?: string;
  touched?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    startIcon,
    endIcon,
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
    labelPlacement = "outside-top",
    type = "text",
    field,
    form,
    value,
    onChange,
    ...restProps
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  // Prioritize explicitly passed value prop, fallback to Formik field value
  const inputValue = value !== undefined ? value : (field?.value ?? "");
  const hasValue = String(inputValue).length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    md: {
      wrapperPadding: labelPlacement === "inside" && label ? "py-1.5 px-3" : "py-2.5 px-3",
      textSize: "text-sm",
      labelSize: "text-xs",
    },
    lg: {
      wrapperPadding: labelPlacement === "inside" && label ? "py-2 px-4" : "py-3.5 px-4",
      textSize: "text-base",
      labelSize: "text-sm",
    },
  };

  // Variant Configurations
  const variantConfigs = {
    flat: "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus-within:bg-neutral-200 dark:focus-within:bg-neutral-700 border-2 border-transparent",
    bordered: "bg-transparent border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 focus-within:border-neutral-800 dark:focus-within:border-neutral-200",
    underlined: "bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 focus-within:border-neutral-800 dark:focus-within:border-neutral-200 rounded-none",
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
  const actualStartContent = startContent || startIcon;
  const actualEndContent = endContent || endIcon;

  // Render Label Helper
  const renderExternalLabel = () => {
    if (!label || labelPlacement === "inside") return null;
    return (
      <label
        htmlFor={field?.name || props.id || props.name}
        className={`block font-medium text-neutral-700 dark:text-neutral-300 select-none ${
          labelPlacement === "outside-left" ? "mb-0 shrink-0" : "mb-1.5"
        } ${currentSize.labelSize} ${labelClassName}`}
      >
        {label}
      </label>
    );
  };

  const isOutsideLeft = labelPlacement === "outside-left";

  return (
    <div className={`w-full ${containerClassName}`}>
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
          `}
        >
          {/* Start Content / Icon */}
          {actualStartContent && (
            <div className="flex items-center justify-center shrink-0 text-neutral-500">
              {actualStartContent}
            </div>
          )}

          {/* Central Stack: Label (Inside) + Input */}
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            {labelPlacement === "inside" && label && (
              <label
                htmlFor={field?.name || props.id || props.name}
                className={`font-medium text-neutral-500 dark:text-neutral-400 select-none block truncate cursor-text ${currentSize.labelSize} ${labelClassName}`}
              >
                {label}
              </label>
            )}

            <input
              {...restProps}
              id={field?.name || props.id || props.name}
              name={field?.name || props.name}
              value={inputValue}
              onChange={handleChange}
              onBlur={field?.onBlur || props.onBlur}
              onWheel={(e) => {
                if (type === "number") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              ref={ref}
              type={inputType}
              className={`
                w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 p-0
                text-neutral-800 dark:text-neutral-100 placeholder-neutral-400
                ${currentSize.textSize}
                ${inputClassName}
              `}
            />
          </div>

          {/* Clear Button */}
          {isClearable && hasValue && (
            <button
              type="button"
              onClick={handleClear}
              tabIndex={-1}
              aria-label="Clear value"
              className="flex items-center justify-center shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition p-0.5 rounded-full"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* End Content / Password Toggle */}
          {isPassword && isPasswordToggle ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="flex items-center justify-center shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition"
            >
              {showPassword ? (
                <img src={EyeOffIcon} alt="Hide password" className="w-4 h-4 opacity-75" />
              ) : (
                <img src={EyeIcon} alt="Show password" className="w-4 h-4 opacity-75" />
              )}
            </button>
          ) : (
            actualEndContent && (
              <div className="flex items-center justify-center shrink-0 text-neutral-500">
                {actualEndContent}
              </div>
            )
          )}
        </div>
      </div>

      {/* Error Message */}
      {fieldTouched && fieldError && (
        <p className={`mt-1.5 text-xs text-red-500 ${errorClassName}`}>
          {fieldError}
        </p>
      )}
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;