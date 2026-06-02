import IndustryTemplate from "@/components/IndustryTemplate";

export const metadata = {
  title: "AI Receptionist for Real Estate Agents",
  description:
    "AI receptionist for real estate agents. Replies to property inquiries in seconds, qualifies buyers and renters, books showings 24/7, and feeds qualified leads directly into your CRM. Be the first agent to respond and win more listings.",
  alternates: { canonical: "/industries/real-estate" },
  openGraph: {
    title: "AI Receptionist for Real Estate Agents · Affnaai",
    description:
      "AI receptionist for real estate. Replies to inquiries in seconds, qualifies buyers, books showings 24/7. Be the first agent to respond, win more deals.",
    url: "/industries/real-estate",
    type: "website",
    siteName: "Affnaai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affnaai — AI receptionist for real estate agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist for Real Estate Agents · Affnaai",
    description:
      "AI receptionist for real estate. Replies to inquiries in seconds, qualifies buyers, books showings 24/7, syncs to your CRM.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <IndustryTemplate slug="real-estate" />;
}
