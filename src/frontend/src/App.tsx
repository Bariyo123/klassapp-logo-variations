import { AssetCard } from "@/components/brand/AssetCard";
import { ColorSwatch } from "@/components/brand/ColorSwatch";
import { DownloadButton } from "@/components/brand/DownloadButton";
import { FaviconPreview } from "@/components/brand/FaviconPreview";
import { GuidelineList } from "@/components/brand/GuidelineList";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { Wordmark } from "@/components/brand/Wordmark";
import { Toaster } from "@/components/ui/sonner";
import {
  ALL_ASSETS,
  BRAND_ASSETS,
  BRAND_COLORS,
  BRAND_HEX,
  BUSINESS_CARD,
  DONT_GUIDELINES,
  DO_GUIDELINES,
  LOGO_ASSETS,
  PITCH_DECK_SLIDE,
  POST_TEMPLATES,
  SOCIAL_ASSETS,
  TYPE_SAMPLES,
} from "@/lib/brand";
import { downloadFiles } from "@/lib/download";
import { fadeIn, fadeInUp } from "@/lib/motion-presets";
import { Download, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const [PRIMARY_LOCKUP, APP_ICON, STACKED_WORDMARK, DARK_LOGO] = LOGO_ASSETS;

export default function App() {
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);

  const downloadAll = async () => {
    setIsDownloadingAll(true);
    try {
      await downloadFiles(ALL_ASSETS);
      toast.success("All brand assets downloaded!");
    } catch {
      toast.error("Download failed. Please try again.");
    } finally {
      setIsDownloadingAll(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="bottom-right" />

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-20 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={BRAND_ASSETS.icon}
              alt="KlassApp icon"
              className="w-8 h-8 rounded-lg object-cover shadow-sm"
            />
            <Wordmark className="font-extrabold text-lg tracking-tight" />
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Brand Kit
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              2026
            </span>
            <button
              type="button"
              data-ocid="header.download_all.button"
              onClick={downloadAll}
              disabled={isDownloadingAll}
              aria-label="Download all brand assets"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
            >
              {isDownloadingAll ? (
                <>
                  <Loader2 size={13} className="animate-spin" />
                  <span className="hidden sm:inline">Downloading...</span>
                </>
              ) : (
                <>
                  <Download size={13} />
                  <span className="hidden sm:inline">Download All</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400 mb-5">
              Official Brand Guide
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white font-display leading-tight mb-5">
              KlassApp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Brand Kit
              </span>
            </h1>
            <p className="text-blue-200/70 max-w-xl mx-auto text-base leading-relaxed">
              Official brand assets, color tokens, typography, and usage
              guidelines for the KlassApp school management platform.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Main ── */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* ── 1. Primary Logo ── */}
        <section data-ocid="logo.section">
          <SectionHeader
            label="01 — Logo"
            title="Primary Lockup"
            description="The KlassApp horizontal logo is the default brand expression. Always maintain clear space equal to the cap-height of the 'K' on all sides."
          />
          <motion.div
            {...fadeIn("y", 24, 0.5)}
            className="rounded-2xl border border-border bg-[#F8FAFC] flex items-center justify-center p-10 md:p-16 mb-4"
          >
            <img
              src={PRIMARY_LOCKUP.src}
              alt="KlassApp primary horizontal logo"
              className="max-w-sm md:max-w-md w-full object-contain"
            />
          </motion.div>
          <div className="flex justify-end mb-6">
            <DownloadButton
              src={PRIMARY_LOCKUP.src}
              filename={PRIMARY_LOCKUP.filename}
              label="primary logo"
              text="Download Primary Logo"
              ocid="logo.primary.button"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AssetCard
              asset={APP_ICON}
              index={0}
              ocidPrefix="logo"
              mediaClassName="bg-[#F8FAFC] flex flex-col items-center justify-center p-8 gap-4"
              media={
                <img
                  src={APP_ICON.src}
                  alt="KlassApp app icon"
                  className="w-28 h-28 object-contain rounded-2xl"
                />
              }
            />
            <AssetCard
              asset={STACKED_WORDMARK}
              index={1}
              ocidPrefix="logo"
              mediaClassName="bg-[#F8FAFC] flex flex-col items-center justify-center p-8 gap-4"
              media={
                <img
                  src={STACKED_WORDMARK.src}
                  alt="KlassApp stacked logo"
                  className="max-w-[200px] w-full object-contain"
                />
              }
            />
          </div>
        </section>

        {/* ── 2. Dark / Reversed ── */}
        <section data-ocid="logo-dark.section">
          <SectionHeader
            label="02 — Reversed Logo"
            title="Dark Background Version"
            description="Use the reversed white logo exclusively on dark navy backgrounds. Do not place the primary blue logo on dark surfaces."
          />
          <motion.div
            {...fadeIn("y", 24, 0.5)}
            className="rounded-2xl bg-[#0F172A] flex items-center justify-center p-10 md:p-16 relative overflow-hidden mb-4"
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, ${BRAND_HEX.primaryBlue} 0%, transparent 60%), radial-gradient(circle at 70% 50%, ${BRAND_HEX.brandGreen} 0%, transparent 60%)`,
              }}
            />
            <img
              src={DARK_LOGO.src}
              alt="KlassApp reversed logo on dark background"
              className="max-w-sm md:max-w-lg w-full object-contain relative z-10"
            />
          </motion.div>
          <div className="flex justify-end">
            <DownloadButton
              src={DARK_LOGO.src}
              filename={DARK_LOGO.filename}
              label="dark reversed logo"
              text="Download Dark Logo"
              ocid="logo.dark.button"
            />
          </div>
        </section>

        {/* ── 3. Social / Digital Assets ── */}
        <section data-ocid="assets.section">
          <SectionHeader
            label="03 — Social & Digital"
            title="Digital Assets"
            description="Pre-sized assets for social media profiles, link previews, and email campaigns. Download and use as-is — do not stretch or crop."
          />
          <div className="grid grid-cols-1 gap-6">
            {SOCIAL_ASSETS.map((asset, i) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                index={i}
                ocidPrefix="assets"
              />
            ))}
          </div>
        </section>

        {/* ── 4. Social Post Templates ── */}
        <section data-ocid="posts.section">
          <SectionHeader
            label="04 — Post Templates"
            title="Social Post Templates"
            description="Ready-to-use post templates for each platform. Download, add your content in your preferred editor, and post."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POST_TEMPLATES.map((post, i) => (
              <AssetCard
                key={post.id}
                asset={post}
                index={i}
                accent="green"
                ocidPrefix="posts"
              />
            ))}
          </div>
        </section>

        {/* ── 5. Business Card ── */}
        <section data-ocid="business-card.section">
          <SectionHeader
            label="05 — Print"
            title="Business Card"
            description="Standard horizontal business card template. Print at 300 DPI for crisp results. Replace placeholder text with your details before printing."
          />
          <AssetCard
            asset={BUSINESS_CARD}
            ocidPrefix="business-card"
            mediaClassName={`${BUSINESS_CARD.aspect} bg-slate-100`}
          />
        </section>

        {/* ── 6. Pitch Deck Slide ── */}
        <section data-ocid="pitch-deck.section">
          <SectionHeader
            label="06 — Presentation"
            title="Pitch Deck Title Slide"
            description="16:9 widescreen title slide for investor presentations, demos, and school briefings. Import into Google Slides, Keynote, or PowerPoint as a background image."
          />
          <AssetCard
            asset={PITCH_DECK_SLIDE}
            ocidPrefix="pitch-deck"
            mediaClassName={`${PITCH_DECK_SLIDE.aspect} bg-[#0F172A]`}
          />
        </section>

        {/* ── 7. Favicon ── */}
        <section data-ocid="favicon.section">
          <SectionHeader
            label="07 — Favicon"
            title="Favicon & Browser Icon"
            description="The favicon uses the transparent K mark. Test legibility at 16 px — if unclear, simplify the shape."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FaviconPreview
              title="On white"
              className="rounded-2xl border border-border bg-white p-8"
              titleClassName="text-muted-foreground"
              sizeClassName="text-muted-foreground"
            />
            <FaviconPreview
              title="On dark"
              delay={0.1}
              className="rounded-2xl bg-[#0F172A] p-8"
              titleClassName="text-blue-400/70"
              sizeClassName="text-blue-400/60"
            />
          </div>
        </section>

        {/* ── 8. Brand Colors ── */}
        <section data-ocid="colors.section">
          <SectionHeader
            label="08 — Color System"
            title="Brand Colors"
            description="A compact palette of five tokens. Primary Blue and Brand Green are the active brand colors. Click any swatch to copy the hex value."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {BRAND_COLORS.map((color, i) => (
              <ColorSwatch key={color.hex} color={color} index={i} />
            ))}
          </div>
        </section>

        {/* ── 9. Typography ── */}
        <section data-ocid="typography.section">
          <SectionHeader
            label="09 — Typography"
            title="Type System"
            description="Two typefaces form the KlassApp voice: a bold display grotesque for headings and a refined sans for everything else."
          />
          <div className="space-y-6">
            {TYPE_SAMPLES.map((type, i) => (
              <motion.div
                key={type.id}
                {...fadeInUp(i * 0.1)}
                data-ocid={`typography.item.${i + 1}`}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="px-8 py-10 border-b border-border">
                  <p
                    className={`${type.className} text-foreground leading-tight`}
                  >
                    {type.sample}
                  </p>
                </div>
                <div className="px-8 py-5 flex flex-wrap items-center gap-x-8 gap-y-2 bg-muted/40">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Typeface
                    </p>
                    <p className="text-sm font-bold text-foreground font-display mt-0.5">
                      {type.family}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Role
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">
                      {type.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Weights
                    </p>
                    <p className="text-sm font-mono text-primary mt-0.5">
                      {type.weight}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Wordmark type treatment */}
            <motion.div
              {...fadeInUp(0.2)}
              data-ocid="typography.item.3"
              className="rounded-2xl border border-border bg-card px-8 py-10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Wordmark treatment
              </p>
              <div className="flex items-baseline gap-0">
                <Wordmark className="font-extrabold text-6xl md:text-8xl tracking-tight" />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                "Klass" in Primary Blue · "App" in Brand Green — the only
                approved two-tone wordmark treatment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 10. Usage guidelines ── */}
        <section data-ocid="guidelines.section">
          <SectionHeader
            label="10 — Usage Rules"
            title="Do's & Don'ts"
            description="Follow these guidelines to maintain brand consistency across all touchpoints."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineList variant="do" title="Do" items={DO_GUIDELINES} />
            <GuidelineList
              variant="dont"
              title="Don't"
              items={DONT_GUIDELINES}
            />
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-card mt-8">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src={BRAND_ASSETS.icon}
              alt="KlassApp icon"
              className="w-7 h-7 rounded-lg object-cover"
            />
            <Wordmark className="font-bold" />
            <span className="text-muted-foreground text-sm">
              Brand Kit 2026
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()}. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
