"use client";
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Results from '@/components/Results'
import ChatBotForm from '@/components/ChatBotForm'
import ModernFooter from '@/components/ModernFooter'
import ChatBot from '@/components/ChatBot'
import { useState } from 'react'

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const mobileStyle = typeof window !== 'undefined' && window.innerWidth <= 600

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Results />
      {/* Seção de Contato */}
      <section id="formulario-contato" className="relative overflow-hidden bg-black py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Vamos <span className="text-green-400">Conversar</span>?
              </h2>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                Procurando um desenvolvedor fullstack para seu projeto? Estou disponível para freelas, consultorias e oportunidades.
              </p>
            </div>
            
            {/* Form */}
            <div className="flex justify-center">
              <ChatBotForm />
            </div>
          </div>
        </div>
      </section>
      <ModernFooter />

      {/* ChatBot Flutuante */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
        <button
          onClick={() => setShowChat((v) => !v)}
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            cursor: 'pointer',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          {showChat ? '×' : '💬'}
        </button>
      </div>
      
      {showChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '6rem',
            right: '2rem',
            zIndex: 9998,
            width: '380px',
            height: '500px',
          }}
        >
          <ChatBot />
        </div>
      )}
    </main>
  )
} 