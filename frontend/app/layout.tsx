import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HerbX - Botanical Herb Traceability",
  description: "Blockchain-based traceability system for Ayurvedic herbs from farm to formulation",
  keywords: "blockchain, ayurveda, herbs, traceability, web3, government",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <Providers>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: 'rgba(15, 15, 35, 0.9)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
