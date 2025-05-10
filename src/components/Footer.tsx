import { SkipType } from "../types";
import { AnimatePresence, motion } from "framer-motion";

type FooterProps = {
  skip: SkipType | null;
};

export default function Footer({ skip }: FooterProps) {
  return (
    <div className="fixed bottom-0 left-0 h-16 w-full bg-gray-900 text-white border-t border-gray-700/60 shadow-[0_-2px_10px_rgba(0,0,0,0.3)] px-4">
      <AnimatePresence mode="wait">
        {!skip ? (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No skip selected
          </div>
        ) : (
          <motion.div
            key={skip.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center justify-between h-full max-w-6xl mx-auto w-full"
          >
            {/* Skip Info */}
            <div className="flex items-center space-x-6 text-sm md:text-base">
              <p className="font-semibold">{skip.size} Yard Skip</p>
              <p className="font-bold text-indigo-400">£{skip.price_before_vat}</p>
              <p className="text-gray-400">{skip.hire_period_days} days</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="px-4 py-1.5 md:px-8 md:py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-200 ease-in text-sm cursor-pointer">
                Back
              </button>
              <button className="px-4 py-1.5 md:px-8 md:py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 ease-in text-sm font-semibold text-white shadow cursor-pointer">
                Continue
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
