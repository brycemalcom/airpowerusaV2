"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay failed, which is fine - fallback image will show
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => {
            // Video failed to load, fallback gradient will show
            console.log('Video failed to load, using gradient fallback');
          }}
        >
          <source src="/media/videos/hero_loop.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-32 pb-40 text-center lg:px-8">
        {/* Main headline with enhanced text shadows */}
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-2xl">
          <span style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
            Clean power from
          </span>
          <span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
            style={{ 
              textShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(34, 211, 238, 0.4)',
              WebkitTextStroke: '1px rgba(255,255,255,0.1)'
            }}
          >
            thin air.
          </span>
        </h1>
        
        {/* Subheadline with text shadow */}
        <p 
          className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white sm:text-2xl lg:text-2xl font-light"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)' }}
        >
          Deployable zero-emission energy. Powered by compressed air. 
          Engineered for anywhere the grid can't reach.
        </p>
        
        {/* Enhanced CTA buttons with better contrast */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row relative z-30">
          <Button 
            size="lg" 
            className="group relative bg-white/15 backdrop-blur-lg border-2 border-white/30 hover:bg-white/25 hover:border-white/50 text-white px-10 py-5 text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
            onClick={() => scrollToSection('technology')}
            style={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <Play className="mr-3 h-6 w-6" />
            Watch How It Works
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative border-3 border-cyan-400/80 bg-cyan-900/20 backdrop-blur-lg hover:bg-cyan-400 hover:text-black text-cyan-100 px-10 py-5 text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-cyan-400/40 hover:scale-105"
            onClick={() => scrollToSection('technology')}
            style={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            Explore Our Tech
            <ArrowDown className="ml-3 h-6 w-6 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
        
      {/* Scroll down indicator - positioned well below buttons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center space-y-3 text-white/80">
          <span 
            className="text-sm font-bold tracking-widest uppercase"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
          >
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-white/70 via-white/50 to-transparent shadow-lg"></div>
          <div className="animate-bounce">
            <ArrowDown 
              className="h-5 w-5" 
              style={{ 
                filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))',
                textShadow: '0 0 10px rgba(255,255,255,0.8)'
              }} 
            />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />
    </section>
  );
} 