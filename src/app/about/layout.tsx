import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Tarikur Rahman, a Full-Stack Developer, Shopify Expert, and Bubble.io Developer building modern web applications and e-commerce solutions.",
  alternates: {
    canonical: "https://www.tarikur.com/about",
  },
  openGraph: {
    title: "About Tarikur Rahman | Full-Stack Developer & Shopify Expert",
    description:
      "Learn more about Tarikur Rahman, a Full-Stack Developer, Shopify Expert, and Bubble.io Developer building modern web applications.",
    url: "https://www.tarikur.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
