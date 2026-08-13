import Script from "next/script";
import type { Locale } from "@/lib/i18n";

/**
 * tabnav accessibility widget (client-supplied embed).
 *
 * The `req` token identifies the OGen account. It comes from tabnav and must
 * not be changed. The rest of the config is the snippet the client sent, with
 * two things made locale-aware: the widget's own UI language, and which corner
 * it opens in. It sits opposite the WhatsApp button (which uses `end-6`, i.e.
 * left in Hebrew and right in English) so the two never stack.
 */
export function AccessibilityWidget({ locale }: { locale: Locale }) {
  const config = JSON.stringify({
    language: locale,
    color: "#363a40",
    buttonColor: "#3a3e44",
    buttonSize: "small",
    widgetSize: "small",
    widgetLocation: locale === "he" ? "right" : "left",
    buttonLocation: "bottom",
  });

  // Spread, because `tnv-data-config` is not a known script attribute.
  const configProp = { "tnv-data-config": config };

  return (
    <>
      <Script
        id="tabnav-accessibility"
        src="https://widget.tabnav.com/limited-widget.min.js.gz?req=30_ue04i2bIJVPfmgYJeG2hPsA"
        strategy="afterInteractive"
        {...configProp}
      />
      <noscript>
        JavaScript is required for{" "}
        <a href="https://tabnav.com/accessibility-widget">
          tabnav web accessibility widget
        </a>{" "}
        to work properly.
      </noscript>
    </>
  );
}
