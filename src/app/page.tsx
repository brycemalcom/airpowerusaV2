import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProductIntro from "@/components/sections/ProductIntro";
import Technology from "@/components/sections/Technology";
import UseCases from "@/components/sections/UseCases";
import ModularConfigurations from "@/components/sections/ModularConfigurations";
import WhyItWorks from "@/components/sections/WhyItWorks";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import InvestorCTA from "@/components/sections/InvestorCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductIntro />
      <Technology />
      <UseCases />
      <ModularConfigurations />
      <WhyItWorks />
      <MarketOpportunity />
      <InvestorCTA />
      <Footer />
    </main>
  );
}
