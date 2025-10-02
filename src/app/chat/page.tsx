"use client";
import ChatBotFullscreen from '@/components/ChatBotFullscreen';

export default function ChatPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #18181b 0%, #23232b 100%)',
        padding: 0,
        margin: 0,
      }}
      className="chat-outer-wrapper"
    >
      <ChatBotFullscreen />
    </div>
  );
} 