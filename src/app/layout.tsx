import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.dev"),
  title: "Chheng Seyha | Classical Digital Folio & Software Architecture",
  description:
    "Explore the engineering folio of Chheng Seyha, senior full-stack developer and digital craftsman. Dedicated to structural harmony, resilient APIs, and timeless digital architecture.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Classical Portfolio",
    "Digital Folio",
    "React",
    "Next.js",
    "TypeScript",
    "Architecture",
    "Clean Code",
  ],
  authors: [{ name: "Chheng Seyha" }],
  creator: "Chheng Seyha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.dev",
    title: "Chheng Seyha | Classical Digital Folio & Software Architecture",
    description:
      "A classical, responsive digital folio showcasing selected software works, technical disciplines, and architectural craftsmanship.",
    siteName: "Chheng Seyha Classical Folio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Chheng Seyha - Classical Folio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chheng Seyha | Software Craftsman & Architect",
    description: "Enduring digital systems, scalable architectures, and classical aesthetic discipline.",
    creator: "@[Your-Handle]",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-parchment font-sans selection:bg-gold-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
