import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Explore featured projects by Tarikur Rahman, including custom Shopify stores, Bubble.io web applications, and full-stack React / Next.js web applications.",
  alternates: {
    canonical: "https://www.tarikur.com/projects",
  },
  openGraph: {
    title: "Featured Projects | Tarikur Rahman - Full-Stack Developer",
    description:
      "Explore featured projects by Tarikur Rahman, including custom Shopify stores, Bubble.io web applications, and React / Next.js projects.",
    url: "https://www.tarikur.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
