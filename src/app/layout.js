
import { Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import NavbarComponent from "./components/Navbar";

const roboto = Roboto({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavbarComponent/>
        {children}
        </body>
    </html>
  );
}
