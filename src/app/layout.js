// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarLayout from "./components/SidebarLayout";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Fardin Farabi",
    template: "%s | Fardin Farabi",
  },
  description:
    "Fardin Farabi - Ui/UX & Product Designer crafting modern, high-performance web experiences with Figma",

  keywords: [
    "Fardin Farabi",
    "UI/UX Designer",
    "Product Designer",
    "Front End Developer",
    "Project Designer",
    "Figma Designer",
    "Prototype designer",
    "User flows expert"
  ],

  authors: [{ name: "Fardin Farabi" }],
  creator: "Fardin Farabi",

  metadataBase: new URL("https://fardin-farabi-portfolio.vercel.app/"), // 🔴 change this

  openGraph: {
    title: "Fardin Farabi | Portfolio",
    description:
      "Explore projects and case studies by Fardin Farabi, a UI/UX & Product Designer focused on modern systems.",
    url: "https://fardin-farabi-portfolio.vercel.app/",
    siteName: "Fardin Farabi Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/N2P1gGLv/logo.png", // 🔴 OG IMAGE URL
        width: 1200,
        height: 630,
        alt: "Fardin Farabi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fardin Farabi | Portfolio",
    description:
      "UI/UX & Product Designer building modern, clean and interactive web systems.",
    images: ["https://i.ibb.co.com/N2P1gGLv/logo.png"], // same OG image
    creator: "@yourtwitter", // optional
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SidebarLayout>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#6C63FF",
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
