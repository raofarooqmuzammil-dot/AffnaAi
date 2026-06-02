import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact",
  description:
    "Book a 20-minute setup call with the Affnaai team. We'll learn how your business handles customer inquiries today, walk you through how the AI receptionist would fit, and tell you straight whether we're a good fit. No sales pitch, no pressure.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Affnaai",
    description:
      "Book a 20-minute setup call with the Affnaai team. We'll learn how your business handles customer inquiries today, walk you through how the AI receptionist would fit, and tell you straight whether we're a good fit.",
    url: "/contact",
    type: "website",
    siteName: "Affnaai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Affnaai — Automating customer conversation into revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact · Affnaai",
    description:
      "Book a 20-minute setup call. We'll learn how your business handles customer inquiries today and tell you if we're a fit.",
    images: ["/opengraph-image"],
  },
};
export default function ContactPage() {
  return <ContactClient />;
}
