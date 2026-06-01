import { Analytics } from "@vercel/analytics/next"
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://affnaai.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Affnaai — AI Receptionists for Service Businesses",
    template: "%s · Affnaai",
  },
  description:
    "Affnaai builds AI receptionists that answer calls, reply on WhatsApp, and convert leads into bookings automatically. Stop missing customers after hours.",
  keywords: [
    "AI receptionist",
    "AI front desk",
    "WhatsApp AI",
    "missed call text back",
    "booking automation",
    "AI for service businesses",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Affnaai — AI Receptionists for Service Businesses",
    description:
      "Automating customer conversation into revenue. AI receptionists that handle calls, WhatsApp, web chat, and DMs 24/7.",
    url: SITE_URL,
    siteName: "Affnaai",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affnaai — AI Receptionists for Service Businesses",
    description:
      "Automating customer conversation into revenue. AI receptionists that handle calls, WhatsApp, web chat, and DMs 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Affnaai",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description:
    "AI receptionists that answer calls, reply on WhatsApp, and convert leads into bookings — for service businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    url: `${SITE_URL}/contact`,
    availableLanguage: ["en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Affnaai",
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-bg-base text-ink antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
