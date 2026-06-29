import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackToTop, Footer, Navbar } from "@/components/site-shell";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.icetei2027.org"),
  title: {
    default: "ICETEI 2026 | International Conference on Emerging Technologies",
    template: "%s | ICETEI 2026",
  },
  description:
    "ICETEI 2026 — International Conference on Emerging Technologies, Engineering and Interdisciplinary Innovation. Faculty of Sciences, Tetouan, Morocco. Proceedings indexed in Scopus.",
  keywords: [
    "ICETEI 2026",
    "academic conference",
    "Scopus indexed",
    "emerging technologies",
    "engineering",
    "Tetouan",
    "Morocco",
  ],
  openGraph: {
    title: "ICETEI 2026 Conference",
    description: "Advancing Knowledge, Technology and Innovation for a Sustainable Future.",
    type: "website",
    images: ["/icetei-flyer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
