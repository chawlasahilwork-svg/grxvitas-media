import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grxvitas.Media | Luxury AI Advertising Agency",
  description:
    "Luxury AI advertising agency creating cinematic AI commercials, premium product films and next-generation visual storytelling.",

  keywords: [
    "AI Advertising",
    "AI Commercials",
    "AI Video Agency",
    "AI Marketing",
    "Luxury Advertising",
    "Product Commercials",
    "AI Content",
    "Grxvitas Media",
  ],

  authors: [
    {
      name: "Grxvitas.Media",
    },
  ],

  creator: "Grxvitas.Media",

  metadataBase: new URL("https://grxvitas.media"),

  openGraph: {
    title: "Grxvitas.Media",
    description:
      "Luxury AI Advertising Agency creating cinematic AI commercials.",
    url: "https://grxvitas.media",
    siteName: "Grxvitas.Media",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grxvitas.Media",
    description:
      "Luxury AI Advertising Agency creating cinematic AI commercials.",
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
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>

    </html>
  );
}
