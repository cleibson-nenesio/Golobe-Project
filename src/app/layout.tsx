// Next
import type { Metadata } from 'next'

// Styles
import './globals.css'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Golobe Travel Agency',
  description: 'Unlock the World with Golobe Travel – Your International Journey Begins Here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
