import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "light" | "outlined";
}

const Button = ({
  variant = "filled",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-2 min-h-10 rounded-md flex items-center justify-center",
        variant === "filled" &&
          "bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-400",
        variant === "light" &&
          "bg-slate-200 text-slate-800 disabled:bg-slate-100 disabled:text-slate-400 hover:bg-slate-300",
        variant === "outlined" &&
          "border border-slate-400 text-slate-600 disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-400 hover:border-slate-500 hover:text-slate-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
