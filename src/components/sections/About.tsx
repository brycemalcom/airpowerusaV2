"use client";

import { Card } from "@/components/ui/card";
import { 
  Target,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Wind,
  Zap,
  Battery,
  Snowflake
} from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Unlimited Fuel Source",
    description: "Ambient air — free, renewable, and always available."
  },
  {
    icon: Zap,
    title: "Zero Emissions",
    description: "No combustion, no pollutants, no toxic waste."
  },
  {
    icon: Battery,
    title: "Integrated Battery Storage",
    description: "Built-in BESS for flexible energy management."
  },
  {
    icon: Snowflake,
    title: "Cold Air Byproduct",
    description: "Exhaust temperatures between -20°C and -40°C for industrial cooling, agriculture, and more."
  }
];

interface AboutProps {
  showTitle?: boolean;
  className?: string;
}

export default function About({ showTitle = true, className = "" }: AboutProps) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              About AirPower USA
            </h2>
            <p className="text-lg text-muted-foreground">
              Redefining clean, reliable, and deployable power with patented compressed air technology.
            </p>
          </div>
        )}

        <div className="space-y-20">
          {/* Mission Statement */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Mission Statement
            </h3>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-white"></div>
              <Target className="h-6 w-6 text-white mx-4" />
              <div className="w-16 h-px bg-white"></div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              AirPower USA is on a mission to redefine clean, reliable, and deployable power. Our patented compressed air engine and generator system delivers zero-emission electricity with built-in battery storage, producing cold, clean air as a valuable byproduct. We design our systems to operate anywhere — from military bases to disaster zones — without reliance on traditional grid infrastructure.
            </p>
          </div>

          {/* Our Story */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Our Story
            </h3>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-white"></div>
              <BookOpen className="h-6 w-6 text-white mx-4" />
              <div className="w-16 h-px bg-white"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                Founded to solve one of the most pressing challenges of our time — how to provide scalable, off-grid energy that&apos;s both clean and dependable — AirPower USA combines decades of engineering innovation with practical, real-world deployment experience.
              </p>
              <p>
                Our technology leverages the most abundant fuel source on the planet: ambient air. By compressing and storing air, our systems can generate power on demand, recharge themselves, and recycle energy in a closed loop. This approach eliminates emissions, reduces fuel logistics, and creates operational flexibility unmatched by diesel or intermittent renewable systems.
              </p>
              <p>
                We operate with the belief that energy security is essential — whether that&apos;s powering a remote village, keeping mission-critical military operations online, or enabling first responders in the aftermath of a disaster.
              </p>
            </div>
          </div>

          {/* What We Deliver */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              What We Deliver
            </h3>
            <div className="flex justify-center mb-12">
              <div className="w-16 h-px bg-white"></div>
              <Lightbulb className="h-6 w-6 text-white mx-4" />
              <div className="w-16 h-px bg-white"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-border bg-card/50">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Looking Ahead */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Looking Ahead
            </h3>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-white"></div>
              <TrendingUp className="h-6 w-6 text-white mx-4" />
              <div className="w-16 h-px bg-white"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                AirPower USA is preparing for large-scale production from our planned San Diego facility, with applications spanning defense, disaster relief, remote infrastructure, EV charging, data centers, agriculture, and beyond.
              </p>
              <p>
                Our roadmap includes manufacturing proprietary system components, expanding into international markets, and preparing for an IPO in 2025–2026.
              </p>
              <div className="mt-8 p-6 bg-card/50 rounded-lg border border-border">
                <p className="font-semibold text-foreground text-lg">
                  Join us as we scale our patented energy technology into a global clean energy leader — delivering true energy independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
