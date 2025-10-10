import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SpiderWebs from "@/components/SpiderWebs/SpiderWebs";
import RouteLoaderWrapper from "@/components/RouteLoaderWrapper";
import { baseMetadata } from "@/metadata/metadata";
import I18nProvider from "@/providers/I18nProvider";

export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <SpiderWebs />
          <Header />
          <RouteLoaderWrapper>
            <main>{children}</main>
          </RouteLoaderWrapper>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
