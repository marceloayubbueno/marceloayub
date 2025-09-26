'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const Results = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site profissional?",
      answer: "Depende da complexidade do projeto. Sites institucionais simples levam 2-4 semanas, e-commerces 4-8 semanas, sistemas web personalizados podem levar 2-6 meses, e landing pages profissionais são entregues em 1-2 semanas. Sempre definimos cronogramas realistas no início do projeto."
    },
    {
      question: "Vocês desenvolvem sites WordPress?",
      answer: "Sim! Desenvolvemos sites WordPress profissionais com temas customizados, plugins específicos, otimização de performance e segurança avançada. Também oferecemos treinamento para que você possa gerenciar seu próprio conteúdo."
    },
    {
      question: "Como funciona o desenvolvimento de landing pages?",
      answer: "Desenvolvemos landing pages focadas em conversão com design otimizado, A/B testing, integração com CRM, analytics avançado e todas as ferramentas necessárias para maximizar seus resultados e vendas."
    },
    {
      question: "Quais tecnologias vocês utilizam para desenvolvimento web?",
      answer: "Trabalhamos com as melhores tecnologias web: React, Next.js, Node.js, TypeScript, WordPress, PHP, MySQL, e muitas outras. Sempre escolhemos a stack mais adequada para cada projeto específico, priorizando performance e segurança."
    },
    {
      question: "Vocês oferecem manutenção para sites e sistemas web?",
      answer: "Sim! Oferecemos pacotes de manutenção mensal que incluem atualizações de segurança, backups automáticos, monitoramento 24/7, otimização de performance e suporte técnico contínuo para garantir que seus projetos web sempre funcionem perfeitamente."
    },
    {
      question: "Posso acompanhar o desenvolvimento do meu projeto web?",
      answer: "Claro! Utilizamos ferramentas de gestão de projeto onde você pode acompanhar o progresso em tempo real, dar feedback durante todo o desenvolvimento, testar funcionalidades e ter acesso a relatórios detalhados de cada etapa."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-900 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
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
          className="text-center mb-16"
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
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dúvidas sobre <span className="text-green-400">Desenvolvimento Web</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de desenvolvimento web, sites, sistemas e WordPress
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
              <motion.div
                key={index}
              className="bg-black/50 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: 'rgba(34, 197, 94, 0.05)' }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-green-400 transition-colors pr-4">
                  {faq.question}
                </h3>
        <motion.div 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-green-400" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-green-500/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
              </motion.div>
            ))}
          </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e tire todas as suas dúvidas sobre nossos serviços
          </p>
          <motion.button
            onClick={() => {
              const form = document.getElementById('formulario-contato');
              if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Especialista
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline rotate-[-90deg]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Results 
