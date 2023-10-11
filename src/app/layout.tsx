import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movie me Application',
  description: 'We choice your own movie when robots can do it better?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
