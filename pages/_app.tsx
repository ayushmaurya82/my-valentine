import type { AppProps } from "next/app";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Valentine</title>
        <meta name="description" content="My Valentine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="My Valentine" />
        <meta property="og:description" content="My Valentine" />
        <meta property="og:image" content="https://ik.imagekit.io/ayushprivate/lottie/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Valentine" />
        <meta name="twitter:description" content="My Valentine" />
        <meta name="twitter:image" content="https://ik.imagekit.io/ayushprivate/lottie/og.png" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
