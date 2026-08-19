import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tarikur Rahman for freelance full-stack web development, custom Shopify themes, Bubble.io applications, and web performance optimization.",
  alternates: {
    canonical: "https://www.tarikur.com/contact",
  },
  openGraph: {
    title: "Contact Tarikur Rahman | Full-Stack Developer & Shopify Expert",
    description:
      "Get in touch with Tarikur Rahman for full-stack web development, Shopify stores, and Bubble.io applications.",
    url: "https://www.tarikur.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
