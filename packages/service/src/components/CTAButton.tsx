import cn from "classnames";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix"> {
  label: string;
  size?: "sm" | "md";
  isFullWidth?: boolean;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
}

const CTAButton = ({
  label,
  size = "md",
  isFullWidth = true,
  prefix,
  suffix,
  className,
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-emerald-600 text-white disabled:bg-slate-300 rounded",
        isFullWidth && "w-full",
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
