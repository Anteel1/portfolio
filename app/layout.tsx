import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Header, Layout} from './core'



export const metadata: Metadata = {
  description: 'Welcome to my Portfolio',
  creator:'Eelant'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <Layout >
        {children}
      </Layout>
  )
}
export const dynamic = 'force-dynamic'