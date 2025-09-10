import "./globals.css";
import { Merriweather, Urbanist } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

// Load Merriweather for Headings
const headingFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
