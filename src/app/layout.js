
import { Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  title: "মুক্ত বাতাস",
  description: "A Project by Factory Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavbarComponent/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
