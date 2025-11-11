import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Orchestration Briefing",
  description:
    "Project briefing on standardised cloud orchestration models and workload migration."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
