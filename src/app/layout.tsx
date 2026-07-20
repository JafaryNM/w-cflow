import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVALAB — Comprehensive Laboratory Services",
  description:
    "Ensuring the delivery of reliable, validated data, and therefore safer product to market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
