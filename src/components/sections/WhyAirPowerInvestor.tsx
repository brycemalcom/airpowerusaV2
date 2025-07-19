"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wind,
  Snowflake,
  Globe,
  BarChart3
} from "lucide-react";

const investmentReasons = [
  {
    id: 1,
    icon: Wind,
    title: "Zero-Emission Energy Engine",
    description: "Compressed air = ambient fuel source, no combustion, no waste",
    details: "Revolutionary technology that eliminates fuel costs and regulatory compliance issues, positioning us at the forefront of the $2.4 trillion clean energy market transition.",
    marketSize: "$2.4T",
    marketLabel: "Global Clean Energy Market",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 2,
    icon: Snowflake,
    title: "Dual Output System",
    description: "Electricity + cold air exhaust opens unique verticals",
    details: "Our patented dual-output capability creates multiple revenue streams and competitive moats in agriculture, data centers, disaster relief, and military applications.",
    marketSize: "4x",
    marketLabel: "Revenue Streams",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    icon: Globe,
    title: "Deployable Everywhere",
    description: "Remote, mobile, military, microgrid, and emergency-ready",
    details: "Addressable market includes off-grid communities, military bases, disaster zones, and agricultural operations - markets underserved by traditional energy solutions.",
    marketSize: "$847B",
    marketLabel: "Off-Grid Market",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Real Demand & Traction",
    description: "Interest from power companies, NATO-aligned military, and growers",
    details: "Validated market demand with $32M+ in inbound test orders and $45M in corporate proposals, demonstrating strong product-market fit before full-scale production.",
    marketSize: "$77M+",
    marketLabel: "Pipeline Value",
    gradient: "from-orange-500 to-red-500"
  }
];

export default function WhyAirPowerInvestor() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Investment Thesis
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why Invest in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Air-Power?
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Revolutionary technology meets proven market demand in the clean energy transition
          </p>
        </div>

        {/* Investment Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {investmentReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={reason.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border bg-card/50 backdrop-blur-sm h-full"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16">
                      <Icon className="w-10 h-10 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl leading-tight mb-2">
                        {reason.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base text-primary font-medium">
                        {reason.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {reason.details}
                  </p>
                  
                  {/* Market Size Highlight */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        {reason.marketSize}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {reason.marketLabel}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Market Opportunity Summary */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 border border-blue-500/20 backdrop-blur-sm">
            <div className="max-w-4xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Positioned at the Intersection of Multiple High-Growth Markets
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Air-Power USA sits at the convergence of clean energy, off-grid power, military defense, and agricultural technology — 
                sectors experiencing unprecedented growth and investment. Our unique dual-output technology creates multiple 
                revenue streams while addressing critical infrastructure gaps.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Clean Energy Transition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Military Readiness</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Agricultural Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full" />
                  <span>Disaster Resilience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 