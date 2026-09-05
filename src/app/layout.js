import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
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
  verification: {
    google: "cfXqDafrNjU6iZSyVj5lzDyqRZMAWJdtnUtiOKlYFSw",
  },
  openGraph: {
    title: "Elite Dil Evi",
    description:
      "Language courses, exam preparation, and university guidance in Istanbul.",
    url: "https://elitedil.com",
    siteName: "Elite Dil Evi",
    images: ["/mainlogo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Dil Evi",
    description:
      "Language courses, exam preparation, and university guidance in Istanbul.",
    images: ["/mainlogo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Elite Dil Evi",
  alternateName: "Elite Dil Kursu - Elite Language House",
  url: "https://elitedil.com",
  logo: "https://elitedil.com/mainlogo.png",
  image: "https://elitedil.com/mainlogo.png",
  telephone: "+905444067222",
  email: "info@elitedil.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cumhuriyet, Nazım Hikmet Blv. No:54",
    addressLocality: "Esenyurt/İstanbul",
    postalCode: "34512",
    addressCountry: "TR",
  },
  sameAs: ["https://www.instagram.com/elitedil_evi"],
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <FloatingSideTabs />
      </body>
    </html>
  );
}
