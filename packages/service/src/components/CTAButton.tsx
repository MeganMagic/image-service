import cn from "classnames";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix"> {
  label: string;
  size?: "sm" | "md";
  isFullWidth?: boolean;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  variant?: "filled" | "light" | "outlined";
}

const CTAButton = ({
  label,
  size = "md",
  isFullWidth = false,
  prefix,
  suffix,
  className,
  variant = "filled",
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 rounded disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors",
        isFullWidth && "w-full",
        variant === "filled" &&
          "bg-slate-900 text-white disabled:bg-slate-300 hover:bg-slate-800",
        variant === "light" &&
          "bg-slate-200 text-slate-800 disabled:bg-slate-100 disabled:text-slate-400 hover:bg-slate-300",
        variant === "outlined" &&
          "border border-slate-400 text-slate-600 disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-400 hover:border-slate-500 hover:text-slate-800",
        size === "md" && "h-14",
        size === "sm" && "h-11",
        className
      )}
      {...props}
    >
      {prefix}
      <span
        className={cn(
          "font-semibold",
          size === "md" && "text-base",
          size === "sm" && "text-sm"
        )}
      >
        {label}
      </span>
      {suffix}
    </button>
  );
};

export default CTAButton;
