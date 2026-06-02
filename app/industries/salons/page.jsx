import IndustryTemplate from "@/components/IndustryTemplate";

export const metadata = {
  title: "AI Receptionist for Salons & Spas",
  description:
    "AI receptionist for salons and spas. Replies to Instagram DMs, WhatsApp inquiries, and web chat in seconds. Books with the right stylist, sends appointment reminders, and captures every lead even when your team is with clients.",
  alternates: { canonical: "/industries/salons" },
  openGraph: {
    title: "AI Receptionist for Salons & Spas · Affnaai",
    description:
      "AI receptionist for salons. Replies to Instagram DMs and WhatsApp in seconds, books with the right stylist, sends reminders, captures every lead.",
    url: "/industries/salons",
    type: "website",
    siteName: "Affnaai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affnaai — AI receptionist for salons and spas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist for Salons & Spas · Affnaai",
    description:
      "AI receptionist for salons. Replies to Instagram DMs and WhatsApp in seconds, books with the right stylist, captures every lead.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <IndustryTemplate slug="salons" />;
}
