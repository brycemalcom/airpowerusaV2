"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wind,
  Snowflake,
  Truck,
  Award
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Wind,
    title: "No Fuel Required",
    description: "Powered by ambient air—free, clean, and unlimited",
    details: "Our revolutionary compressed air engine technology harnesses the unlimited power of atmospheric air, requiring no fossil fuels, no external energy sources, and producing zero emissions.",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10"
  },
  {
    id: 2,
    icon: Snowflake,
    title: "Dual Output",
    description: "Electricity + -20°C to -40°C cold air for cooling or storage",
    details: "Unique dual-output system generates both clean electricity and extremely cold air simultaneously, perfect for applications requiring both power and cooling solutions.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10"
  },
  {
    id: 3,
    icon: Truck,
    title: "Mobile & Modular",
    description: "Drop-in units ready for field deployment",
    details: "Containerized and truck-deployable systems designed for rapid deployment anywhere. Available in 20-foot (0.5MW) and 40-foot (1.5MW) containerized configurations, plus 50kW mobile units.",
    gradient: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10"
  },
  {
    id: 4,
    icon: Award,
    title: "Tested & Validated",
    description: "$77M+ in active proposals, multiple international test units built",
    details: "Proven technology with real-world deployments, active military and commercial contracts, and validated performance across multiple international markets.",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10"
  }
];

export default function WhyAirPower() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Advantage
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
            Why
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Air-Power?
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Revolutionary technology that delivers clean energy where others can&apos;t
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border bg-card/50 backdrop-blur-sm h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4">
                      <Icon className="w-10 h-10 text-foreground" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl leading-tight mb-2">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-primary font-medium">
                      {benefit.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {benefit.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
            <div className="max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Ready to Experience the Future of Clean Energy?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Join leading organizations worldwide who are already deploying AirPower technology for their most critical energy needs. 
                From disaster relief to remote operations, our proven solutions deliver when it matters most.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Zero Emissions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Rapid Deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Proven Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full" />
                  <span>Global Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 