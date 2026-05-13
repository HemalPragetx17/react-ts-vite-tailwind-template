import React from "react";
import clsx from "clsx";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "default" | "rounded" | "pill" | "circle";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
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

const variantClasses = {
  primary:
    "bg-primary text-white border border-transparent shadow-sm hover:bg-primary/90",

  secondary:
    "bg-secondary text-white border border-transparent shadow-sm hover:bg-secondary/90",

  white:
    "bg-white text-primary-100 border border-primary-100 shadow-sm hover:bg-default-50",

  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary/10",

  ghost:
    "bg-transparent text-primary border border-transparent hover:bg-primary/10",
};

const radiusClasses = {
  default: "rounded-md",
  rounded: "rounded-xl",
  pill: "rounded-full",
  circle: "rounded-full aspect-square justify-center p-0",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  radius = "default",
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const isCircle = radius === "circle";

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center gap-2 font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        variantClasses[variant],
        radiusClasses[radius],

        isCircle ? circleSizes[size] : sizeClasses[size],

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 animate-spin">Loading...</span>
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

export default Button;