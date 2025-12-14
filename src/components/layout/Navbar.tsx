'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Rocket, Lock } from 'lucide-react';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMember = !!session;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'glass h-16' : 'bg-transparent h-20'
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
          <Rocket className="w-6 h-6 text-primary" />
          <span>Swift Coding Club</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          
          {isMember ? (
            <>
              <Link href="/learning" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                <Lock className="w-3 h-3" /> Learning
              </Link>
              <Link href="/archives" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Archives
              </Link>
              <Link href="/workspace" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Workspace
              </Link>
            </>
          ) : (
             <Link href="#showcase" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
               Projects
             </Link>
          )}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          {session?.user?.image && (
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
               <Image src={session.user.image} alt={session.user.name || "User"} fill className="object-cover" />
            </div>
          )}
          <button 
            onClick={() => isMember ? signOut() : signIn('github')}
            className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
          >
            {isMember ? 'Sign Out' : 'Member Login'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-muted-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-white/10 p-4 md:hidden flex flex-col gap-4">
           <Link href="/about" className="text-sm font-medium text-foreground">About</Link>
           {isMember ? (
             <>
               <Link href="/learning" className="text-sm font-medium text-foreground">Learning Hub</Link>
               <Link href="/archives" className="text-sm font-medium text-foreground">Archives</Link>
             </>
           ) : (
             <Link href="#showcase" className="text-sm font-medium text-foreground">Projects</Link>
           )}
           <button 
            onClick={() => isMember ? signOut() : signIn('github')}
            className="w-full py-2 rounded-md bg-primary text-white text-sm font-semibold"
          >
            {isMember ? 'Sign Out' : 'Join Us'}
          </button>
        </div>
      )}
    </nav>
  );
}
