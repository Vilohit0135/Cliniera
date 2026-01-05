import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/nav";
import Footer from "../components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Cliniera",
  description: "Where Research Meets Results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-black`}>
        
        {/* NAVBAR (GLOBAL) */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER (GLOBAL) */}
        <Footer />

      </body>
    </html>
  );
}
