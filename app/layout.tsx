import type { Metadata } from "next";
import Script from "next/script";
import {
  FOOTER_LINK_LABEL,
  OG_IMAGE,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "Claude",
    "AI accelerator",
    "AI training",
    "Claude Code",
    "AI Powered",
    "Productize Yourself",
  ],
  icons: {
    icon: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
    apple: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="affiliate-tracking" strategy="afterInteractive">{`
(function() {
  var params = new URLSearchParams(window.location.search);
  var amId = params.get('am_id');
  if (amId) {
    sessionStorage.setItem('am_id', amId);
  } else {
    amId = sessionStorage.getItem('am_id');
  }
  if (!amId) return;
  function applyAffiliate() {
    document.querySelectorAll('a[href*="checkout.aipowered.xyz"]').forEach(function(link) {
      var url = new URL(link.href);
      url.searchParams.set('am_id', amId);
      link.href = url.toString();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAffiliate);
  } else {
    applyAffiliate();
  }
})();
`}</Script>
      </body>
    </html>
  );
}
