import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "glomdom",
  description: "Created by glomdom",
  openGraph: {
    type: "website",
    url: "https://nexisys.net",
    title: "glomdom's site or something",
    description: "look at my beautiful creations",
    siteName: "glomdom's portfolio",
    images: [{ url: "https://nexisys.net/_next/image?url=%2Fpfp.jpg&w=3840&q=75" }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
