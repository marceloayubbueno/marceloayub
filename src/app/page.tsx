"use client";
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import Results from '@/components/Results'
import ModernFooter from '@/components/ModernFooter'
// import ChatBot from '@/components/ChatBot' // DESABILITADO
// import { useState } from 'react' // DESABILITADO

export default function Home() {
  // const [showChat, setShowChat] = useState(false); // DESABILITADO
  // const mobileStyle = typeof window !== 'undefined' && window.innerWidth <= 600 // DESABILITADO

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Stats />
      <Results />
      <ModernFooter />
      {/* Botão WhatsApp Flutuante */}
      <div>
        <a
          href="https://wa.me/5528999221118"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1100,
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            width: '64px',
            height: '64px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            transition: 'transform 0.2s ease',
          }}
          aria-label="Falar no WhatsApp"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <img 
            src="/whatsapp-icon.png" 
            alt="WhatsApp" 
            style={{
              width: '48px',
              height: '48px',
            }}
          />
        </a>
      </div>

      {/* ChatBot Flutuante - DESABILITADO */}
      {/* 
      <div>
        <button
          onClick={() => setShowChat((v) => !v)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1100, // Aumentado para garantir que fique acima do chat
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '64px',
            height: '64px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label={showChat ? 'Fechar chat' : 'Abrir chat'}
        >
          {showChat ? '×' : '💬'}
        </button>
        {showChat && (
          <div
            style={{
              position: 'fixed',
              bottom: '8rem',
              right: '2rem',
              zIndex: 1000,
              width: 'auto',
              ...mobileStyle,
            }}
          >
            <ChatBot />
          </div>
        )}
      </div>
      */}
    </main>
  )
} 