import React, { forwardRef, useEffect, useRef, useState } from "react";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ──────────────────────────────────────────────────────────────────

interface CustomTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "form"> {
  label?: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;

  // HeroUI-style variant props
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "bordered" | "underlined" | "faded";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  labelPlacement?: "inside" | "outside" | "outside-left";

  // Clearable
  isClearable?: boolean;

  // Autosize
  minRows?: number;
  maxRows?: number;
  disableAutosize?: boolean;

  // Formik integration
  field?: FieldInputProps<string>;
  form?: {
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    setFieldValue?: (field: string, value: any) => void;
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  (props, ref) => {
    const {
      label,
      error,
      touched,
      containerClassName = "",
      inputClassName = "",
      labelClassName = "",
      errorClassName = "",
      size = "md",
      variant = "bordered",
      radius = "md",
      labelPlacement = "outside",
      isClearable = false,
      minRows = 3,
      maxRows,
      disableAutosize = false,
      field,
      form,
      value,
      onChange,
      placeholder,
      rows,
      ...restProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    // Value resolution
    const inputValue = value !== undefined ? value : (field?.value ?? "");
    const hasValue = String(inputValue).length > 0;
    const isLabelActive = isFocused || hasValue; // for inside floating label

    // Field meta
    const fieldName = field?.name || (props.name as string | undefined);
    const inputId = field?.name || props.id || props.name || undefined;
    const fieldError =
      fieldName && form?.errors?.[fieldName]
        ? (form.errors[fieldName] as string)
        : error;
    const fieldTouched =
      fieldName && form?.touched?.[fieldName] ? true : touched;

    // ── Autosize ──────────────────────────────────────────────────────────
    const LINE_HEIGHT = 24; // px — approximate line height
    const paddingV = { sm: 8, md: 10, lg: 14 }[size] ?? 10;
    const labelH = labelPlacement === "inside" && label ? 20 : 0; // space for floated label

    const minH = minRows * LINE_HEIGHT + paddingV * 2 + labelH;
    const maxH = maxRows ? maxRows * LINE_HEIGHT + paddingV * 2 + labelH : undefined;

    const autoResize = () => {
      const el = internalRef.current;
      if (!el || disableAutosize) return;
      el.style.height = "auto";
      const next = Math.max(el.scrollHeight, minH);
      el.style.height = `${maxH ? Math.min(next, maxH) : next}px`;
      el.style.overflowY =
        maxH && el.scrollHeight > maxH ? "auto" : "hidden";
    };

    useEffect(() => {
      autoResize();
    }, [inputValue, disableAutosize]);

    // ── Handlers ──────────────────────────────────────────────────────────
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) onChange(e);
      if (field?.onChange) field.onChange(e);
      autoResize();
    };

    const handleClear = () => {
      if (form?.setFieldValue && field?.name) {
        form.setFieldValue(field.name, "");
      } else if (field?.onChange) {
        const evt = {
          target: { name: field.name || "", value: "" },
        } as unknown as React.ChangeEvent<HTMLTextAreaElement>;
        field.onChange(evt);
      }
      if (onChange) {
        const evt = {
          target: { name: field?.name || props.name || "", value: "" },
        } as unknown as React.ChangeEvent<HTMLTextAreaElement>;
        onChange(evt);
      }
      setTimeout(() => internalRef.current?.focus(), 0);
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      field?.onBlur?.(e);
      props.onBlur?.(e);
    };

    // ── Size ──────────────────────────────────────────────────────────────
    const sizeConfigs = {
      sm: { textSize: "text-xs", labelSize: "text-[10px]", px: "px-2.5", pt: label && labelPlacement === "inside" ? "pt-5" : "pt-2", pb: "pb-2" },
      md: { textSize: "text-sm", labelSize: "text-xs",    px: "px-3",   pt: label && labelPlacement === "inside" ? "pt-6" : "pt-2.5", pb: "pb-2.5" },
      lg: { textSize: "text-base", labelSize: "text-sm",  px: "px-4",   pt: label && labelPlacement === "inside" ? "pt-7" : "pt-3",   pb: "pb-3" },
    };

    // ── Variant ───────────────────────────────────────────────────────────
    const variantConfigs = {
      flat:       "bg-neutral-100 dark:bg-neutral-800 border-2 border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700 focus-within:bg-neutral-200 dark:focus-within:bg-neutral-700",
      bordered:   "bg-transparent border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 focus-within:border-neutral-800 dark:focus-within:border-neutral-200",
      underlined: "bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 focus-within:border-neutral-800 dark:focus-within:border-neutral-200",
      faded:      "bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 focus-within:border-neutral-600",
    };

    // ── Radius ────────────────────────────────────────────────────────────
    const radiusConfigs = {
      none: "rounded-none",
      sm:   "rounded-sm",
      md:   "rounded-md",
      lg:   "rounded-lg",
      full: "rounded-2xl",
    };

    const cs = sizeConfigs[size] ?? sizeConfigs.md;
    const variantClass = variantConfigs[variant] ?? variantConfigs.bordered;
    const radiusClass =
      variant === "underlined"
        ? "rounded-none"
        : radiusConfigs[radius] ?? radiusConfigs.md;

    const hasError = !!(fieldTouched && fieldError);

    // ── Inside label animation ────────────────────────────────────────────
    const insideLabelVariants = {
      default: { top: "50%", y: "-50%", scale: 1 },
      active:  { top: "0.35rem", y: "0%", scale: 0.85 },
    };

    // ── Outside label ─────────────────────────────────────────────────────
    const renderOutsideLabel = () => {
      if (!label || labelPlacement === "inside") return null;
      return (
        <label
          htmlFor={inputId}
          className={`block font-medium text-neutral-700 dark:text-neutral-300 select-none ${
            labelPlacement === "outside-left" ? "shrink-0 mb-0" : "mb-1.5"
          } ${cs.labelSize} ${labelClassName}`}
        >
          {label}
        </label>
      );
    };

    const isOutsideLeft = labelPlacement === "outside-left";

    return (
      <div className={`w-full ${containerClassName}`}>
        <div className={isOutsideLeft ? "flex items-start gap-3 w-full" : "w-full"}>
          {/* Outside label */}
          {renderOutsideLabel()}

          {/* Wrapper */}
          <div
            className={`
              relative w-full transition-all duration-200 ease-in-out box-border
              ${variantClass}
              ${radiusClass}
              ${hasError ? "!border-red-500 dark:!border-red-500" : ""}
            `}
            onClick={() => internalRef.current?.focus()}
          >
            {/* Inside floating label */}
            {labelPlacement === "inside" && label && (
              <motion.label
                htmlFor={inputId}
                className={`absolute left-0 ${cs.px} font-medium text-neutral-500 dark:text-neutral-400 select-none origin-top-left cursor-text whitespace-nowrap pointer-events-none ${cs.labelSize} ${labelClassName}`}
                variants={insideLabelVariants}
                initial={isLabelActive ? "active" : "default"}
                animate={isLabelActive ? "active" : "default"}
                transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "top left" }}
              >
                {label}
              </motion.label>
            )}

            {/* Clear button */}
            {isClearable && hasValue && (
              <button
                type="button"
                tabIndex={-1}
                onClick={(e) => { e.stopPropagation(); handleClear(); }}
                aria-label="Clear"
                className="absolute top-2 right-2 z-10 flex items-center justify-center w-5 h-5 rounded-full bg-neutral-400 dark:bg-neutral-600 text-white hover:bg-neutral-500 dark:hover:bg-neutral-500 transition"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            {/* Textarea */}
            <textarea
              {...restProps}
              id={inputId}
              name={field?.name || props.name}
              value={inputValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={(node) => {
                internalRef.current = node;
                if (typeof ref === "function") ref(node);
                else if (ref) (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
              }}
              placeholder={
                labelPlacement === "inside"
                  ? isLabelActive
                    ? placeholder
                    : ""
                  : placeholder
              }
              rows={disableAutosize ? (rows ?? minRows) : undefined}
              style={
                disableAutosize
                  ? undefined
                  : { minHeight: minH, maxHeight: maxH, overflowY: "hidden", resize: "none" }
              }
              className={`
                w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0
                text-neutral-800 dark:text-neutral-100 placeholder-neutral-400
                resize-none transition-colors duration-200
                ${cs.textSize} ${cs.px} ${cs.pt} ${cs.pb}
                ${isClearable && hasValue ? "pr-8" : ""}
                ${inputClassName}
              `}
            />
          </div>
        </div>

        {/* Error */}
        <AnimatePresence>
          {hasError && (
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
  }
);

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
