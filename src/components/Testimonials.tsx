'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const testimonials = [
    {
      quote: "Desenvolvimento profissional e entrega no prazo. Equipe dedicada e soluções inovadoras para nossos desafios.",
      author: "Cliente Satisfeito",
      role: "Empresa de Tecnologia",
      company: "Empresa de Tecnologia",
      rating: 5
    },
    {
      quote: "Qualidade técnica excelente e suporte diferenciado. Recomendo para quem busca excelência em desenvolvimento.",
      author: "Cliente Satisfeito", 
      role: "Empresa de Serviços",
      company: "Empresa de Serviços",
      rating: 5
    },
    {
      quote: "Soluções personalizadas que atendem perfeitamente às nossas necessidades. Parceria de sucesso!",
      author: "Cliente Satisfeito",
      role: "Empresa de Varejo", 
      company: "Empresa de Varejo",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Acompanhe o que os nossos <span className="text-green-400">clientes falam</span> sobre a Wixweb
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-green-500/20 pt-4">
                <div className="text-white font-bold text-lg">{testimonial.author}</div>
                <div className="text-green-400 font-medium">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos os depoimentos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials