import { Figtree } from 'next/font/google'
import './globals.css'

const figTree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Next IP Tracker',
  description: 'Example Next 13.4 Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={"en"}>
      <body className={figTree.className}>
        <div className={"w-full h-full flex flex-col items-center justify-between p-20"}>
          {children}
        </div>
      </body>
    </html>
  )
}
