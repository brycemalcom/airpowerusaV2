import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InvestorFAQ from "@/components/sections/InvestorFAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor FAQs | AirPower USA",
  description: "Frequently asked questions about investing in AirPower USA's Regulation D offering. Get answers about eligibility, investment process, and more.",
  keywords: "investor FAQs, AirPower USA investment, Regulation D, accredited investors, investment questions",
};

export default function InvestorFAQsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-purple-600/20 animate-gradient-x"></div>
          </div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 py-32 text-center lg:px-8">
          {/* Main headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-2xl">
            <span style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
              Investor
            </span>
            <span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2"
              style={{ 
                textShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(34, 211, 238, 0.4)',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              FAQs
            </span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl font-light"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)' }}
          >
            Get answers to frequently asked questions about investing in AirPower USA's Regulation D offering.
          </p>

          {/* Key stats */}
          <div className="mt-12">
            <div className="inline-flex items-center space-x-8 bg-black/30 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Reg D</div>
                <div className="text-sm text-white/70">Current Round</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">$3.00</div>
                <div className="text-sm text-white/70">per share</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">$10K</div>
                <div className="text-sm text-white/70">Minimum</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />
      </section>
      
      <InvestorFAQ showTitle={false} className="bg-background" />
      <Footer />
    </main>
  );
}
