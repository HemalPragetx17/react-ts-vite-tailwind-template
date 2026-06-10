import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Routing } from "../../../routes/routing";
import { sidebarRoutes } from "../../../shared/constants/sidebar-data";

// Global config toggle for the breadcrumbs system
// To disable breadcrumbs throughout the app, simply set this to false
export const SHOW_SYSTEM_BREADCRUMBS = true;

export interface BreadcrumbsProps {
    /**
     * The size of the breadcrumbs text and spacing.
     * @default "md"
     */
    size?: "sm" | "md" | "lg";
    /**
     * The color theme of the breadcrumbs.
     * @default "default"
     */
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    /**
     * The visual style variant of the breadcrumbs container.
     * @default "light"
     */
    variant?: "solid" | "bordered" | "light";
    /**
     * The underline behavior of the breadcrumbs links.
     * @default "hover"
     */
    underline?: "none" | "hover" | "always" | "active" | "focus";
    /**
     * The border radius of the breadcrumbs container (applicable to solid and bordered variants).
     * @default "md"
     */
    radius?: "none" | "sm" | "md" | "lg" | "full";
    /**
     * Optional static items to display. If provided, dynamic generation from path is skipped.
     */
    items?: BreadcrumbItem[];
    /**
     * Custom separator between breadcrumbs.
     */
    separator?: React.ReactNode;
    /**
     * Whether the breadcrumbs are disabled.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Content to render at the start of the breadcrumbs container.
     */
    startContent?: React.ReactNode;
    /**
     * Content to render at the end of the breadcrumbs container.
     */
    endContent?: React.ReactNode;
}

export interface BreadcrumbItem {
    label: string;
    path: string;
    isLast: boolean;
    isClickable: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    size = "md",
    color = "default",
    variant = "light",
    underline = "hover",
    radius = "md",
    items: staticItems,
    separator,
    isDisabled = false,
    startContent,
    endContent,
}) => {
    const { pathname } = useLocation();

    // If breadcrumbs are disabled globally, render nothing
    if (!SHOW_SYSTEM_BREADCRUMBS) {
        return null;
    }

    // Do not show breadcrumbs on auth pages (if they somehow use MainLayout) or home root
    if (!staticItems && (pathname === Routing.Login || pathname === Routing.ForgotPassword || pathname === "/")) {
        return null;
    }

    // Build the items list dynamically
    const items: BreadcrumbItem[] = staticItems ? [...staticItems] : [];

    if (!staticItems) {
        // Always start with "Home" linking to Dashboard
        items.push({
            label: "Home",
            path: Routing.Dashboard,
            isLast: pathname === Routing.Dashboard,
            isClickable: pathname !== Routing.Dashboard,
        });

        // Helper to format string to Clean Title Case (e.g. "sub-category" -> "Sub Category")
        const formatSegmentLabel = (segment: string): string => {
            return segment
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        };

        // Find the current route in sidebarRoutes dynamically to build hierarchy
        let foundInSidebar = false;

        for (const menu of sidebarRoutes) {
            if (menu.route === pathname) {
                if (menu.route !== Routing.Dashboard) {
                    items.push({
                        label: menu.name,
                        path: menu.route,
                        isLast: true,
                        isClickable: false,
                    });
                }
                foundInSidebar = true;
                break;
            }

            if (menu.childs) {
                const child = menu.childs.find((c) => c.route === pathname);
                if (child) {
                    // Found as a child under menu (e.g. Master)
                    items.push({
                        label: menu.name,
                        path: menu.route || "",
                        isLast: false,
                        isClickable: !!menu.route && menu.route !== pathname && (!menu.childs || menu.childs.length === 0),
                    });
                    items.push({
                        label: child.name,
                        path: child.route,
                        isLast: true,
                        isClickable: false,
                    });
                    foundInSidebar = true;
                    break;
                }
            }
        }

        // Fallback: Dynamically generate from path segments if not registered in sidebar (e.g. /dashboard/demo-form)
        if (!foundInSidebar) {
            const prefix = import.meta.env.VITE_PATH_PREFIX || "";
            const cleanPrefix = prefix.replace(/^\/|\/$/g, "");
            const segments = pathname
                .split("/")
                .filter(Boolean)
                .filter((seg) => seg !== cleanPrefix);

            let accumulatedPath = prefix.endsWith("/") ? prefix.slice(0, -1) : prefix;

            segments.forEach((segment, idx) => {
                accumulatedPath += `/${segment}`;

                // Skip adding "Dashboard" segment if Home already exists
                if (segment.toLowerCase() === "dashboard") {
                    return;
                }

                const label = formatSegmentLabel(segment);
                const isLast = idx === segments.length - 1;

                items.push({
                    label,
                    path: accumulatedPath,
                    isLast,
                    isClickable: !isLast,
                });
            });
        }
    }

    // ── Style Mappings ──

    const sizeClasses = {
        sm: {
            container: "text-xs px-1.5 py-1 gap-1",
            list: "space-x-1",
            separator: "h-3 w-3",
            separatorMargin: "mx-1",
            strokeWidth: 2,
            icon: "w-3 h-3",
            gap: "gap-1",
        },
        md: {
            container: "text-sm px-2 py-1.5 gap-1.5",
            list: "space-x-1.5",
            separator: "h-3.5 w-3.5",
            separatorMargin: "mx-1.5",
            strokeWidth: 2,
            icon: "w-3.5 h-3.5",
            gap: "gap-1.5",
        },
        lg: {
            container: "text-base px-2.5 py-2 gap-2",
            list: "space-x-2",
            separator: "h-4 w-4",
            separatorMargin: "mx-2",
            strokeWidth: 2,
            icon: "w-4 h-4",
            gap: "gap-2",
        },
    }[size];

    const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    }[radius];

    const variantClasses = {
        light: "bg-transparent p-0",
        solid: "bg-neutral-100/90 dark:bg-neutral-800/80 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.02)] inline-flex items-center",
        bordered: "border-2 border-neutral-200 dark:border-neutral-800 bg-transparent inline-flex items-center",
    }[variant];

    // Colors mapping for links (non-last items)
    const linkColorClasses = {
        default: "text-default-700 dark:text-default-700",
        primary: "text-primary-700 dark:text-primary-700",
        secondary: "text-secondary-700 dark:text-secondary-700",
        success: "text-success-700 dark:text-success-700",
        warning: "text-warning-700 dark:text-warning-700",
        danger: "text-danger-700 dark:text-danger-700",
    }[color];

    // Colors mapping for the active page (last item)
    const activeColorClasses = {
        default: "text-default-600 dark:text-default-800 font-bold",
        primary: "text-primary dark:text-primary-700 font-bold",
        secondary: "text-secondary dark:text-secondary-700 font-bold",
        success: "text-success dark:text-success-700 font-bold",
        warning: "text-warning dark:text-warning-700 font-bold",
        danger: "text-danger dark:text-danger-700 font-bold",
    }[color];

    const underlineClasses = {
        none: "no-underline",
        hover: "hover:underline",
        always: "underline",
        active: "active:underline",
        focus: "focus:underline",
    }[underline];

    return (
        <nav
            aria-label="Breadcrumbs"
            className={`mb-5 select-none animate-fade-in transition-all duration-200 ${variantClasses} ${variant !== "light" ? radiusClasses : ""} ${sizeClasses.container}`}
        >
            <ol className={`flex items-center ${sizeClasses.list}`}>
                {startContent && (
                    <li className="flex items-center shrink-0">
                        {startContent}
                    </li>
                )}
                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    const isItemDisabled = isDisabled && !isLast;
                    const canClick = item.isClickable && !isDisabled;

                    // Determine the item separator element
                    const showSeparator = idx > 0 || (idx === 0 && startContent !== undefined);

                    return (
                        <li key={idx} className="flex items-center">
                            {showSeparator && (
                                <span className={`shrink-0 flex items-center justify-center ${sizeClasses.separatorMargin}`}>
                                    {separator !== undefined ? (
                                        <span className="text-neutral-450 dark:text-neutral-600">{separator}</span>
                                    ) : (
                                        <FaChevronRight
                                            className={`${sizeClasses.separator} text-neutral-450 dark:text-neutral-600`}
                                            aria-hidden
                                        />
                                    )}
                                </span>
                            )}

                            {isLast ? (
                                <span className={`${activeColorClasses} flex items-center ${sizeClasses.gap}`}>
                                    {item.startContent}
                                    {item.label === "Home" && !item.startContent && (
                                        <FaHome className={sizeClasses.icon} aria-hidden />
                                    )}
                                    {item.label}
                                    {item.endContent}
                                </span>
                            ) : canClick ? (
                                <Link
                                    to={item.path}
                                    className={`flex items-center transition-colors duration-250 ${linkColorClasses} ${underlineClasses} ${sizeClasses.gap}`}
                                >
                                    {item.startContent}
                                    {item.label === "Home" && !item.startContent && (
                                        <FaHome className={sizeClasses.icon} aria-hidden />
                                    )}
                                    {item.label}
                                    {item.endContent}
                                </Link>
                            ) : (
                                <span className={`flex items-center ${isItemDisabled ? "text-neutral-400/50 dark:text-neutral-500/50 cursor-not-allowed select-none" : "text-neutral-400 dark:text-neutral-500"} ${sizeClasses.gap}`}>
                                    {item.startContent}
                                    {item.label === "Home" && !item.startContent && (
                                        <FaHome className={sizeClasses.icon} aria-hidden />
                                    )}
                                    {item.label}
                                    {item.endContent}
                                </span>
                            )}
                        </li>
                    );
                })}
                {endContent && (
                    <>
                        <li className="flex items-center shrink-0">
                            <span className={`shrink-0 flex items-center justify-center ${sizeClasses.separatorMargin}`}>
                                {separator !== undefined ? (
                                    <span className="text-neutral-450 dark:text-neutral-600">{separator}</span>
                                ) : (
                                    <FaChevronRight
                                        className={`${sizeClasses.separator} text-neutral-450 dark:text-neutral-600`}
                                        aria-hidden
                                    />
                                )}
                            </span>
                        </li>
                        <li className="flex items-center shrink-0">
                            {endContent}
                        </li>
                    </>
                )}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
