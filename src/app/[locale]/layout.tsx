import type { Metadata } from "next";
import { Rubik, Assistant } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, dir, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { site, siteUrl } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { StickyBar } from "@/components/StickyBar";
import { Analytics } from "@/components/Analytics";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import "../globals.css";

/*
 * Root layout. All routes live under /he or /en; this layout sets the
 * document language, text direction and fonts per locale.
 */

// Display: Rubik — a clean, strong geometric Hebrew/Latin sans. Crisp and
// clear at reading sizes, powerful at heavy weights — the open-source blend
// of the clean + bold Hebrew display faces the client liked (Simona / Birzia,
// which are proprietary). Keeps the --font-frank variable so tokens are stable.
const displaySans = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-frank",
  display: "swap",
});

// Body: Assistant — the premium Hebrew UI sans, clean at every size.
const bodySans = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: t.meta.title,
      template: "%s | OGen Family Office",
    },
    description: t.meta.description,
    // The site's whole funnel ends in WhatsApp, so the shared-link card is
    // often the first thing a prospect sees. Referenced explicitly rather than
    // by file convention, which does not reach these nested locale routes.
    openGraph: {
      type: "website",
      siteName: site.brand,
      locale: locale === "he" ? "he_IL" : "en_US",
      url: `${siteUrl()}/${locale}`,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.brand }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${displaySans.variable} ${bodySans.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        <Nav locale={locale} t={t} />
        <main>{children}</main>
        <Footer locale={locale} t={t} />
        <WhatsAppFab label={t.cta.whatsapp} prefill={t.cta.whatsappPrefill} />
        <StickyBar t={t} />
        <AccessibilityWidget locale={locale as Locale} />
        <Analytics />
      </body>
    </html>
  );
}
