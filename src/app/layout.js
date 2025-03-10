import {  Unbounded } from "next/font/google";
import "./globals.css";


const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight:["300", "400", "600"]
});

export const metadata = {
  title: "Nilay Portfolio",
  description: "Full Stack Python Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable}`}
      >
        { children}
      </body>
    </html>
  );
}
