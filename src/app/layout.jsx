import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SpiderWebs from "@/components/SpiderWebs/SpiderWebs";
import { baseMetadata } from "@/metadata/metadata";
import I18nProvider from "@/providers/I18nProvider"; // <- додати

export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <SpiderWebs />
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
