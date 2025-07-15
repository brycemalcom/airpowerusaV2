import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InvestorHero from "@/components/sections/InvestorHero";
import OfferingOverview from "@/components/sections/OfferingOverview";
import WhyAirPowerInvestor from "@/components/sections/WhyAirPowerInvestor";
import InvestorForm from "@/components/sections/InvestorForm";

export default function InvestorPortal() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InvestorHero />
      <OfferingOverview />
      <WhyAirPowerInvestor />
      <InvestorForm />
      <Footer />
    </main>
  );
} 