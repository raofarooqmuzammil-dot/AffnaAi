import IndustryTemplate from "@/components/IndustryTemplate";

export const metadata = {
  title: "AI Receptionist for Cleaning Companies",
  description:
    "AI receptionist for cleaning businesses. Handles WhatsApp quotes, books recurring jobs, captures lead details, and texts back missed calls. Live in 7 days, scales with your team without hiring more staff.",
  alternates: { canonical: "/industries/cleaning" },
  openGraph: {
    title: "AI Receptionist for Cleaning Companies · Affnaai",
    description:
      "AI receptionist for cleaning businesses. Handles WhatsApp quotes, books recurring jobs, captures leads, texts back missed calls. Live in 7 days.",
    url: "/industries/cleaning",
    type: "website",
    siteName: "Affnaai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affnaai — AI receptionist for cleaning companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist for Cleaning Companies · Affnaai",
    description:
      "AI receptionist for cleaning businesses. Handles WhatsApp quotes, books recurring jobs, captures leads, texts back missed calls.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <IndustryTemplate slug="cleaning" />;
}
