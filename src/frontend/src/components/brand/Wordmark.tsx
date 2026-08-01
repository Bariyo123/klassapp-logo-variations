import { BRAND_HEX } from "@/lib/brand";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display ${className}`}>
      <span style={{ color: BRAND_HEX.primaryBlue }}>Klass</span>
      <span style={{ color: BRAND_HEX.brandGreen }}>App</span>
    </span>
  );
}
