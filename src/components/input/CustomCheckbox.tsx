import React, { forwardRef } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";

interface CustomCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form" | "onChange"> {
  label?: string;
  error?: string;
  touched?: boolean;
  options?: { label: string; value: string | number }[];
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  onChange?: ((value: any) => void) | any;
  // Formik integration
  field?: FieldInputProps<any>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

const CustomCheckbox = forwardRef<HTMLDivElement, CustomCheckboxProps>((props, ref) => {
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

  // Current value prioritization
  const currentValue = value !== undefined ? value : (field?.value ?? restProps.checked ?? "");

  // If options array is provided, treat as multi-select checkbox group
  const isMulti = options && options.length > 0;

  const handleMultiToggle = (optValue: string | number) => {
    const currentArray = Array.isArray(currentValue) ? currentValue : [];
    const exists = currentArray.includes(optValue);
    const newArray = exists ? currentArray.filter((v) => v !== optValue) : [...currentArray, optValue];

    if (form?.setFieldValue && fieldName) {
      form.setFieldValue(fieldName, newArray);
    } else if (field?.onChange) {
      // Create synthetic event
      const syntheticEvent = {
        target: {
          name: fieldName || "",
          value: newArray,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      field.onChange(syntheticEvent);
    }

    if (onChange) {
      onChange(newArray);
    }
  };

  const handleSingleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (field?.onChange) {
      field.onChange(e);
    }
  };

  return (
    <div className={`w-full ${containerClassName}`} ref={ref}>
      {label && !isMulti && (
        <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
          {label}
        </label>
      )}
      {label && isMulti && (
        <label className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName}`}>
          {label}
        </label>
      )}

      {isMulti ? (
        <div className="flex flex-wrap gap-4 items-center mt-1">
          {options.map((opt, i) => {
            const currentArray = Array.isArray(currentValue) ? currentValue : [];
            const isChecked = currentArray.includes(opt.value);

            return (
              <label key={i} className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleMultiToggle(opt.value)}
                  onBlur={field?.onBlur || props.onBlur}
                  className="w-4 h-4 text-indigo-600 rounded border-gray-300 outline-none focus:outline-none focus:ring-0 cursor-pointer"
                />
                <span className="select-none">{opt.label}</span>
              </label>
            );
          })}
        </div>
      ) : (
        <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-800 mt-1">
          <input
            {...restProps}
            type="checkbox"
            name={fieldName}
            checked={restProps.checked !== undefined ? restProps.checked : !!currentValue}
            onChange={handleSingleChange}
            onBlur={field?.onBlur || props.onBlur}
            className="w-4 h-4 text-indigo-600 rounded border-gray-300 outline-none focus:outline-none focus:ring-0 cursor-pointer"
          />
          <span className="select-none">{restProps.placeholder || label}</span>
        </label>
      )}

      {fieldTouched && fieldError && (
        <p className={`mt-1 text-sm text-red-500 ${errorClassName}`}>
          {fieldError}
        </p>
      )}
    </div>
  );
});

CustomCheckbox.displayName = "CustomCheckbox";

export default CustomCheckbox;
