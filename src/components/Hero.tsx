'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import CountUp from 'react-countup'
import { Code, Terminal, Cpu, Database, ArrowRight, Zap } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const router = useRouter()
  const pathname = usePathname()

  const stats = [
    { number: '10+', label: 'Projetos entregues', icon: Code },
    { number: '95+', label: 'Performance Score', icon: Cpu },
    { number: '50+', label: 'Integrações criadas', icon: Database },
    { number: '3+', label: 'Anos de experiência', icon: Terminal }
  ]

  return (
    <section className="relative overflow-hidden bg-black min-h-screen flex items-center w-full" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating Code Elements */}
        <motion.div 
          className="absolute top-20 left-10 text-green-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          &lt;Marcelo&gt;
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-green-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          const innovation = true;
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 text-green-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          return &lt;Success /&gt;;
        </motion.div>
        
        {/* Animated Background Shapes */}
        <motion.div 
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="w-full px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-mono"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Zap className="w-3 h-3 mr-2" />
                Fullstack Developer | React, Next.js & Backend
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                DESENVOLVO{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-mono">
                  SOLUÇÕES WEB COMPLETAS
                </span>{' '}
                COM AS MELHORES TECNOLOGIAS DO MERCADO
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                className="text-base text-gray-300 leading-relaxed font-mono"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Criando interfaces modernas e otimizadas com React, Next.js, TypeScript, Tailwind, Cursor AI, Marketing Digital e Growth.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    onClick={() => {
                      const portfolio = document.getElementById('portfolio');
                      if (portfolio) portfolio.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-mono font-semibold py-2.5 px-6 rounded-lg text-sm shadow-xl hover:shadow-green-500/25 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver Projetos
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform inline" />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      window.open('https://linkedin.com/in/marcelo-ayub-bueno', '_blank');
                    }}
                    className="bg-transparent border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-mono font-semibold py-2.5 px-6 rounded-lg text-sm transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    LinkedIn
                  </motion.button>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-center mb-1">
                        <IconComponent className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-xl font-mono font-bold text-white">
                          <CountUp end={parseInt(stat.number.replace(/[^\d]/g, ''))} duration={2} delay={1.5 + index * 0.2} />
                          {stat.number.includes('%') ? '%' : stat.number.includes('M') ? 'M+' : '+'}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs font-mono">{stat.label}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Border Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-1 border border-green-500/30">
                  <Image
                    src="/images/marcelo.png"
                    alt="Marcelo Ayub Bueno"
                    width={300}
                    height={400}
                    className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                
                {/* Floating Code Elements */}
                <motion.div
                  className="absolute -top-8 left-4 text-green-400/60 font-mono text-xs"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  &lt;React&gt;
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -left-8 text-green-400/60 font-mono text-xs"
                  animate={{ 
                    x: [0, -5, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Next.js
                </motion.div>

                {/* Floating Stats */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500/95 to-emerald-500/95 backdrop-blur-sm border border-green-400/50 rounded-xl p-3 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-white font-mono">10+</div>
                    <div className="text-xs text-green-100 font-mono">Projetos</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-emerald-500/95 to-green-500/95 backdrop-blur-sm border border-green-400/50 rounded-xl p-3 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.7, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-white font-mono">95+</div>
                    <div className="text-xs text-green-100 font-mono">Performance</div>
                  </div>
                </motion.div>

                {/* Floating Tech Badges */}
                <motion.div
                  className="absolute top-8 -right-12 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg px-2 py-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-green-400 font-mono text-xs">TypeScript</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 -left-12 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg px-2 py-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-green-400 font-mono text-xs">Tailwind</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  )
}

export default Hero