import Navbar from "../components/main/Navbar";
import StarsCanvas from "../components/main/StarBackground";
import type { Metadata } from "next";
import Footer from "../components/main/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import Projects from "../components/main/Projects";
import Skills from "../components/main/Skills";
import Hero from "../components/main/Hero";
import Contact from "../components/main/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrontEnd Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden"
        }
      >
        <StarsCanvas />
        <Navbar />

        <Hero />
        <Projects />
        <Skills />
        {/* {children} */}
        <Contact />

        <Footer />
      </body>
    </html>
  );
}
