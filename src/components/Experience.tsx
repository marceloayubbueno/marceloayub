'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Award, Code, TrendingUp, Calendar } from 'lucide-react'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      period: '2022 - Presente',
      role: 'Desenvolvedor Front-end',
      company: 'Freelancer / Projetos Próprios',
      type: 'Remoto',
      description: 'Desenvolvimento de soluções web modernas focadas em performance e conversão. Especialização em React, Next.js e TypeScript com integração de ferramentas de marketing e analytics.',
      achievements: [
        '10+ projetos entregues com performance score acima de 90',
        'Implementação de integrações complexas com APIs de terceiros',
        'Otimização de Core Web Vitals e métricas de negócio',
        'Desenvolvimento de landing pages de alta conversão'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      period: '2020 - 2022',
      role: 'Marketing Digital & Growth',
      company: 'Projetos Diversos',
      type: 'Híbrido',
      description: 'Atuação em estratégias de growth hacking, análise de métricas e automações de marketing. Experiência que moldou minha visão de desenvolvimento focada em resultados.',
      achievements: [
        'Implementação de automações de marketing com N8N',
        'Análise e otimização de funis de conversão',
        'Gestão de campanhas em Google Ads e Facebook Ads',
        'Integração de ferramentas (CRM, Email Marketing, Analytics)'
      ],
      technologies: ['Google Analytics', 'Tag Manager', 'N8N', 'APIs', 'Automações'],
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500'
    },
    {
      period: '2019 - 2020',
      role: 'Transição para Tecnologia',
      company: 'Aprendizado Autodidata',
      type: 'Online',
      description: 'Período de transição do marketing para desenvolvimento. Estudos intensivos em programação web, JavaScript e frameworks modernos.',
      achievements: [
        'Conclusão de cursos de JavaScript, React e Next.js',
        'Desenvolvimento de primeiros projetos pessoais',
        'Construção de portfólio e primeiros freelas',
        'Especialização em front-end e performance web'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
      icon: Award,
      color: 'from-green-600 to-emerald-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
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
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Trajetória <span className="text-green-400">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            De Marketing para Desenvolvimento: uma jornada focada em unir código e resultados
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-1/2 top-24 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent transform -translate-x-1/2 hidden lg:block"></div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Timeline Node - Center */}
                  <div className="hidden lg:flex justify-center items-start col-span-2">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center relative z-10 shadow-lg`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1'} lg:-mt-16`}>
                    <div className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Calendar className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-semibold text-sm">{exp.period}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center space-x-3 text-gray-300">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-sm">{exp.type}</span>
                          </div>
                        </div>
                        
                        <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center lg:hidden`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wider">
                          Principais Conquistas
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wider">
                          Tecnologias
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Interessado em trabalhar junto? Vamos conversar!
          </p>
          <motion.button
            onClick={() => {
              const contact = document.getElementById('formulario-contato');
              if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar em Contato
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience



