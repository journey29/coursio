import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"
import { Roboto } from "next/font/google"
import { Toaster } from "sonner"

import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/Providers"

import "./globals.css"
import { auth } from "@/auth"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "100", "300"]
})

export const metadata: Metadata = {
  title: "Coursio",
  description: "Courses around the world!"
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={roboto.className}>
          <ThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
          >
            <Header />
            <main className="main">
              <Container>{children}</Container>
            </main>
            <Footer />
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  )
}
