import type { Metadata } from "next";
import "./globals.css";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import WhatsAppFloatingCTA from "@/components/WhatsAppFloatingCTA";
import { JsonLdScript, generateWholesaleSchema } from "@/components/SEO/JsonLd";
import storeData from "@/data/store.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://antitarnishjewellerywholesaledelhi.com"),
  title: {
    default: "Wholesale Anti Tarnish Jewellery Delhi | Arora Group Wholesale",
    template: "%s | Arora Group Wholesale Delhi",
  },
  description:
    "Direct factory importer of wholesale anti-tarnish 316L stainless steel & 18K PVD gold jewellery in Delhi. Low ₹3,000 MOV, zero item MOQ, Tagore Garden warehouse.",
  keywords: [
    "anti tarnish jewellery wholesale delhi",
    "wholesale anti tarnish jewellery sadar bazar",
    "316l stainless steel jewellery wholesale delhi",
    "pvd gold jewellery wholesale delhi",
    "korean jewellery wholesale delhi",
    "arora group wholesale",
    "anti tarnish rings wholesale delhi",
    "waterproof jewellery supplier delhi"
  ],
  authors: [{ name: "Arora Group Wholesale" }],
  creator: "Arora Group Wholesale",
  publisher: "Arora Group Wholesale",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: storeData.logoUrl,
  },
  openGraph: {
    title: "Wholesale Anti Tarnish Jewellery Delhi | Arora Group Wholesale",
    description:
      "Direct factory importer of 316L stainless steel & 18K PVD gold jewellery in Delhi. Low ₹3,000 MOV, 0 MOQ, Tagore Garden showroom.",
    url: "https://antitarnishjewellerywholesaledelhi.com",
    siteName: "Arora Group Wholesale Delhi Anti-Tarnish Hub",
    images: [
      {
        url: storeData.logoUrl,
        width: 500,
        height: 500,
        alt: "Arora Group Wholesale Anti Tarnish Jewellery Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PgRxVxShTuNxyeXp9jpm9N0Ht9iUoeTDxxXJjWOXcmg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalStoreSchema = generateWholesaleSchema({
    category: "Anti-Tarnish Jewellery",
    location: "Delhi NCR",
    pageTitle: "Arora Group Wholesale - Anti Tarnish Jewellery Delhi",
    pageDescription:
      "Direct factory importer of anti-tarnish 316L stainless steel & 18K vacuum PVD gold jewelry in Delhi. Flat ₹3,000 MOV, zero item MOQ, warehouse in Tagore Garden Extension.",
    urlPath: "",
  });

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="PgRxVxShTuNxyeXp9jpm9N0Ht9iUoeTDxxXJjWOXcmg" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.6469;77.1122" />
        <meta name="ICBM" content="28.6469, 77.1122" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 text-slate-900 selection:bg-gold-500 selection:text-white">
        <JsonLdScript data={globalStoreSchema} />
        <GlobalHeader />
        <main className="flex-1">{children}</main>
        <GlobalFooter />
        <WhatsAppFloatingCTA />
      </body>
    </html>
  );
}
