import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeC4wkVxZFKm1Bm8OW0Zsl9SlYKAS4-xUGiGYMdLEDoR_6L3bhshq9rQi_6QUSotVROA/exec';

const initialUserData = {
  nome: '',
  email: '',
  telefone: '',
  empresa: '',
  projeto: '',
  funcionarios: '',
};

const projetoOptions = [
  'Sites Institucionais',
  'Landing Pages Profissionais',
  'Sistemas Web Personalizados',
  'Aplicativos Mobile',
  'Manutenção & Suporte Web',
];

const funcionariosOptions = [
  '1-5 funcionários',
  '6-20 funcionários',
  '21-50 funcionários',
  '51-100 funcionários',
  '100+ funcionários',
];

const ChatBotForm = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Formatar telefone automaticamente
    if (name === 'telefone') {
      const numbers = value.replace(/\D/g, '');
      let formatted = numbers;
      
      if (numbers.length > 0) {
        formatted = '(' + numbers.substring(0, 2);
        if (numbers.length > 2) {
          formatted += ') ' + numbers.substring(2, 7);
        }
        if (numbers.length > 7) {
          formatted += '-' + numbers.substring(7, 11);
        }
      }
      
      setUserData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setUserData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');
    
    // Validar telefone (deve ter 11 dígitos)
    const phoneNumbers = userData.telefone.replace(/\D/g, '');
    if (phoneNumbers.length < 11) {
      setError('Telefone inválido. Digite um número completo com DDD.');
      setIsSending(false);
      return;
    }
    
    try {
      const formData = new FormData();
      Object.keys(userData).forEach((key) => formData.append(key, userData[key as keyof typeof userData]));
      formData.append('dataHora', new Date().toLocaleString('pt-BR'));
      formData.append('fonte', 'formulario-principal');
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('leadAcesso', 'ok');
        router.push('/obrigadolead');
      }
      setUserData(initialUserData);
      
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 p-6 rounded-xl shadow-xl flex flex-col gap-3 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-white mb-1">Entre em Contato</h3>
      <p className="text-gray-400 text-sm mb-2">Preencha os dados e vamos conversar sobre seu projeto.</p>
      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        value={userData.nome}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail corporativo"
        value={userData.email}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="tel"
        name="telefone"
        placeholder="(00) 00000-0000"
        value={userData.telefone}
        onChange={handleChange}
        required
        minLength={15}
        maxLength={15}
        pattern="\(\d{2}\) \d{5}-\d{4}"
        title="Digite um telefone válido com DDD (11 dígitos)"
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="text"
        name="empresa"
        placeholder="Empresa"
        value={userData.empresa}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <select
        name="funcionarios"
        value={userData.funcionarios}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Número de funcionários</option>
        {funcionariosOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <select
        name="projeto"
        value={userData.projeto}
        onChange={handleChange}
        required
        className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Tipo de projeto</option>
        {projetoOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={isSending}
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-60"
      >
        {isSending ? 'Enviando...' : 'Falar com Especialista'}
      </button>
    </form>
  );
};

export default ChatBotForm; 