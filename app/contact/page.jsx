import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact",
  description:
    "Book a 20-minute setup call. We'll learn your business and tell you if we're a fit.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Affnaai",
    description:
      "Book a 20-minute setup call. We'll learn your business and tell you if we're a fit.",
    url: "/contact",
    type: "website",
    siteName: "Affnaai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact · Affnaai",
    description:
      "Book a 20-minute setup call. We'll learn your business and tell you if we're a fit.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
