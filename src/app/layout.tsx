import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"]});


export const metadata: Metadata = {
  title: "COHI MSSNLagos",
  description: "Council of Higher Institutions, an organ of MSSN Lagos State Area Unit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
