import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageCircle, Minimize2, Trash2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const USE_STREAMING = true;

const SUGGESTED_QUESTIONS = [
    "What are your key skills?",
    "What projects have you worked on?",
    "What kind of work do you focus on?"
  ];

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Ask me anything."
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: textToSend };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setShowSuggestions(false);

    if (isFirstMessage) {
      setIsFirstMessage(false);
    }

    
    const assistantMessageIndex = newMessages.length;
    setMessages([...newMessages, { role: 'assistant', content: '' }]);

    try {
      const backendUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined) || "https://jbhagbljdcoznfudssjz.supabase.co";
      const anonKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiaGFnYmxqZGNvem5mdWRzc2p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NzA0OTgsImV4cCI6MjA4MjU0NjQ5OH0.OHTuF1qT2wJc5yJO681kX2U0rUVwFdd6n9Kld4RpMqU";

      const functionUrl = `${backendUrl}/functions/v1/chatbot-proxy`;

      if (!USE_STREAMING) {
        const resp = await fetch(functionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            apikey: anonKey,
            Authorization: `Bearer ${anonKey}`,
          },
          body: JSON.stringify({ messages: newMessages, streaming: false }),
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const responseData = await resp.json();

        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: responseData?.response || responseData?.text || 'Sorry, I encountered an error.',
          },
        ]);
        setLoading(false);
        return;
      }

      // For streaming, we use fetch directly to handle SSE
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
          apikey: anonKey,
          Authorization: `Bearer ${anonKey}`,
        },
        body: JSON.stringify({ messages: newMessages, streaming: true }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let accumulatedText = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          console.log('Stream complete');
          break;
        }

       
        buffer += decoder.decode(value, { stream: true });
        console.log('Buffer:', buffer);
        
        
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; 

        for (const line of lines) {
          console.log('Processing line:', line);
          
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            console.log('Extracted data:', data);
            
            if (data === '[DONE]') {
              console.log('Received [DONE] signal');
              continue;
            }

            if (!data) continue;

            try {
              const parsed = JSON.parse(data);
              console.log('Parsed JSON:', parsed);
              
              if (parsed.text) {
                accumulatedText += parsed.text;
                
                // Update the assistant message in real-time
                setMessages(prev => {
                  const updated = [...prev];
                  updated[assistantMessageIndex] = {
                    role: 'assistant',
                    content: accumulatedText
                  };
                  return updated;
                });
              }
            } catch (e) {
              console.warn('Failed to parse SSE data:', data, e);
            }
          }
        }
      }

      
      if (!accumulatedText.trim()) {
        setMessages(prev => {
          const updated = [...prev];
          updated[assistantMessageIndex] = {
            role: 'assistant',
            content: 'Sorry, I got no response. Please try again.'
          };
          return updated;
        });
      }

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => {
        const updated = [...prev];
        updated[assistantMessageIndex] = {
          role: 'assistant',
          content: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi!"
      }
    ]);
    setShowSuggestions(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full p-4 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          AI
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isMinimized ? 'w-80' : 'w-[420px]'
      }`}
    >
      {/* Chat Window */}
      <div
        className={`bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700 transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[700px]'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
        </div>
        <div className="leading-tight">
            <h3 className="font-semibold text-base">Chat with Shubham</h3>
            <p className="text-xs text-emerald-100">Ask about my work & projects</p>
        </div>
        </div>
          <div className="flex gap-2">
            <button
              onClick={clearChat}
              className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
              aria-label="Clear chat"
              title="Clear chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
              aria-label={isMinimized ? 'Maximize' : 'Minimize'}
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${
                    msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                        : 'bg-gray-700'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                        : 'bg-gray-800 border border-gray-700 text-gray-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Suggested Questions */}
              {showSuggestions && messages.length === 1 && !loading && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-gray-400 text-center mb-3">
                    Try asking:
                  </p>
                  {SUGGESTED_QUESTIONS.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(question)}
                      className="w-full text-left px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-emerald-600 rounded-xl text-sm text-gray-300 transition-all duration-200 hover:text-emerald-400"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
              
              {loading && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-2.5">
                    <div className="flex gap-1 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    {isFirstMessage && (
                      <p className="text-xs text-gray-400 mt-1">
                        First response may take 30-60s while AI wakes up...
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my experience..."
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:bg-gray-800 disabled:cursor-not-allowed text-sm"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-2.5 rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
              Personal chatbot • Streaming
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}