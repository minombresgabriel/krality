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
  title: {
    default: "Krality | Soluciones Digitales que Cultivan tu Negocio",
    template: "%s | Krality"
  },
  description: "Expertos en desarrollo web, branding y sistemas SaaS. Transformamos tus ideas en soluciones digitales con diseño innovador y tecnología de punta.",
  keywords: [
    "desarrollo web Venezuela", 
    "diseño UX/UI", 
    "branding profesional", 
    "sistemas SaaS", 
    "automatización de negocios",
    "marketing digital"
  ],
  creator: "Krality Team",
  publisher: "Krality Digital Solutions",
  metadataBase: new URL("https://www.krality.com"), // Reemplaza con tu URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Krality | Cultivamos tu Presencia Digital",
    description: "Soluciones tecnológicas personalizadas para hacer crecer tu negocio en el mundo digital.",
    url: "https://www.krality.com",
    siteName: "Krality",
    images: [
      {
        url: "/og-image.jpg", // Reemplaza con tu imagen OG
        width: 1200,
        height: 630,
        alt: "Krality - Soluciones Digitales",
      },
    ],
    locale: "es_VE", // Ajusta según tu ubicación
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krality | Cultivamos tu Presencia Digital",
    description: "Soluciones tecnológicas personalizadas para hacer crecer tu negocio",
    images: ["/twitter-image.jpg"], // Reemplaza con tu imagen para Twitter
    creator: "@krality", // Reemplaza con tu handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo-krality.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Si tienes PWA
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
