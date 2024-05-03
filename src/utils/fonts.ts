import { Tenor_Sans, Libre_Franklin, Source_Serif_4 } from "next/font/google";

export const tenor_sans = Tenor_Sans({
  subsets: ["latin"],
  variable: "--font-tenor",
  weight: "400",
});

export const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: "600",
});

export const source_serif = Source_Serif_4({
  subsets: ["latin"], 
  variable: "--font-source",
  weight: "400",
});
