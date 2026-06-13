import type { TextareaHTMLAttributes } from "react";

export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> & {
  label: string;
  className?: string;
};

export function Textarea({ label, id, className = "", ...rest }: TextareaProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-[11px] font-bold text-black uppercase tracking-widest"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all outline-none min-h-[100px] resize-y ${className}`.trim()}
        {...rest}
      />
    </div>
  );
}
