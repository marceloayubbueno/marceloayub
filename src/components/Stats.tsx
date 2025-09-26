'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Code, Users, Zap, Target } from 'lucide-react'

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    {
      number: 150,
      suffix: '+',
      label: 'Projetos Concluídos',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: 50,
      suffix: '+',
      label: 'Clientes faturando',
      icon: Users,
      color: 'from-emerald-500 to-green-500'
    },
    {
      number: 3,
      suffix: 'M+',
      label: 'Linhas de código',
      icon: Zap,
      color: 'from-green-600 to-emerald-600'
    },
    {
      number: 98,
      suffix: '%',
      label: 'Performance média',
      icon: Target,
      color: 'from-emerald-600 to-green-600'
    }
  ]

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos deixar nossos <span className="text-green-400">números falarem</span> por nós
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0.5 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <CountUp 
                    end={stat.number} 
                    duration={2} 
                    delay={0.5 + index * 0.2}
                  />
                  <span className="text-green-400">{stat.suffix}</span>
                </motion.div>

                {/* Label */}
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => {
              const form = document.getElementById('formulario-contato');
              if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            vamos conversar
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

