
import './globals.css'

export const metadata = {
  title: 'AI News Digest',
  description: 'AI-powered news summaries and analysis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
