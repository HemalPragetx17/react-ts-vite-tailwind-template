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
    singleBorder?: boolean;
    placeholder?: string;

    // React-Phone-Input-2 specific props
    onlyCountries?: string[];
    preferredCountries?: string[];
    excludeCountries?: string[];
    inputProps?: object;
    disabled?: boolean;
    disableDropdown?: boolean;
    disableCountryCode?: boolean;
    enableAreaCodes?: boolean;
    enableTerritories?: boolean;
    enableLongNumbers?: boolean | number;
    enableSearch?: boolean;
    disableSearchIcon?: boolean;
    defaultMask?: string;
    alwaysDefaultMask?: boolean;
    prefix?: string;
    searchPlaceholder?: string;
    searchNotFound?: string;
    copyNumbersOnly?: boolean;
    renderStringAsFlag?: string;
    autocompleteSearch?: boolean;
    jumpCursorToEnd?: boolean;
    priority?: object;
    enableClickOutside?: boolean;
    showDropdown?: boolean;
    defaultErrorMessage?: string;
    specialLabel?: string;
    disableInitialCountryGuess?: boolean;
    disableCountryGuess?: boolean;

    [key: string]: any;
}

const getContainingBlockRect = (element: HTMLElement | null) => {
    if (!element) return null;
    let parent = element.parentElement;
    while (parent) {
        const style = window.getComputedStyle(parent);
        if (
            style.transform !== 'none' ||
            style.perspective !== 'none' ||
            style.filter !== 'none' ||
            style.backdropFilter !== 'none' ||
            style.willChange === 'transform' ||
            style.willChange === 'perspective' ||
            style.willChange === 'filter'
        ) {
            const rect = parent.getBoundingClientRect();
            return {
                left: rect.left,
                top: rect.top,
                bottom: rect.bottom,
            };
        }
        parent = parent.parentElement;
    }
    return null;
};

const CustomPhoneNumberInput: React.FC<CustomPhoneNumberInputProps> = ({
    field,
    form,
    ...props
}) => {
    const {
        label,
        error,
        touched,
        containerClassName,
        inputClassName,
        buttonClassName,
        labelClassName,
        errorClassName,
        size = "md",
        variant = "bordered",
        radius = "md",
        labelPlacement = "outside-top",
        dropdownPosition,
        value,
        countryCodeEditable = false,
        onChange,
        singleBorder = false,
        placeholder = "",
        disabled = false,
        ...rest
    } = props;

    const [autoDropdownPosition, setAutoDropdownPosition] = React.useState<"top" | "bottom">("bottom");
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [dropdownStyles, setDropdownStyles] = React.useState<React.CSSProperties>({});
    const [isFocused, setIsFocused] = React.useState(false);
    const [activeDialCode, setActiveDialCode] = React.useState<string>("");

    const updateDropdownCoords = React.useCallback(() => {
        if (!containerRef.current) return;
        const flagDropdown = containerRef.current.querySelector('.flag-dropdown') as HTMLElement;
        if (!flagDropdown) return;

        const rect = flagDropdown.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const dropdownHeight = 260; // Max height is 250px + 10px margin

        const containingRect = getContainingBlockRect(flagDropdown);

        let top: number | 'auto' = 0;
        let bottom = 'auto';
        let left = rect.left;

        if (containingRect) {
            left = rect.left - containingRect.left;
            if (spaceBelow < dropdownHeight && rect.top > spaceBelow) {
                bottom = `${containingRect.bottom - rect.top + 6}px`;
                top = 'auto';
                setAutoDropdownPosition("top");
            } else {
                top = rect.bottom - containingRect.top + 6;
                setAutoDropdownPosition("bottom");
            }
        } else {
            if (spaceBelow < dropdownHeight && rect.top > spaceBelow) {
                bottom = `${window.innerHeight - rect.top + 6}px`;
                top = 'auto';
                setAutoDropdownPosition("top");
            } else {
                top = rect.bottom + 6;
                setAutoDropdownPosition("bottom");
            }
        }

        setDropdownStyles({
            '--dropdown-fixed-top': top === 'auto' ? 'auto' : `${top}px`,
            '--dropdown-fixed-bottom': bottom,
            '--dropdown-fixed-left': `${left}px`,
        } as React.CSSProperties);
    }, []);

    React.useEffect(() => {
        if (isDropdownOpen) {
            updateDropdownCoords();
            
            // Periodically check coordinates during modal transition animation
            const interval = setInterval(updateDropdownCoords, 50);

            window.addEventListener('scroll', updateDropdownCoords, true);
            window.addEventListener('resize', updateDropdownCoords);
            return () => {
                clearInterval(interval);
                window.removeEventListener('scroll', updateDropdownCoords, true);
                window.removeEventListener('resize', updateDropdownCoords);
            };
        }
    }, [isDropdownOpen, updateDropdownCoords]);

    const finalDropdownPosition = dropdownPosition || autoDropdownPosition;

    React.useEffect(() => {
        if (!containerRef.current) return;

        const flagDropdown = containerRef.current.querySelector('.flag-dropdown');
        if (!flagDropdown) return;

        const observer = new MutationObserver(() => {
            setIsDropdownOpen(flagDropdown.classList.contains('open'));
        });

        observer.observe(flagDropdown, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // Initial check
        setIsDropdownOpen(flagDropdown.classList.contains('open'));

        // For tabIndex change in phone Input
        const selectedFlagDiv = containerRef.current.querySelector('.selected-flag');
        if (selectedFlagDiv) {
            selectedFlagDiv.setAttribute("tabIndex", '1');
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Prevent selection and cursor from entering the country code prefix when countryCodeEditable is false
    React.useEffect(() => {
        if (countryCodeEditable) return;
        if (!containerRef.current) return;

        const inputEl = containerRef.current.querySelector('input');
        if (!inputEl) return;

        const getPrefixLength = (val: string): number => {
            const match = val.match(/^\+\d+/);
            if (!match) return 0;
            const dialCode = match[0];
            if (val.startsWith(dialCode + " ")) return dialCode.length + 1;
            if (val.startsWith(dialCode + "-")) return dialCode.length + 1;
            if (val.startsWith(dialCode + ")")) return dialCode.length + 1;
            return dialCode.length;
        };

        const adjustSelection = () => {
            const val = inputEl.value;
            const prefixLength = getPrefixLength(val);
            if (prefixLength > 0 && inputEl.selectionStart !== null && inputEl.selectionStart < prefixLength) {
                const currentEnd = inputEl.selectionEnd ?? val.length;
                inputEl.setSelectionRange(prefixLength, Math.max(currentEnd, prefixLength));
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // Intercept Ctrl+A or Cmd+A (Select All)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
                e.preventDefault();
                const val = inputEl.value;
                const prefixLength = getPrefixLength(val);
                inputEl.setSelectionRange(prefixLength, val.length);
            }
        };

        const handleMouseDown = (e: MouseEvent) => {
            // Intercept double click and triple click (Select All local number)
            if (e.detail === 2 || e.detail === 3) {
                e.preventDefault();
                const val = inputEl.value;
                const prefixLength = getPrefixLength(val);
                inputEl.setSelectionRange(prefixLength, val.length);
            }
        };

        const handleMouseUp = () => {
            adjustSelection();
        };

        const handleSelectionChange = () => {
            if (document.activeElement !== inputEl) return;
            adjustSelection();
        };

        inputEl.addEventListener('keydown', handleKeyDown);
        inputEl.addEventListener('mousedown', handleMouseDown);
        inputEl.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('selectionchange', handleSelectionChange);

        return () => {
            inputEl.removeEventListener('keydown', handleKeyDown);
            inputEl.removeEventListener('mousedown', handleMouseDown);
            inputEl.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('selectionchange', handleSelectionChange);
        };
    }, [countryCodeEditable]);

    // Extract field name for accessing error and touched state from form
    const fieldName = field?.name || props.name;

    // Determine error and touched state - prioritize Formik form data
    const fieldError = fieldName && form?.errors ? _.get(form.errors, fieldName) as string : error;
    const fieldTouched = fieldName && form?.touched ? Boolean(_.get(form.touched, fieldName)) : touched;
    const hasError = Boolean(fieldTouched && fieldError);

    // Prioritize explicitly passed value prop, fallback to Formik field value
    const inputValue = value !== undefined ? value : (field?.value ?? "");

    const handleChange = (val: string, country: any, e: any, formattedValue: string) => {
        if (country?.dialCode) {
            setActiveDialCode(country.dialCode);
        }

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

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        if (props.onFocus) props.onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        if (props.onBlur) props.onBlur(e);
        if (field?.onBlur) field.onBlur(e);
    };

    // Size configurations matching CustomInput.tsx
    const sizeConfigs = {
        sm: {
            textSize: "text-xs",
            labelSize: "text-[10px]",
            floatY: -18,
            floatX: singleBorder ? 75 : 86,
            initialY: -8,
            outsideFloatY: -38,
            outsideFloatX: 0,
            initialX: singleBorder ? 100 : 110,
            top: "top-[48%]",
            floatScale: 0.83,
        },
        md: {
            textSize: "text-sm",
            labelSize: "text-xs",
            floatY: -21,
            floatX: singleBorder ? 77 : 87,
            initialY: -10,
            initialX: singleBorder ? 110 : 120,
            outsideFloatY: -44,
            outsideFloatX: 0,
            top: "top-[46%]",
            floatScale: 0.85,
        },
        lg: {
            textSize: "text-base",
            labelSize: "text-sm",
            floatY: -25,
            floatX: singleBorder ? 79 : 89,
            initialY: -12,
            initialX: singleBorder ? 115 : 125,
            outsideFloatY: -55,
            outsideFloatX: 0,
            top: "top-[46%]",
            floatScale: 0.87,
        },
    };

    const currentSize = sizeConfigs[size] || sizeConfigs.md;

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
    const finalInputClass = `${singleBorder ? "!rounded-none" : currentRadiusClass} ${inputClassName}`.trim();
    const finalButtonClass = `${singleBorder ? "!rounded-none" : currentRadiusClass} ${buttonClassName}`.trim();

    const isOutsideLeft = labelPlacement === "outside-left";
    const isFloating = labelPlacement === "inside" || labelPlacement === "outside";
    const hasValue = String(inputValue).length > 0 && String(inputValue) !== activeDialCode;
    const shouldFloat = isFocused || hasValue || (isFloating && !!placeholder);

    // Build the dynamic container class names
    const containerClasses = `
        react-tel-input
        phone-input-size-${size}
        phone-input-variant-${variant}
        phone-input-placement-${labelPlacement}
        phone-input-dropdown-${finalDropdownPosition}
        ${shouldFloat ? "phone-input-should-float" : ""}
        ${singleBorder ? `phone-input-single-border ${currentRadiusClass}` : ""}
        ${hasError ? "phone-input-has-error" : ""}
        ${disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}
        ${containerClassName}
    `.trim().replace(/\s+/g, ' ');

    const renderExternalLabel = () => {
        if (!label || isFloating) return null;
        return (
            <label
                htmlFor={fieldName}
                className={`block font-medium select-none transition-colors duration-200 ${isOutsideLeft ? "mb-0 shrink-0" : "mb-1.5"
                    } ${currentSize.labelSize} ${labelClassName} ${
                    isFocused 
                        ? "text-[var(--color-primary,#2196f3)]" 
                        : "text-neutral-700 dark:text-neutral-300"
                }`}
            >
                {label}
            </label>
        );
    };

    return (
        <div ref={containerRef} className="w-full" style={dropdownStyles}>
            <div className={`${isOutsideLeft ? "flex items-center gap-3 w-full" : "w-full"}`}>
                {renderExternalLabel()}

                <div className="relative w-full">
                    {isFloating && label && (
                        <motion.label
                            htmlFor={fieldName}
                            initial={false}
                            animate={{
                                y: shouldFloat
                                    ? (labelPlacement === "inside" ? currentSize.floatY : currentSize.outsideFloatY)
                                    : currentSize.initialY,
                                x: shouldFloat
                                    ? (labelPlacement === "inside" ? currentSize.floatX : currentSize.outsideFloatX)
                                    : currentSize.initialX,
                                scale: shouldFloat ? currentSize.floatScale : 1,
                            }}
                            className={`
                                absolute left-0 font-medium ${currentSize.top} z-20 pointer-events-none origin-left transition-colors duration-200
                                ${currentSize.textSize} ${labelClassName} ${
                                    shouldFloat
                                        ? isFocused
                                            ? "text-[var(--color-primary,#2196f3)]"
                                            : "text-neutral-700 dark:text-neutral-300"
                                        : "text-neutral-400 dark:text-neutral-500"
                                }
                            `}
                        >
                            {label}
                        </motion.label>
                    )}

                    <PhoneInput
                        {...(field || {})}
                        {...rest}
                        placeholder={placeholder}
                        countryCodeEditable={countryCodeEditable}
                        value={inputValue}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={disabled}
                        containerClass={containerClasses}
                        inputClass={finalInputClass}
                        buttonClass={finalButtonClass}
                    />

                    {variant === "underlined" && (
                        <motion.div
                            className={`absolute bottom-[-2px] left-0 right-0 h-[2px] z-20 ${
                                hasError ? "bg-red-500" : "bg-neutral-800 dark:bg-neutral-200"
                            }`}
                            initial={false}
                            animate={{ scaleX: (isFocused || hasError) ? 1 : 0 }}
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
};

export default CustomPhoneNumberInput;
