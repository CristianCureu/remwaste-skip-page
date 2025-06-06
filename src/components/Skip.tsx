import { motion, useAnimation } from "framer-motion";
import { SkipType } from "../types";
import { useEffect } from "react";
import { Cuboid, TriangleAlert } from "lucide-react";

type SkipProps = {
  skip: SkipType;
  selectedSkip: SkipType | null;
  onSelect: () => void;
};

export default function Skip({ skip, selectedSkip, onSelect }: SkipProps) {
  const isSelected = selectedSkip?.id === skip.id;

  const imageControls = useAnimation();

  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  useEffect(() => {
    imageControls.start({
      rotateZ: isSelected ? 4 : 0,
      scale: isSelected ? 1.25 : 1,
      transition: springTransition,
    });
  }, [isSelected, imageControls]);

  return (
    <motion.div
      onClick={onSelect}
      onHoverStart={() => {
        if (!isSelected) {
          imageControls.start({
            rotateZ: 4,
            scale: 1.25,
            transition: springTransition,
          });
        }
      }}
      onHoverEnd={() => {
        if (!isSelected) {
          imageControls.start({
            rotateZ: 0,
            scale: 1,
            transition: springTransition,
          });
        }
      }}
      whileHover={{ scale: isSelected ? 1.03 : 1.01 }}
      animate={{ scale: isSelected ? 1.03 : 1 }}
      transition={springTransition}
      className={`
        group relative rounded-lg
        transform-gpu
        border overflow-hidden
        border-gray-700 hover:border-gray-700
        bg-gray-900/90 text-white cursor-pointer
        shadow-[0_8px_24px_rgba(100,116,139,0.2)] 
        hover:shadow-[0_8px_24px_rgba(100,116,139,0.4)]
        ${isSelected ? "ring-2 ring-indigo-400 shadow-none hover:shadow-none" : ""}
      `}
    >
      {/* Image */}
      <div className="relative h-36 md:h-48 w-full overflow-hidden rounded-t-lg bg-gray-900">
        <motion.img
          animate={imageControls}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
          alt="skip"
          className="w-full h-full object-cover 
          [mask-image:linear-gradient(to_top,transparent_0%,black_40%,black_100%)]"
        />

        {!skip.allowed_on_road && (
          <div className="z-100 absolute bottom-2 left-4 md:left-6 bg-black/60 text-yellow-300 text-xs px-2 py-1 rounded-md flex items-center shadow-md">
            <TriangleAlert size={14} className="mr-1" />
            Not allowed on the road
          </div>
        )}
        <div className="absolute top-2 left-4 md:left-6 bg-black/60 text-white text-sm font-semibold px-2 py-1 rounded-md shadow-sm">
          {skip.size} yd
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-3 bg-gray-900 backdrop-blur-md rounded-b-lg">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-slate-50">
          {skip.size} Yard Skip
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400">{skip.hire_period_days} hire period</p>

        {/* Price */}
        <p className="text-xl md:text-2xl font-bold text-indigo-400">
          £{skip.price_before_vat}
        </p>

        <button
          className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all ease-in-out duration-200 flex items-center justify-center space-x-2 cursor-pointer
            ${
              isSelected
                ? "bg-indigo-700 border-indigo-400 ring-1 ring-indigo-300/80 text-white"
                : "bg-gray-700/80 text-white hover:bg-gray-700"
            }`}
        >
          {isSelected ? (
            "Selected"
          ) : (
            <div className="flex items-center">
              Select this skip
              <Cuboid size={18} className="ml-2" />
            </div>
          )}
        </button>
      </div>
    </motion.div>
  );
}
