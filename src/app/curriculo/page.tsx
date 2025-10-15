'use client'

import Header from '@/components/Header'
import Experience from '@/components/Experience'
import ModernFooter from '@/components/ModernFooter'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const SobrePage = () => {
  return (
    <main className="overflow-hidden bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-green-900/10 to-black pt-32 pb-16">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                href="/"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-mono"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Home
              </Link>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="text-green-400">Currículo</span> & Trajetória
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Minha jornada do Marketing Digital para o Desenvolvimento Fullstack
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Component */}
      <Experience />

      {/* Additional Info */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Certificações & Formação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">Cursos & Certificados</h4>
                  <div className="space-y-1">
                    <p className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      React.js Completo
                    </p>
                    <p className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      Next.js & TypeScript
                    </p>
                    <p className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      Node.js & APIs REST
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">Especialidades</h4>
                  <div className="space-y-1">
                    <p className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      Performance Web (Lighthouse 95+)
                    </p>
                    <p className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      Marketing Digital & Growth
                    </p>
                    <p className="text-gray-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      Integrações & Automações
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/#formulario-contato"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all"
              >
                Entrar em Contato
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ModernFooter />
    </main>
  )
}

export default SobrePage
