import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nintendo Parts & Repair Colombia - Repuestos y Servicio Técnico",
  description: "Dale una segunda vida a tu Nintendo. Repuestos compatibles, accesorios y servicio técnico especializado para Wii, Wii U, Switch, Switch 2 y Nintendo 3DS en Colombia.",
  keywords: "repuestos nintendo colombia, servicio tecnico nintendo, reparar switch, repuestos wii, repuestos 3ds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
