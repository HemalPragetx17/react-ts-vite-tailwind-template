import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import CustomInput from '../input/CustomInput';
import CustomButton from '../button/CustomButton';

export interface IDynamicFieldConfig {
  name: string;
  label?: string;
  type?: string; // 'text' | 'email' | 'number' | 'select' | 'radio' | 'multiselect' etc.
  placeholder?: string;
  options?: { label: string; value: string | number }[]; // for select, radio, and multiselect
}

interface DynamicFormProps {
  initialValues: any;
  validationSchema?: any;
  onSubmit: (values: any, formikHelpers: any) => void | Promise<void>;
  fields: IDynamicFieldConfig[];
  submitLabel?: string;
  onCancel?: () => void;
}

// Internal component for high-fidelity custom MultiSelect Dropdown
const CustomMultiSelectDropdown: React.FC<{
  options?: { label: string; value: string | number }[];
  value: any[];
  onChange: (newValues: any[]) => void;
  placeholder?: string;
  hasError?: boolean;
}> = ({ options = [], value = [], onChange, placeholder = "Select options", hasError }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleToggle = (optValue: string | number) => {
    const exists = value.includes(optValue);
    const newArr = exists ? value.filter((v) => v !== optValue) : [...value, optValue];
    onChange(newArr);
  };

  // Resolve visual labels for selected items
  const selectedLabels = value.map((val) => {
    const found = options.find((o) => o.value === val);
    return found ? found.label : String(val);
  });

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Trigger Button behaving exactly like a Select input box */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full rounded-md border border-gray-300 py-2.5 px-3 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-left flex items-center justify-between cursor-pointer min-h-[44px] ${
          hasError ? "border-red-500 focus:ring-red-500" : ""
        }`}
      >
        <div className="flex flex-wrap gap-1 items-center pr-2">
          {selectedLabels.length > 0 ? (
            selectedLabels.map((lbl, idx) => (
              <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded border border-indigo-100 font-medium">
                {lbl}
              </span>
            ))
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        <svg className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Floating Options Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto py-1.5 pr-1">
          {options.map((opt, i) => {
            const isChecked = value.includes(opt.value);
            return (
              <label
                key={i}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 text-sm text-gray-700 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle(opt.value)}
                  className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer shrink-0"
                />
                <span className="font-normal select-none">{opt.label}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

const DynamicForm: React.FC<DynamicFormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  submitLabel = "Submit",
  onCancel,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form className="flex flex-col h-full overflow-hidden w-full">
          {/* Inner Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
            {fields.map((fieldConfig, index) => {
              // 1. Radio Buttons Type
              if (fieldConfig.type === 'radio') {
                const fieldError = errors[fieldConfig.name];
                const isTouched = touched[fieldConfig.name];

                return (
                  <div key={index} className="w-full shrink-0">
                    {fieldConfig.label && (
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {fieldConfig.label}
                      </label>
                    )}
                    <div className="flex flex-wrap gap-4 items-center mt-1">
                      {fieldConfig.options?.map((opt, i) => (
                        <label key={i} className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-800">
                          <Field
                            type="radio"
                            name={fieldConfig.name}
                            value={opt.value}
                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 cursor-pointer"
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {isTouched && fieldError && (
                      <p className="mt-1 text-sm text-red-500">{fieldError as string}</p>
                    )}
                  </div>
                );
              }

              // 2. Custom MultiSelect Dropdown Type
              if (fieldConfig.type === 'multiselect') {
                const fieldError = errors[fieldConfig.name];
                const isTouched = touched[fieldConfig.name];
                const currentArray = Array.isArray(values[fieldConfig.name]) ? values[fieldConfig.name] : [];

                return (
                  <div key={index} className="w-full shrink-0 overflow-visible">
                    {fieldConfig.label && (
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {fieldConfig.label}
                      </label>
                    )}
                    <CustomMultiSelectDropdown
                      options={fieldConfig.options}
                      value={currentArray}
                      onChange={(newArr) => setFieldValue(fieldConfig.name, newArr)}
                      placeholder={fieldConfig.placeholder || `Select ${fieldConfig.label || fieldConfig.name}`}
                      hasError={!!(isTouched && fieldError)}
                    />
                    {isTouched && fieldError && (
                      <p className="mt-1 text-sm text-red-500">{fieldError as string}</p>
                    )}
                  </div>
                );
              }

              // 3. Select Dropdown Type
              if (fieldConfig.type === 'select') {
                const fieldError = errors[fieldConfig.name];
                const isTouched = touched[fieldConfig.name];

                return (
                  <div key={index} className="w-full shrink-0">
                    {fieldConfig.label && (
                      <label htmlFor={fieldConfig.name} className="block text-sm font-medium text-gray-700 mb-1">
                        {fieldConfig.label}
                      </label>
                    )}
                    <Field
                      as="select"
                      id={fieldConfig.name}
                      name={fieldConfig.name}
                      className={`w-full rounded-md border border-gray-300 py-3 px-3 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white ${
                        isTouched && fieldError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                      }`}
                    >
                      <option value="">Select {fieldConfig.label || fieldConfig.name}</option>
                      {fieldConfig.options?.map((opt, i) => (
                        <option key={i} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Field>
                    {isTouched && fieldError && (
                      <p className="mt-1 text-sm text-red-500">{fieldError as string}</p>
                    )}
                  </div>
                );
              }

              // 4. Default Text Inputs Type
              return (
                <div key={index} className="w-full relative shrink-0">
                  <Field
                    component={CustomInput}
                    type={fieldConfig.type || 'text'}
                    name={fieldConfig.name}
                    label={fieldConfig.label}
                    placeholder={fieldConfig.placeholder}
                  />
                </div>
              );
            })}
          </div>

          {/* Fixed Shrink-0 Footer Action Area */}
          <div className="mt-4 shrink-0 flex justify-end gap-3 pt-3 border-t border-gray-100 bg-white">
            {onCancel && (
              <CustomButton type="button" variant="white" onClick={onCancel}>
                Cancel
              </CustomButton>
            )}
            <CustomButton type="submit" variant="primary">
              {submitLabel}
            </CustomButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
