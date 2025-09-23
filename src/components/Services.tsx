'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Globe, Smartphone, ShoppingCart, Database, Zap, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const router = useRouter()

  const services = [
    {
      icon: Globe,
      title: 'Sites Institucionais',
      description: 'Sites profissionais e responsivos que representam sua marca com excelência',
      features: ['Design responsivo', 'SEO otimizado', 'Performance alta', 'CMS integrado'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Lojas Virtuais',
      description: 'Lojas virtuais completas para vender online com segurança e performance',
      features: ['Pagamentos integrados', 'Gestão de estoque', 'Relatórios detalhados', 'Mobile-first'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Code,
      title: 'Sistemas Web Personalizados',
      description: 'Soluções web sob medida para suas necessidades específicas de negócio',
      features: ['Desenvolvimento custom', 'Integrações APIs', 'Relatórios avançados', 'Escalabilidade'],
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Globe,
      title: 'Landing Pages Profissionais',
      description: 'Páginas de conversão otimizadas para maximizar resultados e vendas',
      features: ['Design focado em conversão', 'A/B Testing', 'Integração com CRM', 'Analytics avançado'],
      color: 'from-green-600 to-emerald-600',
    },
    {
      icon: Code,
      title: 'Projetos WordPress',
      description: 'Sites e sistemas WordPress profissionais com temas e plugins customizados',
      features: ['Temas personalizados', 'Plugins customizados', 'Performance otimizada', 'Segurança avançada'],
      color: 'from-emerald-600 to-green-600',
    },
    {
      icon: Zap,
      title: 'Manutenção & Suporte Web',
      description: 'Suporte técnico contínuo para manter seus projetos web sempre atualizados',
      features: ['Atualizações regulares', 'Backup automático', 'Monitoramento 24/7', 'Suporte prioritário'],
      color: 'from-green-700 to-emerald-700',
    }
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20"></div>
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
        {/* Header - Minimalist */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Desenvolvimento <span className="text-green-400">Web</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
        </motion.div>

        {/* Services - Creative Layout */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <motion.div 
                    className="inline-flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="inline-flex items-center space-x-2 bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
                
                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div 
                    className={`relative w-80 h-80 ${isEven ? 'lg:w-96 lg:h-96' : 'lg:w-80 lg:h-80'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-20 blur-2xl`}></div>
                    <div className="relative w-full h-full bg-black/50 backdrop-blur-sm rounded-3xl border border-green-500/20 flex items-center justify-center">
                      <IconComponent className={`${isEven ? 'w-24 h-24' : 'w-20 h-20'} text-green-400 opacity-60`} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => router.push('/chat')}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos conversar sobre seu projeto
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform inline" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
