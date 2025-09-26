"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import ModernFooter from '@/components/ModernFooter';

export default function ObrigadoLeadPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.sessionStorage.getItem('leadAcesso') !== 'ok') {
        router.replace('/');
        return;
      }
      // Disparar evento personalizado do Pixel
      if (typeof window.fbq === 'function') {
        (window.fbq as (...args: any[]) => void)('trackCustom', 'LeadContato');
      }
      // Remover flag após 3 segundos
      setTimeout(() => {
        window.sessionStorage.removeItem('leadAcesso');
      }, 3000);
    }
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-x-hidden">
      <Header />
      <section className="flex-1 flex justify-center items-center py-16 px-4">
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12 mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Obrigado pelo seu interesse!</h1>
          <p className="text-lg text-gray-200 mb-6">
            Recebemos sua solicitação e nossa equipe entrará em contato em breve para apresentar uma proposta personalizada para seu projeto.
          </p>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-400 font-medium">
              ✅ Você receberá um retorno em até 24 horas
            </p>
          </div>
          <button
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Voltar ao Início
          </button>
        </div>
      </section>
      <ModernFooter />
    </main>
  );
}