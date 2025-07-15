"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign,
  TrendingUp,
  Calendar,
  Gift,
  Target,
  Building,
  Users,
  Zap
} from "lucide-react";

const offeringDetails = [
  {
    icon: DollarSign,
    title: "Share Price",
    value: "$2.00",
    subtitle: "per share",
    color: "text-blue-400"
  },
  {
    icon: TrendingUp,
    title: "Minimum Investment",
    value: "$10,000",
    subtitle: "entry level",
    color: "text-cyan-400"
  },
  {
    icon: Gift,
    title: "Bonus",
    value: "100",
    subtitle: "Preferred Shares per $10K",
    color: "text-cyan-300"
  },
  {
    icon: Calendar,
    title: "Offering Window",
    value: "Now Open",
    subtitle: "Reg D - Round I",
    color: "text-blue-300"
  },
  {
    icon: Target,
    title: "Target Exit",
    value: "OTC → NYSE",
    subtitle: "Q4 2025 → 2026",
    color: "text-blue-500"
  },
  {
    icon: Users,
    title: "Lead Interest",
    value: "$32M+",
    subtitle: "inbound test orders",
    color: "text-cyan-500"
  }
];

const useOfFunds = [
  {
    icon: Building,
    title: "Facility Buildout",
    description: "Manufacturing and testing facilities for scaled production",
    percentage: "40%"
  },
  {
    icon: Zap,
    title: "Mobile AirPack Production",
    description: "50kW mobile units for immediate market deployment",
    percentage: "35%"
  },
  {
    icon: Target,
    title: "U.S. Certification",
    description: "Regulatory compliance and safety certifications",
    percentage: "15%"
  },
  {
    icon: TrendingUp,
    title: "Market Expansion",
    description: "Sales, marketing, and strategic partnerships",
    percentage: "10%"
  }
];

export default function OfferingOverview() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            Investment Opportunity
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Current Round
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Overview
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-white/80">
            Secure your position in the clean energy revolution
          </p>
        </div>

        {/* Investment Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {offeringDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden bg-black/30 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                      <Icon className={`w-6 h-6 ${detail.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{detail.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${detail.color}`}>
                      {detail.value}
                    </div>
                    <div className="text-sm text-white/60">
                      {detail.subtitle}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Market Demand Highlight */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Strong Market Demand
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">$32M+</div>
                  <div className="text-white/70">Inbound Test Orders</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">$45M+</div>
                  <div className="text-white/70">Corporate Proposals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use of Funds */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Use of Funds</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Your investment directly supports our mission to scale clean energy technology and bring AirPower systems to market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useOfFunds.map((fund, index) => {
              const Icon = fund.icon;
              return (
                <Card 
                  key={index}
                  className="bg-black/30 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <CardTitle className="text-white">{fund.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {fund.percentage}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 text-sm">
                      {fund.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 