import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingSideTabs from "./components/FloatingSideTabs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elite Dil Evi",
  description:
    "Elite Dil Evi - Language courses, exam preparation, and university guidance in Istanbul.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingSideTabs />
      </body>
    </html>
  );
}
