import type { Metadata } from 'next'
import './globals.css'
import PixelAndConsentProvider from '../components/PixelAndConsentProvider';

export const metadata: Metadata = {
  title: 'Uixweb - Desenvolvimento Web e Automações | Sites, Sistemas Web, Automações N8N e E-commerce',
  description: 'Desenvolvemos sites profissionais, sistemas web personalizados, automações inteligentes com N8N e e-commerce completos. Soluções digitais modernas e otimizadas para impulsionar seu negócio.',
  keywords: 'desenvolvimento web, automações, sites profissionais, sistemas web, N8N, e-commerce, sites responsivos, React, Next.js, automação de processos, agência web',
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