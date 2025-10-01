'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Palette, Settings, Code, Zap, FileText, ArrowRight } from 'lucide-react'

const Methodology = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const steps = [
    {
      number: '01',
      title: 'Análise & Descoberta',
      description: 'Entendemos profundamente seu negócio, objetivos e desafios para criar a estratégia digital perfeita.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      details: ['Levantamento de requisitos', 'Análise da concorrência', 'Definição de personas', 'Estratégia digital']
    },
    {
      number: '02',
      title: 'Design & Prototipação',
      description: 'Criamos protótipos interativos para você visualizar exatamente como será seu projeto antes do desenvolvimento.',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      details: ['Wireframes e mockups', 'Prototipação interativa', 'Design system', 'Validação com usuários']
    },
    {
      number: '03',
      title: 'Arquitetura & Planejamento',
      description: 'Definimos a melhor arquitetura técnica e metodologia para garantir escalabilidade e performance.',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      details: ['Arquitetura de software', 'Stack tecnológico', 'Metodologia ágil', 'Cronograma detalhado']
    },
    {
      number: '04',
      title: 'Desenvolvimento',
      description: 'Nossa equipe especializada desenvolve seu projeto com código limpo, testado e otimizado.',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      details: ['Desenvolvimento ágil', 'Code review contínuo', 'Testes automatizados', 'Integração contínua']
    },
    {
      number: '05',
      title: 'Sprints & Entregas',
      description: 'Entregas incrementais para você acompanhar o progresso e validar cada funcionalidade.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      details: ['Sprints de 2 semanas', 'Demo semanal', 'Feedback contínuo', 'Ajustes em tempo real']
    },
    {
      number: '06',
      title: 'Documentação & Suporte',
      description: 'Documentação completa e suporte contínuo para garantir a evolução do seu projeto.',
      icon: FileText,
      color: 'from-indigo-500 to-blue-500',
      details: ['Documentação técnica', 'Manual do usuário', 'Treinamento da equipe', 'Suporte pós-entrega']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6 border border-green-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Settings className="w-4 h-4 mr-2" />
            Metodologia Uixweb
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Como fazemos tudo <span className="text-green-400">acontecer</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Garantimos o resultado através da nossa metodologia estruturada e testada, 
            que nos guia em todo o processo de desenvolvimento.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-green-500/20 hover:border-green-500/40"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + detailIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Especialista
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology
