import type { Metadata } from 'next'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { DarkModeProvider } from '../context/darkmode'

export const metadata: Metadata = {
  title: 'stackoverflow',
  description: 'this is a clone',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <ClerkProvider appearance={{
          elements: {
            formButtonPrimary: 'primary-gradient',
            footerActionLink: 'hover:text-primary-500 hover:no-underline'
          }
        }}
        >
          <DarkModeProvider>
            {children}
          </DarkModeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
