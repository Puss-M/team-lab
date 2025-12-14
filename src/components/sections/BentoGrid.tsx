'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Github, Code2, Database } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "BettaFish",
    description: "High-frequency trading system backtested on tick-level data.",
    tags: ["Rust", "Python", "ClickHouse"],
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Digital Garden",
    description: "A collaborative knowledge graph for research notes.",
    tags: ["Next.js", "Neo4j"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "AlphaLens",
    description: "Factor mining visualization tool.",
    tags: ["React", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
   {
    title: "Agent Smith",
    description: "LLM-based autonomous research agent.",
    tags: ["LangChain", "OpenAI"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function BentoGrid() {
  return (
    <section id="showcase" className="py-24 container mx-auto px-4">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
          Selected Projects .
        </h2>
        <p className="text-muted-foreground mt-2">
          Real-world applications built by our members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-card border border-white/10 hover:border-primary/50 transition-all duration-300",
              project.className
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
               <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
