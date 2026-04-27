import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from "@/lib/StoreProvider";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Title TBD",
  description: "A text based urban fantasy game written in React"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <main className='min-h-screen bg-slate-900 text-slate-100'>
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  )
}