import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { DarkModeProvider } from '../context/darkmode'

export const metadata = {
  title: 'stackClone',
  description: 'this is a clone',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body >
        <ClerkProvider>
          <DarkModeProvider>
            {children}
          </DarkModeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
