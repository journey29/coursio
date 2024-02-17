import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Toaster } from 'sonner'
import "./globals.css";
import { ThemeProvider } from "@/components/Providers";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700', "100", "300"] });

export const metadata: Metadata = {
  title: "Coursio",
  description: "Courses around the world!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={roboto.className}>
          <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
            <Header />
            <main className="main">
              <Container>
                {children}
              </Container>
            </main>
            <Footer />
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
