'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function TerminalHero() {
  const [text, setText] = useState('');
  const fullText = "import swift_club as sc\n\nsc.init(mode='collaboration')\nsc.ignite('ideas')\n\n# Join the revolution...";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Recruiting New Members
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Where Finance <br/>
            Meets <span className="text-primary">Intelligence</span>.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg">
            Swift Coding Club — The AI & Quant Trading Community at SWUFE.
            Igniting Ideas, Fostering Collaboration.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
             <Link 
              href="/join" 
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Apply to Join <MoveRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#showcase" 
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right: Terminal Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card p-0 overflow-hidden border-t border-white/20">
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                <Terminal className="w-3 h-3" /> main.py
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 h-[300px] font-mono text-sm md:text-base text-green-400 bg-black/50">
              <pre className="whitespace-pre-wrap">
                {text}
                <span className="animate-pulse">_</span>
              </pre>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-secondary/20 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
