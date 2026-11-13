import React from "react";
import { Metadata } from "next";
import DelhiMarketGuidePage, {
  generateMetadata as generateGuideMetadata,
} from "../delhi-markets/[market]/page";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await generateGuideMetadata({ params: { market: "karol-bagh" } });
  return {
    ...meta,
    alternates: {
      canonical: "https://antitarnishjewellerywholesaledelhi.com/delhi-markets/karol-bagh",
    },
  };
}

export default function KarolBaghAliasPage() {
  return <DelhiMarketGuidePage params={{ market: "karol-bagh" }} />;
}
