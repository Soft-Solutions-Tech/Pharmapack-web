import "./globals.css";
import { Merriweather, Urbanist } from "next/font/google";

// Load Merriweather for Headings
const headingFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular + Bold
  variable: "--font-heading",
  display: "swap",
});

// Load Urbanist for Body
const bodyFont = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Pharmapack",
  description: "Innovative pharmaceutical packaging solutions",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`} // Make both fonts globally available
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
