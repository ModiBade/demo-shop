import StoreProvider from "@/lib/store/provider";
import "./globals.scss";
import "./fonts.scss";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import { BaseConfig } from "@/lib/config/base";

export const metadata = {
  title: BaseConfig.appName,
  description: BaseConfig.appDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ir" dir="rtl">
      <body>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
