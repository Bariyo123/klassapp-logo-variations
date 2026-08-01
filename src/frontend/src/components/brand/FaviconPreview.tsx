import { BRAND_ASSETS, FAVICON_SIZES } from "@/lib/brand";
import { fadeInUp } from "@/lib/motion-presets";
import { motion } from "motion/react";

export function FaviconPreview({
  title,
  delay = 0,
  className,
  titleClassName,
  sizeClassName,
}: {
  title: string;
  delay?: number;
  className: string;
  titleClassName: string;
  sizeClassName: string;
}) {
  return (
    <motion.div {...fadeInUp(delay, 0.4)} className={className}>
      <p
        className={`text-xs font-semibold uppercase tracking-widest mb-6 ${titleClassName}`}
      >
        {title}
      </p>
      <div className="flex items-end gap-8">
        {FAVICON_SIZES.map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <img
              src={BRAND_ASSETS.favicon}
              alt={`Favicon ${size}px`}
              width={size}
              height={size}
              className="object-contain"
            />
            <span className={`text-[10px] font-mono ${sizeClassName}`}>
              {size}px
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
