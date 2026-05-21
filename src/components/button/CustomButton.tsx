import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import type { IApplicationState } from "../../store/state/app-state";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "default" | "rounded" | "pill" | "circle";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  xs: "px-2.5 py-1.5 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
  xl: "px-6 py-3 text-base",
};

const circleSizes = {
  xs: "w-7 h-7",
  sm: "w-9 h-9",
  md: "w-11 h-11",
  lg: "w-12 h-12",
  xl: "w-14 h-14",
};

const radiusClasses = {
  default: "rounded-md",
  rounded: "rounded-xl",
  pill: "rounded-full",
  circle: "rounded-full aspect-square justify-center p-0",
};

const baseClasses =
  "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu active:scale-[0.97] cursor-pointer outline-solid outline-transparent [&>svg]:max-w-[theme(spacing.8)] transition-all duration-200 motion-reduce:transition-none";

const variantColorClasses: Record<string, Record<string, string>> = {
  solid: {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    success: "bg-success text-white hover:opacity-90",
    warning: "bg-warning text-white hover:opacity-90",
    danger: "bg-danger text-white hover:opacity-90",
  },
  bordered: {
    primary: "border-2 border-primary bg-transparent text-primary hover:bg-primary-50",
    secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary-50",
    success: "border-2 border-success bg-transparent text-success hover:bg-success-50",
    warning: "border-2 border-warning bg-transparent text-warning hover:bg-warning-50",
    danger: "border-2 border-danger bg-transparent text-danger hover:bg-danger-50",
  },
  light: {
    primary: "bg-transparent text-primary hover:bg-primary-100",
    secondary: "bg-transparent text-secondary hover:bg-secondary-100",
    success: "bg-transparent text-success hover:bg-success-100",
    warning: "bg-transparent text-warning hover:bg-warning-100",
    danger: "bg-transparent text-danger hover:bg-danger-100",
  },
  flat: {
    primary: "bg-primary-50 text-primary hover:bg-primary-100",
    secondary: "bg-secondary-50 text-secondary hover:bg-secondary-100",
    success: "bg-success-50 text-success hover:bg-success-100",
    warning: "bg-warning-50 text-warning hover:bg-warning-100",
    danger: "bg-danger-50 text-danger hover:bg-danger-100",
  },
  faded: {
    primary: "border-2 border-primary-200 bg-primary-50 text-primary hover:border-primary hover:bg-primary-100",
    secondary: "border-2 border-secondary-200 bg-secondary-50 text-secondary hover:border-secondary hover:bg-secondary-100",
    success: "border-2 border-success-200 bg-success-50 text-success hover:border-success hover:bg-success-100",
    warning: "border-2 border-warning-200 bg-warning-50 text-warning hover:border-warning hover:bg-warning-100",
    danger: "border-2 border-danger-200 bg-danger-50 text-danger hover:border-danger hover:bg-danger-100",
  },
  shadow: {
    primary: "shadow-lg shadow-primary/40 bg-primary text-white hover:opacity-90",
    secondary: "shadow-lg shadow-secondary/40 bg-secondary text-white hover:opacity-90",
    success: "shadow-lg shadow-success/40 bg-success text-white hover:opacity-90",
    warning: "shadow-lg shadow-warning/40 bg-warning text-white hover:opacity-90",
    danger: "shadow-lg shadow-danger/40 bg-danger text-white hover:opacity-90",
  },
  ghost: {
    primary: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
    secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white",
    success: "border-2 border-success bg-transparent text-success hover:bg-success hover:text-white",
    warning: "border-2 border-warning bg-transparent text-warning hover:bg-warning hover:text-white",
    danger: "border-2 border-danger bg-transparent text-danger hover:bg-danger hover:text-white",
  },
};

const CustomButton: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "primary",
  size = "md",
  radius = "default",
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  type = "button",
  ...props
}) => {
  const isCircle = radius === "circle";
  const globalFormLoading = useSelector((state: IApplicationState) => state.GeneralData?.formLoading);
  const isLoading = loading || (type === "submit" && globalFormLoading);

  const comboClasses = variantColorClasses[variant]?.[color] || variantColorClasses.solid.primary;

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={clsx(
        baseClasses,
        "inline-flex items-center gap-2 font-medium transition-all duration-200",
        "outline-none focus:outline-none focus:ring-0",
        "disabled:pointer-events-none disabled:opacity-50",

        comboClasses,
        radiusClasses[radius],
        isCircle ? circleSizes[size] : sizeClasses[size],

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          {icon && iconPosition === "left" && icon}

          {!isCircle && children}

          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
};

export default CustomButton;