import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { ContactSalesProvider } from "@/components/modals/ContactSalesProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OptiBox | Pack smarter. Ship cheaper. Waste less.",
  description:
    "Seamlessly connect your ERP and WMS to calculate the most efficient packing configurations in real-time. Eliminate void fill, reduce dimensional weight costs, and automate decision-making at the station.",
  icons: {
    icon: [{ url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#131b2e" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${hanken.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Material Symbols is an icon font with variation axes that next/font
            cannot model. Loading via <link> in the root layout is the correct
            and recommended pattern; the lint rule below is targeted only at
            page-level <head>, not root layouts. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className="overflow-x-hidden bg-surface text-on-surface"
        suppressHydrationWarning
      >
        <ContactSalesProvider>{children}</ContactSalesProvider>
      </body>
    </html>
  );
}
