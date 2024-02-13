import { Lato } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "TDVP School",
  description: "The Doon Valley Public School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} text-[#001C30]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
