import React, { forwardRef } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";

interface CustomTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "form"> {
  label?: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  // Formik integration
  field?: FieldInputProps<string>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
  };
}

const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    containerClassName = "",
    inputClassName = "",
    labelClassName = "",
    errorClassName = "",
    field,
    form,
    value,
    onChange,
    rows = 4,
    ...restProps
  } = props;

  // Prioritize explicitly passed value prop, fallback to Formik field value
  const inputValue = value !== undefined ? value : (field?.value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

      {/* Textarea */}
      <div className="relative">
        <textarea
          {...restProps}
          name={field?.name || props.name}
          value={inputValue}
          onChange={handleChange}
          onBlur={field?.onBlur || props.onBlur}
          ref={ref}
          rows={rows}
          className={`
              w-full rounded-md border
              p-3
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
      </div>

      {/* Error Message */}
      {fieldTouched && fieldError && (
        <p className={`mt-1 text-sm text-red-500 ${errorClassName}`}>
          {fieldError}
        </p>
      )}
    </div>
  );
});

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
