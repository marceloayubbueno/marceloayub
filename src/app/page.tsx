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
import ChatBot from '@/components/ChatBot'
import { useState } from 'react'

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const mobileStyle = typeof window !== 'undefined' && window.innerWidth <= 600

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