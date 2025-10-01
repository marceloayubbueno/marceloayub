import React from 'react';
import Header from '@/components/Header';
import ModernFooter from '@/components/ModernFooter';

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-x-hidden">
      <Header />
      <section className="flex-1 flex justify-center items-center py-16 px-4">
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Política de Privacidade</h1>
          <p className="mb-6 text-lg text-gray-200">
            A <strong className="text-green-400">Uixweb</strong> valoriza sua privacidade e está comprometida em proteger suas informações pessoais. Esta política explica como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nossos serviços de desenvolvimento web.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">1. Informações sobre a Empresa</h2>
              <p className="mb-4 text-gray-200">
                <strong className="text-green-400">Uixweb</strong> - Desenvolvimento Web e Automações<br/>
                Especializada em desenvolvimento de sites, sistemas web, landing pages e projetos WordPress customizados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">2. Dados Coletados</h2>
              <p className="mb-4 text-gray-200">
                Coletamos diferentes tipos de informações dependendo de como você interage com nossos serviços:
              </p>
              <h3 className="text-lg font-medium mb-2 text-green-400">2.1 Dados de Navegação</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-200">
                <li>Endereço IP e localização aproximada</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Cliques, interações e comportamento de navegação</li>
                <li>Informações do dispositivo e navegador</li>
              </ul>
              <h3 className="text-lg font-medium mb-2 text-green-400">2.2 Dados de Contato</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-200">
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>Empresa/organização</li>
                <li>Informações sobre seu projeto (quando fornecidas)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">3. Como Coletamos os Dados</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-200">
                <li><strong>Formulários de contato:</strong> Quando você solicita orçamento ou informações</li>
                <li><strong>Chatbot:</strong> Durante conversas para coleta de leads qualificados</li>
                <li><strong>Cookies e tecnologias similares:</strong> Para análise de comportamento</li>
                <li><strong>Google Analytics:</strong> Para métricas de performance do site</li>
                <li><strong>Meta Pixel:</strong> Para remarketing e análise de conversões</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">4. Finalidade do Tratamento</h2>
              <p className="mb-4 text-gray-200">Utilizamos seus dados para:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-200">
                <li>Responder suas solicitações de orçamento e informações</li>
                <li>Desenvolver e personalizar nossos serviços</li>
                <li>Melhorar a experiência do usuário em nosso site</li>
                <li>Realizar análises estatísticas e de performance</li>
                <li>Enviar comunicações sobre nossos serviços (com seu consentimento)</li>
                <li>Executar campanhas de marketing digital</li>
                <li>Cumprir obrigações legais e contratuais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">5. Cookies e Tecnologias de Rastreamento</h2>
              <p className="mb-4 text-gray-200">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-200">
                <li><strong>Cookies essenciais:</strong> Necessários para funcionamento básico do site</li>
                <li><strong>Google Analytics:</strong> Para análise de tráfego e comportamento</li>
                <li><strong>Meta Pixel:</strong> Para remarketing e análise de conversões</li>
                <li><strong>Cookies de preferências:</strong> Para personalizar sua experiência</li>
              </ul>
              <p className="mb-4 text-gray-200">
                Você pode gerenciar suas preferências de cookies através do banner de consentimento ou configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">6. Compartilhamento de Dados</h2>
              <p className="mb-4 text-gray-200">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-200">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou reestruturação da empresa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">7. Segurança dos Dados</h2>
              <p className="mb-4 text-gray-200">
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">8. Seus Direitos</h2>
              <p className="mb-4 text-gray-200">Conforme a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-200">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Revogar seu consentimento a qualquer momento</li>
                <li>Obter informações sobre compartilhamento de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">9. Retenção de Dados</h2>
              <p className="mb-4 text-gray-200">
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Dados de navegação são geralmente mantidos por até 26 meses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">10. Alterações nesta Política</h2>
              <p className="mb-4 text-gray-200">
                Esta política pode ser atualizada periodicamente. Alterações significativas serão comunicadas através do nosso site ou por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">11. Contato</h2>
              <p className="mb-4 text-gray-200">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <p className="text-gray-200 mb-2">
                  <strong className="text-green-400">E-mail:</strong> contato@uixweb.com.br
                </p>
                <p className="text-gray-200 mb-2">
                  <strong className="text-green-400">WhatsApp:</strong> (28) 99884-6446
                </p>
                <p className="text-gray-200">
                  <strong className="text-green-400">Site:</strong> www.uixweb.com.br
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </div>
        </div>
      </section>
      <ModernFooter />
    </main>
  );
} 