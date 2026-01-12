// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarLayout from "./components/SidebarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fardin Farabi",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SidebarLayout>
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
