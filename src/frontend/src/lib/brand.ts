export const BRAND_HEX = {
  primaryBlue: "#1E6FD9",
  brandGreen: "#22C55E",
  darkNavy: "#0F172A",
  softGray: "#F8FAFC",
  pureWhite: "#FFFFFF",
} as const;

export const BRAND_ASSETS = {
  primaryLockup: "/assets/generated/klassapp-primary-lockup-v4.dim_900x300.png",
  icon: "/assets/generated/klassapp-icon.dim_512x512.png",
  stacked: "/assets/generated/klassapp-logo-stacked-v2.dim_600x400.png",
  dark: "/assets/generated/klassapp-logo-dark-v2.dim_800x300.png",
  socialBanner: "/assets/generated/klassapp-social-banner-v3.dim_1500x500.png",
  ogImage: "/assets/generated/klassapp-og-image-v3.dim_1200x630.png",
  emailHeader: "/assets/generated/klassapp-email-header-v3.dim_600x150.png",
  postX: "/assets/generated/klassapp-post-x-v3.dim_1200x675.png",
  postFacebook: "/assets/generated/klassapp-post-facebook-v3.dim_1200x630.png",
  postLinkedin: "/assets/generated/klassapp-post-linkedin-v3.dim_1200x627.png",
  postInstagram:
    "/assets/generated/klassapp-post-instagram-v3.dim_1080x1080.png",
  favicon: "/assets/generated/klassapp-favicon-v3-transparent.dim_64x64.png",
  businessCard: "/assets/generated/klassapp-business-card-v3.dim_1050x600.png",
  pitchDeckSlide:
    "/assets/generated/klassapp-pitch-deck-slide-v2.dim_1920x1080.png",
} as const;

export interface BrandColor {
  name: string;
  hex: string;
  role: string;
}

export const BRAND_COLORS: BrandColor[] = [
  {
    name: "Primary Blue",
    hex: BRAND_HEX.primaryBlue,
    role: "Primary CTA, links, key accents",
  },
  {
    name: "Brand Green",
    hex: BRAND_HEX.brandGreen,
    role: "Success states, highlights, badges",
  },
  {
    name: "Dark Navy",
    hex: BRAND_HEX.darkNavy,
    role: "Headings, hero backgrounds, reversed logos",
  },
  {
    name: "Soft Gray",
    hex: BRAND_HEX.softGray,
    role: "Page backgrounds, subtle fills",
  },
  {
    name: "Pure White",
    hex: BRAND_HEX.pureWhite,
    role: "Card surfaces, reversed text, icon fills",
  },
];

export interface AssetMeta {
  id: string;
  label: string;
  sublabel: string;
  dimensions: string;
  src: string;
  filename: string;
  aspect: string;
  platform?: string;
  platformColor?: string;
}

export const LOGO_ASSETS: AssetMeta[] = [
  {
    id: "primary-lockup",
    label: "Primary Lockup",
    sublabel: "Default horizontal logo",
    dimensions: "900 × 300 px",
    src: BRAND_ASSETS.primaryLockup,
    filename: "klassapp-logo-primary.png",
    aspect: "aspect-[3/1]",
  },
  {
    id: "app-icon",
    label: "App Icon",
    sublabel: "App stores & launcher",
    dimensions: "512 × 512 px",
    src: BRAND_ASSETS.icon,
    filename: "klassapp-app-icon.png",
    aspect: "aspect-square",
  },
  {
    id: "stacked-wordmark",
    label: "Stacked Wordmark",
    sublabel: "Print & web",
    dimensions: "600 × 400 px",
    src: BRAND_ASSETS.stacked,
    filename: "klassapp-logo-stacked.png",
    aspect: "aspect-[3/2]",
  },
  {
    id: "logo-dark",
    label: "Reversed Logo",
    sublabel: "Dark navy backgrounds",
    dimensions: "800 × 300 px",
    src: BRAND_ASSETS.dark,
    filename: "klassapp-logo-dark.png",
    aspect: "aspect-[8/3]",
  },
];

export const SOCIAL_ASSETS: AssetMeta[] = [
  {
    id: "social-banner",
    label: "Social Banner",
    sublabel: "Twitter / LinkedIn cover",
    dimensions: "1500 × 500 px",
    src: BRAND_ASSETS.socialBanner,
    filename: "klassapp-social-banner.png",
    aspect: "aspect-[3/1]",
  },
  {
    id: "og-image",
    label: "Open Graph Image",
    sublabel: "Link preview on social media",
    dimensions: "1200 × 630 px",
    src: BRAND_ASSETS.ogImage,
    filename: "klassapp-og-image.png",
    aspect: "aspect-[1.9/1]",
  },
  {
    id: "email-header",
    label: "Email Header",
    sublabel: "Transactional & newsletter emails",
    dimensions: "600 × 150 px",
    src: BRAND_ASSETS.emailHeader,
    filename: "klassapp-email-header.png",
    aspect: "aspect-[4/1]",
  },
];

export const POST_TEMPLATES: AssetMeta[] = [
  {
    id: "post-x",
    platform: "X (Twitter)",
    platformColor: "#000000",
    label: "X Post Template",
    sublabel: "Standard post / link card",
    dimensions: "1200 × 675 px",
    src: BRAND_ASSETS.postX,
    filename: "klassapp-post-x.png",
    aspect: "aspect-video",
  },
  {
    id: "post-facebook",
    platform: "Facebook",
    platformColor: "#1877F2",
    label: "Facebook Post Template",
    sublabel: "Link preview & shared image",
    dimensions: "1200 × 630 px",
    src: BRAND_ASSETS.postFacebook,
    filename: "klassapp-post-facebook.png",
    aspect: "aspect-[1.9/1]",
  },
  {
    id: "post-linkedin",
    platform: "LinkedIn",
    platformColor: "#0A66C2",
    label: "LinkedIn Post Template",
    sublabel: "Professional post image",
    dimensions: "1200 × 627 px",
    src: BRAND_ASSETS.postLinkedin,
    filename: "klassapp-post-linkedin.png",
    aspect: "aspect-[1.9/1]",
  },
  {
    id: "post-instagram",
    platform: "Instagram",
    platformColor: "#E1306C",
    label: "Instagram Post Template",
    sublabel: "Square feed post",
    dimensions: "1080 × 1080 px",
    src: BRAND_ASSETS.postInstagram,
    filename: "klassapp-post-instagram.png",
    aspect: "aspect-square",
  },
];

export const BUSINESS_CARD: AssetMeta = {
  id: "business-card",
  label: "Business Card Template",
  sublabel: 'Standard 3.5" × 2" print format',
  dimensions: "1050 × 600 px · 300 DPI",
  src: BRAND_ASSETS.businessCard,
  filename: "klassapp-business-card.png",
  aspect: "aspect-[1.75/1]",
};

export const PITCH_DECK_SLIDE: AssetMeta = {
  id: "pitch-deck-slide",
  label: "Pitch Deck Title Slide",
  sublabel: "Widescreen 16:9 presentation format",
  dimensions: "1920 × 1080 px",
  src: BRAND_ASSETS.pitchDeckSlide,
  filename: "klassapp-pitch-deck-slide.png",
  aspect: "aspect-video",
};

export const FAVICON_ASSET: AssetMeta = {
  id: "favicon",
  label: "Favicon",
  sublabel: "Browser tab & bookmarks",
  dimensions: "64 × 64 px",
  src: BRAND_ASSETS.favicon,
  filename: "klassapp-favicon.png",
  aspect: "aspect-square",
};

export const ALL_ASSETS: AssetMeta[] = [
  ...LOGO_ASSETS,
  ...SOCIAL_ASSETS,
  ...POST_TEMPLATES,
  FAVICON_ASSET,
  BUSINESS_CARD,
  PITCH_DECK_SLIDE,
];

export const FAVICON_SIZES = [16, 32, 64];

export interface TypeSample {
  id: string;
  family: string;
  role: string;
  weight: string;
  sample: string;
  className: string;
  desc: string;
}

export const TYPE_SAMPLES: TypeSample[] = [
  {
    id: "display",
    family: "Bricolage Grotesque",
    role: "Display / Headings",
    weight: "700–800",
    sample: "Smarter School Management",
    className: "font-display text-4xl font-extrabold tracking-tight",
    desc: "Used for hero headlines, section titles, and feature headings. Its expressive grotesque character gives KlassApp a bold, confident voice.",
  },
  {
    id: "body",
    family: "Plus Jakarta Sans",
    role: "Body / UI Text",
    weight: "400–600",
    sample:
      "Easily manage students, classes, schedules, and staff — all in one place.",
    className: "font-body text-lg font-normal leading-relaxed",
    desc: "Used for paragraphs, labels, navigation, and all interface text. Polished and highly legible across sizes.",
  },
];

export const DO_GUIDELINES = [
  "Use the primary horizontal logo as the default",
  "Maintain clear space equal to the cap-height around the logo",
  "Use the reversed white logo on dark navy backgrounds",
  "Scale the logo proportionally — never distort",
  "Use Bricolage Grotesque for all headings",
];

export const DONT_GUIDELINES = [
  "Don't recolor the logo with non-brand colors",
  "Don't place the primary logo on busy photographic backgrounds",
  "Don't add drop shadows or glows to the logo mark",
  "Don't alter letter spacing or font weights in the wordmark",
  "Don't use more than 2 type weights in a single composition",
];
