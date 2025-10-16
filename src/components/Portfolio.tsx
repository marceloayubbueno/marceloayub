'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      id: 1,
      title: "Plataforma de Indicação",
      description: "Sistema completo de gestão de indicações com dashboard administrativo e controle de comissões. Desenvolvido para maximizar conversões e otimizar vendas.",
      image: "/images/cases/plataforma-indicacao.jpg",
      link: "https://example.com",
      github: "https://github.com/example1",
      category: "Sistema Web"
    },
    {
      id: 2,
      title: "Landing Page de Indicação",
      description: "Landing page otimizada para conversão com formulários inteligentes e automação de leads. Design responsivo focado em performance e experiência do usuário.",
      image: "/images/cases/lp-indicacao.jpg",
      link: "https://example.com",
      github: "https://github.com/example2",
      category: "Landing Page"
    },
    {
      id: 3,
      title: "E-commerce Premium",
      description: "Loja virtual completa com sistema de pagamento integrado e gestão de estoque em tempo real. Focado em conversão e experiência do usuário otimizada.",
      image: "/images/cases/ecommerce.png",
      link: "https://example.com",
      github: "https://github.com/example3",
      category: "E-commerce"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-black min-h-screen" ref={ref} style={{ backgroundColor: '#000000' }}>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-8 leading-tight">
            <span className="text-green-400">PROJETOS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-black rounded-3xl p-6 border border-green-500/20 hover:border-green-500 transition-all duration-300 h-full flex flex-col">
                
                {/* Image */}
                <div className="relative group/image mb-6">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover/image:scale-105"
                    />
                    
                    {/* Overlay effect */}
                    <div className="absolute inset-4 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Glass shine effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/image:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  
                  {/* Category Badge */}
                  <div className="inline-flex items-center bg-green-500/10 text-green-300 px-3 py-1 rounded-full text-xs font-mono mb-4">
                    {project.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-mono font-bold text-white leading-tight mb-4">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>
                  
                  {/* CTA Buttons - Always at bottom */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-mono font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm hover:shadow-lg hover:shadow-green-500/25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </motion.a>
                    
                    <motion.a
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-mono font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio