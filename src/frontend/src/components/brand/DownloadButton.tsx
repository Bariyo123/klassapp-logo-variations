import { downloadFile } from "@/lib/download";
import { Download } from "lucide-react";

const ACCENT_CLASSES = {
  primary: "bg-primary/8 text-primary hover:bg-primary/15",
  green: "bg-[#22C55E]/10 text-[#22C55E] hover:bg-[#22C55E]/20",
} as const;

export type DownloadAccent = keyof typeof ACCENT_CLASSES;

export function DownloadButton({
  src,
  filename,
  label,
  text = "Download",
  accent = "primary",
  ocid,
}: {
  src: string;
  filename: string;
  label: string;
  text?: string;
  accent?: DownloadAccent;
  ocid?: string;
}) {
  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={() => downloadFile(src, filename)}
      aria-label={`Download ${label}`}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors shrink-0 ${ACCENT_CLASSES[accent]}`}
    >
      <Download size={13} /> {text}
    </button>
  );
}
