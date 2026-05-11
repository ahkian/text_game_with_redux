import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from "@/lib/StoreProvider";
import SideBar from "@/components/sideBar";

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
      <body className='bg-slate-950 text-slate-50 flex h-screen overflow-hidden'>
        <StoreProvider>
          <SideBar />
          <main className='flex-1 overflow-y-auto custom-scrollbar'>
            <div className="mox-w-4xl mx-auto py-12 px-8">
              {children}
            </div>
          </main>
        </StoreProvider>
      </body>
    </html>
  )
}