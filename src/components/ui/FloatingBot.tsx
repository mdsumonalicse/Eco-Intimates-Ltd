import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function FloatingBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-white rounded-3xl shadow-2xl border border-navy/5 overflow-hidden flex flex-col"
          >
            <div className="bg-emerald p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold">EcoBot AI</p>
                  <p className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 h-64 overflow-y-auto bg-soft-gray/30 space-y-4">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-navy/70 border border-navy/5">
                Hello! I'm EcoBot. How can I help you with your inquiry today?
              </div>
              <div className="bg-emerald/10 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-navy/70 border border-emerald/10 ml-8">
                I'm interested in your manufacturing capacity.
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-navy/70 border border-navy/5">
                Our monthly capacity is 500,000 units. We specialize in intimate wear and performance gear. Would you like our latest catalog?
              </div>
            </div>

            <div className="p-4 border-t border-navy/5 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 text-sm bg-soft-gray border-none rounded-xl px-4 py-2 focus:ring-1 focus:ring-emerald outline-none transition-all"
              />
              <button className="w-10 h-10 bg-emerald text-white rounded-xl flex items-center justify-center hover:bg-navy transition-colors">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-emerald text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-navy transition-all hover:scale-110 active:scale-95 group"
      >
        <MessageSquare className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
