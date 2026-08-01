import { fadeIn } from "@/lib/motion-presets";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const VARIANTS = {
  do: {
    card: "border-[#22C55E]/30 bg-[#22C55E]/5",
    badge: "bg-[#22C55E]",
    marker: "text-[#22C55E]",
    symbol: "✓",
    offsetX: -20,
  },
  dont: {
    card: "border-destructive/30 bg-destructive/5",
    badge: "bg-destructive",
    marker: "text-destructive",
    symbol: "✕",
    offsetX: 20,
  },
} as const;

export function GuidelineList({
  variant,
  title,
  items,
}: {
  variant: keyof typeof VARIANTS;
  title: string;
  items: readonly string[];
}) {
  const style = VARIANTS[variant];

  return (
    <motion.div
      {...fadeIn("x", style.offsetX)}
      className={`rounded-2xl border p-7 ${style.card}`}
    >
      <div className="flex items-center gap-2 mb-5">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${style.badge}`}
        >
          {variant === "do" ? (
            <Check size={13} className="text-white" />
          ) : (
            <span className="text-white font-bold text-xs">{style.symbol}</span>
          )}
        </div>
        <h3 className="font-bold text-sm text-foreground font-display uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={`font-bold mt-0.5 ${style.marker}`}>
              {style.symbol}
            </span>{" "}
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
