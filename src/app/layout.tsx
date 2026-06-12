import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Design Tool Landing Page",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    	lang="en"
		className={`h-full antialiased`}
    >
      	<body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
