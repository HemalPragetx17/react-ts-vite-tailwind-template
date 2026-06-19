import React from "react";
import clsx from "clsx";

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: any;
  selected?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const colorClasses = {
  default: {
    selected: "bg-default-200 dark:bg-default-800 text-default-foreground border-default-400",
    unselected: "hover:bg-default-50 text-default-500 hover:text-default-700 dark:hover:bg-default-900 border-default-200",
  },
  primary: {
    selected: "bg-primary-50 dark:bg-primary-950 text-primary border-primary/40",
    unselected: "hover:bg-default-50 text-default-600 hover:text-primary dark:hover:bg-default-900 border-default-200",
  },
  secondary: {
    selected: "bg-secondary-50 dark:bg-secondary-950 text-secondary border-secondary/40",
    unselected: "hover:bg-default-50 text-default-600 hover:text-secondary dark:hover:bg-default-900 border-default-200",
  },
  success: {
    selected: "bg-success-50 dark:bg-success-950 text-success border-success/40",
    unselected: "hover:bg-default-50 text-default-600 hover:text-success dark:hover:bg-default-900 border-default-200",
  },
  warning: {
    selected: "bg-warning-50 dark:bg-warning-950 text-warning border-warning/40",
    unselected: "hover:bg-default-50 text-default-600 hover:text-warning dark:hover:bg-default-900 border-default-200",
  },
  danger: {
    selected: "bg-danger-50 dark:bg-danger-950 text-danger border-danger/40",
    unselected: "hover:bg-default-50 text-default-600 hover:text-danger dark:hover:bg-default-900 border-default-200",
  },
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs gap-1.5 h-8",
  md: "px-4 py-2 text-sm gap-2 h-10",
  lg: "px-5 py-2.5 text-base gap-2.5 h-12",
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  selected = false,
  color = "default",
  size = "md",
  isDisabled = false,
  fullWidth = false,
  children,
  className,
  onClick,
  ...props
}) => {
  const activeColor = colorClasses[color] || colorClasses.default;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={clsx(
        "inline-flex items-center justify-center font-semibold border transition-all duration-200 select-none outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-focus",
        "disabled:opacity-50 disabled:pointer-events-none",
        sizeClasses[size],
        selected ? activeColor.selected : activeColor.unselected,
        fullWidth && "w-full",
        className
      )}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
