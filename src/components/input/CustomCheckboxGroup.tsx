import React, { forwardRef } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckAtom,
  type CheckboxColor,
  type CheckboxSize,
  type CheckboxRadius,
} from "./CustomCheckbox";

// ─── Types ───────────────────────────────────────────────────────────────────

type Orientation = "horizontal" | "vertical";

interface CheckboxGroupOption {
  label: string;
  value: string | number;
  description?: string;
}

interface CustomCheckboxGroupProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
  > {
  /** Group heading label */
  label?: string;
  /** List of checkbox options */
  options?: CheckboxGroupOption[];

  // Error / touched state (standalone)
  error?: string;
  touched?: boolean;

  // Layout
  orientation?: Orientation;

  // HeroUI-style visual props (applied to every checkbox in the group)
  size?: CheckboxSize;
  color?: CheckboxColor;
  radius?: CheckboxRadius;
  isIndeterminate?: boolean;
  lineThrough?: boolean;
  icon?: React.ReactNode;

  // Controlled value (array of selected values)
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;

  // Classnames
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;

  // Formik integration
  field?: FieldInputProps<any>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

const CustomCheckboxGroup = forwardRef<HTMLDivElement, CustomCheckboxGroupProps>(
  (props, ref) => {
    const {
      label,
      options = [],
      error,
      touched,
      orientation = "vertical",
      size = "md",
      color = "primary",
      radius = "md",
      isIndeterminate = false,
      lineThrough = false,
      icon,
      value,
      onChange,
      containerClassName = "",
      labelClassName = "",
      errorClassName = "",
      field,
      form,
      ...restProps
    } = props;

    // Field / Formik meta
    const fieldName = field?.name || (restProps.id as string | undefined);

    const fieldError =
      fieldName && form?.errors?.[fieldName]
        ? (form.errors[fieldName] as string)
        : error;
    const fieldTouched =
      fieldName && form?.touched?.[fieldName] ? true : touched;

    // Resolve current selected array
    const currentArray: (string | number)[] = (() => {
      const raw = value !== undefined ? value : (field?.value ?? []);
      return Array.isArray(raw) ? raw : [];
    })();

    // Toggle handler
    const handleToggle = (optValue: string | number) => {
      const exists = currentArray.includes(optValue);
      const next = exists
        ? currentArray.filter((v) => v !== optValue)
        : [...currentArray, optValue];

      if (form?.setFieldValue && fieldName) {
        form.setFieldValue(fieldName, next);
      } else if (field?.onChange) {
        const evt = {
          target: { name: fieldName || "", value: next },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        field.onChange(evt);
      }

      if (onChange) onChange(next);
    };

    const isHorizontal = orientation === "horizontal";

    return (
      <div
        ref={ref}
        className={`w-full ${containerClassName}`}
        role="group"
        aria-labelledby={label ? `${fieldName}-group-label` : undefined}
      >
        {/* Group Label */}
        {label && (
          <p
            id={`${fieldName}-group-label`}
            className={`text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 select-none ${labelClassName}`}
          >
            {label}
          </p>
        )}

        {/* Options */}
        <div
          className={`flex ${
            isHorizontal
              ? "flex-row flex-wrap gap-x-6 gap-y-3"
              : "flex-col gap-2"
          }`}
        >
          {options.map((opt, i) => {
            const isChecked = currentArray.includes(opt.value);
            return (
              <CheckAtom
                key={i}
                id={`${fieldName ?? "cbg"}-${i}`}
                checked={isChecked}
                onToggle={() => handleToggle(opt.value)}
                onBlur={field?.onBlur}
                label={opt.label}
                description={opt.description}
                size={size}
                color={color}
                radius={radius}
                isIndeterminate={isIndeterminate}
                lineThrough={lineThrough}
                icon={icon}
              />
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
              className={`mt-1.5 text-sm text-red-500 ${errorClassName}`}
            >
              {fieldError}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

CustomCheckboxGroup.displayName = "CustomCheckboxGroup";

export default CustomCheckboxGroup;
