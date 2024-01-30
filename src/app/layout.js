import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import { ThemeContextProvider } from "@/Component/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: '"Delly"s Blog',
  description:
    "Welcome to Delly's Blog, where we explore the intersection of remote work, wellness, and mental health. Find practical tips for a balanced work-life, insights into cultivating a healthy mindset, and engaging content on the evolving landscape of remote work. Join us on the journey to better well-being and success in the digital era!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="contianer">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
