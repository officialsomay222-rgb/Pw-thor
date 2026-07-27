/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Zap, BookOpen, ExternalLink, GraduationCap, ChevronRight, CheckCircle, ArrowLeft, ShieldCheck, Library } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isBrowsing, setIsBrowsing] = useState(false);
  const targetUrl = 'https://pwthor.live/study/batches';

  if (isBrowsing) {
    return (
      <div className="w-full h-full min-h-screen bg-[#09090b] flex flex-col">
        {/* Browser Header Panel */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 shadow-md">
          <button 
            onClick={() => setIsBrowsing(false)}
            className="p-2 -ml-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="text-zinc-100 font-medium tracking-wide">Owner</span>
            
            <div className="relative flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" fill="#B8860B" />
              {/* Shining animation effect on the golden tick */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 skew-x-[30deg] animate-[shine_2s_infinite]" />
              </div>
            </div>
          </div>
          
          <div className="w-9" /> {/* Spacer for centering */}
        </div>
        
        {/* Iframe Content */}
        <div className="flex-1 w-full bg-zinc-950 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 border-4 border-zinc-800 border-t-cyan-500 rounded-full animate-spin" />
          </div>
          <iframe 
            src={targetUrl} 
            className="relative z-10 w-full h-full border-0 bg-white"
            title="PW Thor Study Platform"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <style>{`
          @keyframes shine {
            100% { left: 200%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-screen bg-[#09090b] text-zinc-100 flex flex-col items-center justify-center p-4 selection:bg-cyan-500/30 keyboard-safe-area-bottom">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-12"
      >
        
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            {/* Outer ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-40 animate-pulse" />
            
            {/* Logo Container */}
            <div className="relative w-28 h-28 bg-zinc-900 border border-zinc-800/80 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-center justify-center">
                <Library className="w-12 h-12 text-zinc-300 absolute transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-500 font-sans">
              Study Thor
            </h1>
            <p className="text-zinc-400 text-sm font-medium tracking-wide">
              PROGRESSIVE LEARNING BATCHES
            </p>
          </div>
        </div>

        {/* Action Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full flex flex-col space-y-4"
        >
          <button
            onClick={() => setIsBrowsing(true)}
            className="group relative flex items-center justify-between w-full bg-zinc-900 border border-zinc-800 p-5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-colors duration-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-base font-semibold text-zinc-100">Access Batches</span>
                <span className="block text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">pwthor.live/study/batches</span>
              </div>
            </div>
            
            <div className="relative z-10 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
          
          <p className="text-xs text-zinc-600 flex items-center justify-center space-x-1">
            <span>Continue to Learning Platform</span>
            <ExternalLink className="w-3 h-3" />
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
