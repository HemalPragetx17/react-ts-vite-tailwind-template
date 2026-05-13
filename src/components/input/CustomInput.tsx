import React, { forwardRef, useState } from "react";

interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
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
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
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
      type = "text",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

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
            htmlFor={props.id || props.name}
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
            {...props}
            ref={ref}
            type={inputType}
            className={`
              w-full rounded-md border
              py-2
              ${startIcon ? "pl-10" : "pl-3"}
              ${
                endIcon || (isPassword && isPasswordToggle)
                  ? "pr-10"
                  : "pr-3"
              }
              text-sm
              outline-none
              transition
              border-gray-300
              focus:ring-2
              focus:ring-indigo-500
              focus:border-indigo-500
              ${
                touched && error
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
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
              {showPassword ? "🙈" : "👁️"}
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
        {touched && error && (
          <p className={`mt-1 text-sm text-red-500 ${errorClassName}`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;