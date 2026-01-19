// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarLayout from "./components/SidebarLayout";
import { Toaster } from "react-hot-toast";

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
           <Toaster
            position="top-center"  // center horizontally at top
            toastOptions={{
              style: {
                background: "#6C63FF", // nice purple background
                color: "#fff",
                padding: "16px 24px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                fontWeight: "500",
                fontSize: "16px",
              },
              success: {
                iconTheme: {
                  primary: "#fff",
                  secondary: "#6C63FF",
                },
              },
              error: {
                style: {
                  background: "#FF4D4F",
                  color: "#fff",
                },
              },
            }}
          />
        </SidebarLayout>
      </body>
    </html>
  );
}
