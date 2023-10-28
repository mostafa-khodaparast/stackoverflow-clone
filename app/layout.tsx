import type { Metadata } from 'next'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'stackoverflow',
  description: 'this is a clone',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
