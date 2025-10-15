'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiMongodb } from 'react-icons/si'
import { TbApi, TbBrandWhatsapp, TbBolt } from 'react-icons/tb'
import { FaChartLine } from 'react-icons/fa'

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'APIs REST', icon: TbApi, color: '#10B981' },
  ]

  const specialties = [
    { name: 'Performance 95+', icon: TbBolt },
    { name: 'Growth & Marketing', icon: FaChartLine },
    { name: 'WhatsApp Integration', icon: TbBrandWhatsapp },
  ]

  return (
    <section className="py-16 bg-black relative overflow-hidden" ref={ref}>
      {/* Background subtle */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/10 via-transparent to-emerald-900/10"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Tech <span className="text-green-400">Stack</span>
          </h2>
          <p className="text-gray-400 text-sm">Tecnologias que domino</p>
        </motion.div>

        {/* Technologies Grid - Ícones Oficiais */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto mb-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            
            return (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-green-500/40 transition-all duration-300 group text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Official Icon */}
                <div className="flex justify-center mb-2">
                  <IconComponent 
                    className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: tech.color }}
                  />
                </div>
                
                {/* Tech Name */}
                <span className="text-gray-400 text-xs font-mono group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon
            
            return (
              <motion.div
                key={index}
                className="bg-green-500/10 backdrop-blur-sm rounded-lg p-4 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <IconComponent className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-semibold text-sm">{specialty.name}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services