import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const krylon = localfont({
  src: [
    {
      path: "../../public/font/Krylon-Regular.woff2",
      weight: "700",
    },
  ],
  variable: "--font-krylon",
});

const vanilla = localfont({
  src: [
    {
      path: "../../public/font/NT-Vanilla.otf",
      weight: "300",
    },
  ],
  variable: "--font-vanilla",
});

export const metadata = {
  title: "Expert Squad",
  description: "We are coming soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${krylon.variable} ${vanilla.variable} `}>
      <body className="bg-[#1B181F] w-full mx-auto  ">{children}</body>
    </html>
  );
}
