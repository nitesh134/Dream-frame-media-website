import type { ReactNode } from "react";

export interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small uppercase label chip used above section headings */
export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <div
      className={`text-[10px] font-bold text-[#666666] tracking-widest mb-6 border border-[#E5E5E5] bg-white inline-block px-3 py-1.5 uppercase rounded-[2px] shadow-sm ${className}`.trim()}
    >
      {children}
    </div>
  );
}
