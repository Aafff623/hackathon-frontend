import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentCFO",
  description: "AI CFO demo console for DAO treasury payouts",
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
