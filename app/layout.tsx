import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'stack over flow',
  description: 'this is a clone',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
