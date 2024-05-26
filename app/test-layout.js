import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner'
import { Providers } from "../redux/Providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mama Recipe",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster richColors position="top-center" />
        </body>
      </html>
    </Providers>
  );
}