import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C-FLOW — Community Flood Early Warning System",
  description:
    "Community-driven, AI-powered flood monitoring and early warning system across the Pangani Basin, Tanzania.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
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
