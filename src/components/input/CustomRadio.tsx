import React, { forwardRef } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";

interface CustomRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  label?: string;
  error?: string;
  touched?: boolean;
  options?: { label: string; value: string | number }[];
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  // Formik integration
  field?: FieldInputProps<string>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

const CustomRadio = forwardRef<HTMLDivElement, CustomRadioProps>((props, ref) => {
  const {
    label,
    error,
    touched,
    options = [],
    containerClassName = "",
    labelClassName = "",
    errorClassName = "",
    field,
    form,
    value,
    onChange,
    ...restProps
  } = props;

  // Extract field name for accessing error and touched state from form
  const fieldName = field?.name || (props.name as string | undefined);

  // Determine error and touched state - prioritize Formik form data
  const fieldError = fieldName && form?.errors?.[fieldName] ? (form.errors[fieldName] as string) : error;
  const fieldTouched = fieldName && form?.touched?.[fieldName] ? true : touched;

  // Current value
  const currentValue = value !== undefined ? value : (field?.value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (field?.onChange) {
      field.onChange(e);
    }
  };

  return (
    <div className={`w-full ${containerClassName}`} ref={ref}>
      {label && (
        <label className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName}`}>
          {label}
        </label>
      )}

      <div className="flex flex-wrap gap-4 items-center mt-1">
        {options.map((opt, i) => {
          const isChecked = String(currentValue) === String(opt.value);

          return (
            <label key={i} className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-800">
              <input
                type="radio"
                name={fieldName}
                value={opt.value}
                checked={isChecked}
                onChange={handleChange}
                onBlur={field?.onBlur || props.onBlur}
                className="w-4 h-4 text-indigo-600 border-gray-300 outline-none focus:outline-none focus:ring-0 cursor-pointer"
              />
              <span className="select-none">{opt.label}</span>
            </label>
          );
        })}
      </div>

      {fieldTouched && fieldError && (
        <p className={`mt-1 text-sm text-red-500 ${errorClassName}`}>
          {fieldError}
        </p>
      )}
    </div>
  );
});

CustomRadio.displayName = "CustomRadio";

export default CustomRadio;
