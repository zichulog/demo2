import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, HelpCircle, CornerDownLeft } from 'lucide-react';
import { ChatMessage } from '../types';
import { PRESET_AI_QUESTIONS } from '../data/portfolioData';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: '안녕하세요! 서dalmi 기획자의 AI 채용 어시스턴트입니다. 🤖\n서달미 기획자의 주요 프로젝트(AI 반려식물, 소상공인 예약), PRD 기획 방식, 사용자 조사 방법론, 팀 협업 노하우에 대해 어떤 점이든 편하게 물어보세요!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const question = (textToSend || inputValue).trim();
    if (!question || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });

      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.text || '답변을 불러오지 못했습니다. 다시 시도해주세요.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: '네트워크 연결 상태를 확인 후 다시 질문해주세요.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#f7f9fb] w-full max-w-lg h-full shadow-2xl border-l border-[#c5c6ce]/30 flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#041632] text-white flex justify-between items-center shrink-0 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#ba1a1a] rounded-xl text-white shadow-xs">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white leading-tight">서달미 AI 채용 Q&A Center</h3>
              <p className="text-[11px] text-[#8393b5]">Gemini AI 기반 실시간 면접 질의응답</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#041632] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                  <Bot className="w-4 h-4 text-[#ba1a1a]" />
                </div>
              )}

              <div className={`max-w-[82%] rounded-2xl p-4 text-xs md:text-sm leading-relaxed shadow-xs ${
                msg.sender === 'user'
                  ? 'bg-[#041632] text-white rounded-br-none'
                  : 'bg-white text-[#191c1e] border border-[#c5c6ce]/30 rounded-bl-none'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <span className={`text-[10px] block text-right mt-1.5 opacity-60 font-mono`}>
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#ba1a1a] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start items-center text-xs text-[#75777e]">
              <div className="w-8 h-8 rounded-full bg-[#041632] text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-[#ba1a1a] animate-spin" />
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#c5c6ce]/30 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#ba1a1a]" />
                <span>서달미 AI가 답변을 작성 중입니다...</span>
              </div>
            </div>
          )}
        </div>

        {/* Preset Questions Bar */}
        <div className="p-3 bg-[#eceef0] border-t border-[#c5c6ce]/30 shrink-0">
          <p className="text-[11px] font-extrabold text-[#75777e] mb-2 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-[#ba1a1a]" />
            <span>추천 질문 클릭하기</span>
          </p>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            {PRESET_AI_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                disabled={loading}
                className="text-left text-[11px] font-semibold px-2.5 py-1 bg-white hover:bg-[#041632] hover:text-white rounded-lg border border-[#c5c6ce]/40 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <div className="p-4 bg-white border-t border-[#c5c6ce]/30 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="질문을 입력하세요..."
              disabled={loading}
              className="flex-1 px-4 py-2.5 bg-[#f2f4f6] rounded-xl text-xs md:text-sm border border-[#c5c6ce]/30 focus:outline-none focus:border-[#ba1a1a]"
            />
            <button
              type="submit"
              disabled={loading || !inputValue.trim()}
              className="p-2.5 bg-[#041632] text-white rounded-xl hover:bg-[#041632]/90 disabled:opacity-50 transition-colors"
              aria-label="Send"
            >
              <Send className="w-4 h-4 text-[#ba1a1a]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
