import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chan's Movie Trailer - Learn English",
  description: "Learn English through movie trailers with subtitles and repeat functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}
