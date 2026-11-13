import React from "react";
import { Metadata } from "next";
import DelhiMarketGuidePage, {
  generateMetadata as generateGuideMetadata,
} from "../delhi-markets/[market]/page";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await generateGuideMetadata({ params: { market: "sadar-bazar-rui-mandi" } });
  return {
    ...meta,
    alternates: {
      canonical: "https://antitarnishjewellerywholesaledelhi.com/delhi-markets/sadar-bazar-rui-mandi",
    },
  };
}

export default function SadarBazarAliasPage() {
  return <DelhiMarketGuidePage params={{ market: "sadar-bazar-rui-mandi" }} />;
}
