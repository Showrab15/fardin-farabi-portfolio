import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "Fardin Farabi",
  description: "Fardin Farabi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={`${inter.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
