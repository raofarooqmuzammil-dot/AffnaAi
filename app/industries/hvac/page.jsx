import IndustryTemplate from "@/components/IndustryTemplate";

export const metadata = {
  title: "AI Receptionist for HVAC Companies",
  description:
    "AI receptionist for HVAC businesses. Triages emergency calls 24/7, dispatches the on-call tech automatically, books routine service visits, and never misses a call again — even at 11pm in a heatwave. Built for the high-stakes service calls that grow your business.",
  alternates: { canonical: "/industries/hvac" },
  openGraph: {
    title: "AI Receptionist for HVAC Companies · Affnaai",
    description:
      "AI receptionist for HVAC. Triages emergency calls 24/7, dispatches on-call techs, books service visits. Never miss a call again — even at 11pm.",
    url: "/industries/hvac",
    type: "website",
    siteName: "Affnaai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affnaai — AI receptionist for HVAC companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist for HVAC Companies · Affnaai",
    description:
      "AI receptionist for HVAC. Triages emergencies 24/7, dispatches techs, books service visits. Never miss a call again.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <IndustryTemplate slug="hvac" />;
}
