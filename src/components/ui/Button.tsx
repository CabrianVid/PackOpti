import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "dark";
type Size = "md" | "lg" | "xl";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-secondary-container text-primary-container border border-primary-container/20 hover:shadow-lg active:scale-95",
  secondary:
    "bg-secondary-container text-primary-container border border-primary-container/10 active:scale-95",
  outline:
    "border border-outline text-on-surface hover:bg-surface-container",
  dark: "bg-primary-container text-white border border-primary-container shadow-xl hover:scale-105 active:scale-95",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-2.5",
  lg: "px-8 py-4",
  xl: "px-12 py-5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "lg", className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "font-label-caps text-label-caps font-bold transition-all",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
