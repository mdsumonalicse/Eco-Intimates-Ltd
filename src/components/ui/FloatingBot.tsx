import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const FAQ_CHIPS = [
  { label: "Minimum Order (MOQ)", text: "What is your MOQ?" },
  { label: "Our Certifications", text: "What certificates do you have?" },
  { label: "Factory Location", text: "Where is the factory located?" },
  { label: "Available Products", text: "What garments do you produce?" }
];

export default function FloatingBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "Hello! I am EcoBot AI, the virtual counselor for Eco Intimates Ltd. Ask me about our sustainable B2B manufacturing, certifications, MOQ, or factory setups!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate smart bot response
    setTimeout(() => {
      let replyText = "Thank you for reaching out! A B2B account representative will contact you with more details. For urgent commercial inquiries, please reach us directly at info@ecointimates.com.";
      const query = textToSend.toLowerCase();

      if (query.includes("moq") || query.includes("minimum") || query.includes("order")) {
        replyText = "Our Minimum Order Quantity (MOQ) depends on the product category:\n• Premium Lingerie: 3,000 units\n• Seamless Activewear: 2,500 units\n• Men's & Boys' Underwear: 10,000 units\n• General Knitwear: 5,000 units.";
      } else if (query.includes("cert") || query.includes("oeko") || query.includes("wrap") || query.includes("compliance")) {
        replyText = "Eco Intimates operates at 100% compliance:\n• OEKO-TEX Standard 100 representing raw chemical safety\n• WRAP Gold Level Status for ethical Labor standards\n• Platinum LEED Certified sustainable green building facility.";
      } else if (query.includes("location") || query.includes("where") || query.includes("factory") || query.includes("address")) {
        replyText = "Our state-of-the-art green manufacturing hub is located in Gazipur, Dhaka, Bangladesh, optimized with biological water treatment plants and robust global shipping links.";
      } else if (query.includes("product") || query.includes("produce") || query.includes("make") || query.includes("garment") || query.includes("bra") || query.includes("pant")) {
        replyText = "We specialize in:\n• Premium Lingerie, bras, and elegant ladies' panties\n• Men's and boys' modal comfort underwear\n• Seamless leggings, performance wear, knit hoodies, and kids' rompers.";
      } else if (query.includes("capacity") || query.includes("monthly") || query.includes("volume") || query.includes("limit")) {
        replyText = "Our current facility outputs over 500,000 premium intimate wear and knitwear units monthly, utilizing automated Gerber cutting and seamless high-tech knitting machines.";
      }

      const botMessage: ChatMessage = {
        id: Math.random().toString(),
        text: replyText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-96 bg-white rounded-[32px] shadow-2xl border border-navy/5 overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-brand p-5 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center relative">
                  <Bot size={22} className="text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald rounded-full border-2 border-brand" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-tech font-bold uppercase tracking-wider">EcoBot AI</p>
                    <Sparkles size={11} className="text-emerald animate-pulse" />
                  </div>
                  <p className="text-[9px] text-white/60 font-bold uppercase tracking-widest">Global Desk Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/15 p-2 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
            
            {/* Messages body */}
            <div className="p-6 overflow-y-auto bg-soft-gray/30 space-y-4 flex-1 h-72 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-[20px] shadow-sm text-xs leading-relaxed font-medium ${
                    msg.sender === 'user'
                      ? 'bg-brand text-white rounded-tr-none'
                      : 'bg-white text-navy/80 border border-navy/5 rounded-tl-none'
                  }`}>
                    {msg.text.split('\n').map((line, lIdx) => (
                      <p key={lIdx} className={lIdx > 0 ? 'mt-1' : ''}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-navy/40 p-4 rounded-[20px] rounded-tl-none border border-navy/5 shadow-sm text-xs flex items-center gap-1.5 font-tech">
                    <span className="w-1 h-1 bg-navy/40 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-navy/40 rounded-full animate-bounce delay-100" />
                    <span className="w-1 h-1 bg-navy/40 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Chips Selector */}
            <div className="px-5 py-3.5 bg-white border-t border-navy/5 flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
              {FAQ_CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => handleSendMessage(chip.text)}
                  className="bg-soft-gray hover:bg-emerald/10 hover:text-emerald border border-navy/5 hover:border-emerald/20 px-3.5 py-1.5 rounded-full text-[9px] font-tech font-bold uppercase tracking-widest text-navy/50 transition-all duration-300"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-4 bg-white border-t border-navy/5 flex gap-2.5 items-center"
            >
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question..." 
                className="flex-1 text-xs bg-soft-gray border border-transparent rounded-[18px] px-5 py-3 focus:outline-none focus:border-emerald/30 focus:bg-white transition-all font-medium text-navy"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="w-10 h-10 bg-emerald disabled:bg-emerald/30 text-white rounded-[14px] flex items-center justify-center hover:bg-navy transition-colors shadow-lg active:scale-95"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-emerald text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-navy transition-all hover:scale-110 active:scale-95 group relative"
      >
        <MessageSquare className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand text-white border-2 border-white rounded-full flex items-center justify-center text-[8px] font-tech font-black animate-bounce shadow">
          AI
        </span>
      </button>
    </div>
  );
}
