import type { Metadata } from 'next'
import './globals.css'
import PixelAndConsentProvider from '../components/PixelAndConsentProvider';

export const metadata: Metadata = {
  title: 'Marcelo Ayub Bueno | Desenvolvedor Fullstack React, Next.js & TypeScript',
  description: 'Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e Node.js. Com background em Marketing Digital, crio sistemas web completos focados em performance, UX e resultados mensuráveis.',
  keywords: 'desenvolvedor fullstack, react developer, next.js, typescript, node.js, frontend developer, backend developer, performance web, lighthouse 95+, marketing digital, growth, APIs REST, integrações, portfolio desenvolvedor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0P6BBWC2L1"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0P6BBWC2L1');
          `,
        }} />
        {/* Meta Pixel será controlado por componente client-side */}
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <PixelAndConsentProvider />
      </body>
    </html>
  )
} 