import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white hover:bg-black/90 active:scale-[0.98] border border-transparent",
  outline:
    "bg-transparent text-black border border-[#E5E5E5] hover:bg-white hover:border-[#cccccc] active:scale-[0.98]",
  ghost: "bg-transparent text-black hover:bg-black/5 active:scale-[0.98] border border-transparent",
};

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-bold transition-all rounded-[4px] disabled:opacity-50 disabled:pointer-events-none";
  return (
    <button type={type} className={`${base} ${variantClass[variant]} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
