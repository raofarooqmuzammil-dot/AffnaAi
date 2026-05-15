import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export const metadata = {
  title: "Affnaai — AI Receptionists for Service Businesses",
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
  openGraph: {
    title: "Affnaai — AI Receptionists for Service Businesses",
    description:
      "Answer every call, every chat, every DM — automatically. Live in 7 days.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-bg-base text-ink antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
