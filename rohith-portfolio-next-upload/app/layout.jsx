
import "./globals.css";
import Providers from "../components/Providers";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "LC Rohith – Data Analyst",
  description: "Portfolio of LC Rohith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={jakarta.variable}>
      <body className="font-sans" style={{ fontFamily: "var(--font-jakarta)" }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
