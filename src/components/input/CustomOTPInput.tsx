import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React, { forwardRef, useRef, useId } from "react";

interface CustomOTPInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form" | "onChange"> {
  label?: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  numInputs?: number;
  onChange?: ((value: string) => void) | any;
  // Formik integration
  field?: FieldInputProps<string>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  };
}

const CustomOTPInput = forwardRef<HTMLInputElement, CustomOTPInputProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    containerClassName = "",
    inputClassName = "",
    labelClassName = "",
    errorClassName = "",
    numInputs = 6,
    field,
    form,
    value,
    onChange,
    placeholder,
    ...restProps
  } = props;

  const length = numInputs > 0 ? numInputs : 6;
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const generatedId = useId();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Extract field name for accessing error and touched state from form
  const fieldName = field?.name || (props.name as string | undefined) || generatedId;

  // Determine error and touched state - prioritize Formik form data
  const fieldError = fieldName && form?.errors?.[fieldName] ? (form.errors[fieldName] as string) : error;
  const fieldTouched = fieldName && form?.touched?.[fieldName] ? true : touched;

  // Current full OTP string value. Prioritize explicitly passed value prop, fallback to field.value
  const currentValue = value !== undefined ? (value as string ?? "") : (field?.value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const char = e.target.value;
    const valueArray = currentValue.split("");

    // Ensure array has the correct length
    while (valueArray.length < length) {
      valueArray.push("");
    }

    // Take the last character entered in case multiple characters are present
    valueArray[index] = char.slice(-1);
    const newValue = valueArray.slice(0, length).join("");

    if (form?.setFieldValue && fieldName) {
      form.setFieldValue(fieldName, newValue);
    } else if (field?.onChange) {
      const syntheticEvent = {
        target: {
          name: fieldName || "",
          value: newValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      field.onChange(syntheticEvent);
    }

    if (onChange) {
      const syntheticEvent = {
        target: {
          name: fieldName || "",
          value: newValue,
        },
      } as any;
      onChange(syntheticEvent);
    }

    // Move focus to the next input if a character was added
    if (char && index < length - 1) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const char = currentValue[index];
      if (!char && index > 0) {
        // If the current input is empty, focus the previous input
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim().slice(0, length);
    if (!pastedData) return;

    const valueArray = currentValue.split("");
    for (let i = 0; i < length; i++) {
      valueArray[i] = pastedData[i] || valueArray[i] || "";
    }
    const newValue = valueArray.slice(0, length).join("");

    if (form?.setFieldValue && fieldName) {
      form.setFieldValue(fieldName, newValue);
    } else if (field?.onChange) {
      const syntheticEvent = {
        target: {
          name: fieldName || "",
          value: newValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      field.onChange(syntheticEvent);
    }

    if (onChange) {
      const syntheticEvent = {
        target: {
          name: fieldName || "",
          value: newValue,
        },
      } as any;
      onChange(syntheticEvent);
    }

    // Focus the next empty input or the last input
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={`w-full ${containerClassName}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={fieldName || props.id}
          className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      {/* OTP Inputs Wrapper */}
      <div className="flex gap-2 items-center justify-center">
        {Array.from({ length }).map((_, index) => {
          const charValue = currentValue[index] || "";
          return (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
                if (index === 0 && ref) {
                  if (typeof ref === "function") {
                    ref(el);
                  } else {
                    ref.current = el;
                  }
                }
              }}
              autoFocus={index === 0}
              type="text"
              inputMode="text"
              maxLength={2} // Allow typing a new char over an existing one
              name={fieldName}
              value={charValue}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              onBlur={(e) => {
                if (field?.onBlur) {
                  field.onBlur(e);
                }
                if (props.onBlur) {
                  props.onBlur(e);
                }
              }}
              {...restProps}
              className={`
                w-11 h-11 sm:w-12 sm:h-12
                text-center text-lg font-semibold
                rounded-md border border-gray-300
                outline-none transition
                focus:ring-2 focus:ring-primary focus:border-primary
                ${fieldTouched && fieldError
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : ""
                }
                ${inputClassName}
              `}
            />
          );
        })}
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
            className={`mt-1.5 text-sm text-red-500 flex justify-center ${errorClassName}`}
          >
            {fieldError}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

CustomOTPInput.displayName = "CustomOTPInput";

export default CustomOTPInput;