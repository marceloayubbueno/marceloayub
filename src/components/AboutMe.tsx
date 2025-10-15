'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, TrendingUp, Zap, Target } from 'lucide-react'

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const highlights = [
    {
      icon: Code,
      title: 'Desenvolvimento Fullstack',
      description: 'Sistemas web completos - front-end com React/Next.js e back-end com Node.js, APIs e bancos de dados',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Performance & UX',
      description: 'Foco em experiência do usuário excepcional com Lighthouse 95+, Core Web Vitals otimizados e interfaces intuitivas',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital como Diferencial',
      description: 'Entendo de métricas, conversão e comportamento do usuário - crio produtos que convertem, não só funcionam',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Target,
      title: 'Integrações & Automações',
      description: 'APIs REST, WhatsApp, CRMs, Google Analytics e automações que conectam tecnologia ao negócio',
      color: 'from-emerald-600 to-green-600'
    }
  ]

  return (
    <section id="about" className="py-16 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-green-400">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Desenvolvo <span className="text-white font-semibold">sistemas web completos</span> do front-end ao back-end, 
                utilizando as <span className="text-green-400 font-semibold">melhores tecnologias do mercado</span> como 
                React, Next.js, TypeScript e Node.js.
              </p>
              
              <p>
                Meu foco está em criar <span className="text-white font-semibold">experiências de usuário excepcionais</span> com 
                performance otimizada (Lighthouse 95+), código limpo e interfaces intuitivas que resolvem problemas reais.
              </p>
              
              <p>
                Com <span className="text-green-400 font-semibold">background em Marketing Digital e Growth</span>, 
                entendo não apenas de código, mas de <span className="text-white font-semibold">métricas, conversão e comportamento do usuário</span>. 
                Isso me permite criar produtos que não só funcionam bem tecnicamente, mas que 
                <span className="text-green-400 font-semibold"> geram resultados mensuráveis</span> para o negócio.
              </p>
              
              <p className="text-gray-400 italic border-l-2 border-green-500 pl-4">
                "Não desenvolvo apenas código - desenvolvo soluções que unem tecnologia, performance e estratégia."
              </p>
            </div>

          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default AboutMe

