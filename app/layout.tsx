import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muqabala - Learn Quran Tajweed",
  description: "Master the art of Quranic recitation with interactive Tajweed lessons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
