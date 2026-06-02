import IndustryTemplate from "@/components/IndustryTemplate";

export const metadata = {
  title: "AI Receptionist for Dental Clinics",
  description:
    "AI receptionist for dental practices. Handles patient inquiries 24/7, books appointments via WhatsApp and web chat, sends automatic reminders to reduce no-shows, and qualifies new patients before they reach your front desk.",
  alternates: { canonical: "/industries/dental" },
  openGraph: {
    title: "AI Receptionist for Dental Clinics · Affnaai",
    description:
      "AI receptionist for dental practices. Handles patient inquiries 24/7, books appointments, sends reminders to reduce no-shows, and qualifies new patients.",
    url: "/industries/dental",
    type: "website",
    siteName: "Affnaai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affnaai — AI receptionist for dental clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist for Dental Clinics · Affnaai",
    description:
      "AI receptionist for dental practices. Books appointments 24/7, reduces no-shows, qualifies new patients before they reach your front desk.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <IndustryTemplate slug="dental" />;
}
