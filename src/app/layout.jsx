'use client';

import '@/styles/globals.scss';
import Head from "next/head";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/i18n/i18n';
import SpiderWebs from '@/components/SpiderWebs/SpiderWebs';
import { baseMetadata } from "@/metadata/metadata";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <meta name="description" content={baseMetadata.description} />
        <meta name="keywords" content={baseMetadata.keywords.join(", ")} />
        <link rel="icon" href={baseMetadata.icons.icon} />
        {/* Open Graph */}
        <meta property="og:url" content={baseMetadata.openGraph.url} />
        <meta property="og:site_name" content={baseMetadata.openGraph.siteName} />
        <meta property="og:type" content={baseMetadata.openGraph.type} />
        <meta property="og:image" content={baseMetadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={baseMetadata.openGraph.images[0].alt} />
        {/* Twitter */}
        <meta name="twitter:card" content={baseMetadata.twitter.card} />
        <meta name="twitter:image" content={baseMetadata.twitter.images[0]} />
      </Head>
      <body>
        <SpiderWebs />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
