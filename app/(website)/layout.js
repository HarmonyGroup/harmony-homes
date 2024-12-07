import localFont from "next/font/local";
import { Aleo, Montserrat, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import Footer from "@/components/website/Footer";
import Navbar from "@/components/website/Navbar";
import { AppProvider } from "@/utils/AppContext";
import Header from "@/components/website/Header";

export const metadata = {
  title: "Harmony Homes",
  description: "Providing affordable smart luxury",
};

const aleo = Aleo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <AppProvider>
          {/* <Header /> */}
          <Navbar />
          <div>{children}</div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
