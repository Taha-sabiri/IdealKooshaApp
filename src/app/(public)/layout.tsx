import type { Metadata } from "next";
import "../globals.css";
import localFont from 'next/font/local'
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Head from "next/head";


const abbar = localFont({
  src: [
    {
      path: '../../../assets/fonts/AbarMidFaNum-Regular.woff',
      weight: '500'
    },
    {
      path: '../../../assets/fonts/AbarMidFaNum-Bold.woff',
      weight: '600'
    },
    {
      path: '../../../assets/fonts/AbarMidFaNum-SemiBold.woff',
      weight: '700'
    },
    {
      path: '../../../assets/fonts/AbarMidFaNum-ExtraBold.woff',
      weight: '800'
    },
    {
      path: '../../../assets/fonts/AbarMidFaNum-Black.woff',
      weight: '900'
    },
  ],
  variable: '--font-abbar',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "ایده‌آل کوشا",
  description: "سامانه‌ معاملاتی  بر خط ایده‌آل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <link rel="manifest" href="../../../public/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="../.././../assets/images/logo.png" />
      </Head>
      <body
        className={`${abbar.variable} font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
