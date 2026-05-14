import React, { forwardRef, useState } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import EyeIcon from "../../assets/eye.svg";
import EyeOffIcon from "../../assets/eye-slash.svg";

interface CustomInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  label?: string;
  error?: string;
  touched?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  isPasswordToggle?: boolean;
  numInputs?: number;
  // Formik integration
  field?: FieldInputProps<string>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
  };
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    startIcon,
    endIcon,
    containerClassName = "",
    inputClassName = "",
    labelClassName = "",
    errorClassName = "",
    isPasswordToggle = false,
    numInputs: _numInputs,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (field?.onChange) {
      field.onChange(e);
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

  return (
    <div className={`w-full ${containerClassName}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={field?.name || props.id || props.name}
          className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        {/* Start Icon */}
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {startIcon}
          </div>
        )}

        {/* Input */}
        <input
          {...restProps}
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
              w-full rounded-md border
              py-3
              ${startIcon ? "pl-10" : "pl-3"}
              ${endIcon || (isPassword && isPasswordToggle)
              ? "pr-10"
              : "pr-3"
            }
              text-sm
              outline-none
              focus:outline-none
              focus:ring-0
              transition
              border-gray-300
              ${fieldTouched && fieldError
              ? "border-red-500"
              : ""
            }
              ${inputClassName}
            `}
        />

        {/* Password Toggle */}
        {isPassword && isPasswordToggle ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
          >
            {showPassword
              ? <img src={EyeOffIcon} alt="Hide password" className="" />
              : <img src={EyeIcon} alt="Show password" />
            }
          </button>
        ) : (
          endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {endIcon}
            </div>
          )
        )}
      </div>

      {/* Error Message */}
      {fieldTouched && fieldError && (
        <p className={`mt-1 text-sm text-red-500 ${errorClassName}`}>
          {fieldError}
        </p>
      )}
    </div>
  );
}
);

CustomInput.displayName = "CustomInput";

export default CustomInput;