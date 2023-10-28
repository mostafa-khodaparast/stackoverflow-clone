import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'stack over flow',
  description: 'this is a clone'
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
