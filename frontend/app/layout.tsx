import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/SiteHeader";
import TanstackProvider from "@/provider/TanstackProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Techtogether",
  description: "blog for techies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )} 
      >
        <TanstackProvider>
      <div className="relative flex min-h-dvh flex-col bg-background">
        <SiteHeader />
           <main className="flex-1">{children}</main>
        </div>
        </TanstackProvider>
     </body>
    </html>
  );
}
