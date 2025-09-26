'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Zap, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ModernPricing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const router = useRouter()

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2" />
            15 dias de teste sem riscos
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Comece <span className="text-green-400">hoje mesmo</span><br />
            seu projeto digital
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça nossos pacotes de desenvolvimento web e escolha o que melhor se adapta às suas necessidades. 
            Soluções completas para impulsionar seu negócio digital.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-2xl opacity-20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {typeof window !== 'undefined' && window.location.pathname === '/testegratis' ? (
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Consultoria Grátis
                  </div>
                </motion.div>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Consultoria Estratégica Grátis</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-green-400">R$ 0,00</span>
                      <span className="text-gray-400 ml-2">/consulta</span>
                    </div>
                    <div className="text-green-400 font-semibold">Análise completa do seu projeto</div>
                  </div>
                </div>
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Análise completa do projeto',
                      'Estratégia de desenvolvimento',
                      'Cronograma detalhado',
                      'Orçamento personalizado',
                      'Tecnologias recomendadas', 
                      'Suporte técnico',
                      'Consultoria especializada',
                      'Relatório executivo'
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                      >
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎉</div>
                    <h4 className="text-lg font-bold text-green-400 mb-2">Consultoria Estratégica</h4>
                    <p className="text-gray-300 text-sm">
                      Análise completa do seu projeto sem compromisso. Entenda exatamente o que precisa para ter sucesso.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <motion.button
                    onClick={() => {
                      const form = document.getElementById('formulario-contato');
                      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group mb-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Consultoria Grátis
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
                  </motion.button>
                  <p className="text-gray-400 text-sm">
                    ⭐ Sem cartão de crédito necessário • Sem compromisso
                  </p>
                </motion.div>
              </div>
            ) : (
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Nossos Serviços</h3>
                  <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                    Soluções completas em desenvolvimento web para impulsionar seu negócio digital. Confira os principais serviços que oferecemos:
                  </p>
                </div>

                {/* Features */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Sites responsivos',
                      'E-commerce completo',
                      'Aplicações mobile',
                      'Sistemas personalizados',
                      'Manutenção e suporte', 
                      'Consultoria técnica',
                      'SEO e performance',
                      'Integrações avançadas'
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                      >
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <motion.button
                    onClick={() => {
                      const form = document.getElementById('formulario-contato');
                      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group mb-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
                  </motion.button>
                  
                  <p className="text-gray-400 text-sm">
                    ⭐ Sem cartão de crédito necessário • Cancele a qualquer momento
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-300">Projetos entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Performance média dos sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
              <div className="text-gray-300">Avaliação dos clientes</div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Quick */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-2xl font-bold mb-8">Dúvidas frequentes:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Quanto tempo leva para desenvolver um site?",
                a: "Depende da complexidade. Sites institucionais simples levam 2-4 semanas, e-commerces 4-8 semanas, e sistemas personalizados podem levar 2-6 meses."
              },
              {
                q: "Vocês oferecem manutenção após a entrega?",
                a: "Sim! Oferecemos pacotes de manutenção mensal que incluem atualizações, backups, monitoramento e suporte técnico contínuo."
              },
              {
                q: "Posso acompanhar o desenvolvimento do projeto?",
                a: "Claro! Utilizamos ferramentas de gestão de projeto onde você pode acompanhar o progresso em tempo real e dar feedback durante todo o desenvolvimento."
              },
              {
                q: "Quais tecnologias vocês utilizam?",
                a: "Trabalhamos com as melhores tecnologias: React, Next.js, Node.js, TypeScript, e muitas outras. Sempre escolhemos a melhor stack para cada projeto."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernPricing 