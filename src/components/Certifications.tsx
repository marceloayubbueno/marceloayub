'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Award, CheckCircle, Star } from 'lucide-react'

const Certifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const certifications = [
    {
      title: 'ISO 27001',
      subtitle: 'Segurança da Informação',
      description: 'Certificado de Segurança da Informação e Lei Geral de Proteção de Dados (LGPD)',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      verified: true
    },
    {
      title: 'AWS Partner',
      subtitle: 'Cloud Computing',
      description: 'Parceiro certificado Amazon Web Services para soluções em nuvem escaláveis',
      icon: Award,
      color: 'from-orange-500 to-yellow-500',
      verified: true
    },
    {
      title: 'Google Cloud',
      subtitle: 'Plataforma Cloud',
      description: 'Certificação Google Cloud Platform para desenvolvimento e deploy de aplicações',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      verified: true
    },
    {
      title: 'Microsoft Partner',
      subtitle: 'Tecnologias Microsoft',
      description: 'Parceiro Microsoft para desenvolvimento de soluções empresariais',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      verified: true
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificados que comprovam <span className="text-blue-600">competência</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe possui certificações das principais tecnologias e plataformas do mercado, 
            garantindo qualidade e segurança em todos os projetos.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>

                {/* Verified Badge */}
                {cert.verified && (
                  <motion.div 
                    className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-4"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verificado
                  </motion.div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-blue-600 font-semibold mb-4">
                  {cert.subtitle}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Vamos deixar nossos números falarem por nós
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-700 font-semibold">Projetos Concluídos</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700 font-semibold">Performance Média</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">R$ 2M+</div>
              <div className="text-gray-700 font-semibold">Faturamento Gerado</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

