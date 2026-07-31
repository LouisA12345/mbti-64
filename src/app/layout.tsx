import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

// Geist/Sora have no Myanmar glyphs, so without this the browser falls back to whatever
// Myanmar font happens to be installed on the OS — inconsistent metrics vs. the site's tight
// tracking/line-height (tuned for Latin text) is what caused Burmese characters to overlap.
const notoSansMyanmar = Noto_Sans_Myanmar({
  variable: "--font-myanmar",
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MBTI-64 | Discover Your Full Personality Code",
  description:
    "A 64-type personality framework combining MBTI, Mindset (Open/Anchored), and Lifestyle (Competitive/Harmonious). Take the 72-question assessment and get a rich, shareable personality profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${notoSansMyanmar.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LocaleProvider>
            <TooltipProvider>
              {children}
              <Toaster richColors position="top-center" />
            </TooltipProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
