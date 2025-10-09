'use client';

import '@/styles/globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/i18n/i18n';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
