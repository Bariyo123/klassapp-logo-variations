import { BRAND_HEX, type BrandColor } from "@/lib/brand";
import { fadeInScale } from "@/lib/motion-presets";
import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function ColorSwatch({
  color,
  index,
}: {
  color: BrandColor;
  index: number;
}) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(color.hex).then(() => {
      setCopied(true);
      toast.success(`Copied ${color.hex}`);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isBright =
    color.hex === BRAND_HEX.softGray || color.hex === BRAND_HEX.pureWhite;

  return (
    <motion.div
      {...fadeInScale(index * 0.06)}
      data-ocid={`colors.item.${index + 1}`}
      className="rounded-2xl overflow-hidden border border-border shadow-xs group"
    >
      <div
        className="h-32 relative flex items-end p-3"
        style={{
          backgroundColor: color.hex,
          border: isBright ? "1px solid #e2e8f0" : undefined,
        }}
      >
        <button
          type="button"
          data-ocid={`colors.button.${index + 1}`}
          onClick={copy}
          aria-label={`Copy ${color.hex}`}
          className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
            isBright
              ? "bg-slate-900/10 hover:bg-slate-900/20 text-slate-700"
              : "bg-white/15 hover:bg-white/25 text-white"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={copied ? "check" : "copy"}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="flex items-center gap-1"
            >
              {copied ? (
                <>
                  <Check size={12} /> Copied
                </>
              ) : (
                <>
                  <Copy size={12} /> Copy hex
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
      <div className="bg-card px-4 py-3">
        <p className="font-bold text-sm text-foreground font-display">
          {color.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground mt-0.5">
          {color.hex}
        </p>
        <p className="text-xs text-muted-foreground mt-1 leading-snug">
          {color.role}
        </p>
      </div>
    </motion.div>
  );
}
