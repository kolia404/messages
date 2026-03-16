import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "كلية التربية للطفولة المبكرة | جامعة القاهرة",
  description: "المنصة الرسمية والإخبارية لكلية التربية للطفولة المبكرة - جامعة القاهرة.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}