import React, { useState, useRef, useEffect } from 'react';
import { Content, Language } from '../types';
import { MessageSquare, Send, Loader2, Sparkles, X } from 'lucide-react';
import { generateDesignAdvice } from '../services/geminiService';

interface AIAdviserProps {
  content: Content['ai'];
  lang: Language;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIAdviser: React.FC<AIAdviserProps> = ({ content, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: content.initialMessage }]);
    }
  }, [content.initialMessage, messages.length]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Call Gemini Service
    // We pass the last few messages for context
    const recentHistory = messages.slice(-5);
    const responseText = await generateDesignAdvice(userMsg, recentHistory, lang);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Sparkles size={24} className="text-yellow-400" />
        <span className="font-medium hidden sm:block">AI Adviser</span>
      </button>

      {/* Chat Interface */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none translate-y-10'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="bg-black p-1.5 rounded-lg">
                <Sparkles size={16} className="text-yellow-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">{content.title}</h3>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
                <Loader2 size={16} className="animate-spin text-gray-500" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={content.placeholder}
              className="flex-1 bg-transparent border-none outline-none text-sm py-1"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="text-black hover:scale-110 transition-transform disabled:opacity-30"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2">
            {content.disclaimer}
          </p>
        </div>
      </div>
    </>
  );
};

export default AIAdviser;