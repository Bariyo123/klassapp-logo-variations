import {
  type DownloadAccent,
  DownloadButton,
} from "@/components/brand/DownloadButton";
import type { AssetMeta } from "@/lib/brand";
import { fadeIn } from "@/lib/motion-presets";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const DIMENSION_ACCENT = {
  primary: "text-primary",
  green: "text-[#22C55E]",
} as const;

export function AssetCard({
  asset,
  index = 0,
  accent = "primary",
  ocidPrefix,
  mediaClassName,
  media,
}: {
  asset: AssetMeta;
  index?: number;
  accent?: DownloadAccent;
  ocidPrefix?: string;
  mediaClassName?: string;
  media?: ReactNode;
}) {
  return (
    <motion.div
      {...fadeIn("y", 20, 0.45, index * 0.08)}
      data-ocid={ocidPrefix && `${ocidPrefix}.item.${index + 1}`}
      className="rounded-2xl border border-border overflow-hidden shadow-xs group"
    >
      <div
        className={`${mediaClassName ?? `${asset.aspect} bg-slate-50`} overflow-hidden relative`}
      >
        {media ?? (
          <img
            src={asset.src}
            alt={asset.label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
        {asset.platform && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold"
            style={{ backgroundColor: asset.platformColor }}
          >
            {asset.platform}
          </div>
        )}
      </div>
      <div className="bg-card px-5 py-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-bold text-sm text-foreground font-display">
            {asset.label}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {asset.sublabel}
          </p>
          <p
            className={`text-[11px] font-mono mt-1 font-semibold ${DIMENSION_ACCENT[accent]}`}
          >
            {asset.dimensions}
          </p>
        </div>
        <DownloadButton
          src={asset.src}
          filename={asset.filename}
          label={asset.label}
          accent={accent}
          ocid={ocidPrefix && `${ocidPrefix}.button.${index + 1}`}
        />
      </div>
    </motion.div>
  );
}
