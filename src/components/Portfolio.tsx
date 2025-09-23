'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, ArrowRight, Code, Globe, Smartphone, ShoppingCart } from 'lucide-react'

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      id: 1,
      title: 'E-commerce Profissional',
      category: 'ecommerce',
      description: 'Loja virtual completa com design responsivo, performance otimizada e integração de pagamentos',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: ['Performance otimizada', 'Design responsivo', 'SEO integrado', 'Pagamentos seguros'],
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'Sistema Web Personalizado',
      category: 'webapp',
      description: 'Sistema web sob medida para gestão empresarial com interface intuitiva e funcionalidades avançadas',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'AWS'],
      results: ['Interface intuitiva', 'Funcionalidades completas', 'Segurança avançada', 'Escalabilidade'],
      icon: Code,
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 3,
      title: 'Landing Page Profissional',
      category: 'landing',
      description: 'Página de conversão otimizada com design focado em resultados e alta taxa de conversão',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Google Analytics'],
      results: ['Alta conversão', 'Design profissional', 'Performance otimizada', 'Analytics integrado'],
      icon: Globe,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 4,
      title: 'Site WordPress Customizado',
      category: 'wordpress',
      description: 'Site WordPress profissional com tema customizado, plugins específicos e otimização completa',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
      results: ['Tema personalizado', 'Performance otimizada', 'SEO avançado', 'Fácil manutenção'],
      icon: Code,
      color: 'from-emerald-600 to-green-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="container relative z-10">
        {/* Header - Minimalist */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Projetos <span className="text-green-400">Web</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exemplos de soluções que desenvolvemos para diferentes tipos de negócios
          </p>
        </motion.div>

        {/* Projects - Creative Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={project.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <motion.div 
                    className="relative w-96 h-96"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl opacity-20 blur-2xl`}></div>
                    
                    {/* Main Card */}
                    <div className="relative w-full h-full bg-black/50 backdrop-blur-sm rounded-3xl border border-green-500/20 overflow-hidden">
                      {/* Mockup Content */}
                      <div className="p-8 h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-green-400 text-sm font-mono">DEMO</div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                          <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <motion.div 
                      className="inline-flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
                        Projeto {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.3 + 0.6 + techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Características:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.results.map((result, resultIndex) => (
                        <motion.div
                          key={resultIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.3 + 0.8 + resultIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    className="inline-flex items-center space-x-3 bg-transparent border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 + 1 }}
                  >
                    <span>Ver detalhes</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
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
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero meu projeto aqui
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform inline" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio