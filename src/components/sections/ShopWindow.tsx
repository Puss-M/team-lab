'use client';

import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const lockedResources = [
  {
    title: "Quantitative Trading Roadmap 2025",
    type: "Roadmap",
    date: "Dec 10",
  },
  {
    title: "DeepSeek-V3 Reproduction Report",
    type: "Internal Report",
    date: "Dec 12",
  },
  {
    title: "High-Frequency Factor Mining (Video)",
    type: "Workshop",
    date: "Nov 28",
  },
  {
    title: "Club Server Access Guide",
    type: "Documentation",
    date: "Nov 01",
  }
];

export default function ShopWindow() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
          Internal Knowledge Base .
        </h2>
        <p className="text-muted-foreground mt-2">
           Exclusive resources for club members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lockedResources.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-64 rounded-xl border border-white/10 bg-card overflow-hidden"
          >
            {/* Visible Header */}
            <div className="p-6 relative z-10">
              <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded">
                {item.type}
              </span>
              <h3 className="text-lg font-bold text-white mt-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{item.date}</p>
            </div>

            {/* Blurred Content Placeholder */}
            <div className="px-6 space-y-2 opacity-50 blur-sm">
              <div className="h-2 w-3/4 bg-gray-700 rounded" />
              <div className="h-2 w-full bg-gray-700 rounded" />
              <div className="h-2 w-5/6 bg-gray-700 rounded" />
              <div className="h-2 w-1/2 bg-gray-700 rounded" />
            </div>

            {/* Lock Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-background to-transparent flex items-end justify-center pb-8 group-hover:bg-background/80 transition-all duration-300">
              <div className="flex flex-col items-center gap-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                   <Lock className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-xs text-secondary font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Members Only
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
