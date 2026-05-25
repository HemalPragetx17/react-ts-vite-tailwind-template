import React from "react";
import clsx from "clsx";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClose?: () => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: "px-2 h-6 text-[10px]",
  md: "px-3 h-7 text-xs",
  lg: "px-4 h-8 text-sm",
};

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const baseClasses =
  "relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap transition-all duration-200 select-none";

const variantColorClasses: Record<string, Record<string, string>> = {
  solid: {
    default: "bg-default text-default-900",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-black",
    danger: "bg-danger text-white",
  },
  bordered: {
    default: "border-2 border-default bg-transparent text-default-900",
    primary: "border-2 border-primary bg-transparent text-primary",
    secondary: "border-2 border-secondary bg-transparent text-secondary",
    success: "border-2 border-success bg-transparent text-success",
    warning: "border-2 border-warning bg-transparent text-warning",
    danger: "border-2 border-danger bg-transparent text-danger",
  },
  light: {
    default: "bg-transparent text-default hover:bg-default/10",
    primary: "bg-transparent text-primary hover:bg-primary/10",
    secondary: "bg-transparent text-secondary hover:bg-secondary/10",
    success: "bg-transparent text-success hover:bg-success/10",
    warning: "bg-transparent text-warning hover:bg-warning/10",
    danger: "bg-transparent text-danger hover:bg-danger/10",
  },
  flat: {
    default: "bg-default/20 text-default-700 hover:bg-default/30",
    primary: "bg-primary-100 text-primary hover:bg-primary-200/50",
    secondary: "bg-secondary-100 text-secondary hover:bg-secondary-200/50",
    success: "bg-success-100 text-success hover:bg-success-200/50",
    warning: "bg-warning-100 text-warning hover:bg-warning-200/50",
    danger: "bg-danger-100 text-danger hover:bg-danger-200/50",
  },
  faded: {
    default: "border-2 border-default/20 bg-default/10 text-default-700 hover:bg-default/20",
    primary: "border-2 border-primary-200 bg-primary-50 text-primary hover:bg-primary-100/50",
    secondary: "border-2 border-secondary-200 bg-secondary-50 text-secondary hover:bg-secondary-100/50",
    success: "border-2 border-success-200 bg-success-50 text-success hover:bg-success-100/50",
    warning: "border-2 border-warning-200 bg-warning-50 text-warning hover:bg-warning-100/50",
    danger: "border-2 border-danger-200 bg-danger-50 text-danger hover:bg-danger-100/50",
  },
  shadow: {
    default: "shadow-lg shadow-default/40 bg-default text-default-900",
    primary: "shadow-lg shadow-primary/40 bg-primary text-white",
    secondary: "shadow-lg shadow-secondary/40 bg-secondary text-white",
    success: "shadow-lg shadow-success/40 bg-success text-white",
    warning: "shadow-lg shadow-warning/40 bg-warning text-black",
    danger: "shadow-lg shadow-danger/40 bg-danger text-white",
  },
  dot: {
    default: "border-2 border-default/20 bg-transparent text-default-700",
    primary: "border-2 border-primary/20 bg-transparent text-primary",
    secondary: "border-2 border-secondary/20 bg-transparent text-secondary",
    success: "border-2 border-success/20 bg-transparent text-success",
    warning: "border-2 border-warning/20 bg-transparent text-warning",
    danger: "border-2 border-danger/20 bg-transparent text-danger",
  },
};

const dotColorClasses: Record<string, string> = {
  default: "bg-default",
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

const CustomChip: React.FC<ChipProps> = ({
  variant = "solid",
  color = "default",
  size = "md",
  radius = "full",
  startContent,
  endContent,
  onClose,
  isDisabled = false,
  children,
  className,
  ...props
}) => {
  const comboClasses = variantColorClasses[variant]?.[color] || variantColorClasses.solid.default;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  return (
    <div
      className={clsx(
        baseClasses,
        comboClasses,
        sizeClasses[size],
        radiusClasses[radius],
        isDisabled && "opacity-50 pointer-events-none",
        className
      )}
      {...props}
    >
      <div className={clsx("flex items-center gap-1.5", variant === "dot" ? "pl-0 pr-1" : "px-1")}>
        {variant === "dot" && (
          <span className={clsx("w-1.5 h-1.5 rounded-full ml-1", dotColorClasses[color])} />
        )}
        
        {startContent && (
          <span className="inline-flex items-center justify-center">
            {startContent}
          </span>
        )}
        
        <span className="flex-1 font-medium">
          {children}
        </span>
        
        {endContent && !onClose && (
          <span className="inline-flex items-center justify-center">
            {endContent}
          </span>
        )}
        
        {onClose && (
          <button
            type="button"
            onClick={handleClose}
            className={clsx(
              "p-0.5 rounded-full hover:bg-black/10 transition-colors inline-flex items-center justify-center outline-none",
              size === "sm" ? "w-3.5 h-3.5" : size === "md" ? "w-4 h-4" : "w-4.5 h-4.5"
            )}
            aria-label="Close chip"
          >
            {endContent || (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomChip;
