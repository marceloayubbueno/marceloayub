import type { Metadata } from 'next'
import './globals.css'
import PixelAndConsentProvider from '../components/PixelAndConsentProvider';

export const metadata: Metadata = {
  title: 'Wixweb - Desenvolvimento Web Profissional | Sites, Sistemas Web, Landing Pages e WordPress',
  description: 'Desenvolvemos sites profissionais, sistemas web personalizados, landing pages de alta conversão e projetos WordPress customizados. Soluções web modernas e otimizadas para impulsionar seu negócio digital.',
  keywords: 'desenvolvimento web, sites profissionais, sistemas web, landing pages, WordPress, e-commerce, sites responsivos, React, Next.js, PHP, MySQL, agência web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3LD18W31KC"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3LD18W31KC');
          `,
        }} />
        {/* Meta Pixel será controlado por componente client-side */}
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <PixelAndConsentProvider />
      </body>
    </html>
  )
} 