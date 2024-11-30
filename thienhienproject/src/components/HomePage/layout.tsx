import React from 'react'
import { Header } from "./header"
import { Footer } from "./footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div id = "homepage" className="min-h-screen flex flex-col">
      <Header />
      <SpeedInsights/>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

