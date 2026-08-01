import { fadeIn } from "@/lib/motion-presets";
import { motion } from "motion/react";

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div {...fadeIn("y", 16, 0.45)} className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">
        {label}
      </p>
      <div className="flex items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground font-display whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {description && (
        <p className="mt-3 text-muted-foreground text-sm max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
