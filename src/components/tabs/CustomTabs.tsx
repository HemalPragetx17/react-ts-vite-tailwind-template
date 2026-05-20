import React, { useState } from "react";
import { motion } from "framer-motion";

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    /** Optional count badge displayed to the right of the label */
    count?: number;
    disabled?: boolean;
}

export interface CustomTabsProps {
    /**
     * Array of tab items with id, label, content, and optional disabled state.
     */
    items: TabItem[];
    /**
     * The visual style variant of the tabs.
     * @default "solid"
     */
    variant?: "solid" | "bordered" | "light" | "underlined";
    /**
     * The color theme of the tabs.
     * @default "primary"
     */
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    /**
     * The size of the tab buttons.
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /**
     * The border radius of the tab buttons container/items.
     * @default "md"
     */
    radius?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Optional custom key to control active state from parent.
     */
    activeKey?: string;
    /**
     * Callback triggered when tab selection changes.
     */
    onChange?: (key: string) => void;
    /**
     * Additional CSS classes for the container.
     */
    className?: string;
    /**
     * Position of the tabs container relative to the content panel.
     * @default "top"
     */
    placement?: "top" | "bottom" | "start" | "end";
    /**
     * Whether the tabs orientation is vertical.
     * If true, it invalidates the placement prop and displays tabs vertically on the left.
     * @default false
     */
    isVertical?: boolean;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
    items,
    variant = "solid",
    color = "primary",
    size = "md",
    radius = "md",
    activeKey: controlledActiveKey,
    onChange,
    className = "",
    placement = "top",
    isVertical = false,
}) => {
    const [internalActiveKey, setInternalActiveKey] = useState<string>(
        items.length > 0 ? items[0].id : ""
    );

    const activeKey = controlledActiveKey !== undefined ? controlledActiveKey : internalActiveKey;

    const handleTabClick = (item: TabItem) => {
        if (item.disabled) return;
        if (controlledActiveKey === undefined) {
            setInternalActiveKey(item.id);
        }
        if (onChange) {
            onChange(item.id);
        }
    };

    // Determine the resolved layout placement (isVertical overrides placement to "start")
    const resolvedPlacement = isVertical ? "start" : placement;
    const isVerticalLayout = isVertical || resolvedPlacement === "start" || resolvedPlacement === "end";

    // ── Style Mappings ──

    const sizeClasses = {
        sm: {
            container: "gap-1",
            tab: "text-xs px-3 py-1.5",
            underlinedTab: isVerticalLayout ? "text-xs py-2 px-3 justify-start" : "text-xs pb-2 pt-1 px-3",
        },
        md: {
            container: "gap-1.5",
            tab: "text-sm px-4 py-2",
            underlinedTab: isVerticalLayout ? "text-sm py-2.5 px-4 justify-start" : "text-sm pb-2.5 pt-1.5 px-4",
        },
        lg: {
            container: "gap-2",
            tab: "text-base px-5 py-2.5",
            underlinedTab: isVerticalLayout ? "text-base py-3 px-5 justify-start" : "text-base pb-3 pt-2 px-5",
        },
    }[size];

    const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    }[radius];

    // Build the tab list container styles
    const getTabListClasses = () => {
        const base = isVerticalLayout ? "flex flex-col" : "flex items-center";
        
        switch (variant) {
            case "solid":
                return `${base} bg-neutral-100 dark:bg-neutral-800/80 p-1 w-fit`;
            case "bordered":
                return `${base} border-2 border-neutral-200 dark:border-neutral-800 p-1 w-fit`;
            case "light":
                return `${base} bg-transparent p-0 gap-1 w-fit`;
            case "underlined":
                if (isVerticalLayout) {
                    const borderSide = resolvedPlacement === "end" ? "border-l" : "border-r";
                    return `${base} bg-transparent p-0 ${borderSide} border-neutral-200 dark:border-neutral-800 h-full w-full`;
                }
                return `${base} bg-transparent p-0 border-b border-neutral-200 dark:border-neutral-800 w-full`;
        }
    };

    // Colors mapping for active button label text color
    const getActiveTextClass = () => {
        if (variant === "underlined") {
            return {
                default: "text-secondary-900 dark:text-white font-semibold",
                primary: "text-primary dark:text-primary-400 font-semibold",
                secondary: "text-secondary dark:text-secondary-400 font-semibold",
                success: "text-success dark:text-success-400 font-semibold",
                warning: "text-warning dark:text-warning-400 font-semibold",
                danger: "text-danger dark:text-danger-400 font-semibold",
            }[color];
        }

        if (variant === "bordered" || variant === "light") {
            return {
                default: "text-neutral-900 dark:text-white font-semibold",
                primary: "text-white font-semibold",
                secondary: "text-white font-semibold",
                success: "text-white font-semibold",
                warning: "text-neutral-950 font-semibold",
                danger: "text-white font-semibold",
            }[color];
        }

        // Solid (default)
        return {
            default: "text-neutral-900 dark:text-white font-semibold",
            primary: "text-white font-semibold",
            secondary: "text-white font-semibold",
            success: "text-white font-semibold",
            warning: "text-neutral-950 font-semibold",
            danger: "text-white font-semibold",
        }[color];
    };

    // Colors mapping for active sliding indicator background/accent
    const getIndicatorClass = () => {
        if (variant === "underlined") {
            if (isVerticalLayout) {
                // If tabs are on the right (end), line is on the left edge. Otherwise, line is on the right edge.
                const alignment = resolvedPlacement === "end" ? "left-0" : "right-0";
                return {
                    default: `absolute ${alignment} top-0 bottom-0 w-[2px] bg-secondary-900 dark:bg-white z-0`,
                    primary: `absolute ${alignment} top-0 bottom-0 w-[2px] bg-primary dark:bg-primary-400 z-0`,
                    secondary: `absolute ${alignment} top-0 bottom-0 w-[2px] bg-secondary dark:bg-secondary-400 z-0`,
                    success: `absolute ${alignment} top-0 bottom-0 w-[2px] bg-success dark:bg-success-400 z-0`,
                    warning: `absolute ${alignment} top-0 bottom-0 w-[2px] bg-warning dark:bg-warning-400 z-0`,
                    danger: `absolute ${alignment} top-0 bottom-0 w-[2px] bg-danger dark:bg-danger-400 z-0`,
                }[color];
            }
            return {
                default: "absolute bottom-0 left-0 right-0 h-[2px] bg-secondary-900 dark:bg-white z-0",
                primary: "absolute bottom-0 left-0 right-0 h-[2px] bg-primary dark:bg-primary-400 z-0",
                secondary: "absolute bottom-0 left-0 right-0 h-[2px] bg-secondary dark:bg-secondary-400 z-0",
                success: "absolute bottom-0 left-0 right-0 h-[2px] bg-success dark:bg-success-400 z-0",
                warning: "absolute bottom-0 left-0 right-0 h-[2px] bg-warning dark:bg-warning-400 z-0",
                danger: "absolute bottom-0 left-0 right-0 h-[2px] bg-danger dark:bg-danger-400 z-0",
            }[color];
        }

        if (variant === "light") {
            return {
                default: "absolute inset-0 bg-secondary-200 dark:bg-secondary-700 z-0",
                primary: "absolute inset-0 bg-primary dark:bg-primary/40 z-0",
                secondary: "absolute inset-0 bg-secondary dark:bg-secondary/40 z-0",
                success: "absolute inset-0 bg-success dark:bg-success/40 z-0",
                warning: "absolute inset-0 bg-warning dark:bg-warning/40 z-0",
                danger: "absolute inset-0 bg-danger dark:bg-danger/40 z-0",
            }[color];
        }

        if (variant === "bordered") {
            return {
                default: "absolute inset-0 bg-secondary-200 dark:bg-secondary-800 z-0",
                primary: "absolute inset-0 bg-primary z-0",
                secondary: "absolute inset-0 bg-secondary z-0",
                success: "absolute inset-0 bg-success z-0",
                warning: "absolute inset-0 bg-warning z-0",
                danger: "absolute inset-0 bg-danger z-0",
            }[color];
        }

        // Solid (default)
        return {
            default: "absolute inset-0 bg-secondary dark:bg-seciondary-900 shadow-sm z-0",
            primary: "absolute inset-0 bg-primary z-0",
            secondary: "absolute inset-0 bg-secondary z-0",
            success: "absolute inset-0 bg-success z-0",
            warning: "absolute inset-0 bg-warning z-0",
            danger: "absolute inset-0 bg-danger z-0",
        }[color];
    };

    const inactiveTextClass = "text-secondary hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-200";
    const activeTextClass = getActiveTextClass();
    const indicatorClass = getIndicatorClass();
    const isUnderlined = variant === "underlined";

    /**
     * Badge classes change based on:
     *  - isActive + variant: colored-bg tabs (solid/bordered) → white badge
     *  - inactive or underlined/light → theme-palette colored subtle badge
     */
    const getCountBadgeClass = (isActive: boolean): string => {
        // On solid/bordered active tabs the bg is the color — use white/transparent badge
        if (isActive && (variant === "solid" || variant === "bordered" || variant === "light")) {
            return "bg-white/25 text-white";
        }
        // On light active tabs the bg is a tinted pastel — use themed text+bg
        if (isActive && variant === "underlined") {
            return ({
                default: "bg-secondary-400 text-white",
                primary: "bg-primary-400 text-white",
                secondary: "bg-secondary-400 text-white",
                success: "bg-success-400 text-white",
                warning: "bg-warning-400 text-white",
                danger: "bg-danger-400 text-white",
            } as const)[color];
        }
        // Inactive tabs (all variants) and active underlined — muted neutral
        return "bg-secondary-300 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300";
    };

    // Set overall container flex orientation
    const containerClasses = {
        top: "flex flex-col gap-4",
        bottom: "flex flex-col-reverse gap-4",
        start: "flex flex-row gap-6 items-start",
        end: "flex flex-row-reverse gap-6 items-start",
    }[resolvedPlacement];

    const activeContent = items.find((item) => item.id === activeKey)?.content;

    return (
        <div className={`w-full ${containerClasses} ${className}`}>
            {/* Tabs List */}
            <div className={isVerticalLayout ? "shrink-0 min-w-[140px]" : "w-full"}>
                <div
                    role="tablist"
                    className={`${getTabListClasses()} ${variant !== "underlined" ? radiusClasses : ""} ${sizeClasses.container}`}
                >
                    {items.map((item) => {
                        const isActive = item.id === activeKey;

                        return (
                            <button
                                key={item.id}
                                role="tab"
                                aria-selected={isActive}
                                disabled={item.disabled}
                                onClick={() => handleTabClick(item)}
                                className={`
                                    relative select-none outline-none font-medium flex items-center justify-center cursor-pointer
                                    disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300
                                    ${isUnderlined ? sizeClasses.underlinedTab : `${sizeClasses.tab} ${radiusClasses}`}
                                    ${isActive ? activeTextClass : inactiveTextClass}
                                    ${isVerticalLayout ? "w-full text-left" : ""}
                                `}
                            >
                                {/* Active sliding indicator using Framer Motion */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className={`${indicatorClass} ${variant !== "underlined" ? radiusClasses : ""}`}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                                    <span>{item.label}</span>
                                    {item.count !== undefined && (
                                        <span className={`inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-[11px] font-semibold rounded-full transition-colors duration-300 ${getCountBadgeClass(isActive)}`}>
                                            {item.count}
                                        </span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Panel */}
            <div
                role="tabpanel"
                className="w-full flex-grow transition-all duration-300 animate-fade-in"
            >
                {activeContent}
            </div>
        </div>
    );
};

export default CustomTabs;
