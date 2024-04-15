import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Password Checker",
  description: "Check your password strength",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-cover bg-no-repeat  `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
