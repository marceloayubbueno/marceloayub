"use client";
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import Results from '@/components/Results'
import ChatBotForm from '@/components/ChatBotForm'
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
      {/* Seção de Formulário de Contato */}
      <section id="formulario-contato" className="relative overflow-hidden bg-black py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Pronto para transformar sua{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  ideia em realidade
                </span>?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Preencha os dados e nossa equipe entrará em contato para apresentar uma proposta personalizada para seu projeto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Proposta personalizada em até 24h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Consultoria gratuita</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Sem compromisso</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="flex justify-center lg:justify-end">
              <ChatBotForm />
            </div>
          </div>
        </div>
      </section>
      <ModernFooter />
      {/* Botão WhatsApp Flutuante */}
      <div>
        <a
          href="https://wa.me/5528998846446"
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