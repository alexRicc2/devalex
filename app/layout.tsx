import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/layout/navbar'
import Footer from '@/components/layout/Footer'
// import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  robots: {
    index: false,
    follow: true,
    nocache: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
