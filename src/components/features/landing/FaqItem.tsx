import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { EASE_OUT_EXPO } from "@/constants/motion";

export interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E5E5E5] bg-white transition-all duration-500 ease-out rounded-[2px] overflow-hidden shadow-sm hover:shadow-md hover:border-[#cccccc]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-8 text-left flex items-start md:items-center justify-between gap-6"
      >
        <span className="font-bold text-xl md:text-2xl text-[#1a1a1a] pr-4 leading-tight">
          {question}
        </span>
        <div
          className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-black border-black text-white" : "bg-[#FAFAFA] border-[#E5E5E5] text-[#1a1a1a] group-hover:border-[#cccccc]"}`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-500 ease-[0.22,1,0.36,1] ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2 text-[#666666] text-lg leading-relaxed border-t border-[#E5E5E5]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
