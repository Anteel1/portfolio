import React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export function Layout(props:any) {

  const title ='Portfolio'
  return (
    <> 
    <html>
    <title>{title}</title>
    <link rel="icon" href="/logo_circle2_light.svg" />
    <body className={inter.className} >
        {props.children}
    </body>
      </html>
    </>
  )
}
