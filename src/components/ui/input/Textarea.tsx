import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import type { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/Button";

// ─── Types ──────────────────────────────────────────────────────────────────

interface TextareaProps
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
  labelPlacement?: "inside" | "outside" | "outside-left" | "outside-top" | "outlined";

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

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      disabled = false,
      ...restProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    const resolvedVariant = labelPlacement === "outlined" ? "bordered" : variant;

    // Value resolution
    const inputValue = value !== undefined ? value : (field?.value ?? "");
    const hasValue = String(inputValue).length > 0;

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
      sm: {
        textSize: "text-xs",
        labelSize: "text-[10px]",
        px: "px-2.5",
        pt: label && labelPlacement === "inside" ? "pt-5" : "pt-2",
        pb: "pb-2",
        floatY: 4,
        floatX: -3,
        floatYOutside: -20,
        floatXOutside: -14,
        initialY: 14,
        initialYOutside: 8,
        floatScale: 0.83,
        outlinedFloatY: -8.5,
        outlinedInitialY: 8,
      },
      md: {
        textSize: "text-sm",
        labelSize: "text-xs",
        px: "px-3",
        pt: label && labelPlacement === "inside" ? "pt-6" : "pt-2.5",
        pb: "pb-2.5",
        floatY: 5,
        floatX: 0,
        floatYOutside: -23,
        floatXOutside: -14,
        initialY: 18,
        initialYOutside: 10,
        floatScale: 0.85,
        outlinedFloatY: -11.5,
        outlinedInitialY: 10,
      },
      lg: {
        textSize: "text-base",
        labelSize: "text-sm",
        px: "px-4",
        pt: label && labelPlacement === "inside" ? "pt-7" : "pt-3",
        pb: "pb-3",
        floatY: 6,
        floatX: 3,
        floatYOutside: -26,
        floatXOutside: -14,
        initialY: 22,
        initialYOutside: 12,
        floatScale: 0.87,
        outlinedFloatY: -13,
        outlinedInitialY: 12,
      },
    };

    // ── Variant ───────────────────────────────────────────────────────────
    const variantConfigs = {
      flat: "bg-neutral-100 dark:bg-neutral-800 border-2 border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700 focus-within:bg-neutral-200 dark:focus-within:bg-neutral-700",
      bordered: "bg-transparent border-2 border-neutral-300 dark:border-neutral-700 focus-within:border-primary",
      underlined: "bg-transparent border-b-2 border-transparent rounded-none relative",
      faded: "bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 focus-within:border-primary",
    };

    // ── Radius ────────────────────────────────────────────────────────────
    const radiusConfigs = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-2xl",
    };

    const isOutlined = labelPlacement === "outlined";
    const cs = sizeConfigs[size] ?? sizeConfigs.md;
    const variantClass = isOutlined
      ? "bg-transparent border-none"
      : (variantConfigs[resolvedVariant] ?? variantConfigs.bordered);
    const radiusClass =
      resolvedVariant === "underlined"
        ? "rounded-none"
        : radiusConfigs[radius] ?? radiusConfigs.md;

    const hasError = !!(fieldTouched && fieldError);

    const isFloating = labelPlacement === "inside" || labelPlacement === "outside" || labelPlacement === "outlined";
    const shouldFloat = isFocused || hasValue || (isFloating && !!placeholder) || (isOutlined && !!placeholder);

    // ── Outside label ─────────────────────────────────────────────────────
    const renderExternalLabel = () => {
      if (!label || isFloating) return null;
      return (
        <label
          htmlFor={inputId}
          className={`block font-medium select-none transition-colors duration-200 ${labelPlacement === "outside-left" ? "shrink-0 mb-0" : "mb-1.5"
            } ${cs.labelSize} ${labelClassName} ${isFocused
              ? "text-primary"
              : "text-neutral-700 dark:text-neutral-300"
            }`}
        >
          {label}
        </label>
      );
    };

    const isOutsideLeft = labelPlacement === "outside-left";

    return (
      <div className={`w-full flow-root ${containerClassName}`}>
        <div className={isOutsideLeft ? "flex items-start gap-3 w-full" : "w-full"}>
          {/* Outside label */}
          {renderExternalLabel()}

          <div
            className={`
              relative w-full transition-all duration-200 ease-in-out box-border group
              ${variantClass}
              ${radiusClass}
              ${hasError && !isOutlined ? "!border-red-500 dark:!border-red-500" : ""}
              ${labelPlacement === "inside" ? "" : (isFloating && label && !isOutlined ? "mt-6" : "")}
              ${isOutlined && label ? "mt-[10px]" : ""}
              ${cs.px}
              ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
            `}
            onClick={() => internalRef.current?.focus()}
          >
            {/* Outlined Fieldset Border and Legend Notch Cutout */}
            {isOutlined && (
              <fieldset
                className={`
                  absolute inset-0 pointer-events-none transition-all duration-200 m-0 p-0
                  ${radiusClass}
                  ${hasError
                    ? "border-2 border-red-500 dark:border-red-500"
                    : isFocused
                      ? "border-2 border-primary"
                      : "border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-neutral-400 dark:group-hover:border-neutral-500"
                  }
                `}
              >
                {label && (
                  <legend
                    className={`
                      ml-2 font-medium transition-all duration-200 ease-out block whitespace-nowrap overflow-hidden invisible
                      ${shouldFloat || isFocused || hasValue ? "max-w-full px-1" : "max-w-0 px-0"}
                    `}
                    style={{
                      fontSize: `${size === "sm" ? 9 : size === "lg" ? 12 : 10.5}px`,
                      height: 0,
                    }}
                  >
                    <span>{label}</span>
                  </legend>
                )}
              </fieldset>
            )}

            {/* Inside floating label */}
            {(isFloating || isOutlined) && label && (
              <motion.label
                htmlFor={inputId}
                initial={false}
                animate={{
                  y: shouldFloat || (isOutlined && (isFocused || hasValue))
                    ? (isOutlined
                      ? cs.outlinedFloatY
                      : (labelPlacement === "inside" ? cs.floatY : cs.floatYOutside))
                    : (isOutlined ? cs.outlinedInitialY : (labelPlacement === "inside" ? cs.initialY : cs.initialYOutside)),
                  x: shouldFloat || (isOutlined && (isFocused || hasValue))
                    ? (isOutlined
                      ? 0
                      : (labelPlacement === "inside" ? cs.floatX : cs.floatXOutside))
                    : 0,
                  scale: shouldFloat || (isOutlined && (isFocused || hasValue))
                    ? (isOutlined ? 0.75 : cs.floatScale)
                    : 1,
                }}
                transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                className={`
                  absolute left-3 top-0 z-10 font-medium pointer-events-none origin-left transition-colors duration-200
                  ${cs.textSize} ${labelClassName} ${(shouldFloat || (isOutlined && (isFocused || hasValue)))
                    ? isFocused
                      ? "text-primary"
                      : "text-neutral-700 dark:text-neutral-300"
                    : "text-neutral-400 dark:text-neutral-500"
                  }
                `}
                style={{ transformOrigin: isOutlined ? "left" : "top left" }}
              >
                {label}
              </motion.label>
            )}

            {/* Clear button */}
            {isClearable && hasValue && (
              <Button
                color="default"
                size="xs"
                variant="flat"
                radius="full"
                isIconOnly
                title="Clear"
                onClick={(e) => { e.stopPropagation(); handleClear(); }}
                className="!absolute top-2 right-2 z-10"
              >
                <FaXmark className="w-3.5 h-3.5" aria-hidden />
              </Button>
            )}

            {/* Textarea Container */}
            <div className="flex flex-col flex-1 min-w-0 justify-center">
              <textarea
                {...restProps}
                id={inputId}
                name={field?.name || props.name}
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                ref={(node) => {
                  internalRef.current = node;
                  if (typeof ref === "function") ref(node);
                  else if (ref) (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
                }}
                placeholder={!isFloating || shouldFloat ? placeholder : ""}
                rows={disableAutosize ? (rows ?? minRows) : undefined}
                style={
                  disableAutosize
                    ? undefined
                    : { minHeight: minH, maxHeight: maxH, overflowY: "hidden", resize: "none" }
                }
                className={`
                  w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0
                  text-neutral-800 dark:text-neutral-100 placeholder-neutral-400
                  ${disableAutosize ? "resize-y" : "resize-none"} transition-all duration-200
                  ${cs.textSize} p-0
                  ${labelPlacement === "inside" ? (size === "sm" ? "mt-4" : size === "lg" ? "mt-6" : "mt-5") : "mt-2.5"}
                  mb-2.5
                  ${isClearable && hasValue ? "pr-8" : ""}
                  ${inputClassName}
                `}
              />
            </div>

            {/* Underline Animation for Underlined Variant */}
            {resolvedVariant === "underlined" && (
              <motion.div
                className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-primary z-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isFocused ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0.5 }}
              />
            )}
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

Textarea.displayName = "Textarea";

export default Textarea;
