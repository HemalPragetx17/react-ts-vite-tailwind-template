import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import type { IApplicationState } from "../../../store/state/app-state";
import Spinner from "../spinner/Spinner";


interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isIconOnly?: boolean;
  isLoading?: boolean;
  spinner?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const iconOnlySizeClasses = {
  xs: "w-6 h-6 p-0 justify-center aspect-square",
  sm: "w-9 h-9 p-0 justify-center aspect-square",
  md: "w-10 h-10 p-0 justify-center aspect-square",
  lg: "w-12 h-12 p-0 justify-center aspect-square",
};

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const baseClasses =
  "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu active:scale-[0.97] cursor-pointer outline-solid outline-transparent [&>svg]:max-w-[theme(spacing.8)] transition-all duration-200 motion-reduce:transition-none";

const variantColorClasses: Record<string, Record<string, string>> = {
  solid: {
    default: "bg-secondary-600 text-white hover:opacity-90",
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    success: "bg-success text-white hover:opacity-90",
    warning: "bg-warning text-white hover:opacity-90",
    danger: "bg-danger text-white hover:opacity-90",
  },
  bordered: {
    default: "border-2 border-secondary-600 bg-transparent text-secondary-600 hover:bg-secondary-100",
    primary: "border-2 border-primary bg-transparent text-primary hover:bg-primary-50",
    secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary-50",
    success: "border-2 border-success bg-transparent text-success hover:bg-success-50",
    warning: "border-2 border-warning bg-transparent text-warning hover:bg-warning-50",
    danger: "border-2 border-danger bg-transparent text-danger hover:bg-danger-50",
  },
  light: {
    default: "bg-transparent text-secondary-600 hover:bg-secondary-300",
    primary: "bg-transparent text-primary hover:bg-primary-100",
    secondary: "bg-transparent text-secondary hover:bg-secondary-100",
    success: "bg-transparent text-success hover:bg-success-100",
    warning: "bg-transparent text-warning hover:bg-warning-100",
    danger: "bg-transparent text-danger hover:bg-danger-100",
  },
  flat: {
    default: "bg-secondary-200 text-secondary-600 hover:bg-secondary-300",
    primary: "bg-primary-50 text-primary hover:bg-primary-100",
    secondary: "bg-secondary-50 text-secondary hover:bg-secondary-100",
    success: "bg-success-50 text-success hover:bg-success-100",
    warning: "bg-warning-50 text-warning hover:bg-warning-100",
    danger: "bg-danger-50 text-danger hover:bg-danger-100",
  },
  faded: {
    default: "border-2 border-secondary-300 bg-secondary-200 text-secondary-600 hover:border-secondary-600 hover:bg-secondary-300",
    primary: "border-2 border-primary-200 bg-primary-50 text-primary hover:border-primary hover:bg-primary-100",
    secondary: "border-2 border-secondary-200 bg-secondary-50 text-secondary hover:border-secondary hover:bg-secondary-100",
    success: "border-2 border-success-200 bg-success-50 text-success hover:border-success hover:bg-success-100",
    warning: "border-2 border-warning-200 bg-warning-50 text-warning hover:border-warning hover:bg-warning-100",
    danger: "border-2 border-danger-200 bg-danger-50 text-danger hover:border-danger hover:bg-danger-100",
  },
  shadow: {
    default: "shadow-lg shadow-secondary-600/40 bg-secondary-600 text-white hover:opacity-90",
    primary: "shadow-lg shadow-primary/40 bg-primary text-white hover:opacity-90",
    secondary: "shadow-lg shadow-secondary/40 bg-secondary text-white hover:opacity-90",
    success: "shadow-lg shadow-success/40 bg-success text-white hover:opacity-90",
    warning: "shadow-lg shadow-warning/40 bg-warning text-white hover:opacity-90",
    danger: "shadow-lg shadow-danger/40 bg-danger text-white hover:opacity-90",
  },
  ghost: {
    default: "border-2 border-secondary-600 bg-transparent text-secondary-600 hover:bg-secondary-600 hover:text-white",
    primary: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
    secondary: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white",
    success: "border-2 border-success bg-transparent text-success hover:bg-success hover:text-white",
    warning: "border-2 border-warning bg-transparent text-warning hover:bg-warning hover:text-white",
    danger: "border-2 border-danger bg-transparent text-danger hover:bg-danger hover:text-white",
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "primary",
  size = "md",
  radius = "md",
  startContent,
  endContent,
  isIconOnly = false,
  isLoading = false,
  spinner,
  fullWidth = false,
  children,
  className,
  disabled,
  type = "button",
  ...props
}) => {
  const globalFormLoading = useSelector((state: IApplicationState) => state.GeneralData?.formLoading);
  const isCurrentlyLoading = isLoading || (type === "submit" && globalFormLoading);

  const comboClasses = variantColorClasses[variant]?.[color] || variantColorClasses.solid.primary;

  return (
    <button
      type={type}
      disabled={disabled || isCurrentlyLoading}
      className={clsx(
        baseClasses,
        "inline-flex items-center gap-2 font-medium transition-all duration-200",
        "outline-none focus:outline-none focus:ring-0",
        "disabled:pointer-events-none disabled:opacity-50",

        comboClasses,
        radiusClasses[radius],
        isIconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {isCurrentlyLoading ? (
        isIconOnly ? (
          spinner !== undefined ? spinner : (
            <Spinner size={size === "lg" ? "md" : "sm"} color="current" />
          )
        ) : (
          <>
            {spinner !== undefined ? spinner : (
              <Spinner size={size === "lg" ? "md" : "sm"} color="current" />
            )}
            {children}
            {endContent}
          </>
        )
      ) : (
        <>
          {startContent}
          {children}
          {endContent}
        </>
      )}
    </button>
  );
};

export default Button;