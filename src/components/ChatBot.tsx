import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeC4wkVxZFKm1Bm8OW0Zsl9SlYKAS4-xUGiGYMdLEDoR_6L3bhshq9rQi_6QUSotVROA/exec';
const OBRIGADO_URL = 'https://uixweb.com.br/obrigado-lead/';

const funcionariosOptions = [
  '1-5 funcionários',
  '6-20 funcionários',
  '21-50 funcionários',
  '51-100 funcionários',
  '100+ funcionários',
];

const initialUserData = {
  nome: '',
  email: '',
  telefone: '',
  empresa: '',
  projeto: '',
  funcionarios: ''
};

type ChatButton = {
  text: React.ReactNode;
  class?: string;
  onClick?: () => void;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<{ text: React.ReactNode; isUser: boolean }[]>([]);
  const [userData, setUserData] = useState(initialUserData);
  const [input, setInput] = useState('');
  const [showTyping, setShowTyping] = useState(false);
  const [showButtons, setShowButtons] = useState<ChatButton[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [step, setStep] = useState<'start'|'nome'|'email'|'telefone'|'empresa'|'projeto'|'funcionarios'|'final'>('start');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const tempDataRef = useRef(initialUserData);

  console.log('ChatBot RENDER', { windowWidth: typeof window !== 'undefined' ? window.innerWidth : 'ssr' });

  useEffect(() => {
    const el = document.querySelector('.' + styles.chatbotContainer.replace(/\./g, ''));
    if (el) {
      console.log('ChatBot container size:', el.getBoundingClientRect());
    } else {
      console.log('ChatBot container NOT FOUND');
    }
  }, []);

  // Scroll automático para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showTyping, showButtons]);

  // Iniciar chat na primeira renderização
  useEffect(() => {
    if (!initializedRef.current && messages.length === 0 && step === 'start') {
      initializedRef.current = true;
      startChat();
    }
    // eslint-disable-next-line
  }, [messages.length, step]);

  // Função para adicionar mensagem
  const addMessage = (text: React.ReactNode, isUser = false) => {
    setMessages((msgs) => [...msgs, { text, isUser }]);
  };

  // Função para adicionar mensagem com delay e indicador de digitação
  const addMessageWithDelay = async (text: string, isUser = false, delay = 1000) => {
    if (!isUser) setShowTyping(true);
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (!isUser) setShowTyping(false);
    addMessage(text, isUser);
  };

  // Função para adicionar botões de resposta
  const addButtons = (buttons: ChatButton[]) => {
    setShowButtons(buttons);
  };

  // Função para adicionar botões com delay
  const addButtonsWithDelay = async (buttons: ChatButton[], delay = 1000) => {
    setShowTyping(true);
    await new Promise((resolve) => setTimeout(resolve, delay));
    setShowTyping(false);
    addButtons(buttons);
  };

  // Função para enviar dados para o Google Sheets - EXATAMENTE COMO O FORMULÁRIO
  const sendToGoogleSheets = async (userData: any) => {
    setIsSending(true);
    try {
      const formData = new FormData();
      Object.keys(userData).forEach((key) => formData.append(key, userData[key as keyof typeof userData]));
      formData.append('dataHora', new Date().toLocaleString('pt-BR'));
      formData.append('fonte', 'chatbot');
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      
      setIsSending(false);
      return { status: 'success' };
    } catch (err) {
      setIsSending(false);
      return { status: 'error' };
    }
  };

  // Função para processar a mensagem do usuário
  const processUserMessage = async (message: string) => {
    if (step === 'nome') {
      tempDataRef.current = { ...tempDataRef.current, nome: message };
      setUserData((d) => ({ ...d, nome: message }));
      setStep('email');
      await addMessageWithDelay(`Obrigado, ${message}! Qual o seu e-mail corporativo?`, false, 1500);
    } else if (step === 'email') {
      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(message)) {
        await addMessageWithDelay('Email inválido. Digite um email válido (exemplo: seu@email.com)', false, 1500);
        return;
      }
      
      tempDataRef.current = { ...tempDataRef.current, email: message };
      setUserData((d) => ({ ...d, email: message }));
      setStep('telefone');
      await addMessageWithDelay('Qual o seu telefone? (Vamos entrar em contato por ele)', false, 1500);
    } else if (step === 'telefone') {
      // Formatar telefone automaticamente - IGUAL AO FORMULÁRIO
      const numbers = message.replace(/\D/g, '');
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
      
      // Validar telefone (deve ter 11 dígitos) - IGUAL AO FORMULÁRIO
      if (numbers.length < 11) {
        await addMessageWithDelay('Telefone inválido. Digite um número completo com DDD.', false, 1500);
        return;
      }
      
      tempDataRef.current = { ...tempDataRef.current, telefone: formatted };
      setUserData((d) => ({ ...d, telefone: formatted }));
      setStep('empresa');
      await addMessageWithDelay('De qual empresa você fala?', false, 1500);
    } else if (step === 'empresa') {
      tempDataRef.current = { ...tempDataRef.current, empresa: message };
      setUserData((d) => ({ ...d, empresa: message }));
      setStep('projeto');
      await addMessageWithDelay('Perfeito! Que tipo de projeto você precisa?', false, 1500);
      await addButtonsWithDelay([
        { text: 'Sites Institucionais', class: 'projeto', onClick: () => selectProjeto('Sites Institucionais') },
        { text: 'Landing Pages Profissionais', class: 'projeto', onClick: () => selectProjeto('Landing Pages Profissionais') },
        { text: 'Sistemas Web Personalizados', class: 'projeto', onClick: () => selectProjeto('Sistemas Web Personalizados') },
        { text: 'Aplicativos Mobile', class: 'projeto', onClick: () => selectProjeto('Aplicativos Mobile') },
        { text: 'Manutenção & Suporte Web', class: 'projeto', onClick: () => selectProjeto('Manutenção & Suporte Web') },
      ], 1000);
    }
  };

  // Função para selecionar tipo de projeto
  const selectProjeto = async (tipo: string) => {
    tempDataRef.current = { ...tempDataRef.current, projeto: tipo };
    setShowButtons([]);
    addMessage(`Tipo de projeto: ${tipo}`, true);
    setUserData((d) => ({ ...d, projeto: tipo }));
    setStep('funcionarios');
    await addMessageWithDelay('Quantos funcionários sua empresa tem?', false, 1500);
    await addButtonsWithDelay(
      funcionariosOptions.map(option => ({
        text: option,
        class: 'funcionarios',
        onClick: () => selectFuncionarios(option)
      })),
      1000
    );
  };

  // Função para selecionar número de funcionários - COPIADA EXATAMENTE DO FORMULÁRIO
  const selectFuncionarios = async (funcionarios: string) => {
    setShowButtons([]);
    addMessage(`Número de funcionários: ${funcionarios}`, true);
    
    // Atualizar userData com funcionarios
    setUserData((d) => ({ ...d, funcionarios: funcionarios }));
    
    setIsSending(true);
    try {
      // Criar dados finais com funcionarios atualizado - USAR TEMPDATAREF
      const finalUserData = { 
        ...tempDataRef.current, 
        funcionarios: funcionarios
      };
      
      const formData = new FormData();
      Object.keys(finalUserData).forEach((key) => formData.append(key, finalUserData[key as keyof typeof finalUserData]));
      formData.append('dataHora', new Date().toLocaleString('pt-BR'));
      formData.append('fonte', 'chatbot');
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('leadAcesso', 'ok');
        await addMessageWithDelay('Obrigado pelo contato! Redirecionando...', false, 1000);
        if (finalUserData.projeto === 'Sites Institucionais') {
          window.location.href = '/obrigadolead';
        } else {
          window.location.href = '/obrigadoleadqualificado';
        }
      }
      setUserData(initialUserData);
      
    } catch (err) {
      await addMessageWithDelay('Erro ao enviar. Tente novamente.', false, 1500);
    } finally {
      setIsSending(false);
    }
  };

  // Função para iniciar o chat
  const startChat = async () => {
    setStep('start');
    await addMessageWithDelay('Olá, tudo bem?', false, 500);
    await addMessageWithDelay('Gostaria de saber mais sobre meus serviços de desenvolvimento web?', false, 1500);
    await addButtonsWithDelay([
      { text: (<><span>SIM, QUERO SABER MAIS</span> <span style={{fontSize:'1.2em',marginLeft:'0.3em'}}>&rarr;</span></>), class: 'sim', onClick: async () => {
        addMessage('SIM, QUERO SABER MAIS', true);
        setShowButtons([]);
        setStep('nome');
        await addMessageWithDelay('Perfeito! Vou coletar algumas informações para te ajudar melhor', false, 1000);
        await addMessageWithDelay('Qual o seu nome?', false, 1500);
      }},
    ], 1000);
  };

  // Handler de envio
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || showButtons.length > 0) return;
    addMessage(input, true);
    await processUserMessage(input);
    setInput('');
  };

  // Handler de clique nos botões
  const handleButtonClick = async (button: ChatButton) => {
    if (button.onClick) await button.onClick();
  };

  // O input só fica desabilitado se houver botões de escolha OU se estiver enviando
  const inputDisabled = showButtons.length > 0 || isSending || step === 'start' || step === 'final';

  // Função para reiniciar o chat manualmente (caso queira adicionar botão futuramente)
  const resetChat = () => {
    setMessages([]);
    setUserData(initialUserData);
    setStep('start');
  };

  return (
    <div className={styles.chatbotContainer} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header do Chatbot */}
      <div className={styles.chatbotHeader} style={{ flex: '0 0 auto' }}>
        <span>Marcelo Ayub</span>
      </div>
      {/* Área de mensagens */}
      <div className={styles.chatbotMessages} style={{ flex: '1 1 auto', overflowY: 'auto', minHeight: 0 }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.isUser ? styles.userMessage : styles.botMessage}
            style={{ marginBottom: 12 }}
          >
            <p>{msg.text}</p>
          </div>
        ))}
        {showTyping && (
          <div className={styles.typingIndicator}>
            <div className={styles.typingDot}></div>
            <div className={styles.typingDot}></div>
            <div className={styles.typingDot}></div>
          </div>
        )}
        {showButtons.length > 0 && (
          <div className={styles.messageButtons}>
            {showButtons.map((btn, i) => (
              <button
                key={i}
                className={
                  styles.messageButton + (btn.class ? ' ' + (styles as any)[btn.class] : '')
                }
                onClick={() => handleButtonClick(btn)}
              >
                {btn.text}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input do usuário */}
      <form className={styles.chatbotForm} style={{ flex: '0 0 auto' }} onSubmit={handleSend}>
        <input
          type="text"
          className={styles.chatbotInput}
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={inputDisabled}
        />
        <button
          type="submit"
          className={styles.chatbotSendButton}
          disabled={inputDisabled}
        >
          {isSending ? '...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default ChatBot; 