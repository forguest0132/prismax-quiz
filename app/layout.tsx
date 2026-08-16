import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrismaX Tango Arena",
  description: "Master the Physical AI consensus challenges and claim your Validator Pass.",
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