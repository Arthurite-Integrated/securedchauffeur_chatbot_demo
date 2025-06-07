import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import LexChatbot from "@/components/lex-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Secured Chauffeur - Premium Transportation Services",
  description: "Premium chauffeur services providing safe, reliable, and luxurious transportation solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <LexChatbot />
      </body>
    </html>
  )
}
