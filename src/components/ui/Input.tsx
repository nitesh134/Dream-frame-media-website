import type { InputHTMLAttributes } from "react";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  label: string;
  className?: string;
};

export function Input({ label, id, className = "", ...rest }: InputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-[11px] font-bold text-black uppercase tracking-widest"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full h-12 px-4 bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all outline-none ${className}`.trim()}
        {...rest}
      />
    </div>
  );
}
