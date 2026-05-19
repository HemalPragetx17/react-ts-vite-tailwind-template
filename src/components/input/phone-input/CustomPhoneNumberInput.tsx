import type { FieldProps } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import _ from 'lodash';
import React from 'react';
import RPI from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./index.css";

// @ts-ignore
const PhoneInput = (RPI.default || RPI) as any;

interface CustomPhoneNumberInputProps extends Partial<FieldProps> {
    label?: string;
    error?: string;
    touched?: boolean;
    containerClassName?: string;
    inputClassName?: string;
    buttonClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
    size?: "sm" | "md" | "lg";
    variant?: "flat" | "bordered" | "underlined" | "faded";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    labelPlacement?: "inside" | "outside" | "outside-left" | "outside-top";
    dropdownPosition?: "top" | "bottom";
    countryCodeEditable?: boolean;
    value?: any;
    onChange?: (value: any, country?: any, e?: any, formattedValue?: string) => void;
    [key: string]: any;
}

const CustomPhoneNumberInput: React.FC<CustomPhoneNumberInputProps> = ({
    field,
    form,
    ...props
}) => {
    const {
        label,
        error,
        touched,
        containerClassName = "",
        inputClassName = "",
        buttonClassName = "",
        labelClassName = "",
        errorClassName = "",
        size = "md",
        variant = "bordered",
        radius = "md",
        labelPlacement = "outside-top",
        dropdownPosition,
        value,
        countryCodeEditable = false,
        onChange,
        ...rest
    } = props;

    // Viewport-aware auto dropdown positioning state
    const [autoDropdownPosition, setAutoDropdownPosition] = React.useState<"top" | "bottom">("bottom");
    const containerRef = React.useRef<HTMLDivElement>(null);

    const updateDropdownPosition = React.useCallback(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const dropdownHeight = 260; // Max height is 250px + 10px margin

        // If there's not enough space below, and there is more space above, open upwards
        if (spaceBelow < dropdownHeight && rect.top > spaceBelow) {
            setAutoDropdownPosition("top");
        } else {
            setAutoDropdownPosition("bottom");
        }
    }, []);

    React.useEffect(() => {
        updateDropdownPosition();

        // Use capture phase for scroll so we catch scrolls inside the modal body!
        window.addEventListener('scroll', updateDropdownPosition, true);
        window.addEventListener('resize', updateDropdownPosition);

        return () => {
            window.removeEventListener('scroll', updateDropdownPosition, true);
            window.removeEventListener('resize', updateDropdownPosition);
        };
    }, [updateDropdownPosition]);

    const finalDropdownPosition = dropdownPosition || autoDropdownPosition;

    React.useEffect(() => {
        // for tabIndex change in phone Input
        let selectedFlagDiv = document.getElementsByClassName('selected-flag');
        if (selectedFlagDiv.length > 0) {
            selectedFlagDiv[0].setAttribute("tabIndex", '1');
        }
    }, []);

    // Extract field name for accessing error and touched state from form
    const fieldName = field?.name || props.name;

    // Determine error and touched state - prioritize Formik form data
    const fieldError = fieldName && form?.errors ? _.get(form.errors, fieldName) as string : error;
    const fieldTouched = fieldName && form?.touched ? Boolean(_.get(form.touched, fieldName)) : touched;
    const hasError = Boolean(fieldTouched && fieldError);

    // Prioritize explicitly passed value prop, fallback to Formik field value
    const inputValue = value !== undefined ? value : (field?.value ?? "");

    const handleChange = (val: string, country: any, e: any, formattedValue: string) => {
        if (onChange) {
            onChange(val, country, e, formattedValue);
        } else if (field?.onChange) {
            const syntheticEvent = {
                target: {
                    name: field.name,
                    value: val,
                }
            };
            field.onChange(syntheticEvent);
        }
    };

    // Size label configurations (only for external/inside label heights/sizes)
    const sizeLabelConfigs = {
        sm: {
            labelSize: "text-[10px]",
            labelTop: "top-1 left-3",
        },
        md: {
            labelSize: "text-xs",
            labelTop: "top-1.5 left-[14px]",
        },
        lg: {
            labelSize: "text-sm",
            labelTop: "top-2 left-4",
        },
    };

    const currentSize = sizeLabelConfigs[size] || sizeLabelConfigs.md;

    // Radius Configurations matching CustomInput.tsx (using standard Tailwind values)
    const radiusConfigs = {
        none: "!rounded-none",
        sm: "!rounded-sm",
        md: "!rounded-md",
        lg: "!rounded-lg",
        full: "!rounded-full",
    };

    const currentRadiusClass = variant === "underlined" ? "!rounded-none" : (radiusConfigs[radius] || radiusConfigs.md);

    // Merge standard classes with the dynamic border-radius utility class
    const finalInputClass = `${currentRadiusClass} ${inputClassName}`.trim();
    const finalButtonClass = `${currentRadiusClass} ${buttonClassName}`.trim();

    // Build the dynamic container class names
    const containerClasses = `
        react-tel-input
        phone-input-size-${size}
        phone-input-variant-${variant}
        phone-input-placement-${labelPlacement}
        phone-input-dropdown-${finalDropdownPosition}
        ${hasError ? "phone-input-has-error" : ""}
        ${containerClassName}
    `.trim().replace(/\s+/g, ' ');

    const isOutsideLeft = labelPlacement === "outside-left";

    const renderExternalLabel = () => {
        if (!label || labelPlacement === "inside") return null;
        return (
            <label
                htmlFor={fieldName}
                className={`block font-medium text-neutral-700 dark:text-neutral-300 select-none ${isOutsideLeft ? "mb-0 shrink-0" : "mb-1.5"
                    } ${currentSize.labelSize} ${labelClassName}`}
            >
                {label}
            </label>
        );
    };

    return (
        <div ref={containerRef} className="w-full">
            <div className={`${isOutsideLeft ? "flex items-center gap-3 w-full" : "w-full"}`}>
                {renderExternalLabel()}

                <div className="relative w-full">
                    {labelPlacement === "inside" && label && (
                        <label
                            htmlFor={fieldName}
                            className={`absolute pointer-events-none select-none text-neutral-500 dark:text-neutral-400 font-medium z-20 ${currentSize.labelSize} ${currentSize.labelTop} ${labelClassName}`}
                        >
                            {label}
                        </label>
                    )}

                    <PhoneInput
                        {...(field || {})}
                        {...rest}
                        countryCodeEditable={countryCodeEditable}
                        value={inputValue}
                        onChange={handleChange}
                        containerClass={containerClasses}
                        inputClass={finalInputClass}
                        buttonClass={finalButtonClass}
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
};

export default CustomPhoneNumberInput;
