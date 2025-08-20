"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf,
  Heart,
  Shield,
  Zap,
  HardHat,
  Car
} from "lucide-react";

const customerSegments = [
  {
    id: 1,
    title: "Agriculture & Grow Operations",
    description: "Self-contained mobile units with cold air exhaust",
    icon: Leaf,
    category: "Agriculture",
    details: "Controlled environments needing off-grid cooling + energy for high-efficiency grow operations and environmental control.",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10"
  },
  {
    id: 2,
    title: "Disaster Relief & Emergency Response",
    description: "Rapid deployment to blackout zones",
    icon: Heart,
    category: "Emergency",
    details: "Domestic or international government agencies requiring mobile, reliable power for emergency operations and critical infrastructure.",
    gradient: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10"
  },
  {
    id: 3,
    title: "Military & Remote Command",
    description: "Tactical readiness for off-grid missions",
    icon: Shield,
    category: "Defense",
    details: "NATO, remote command bases, and special operations requiring secure, independent power sources for mission-critical operations.",
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 4,
    title: "Utilities & Grid Operators",
    description: "Backup and edge generation systems",
    icon: Zap,
    category: "Utility",
    details: "Power companies interested in containerized microgrid assets for grid stability, backup power, and edge generation solutions.",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    id: 5,
    title: "Remote Infrastructure Projects",
    description: "Energy for builds beyond the grid",
    icon: HardHat,
    category: "Construction",
    details: "Construction, telecom, island/tribal projects requiring portable, rugged, and always-on power solutions for remote locations.",
    gradient: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10"
  },
  {
    id: 6,
    title: "EV Charging & Transport",
    description: "Clean power where grid access can't reach",
    icon: Car,
    category: "Mobility",
    details: "Rapid-deploy energy stations and mobile charging infrastructure for electric vehicle hubs, rest stops, utility fleets, and edge mobility applications—powered by compressed air.",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10"
  }
];

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Trusted by Leaders
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
            Who We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Serve
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Trusted by organizations solving power challenges in the real world
          </p>
        </div>

        {/* Customer Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {customerSegments.map((segment) => {
            const Icon = segment.icon;
            return (
              <Card 
                key={segment.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {segment.category}
                      </Badge>
                      <CardTitle className="text-base sm:text-lg leading-tight">
                        {segment.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base text-primary font-medium mb-3">
                    {segment.description}
                  </CardDescription>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {segment.details}
                  </p>
                  
                  {/* Benefits indicator */}
                  <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-xs text-muted-foreground">Zero Emissions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-xs text-muted-foreground">Mobile Ready</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
            <div className="max-w-4xl">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                Proven Technology for Real-World Deployment
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our mobile 50kW AirPack and scalable BESS systems provide emissions-free power for the hardest-to-reach locations. 
                With <span className="text-primary font-medium">$77M+</span> in active proposals and multiple international test units built, 
                we're ready to power your mission-critical operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 