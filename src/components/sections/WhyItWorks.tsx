"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin,
  Thermometer,
  Wind,
  Truck,
  Zap,
  Shield,
  CheckCircle,
  Mountain,
  Building,
  Trees,
  Waves,
  Flag
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Works in remote or off-grid locations",
    description: "No grid tie-in or fuel source required",
    color: "text-green-500"
  },
  {
    icon: Thermometer,
    title: "Operates in extreme heat or cold",
    description: "Cold-air exhaust doubles as climate advantage",
    color: "text-blue-500"
  },
  {
    icon: Wind,
    title: "Zero-emission + low acoustic signature",
    description: "No fumes, no noise, no heat pollution",
    color: "text-emerald-500"
  },
  {
    icon: Truck,
    title: "Easy to deploy + re-deploy",
    description: "Truck, trailer, or container-mounted formats",
    color: "text-orange-500"
  },
  {
    icon: Zap,
    title: "Instant startup, reliable uptime",
    description: "Compressed air engine never idles or clogs",
    color: "text-yellow-500"
  },
  {
    icon: Shield,
    title: "Built for rugged terrains + mission-critical ops",
    description: "Military-grade durability with low maintenance",
    color: "text-red-500"
  }
];

const environments = [
  {
    icon: Flag,
    name: "Military Base",
    description: "Mission-critical operations",
    visual: "Military deployment scenario"
  },
  {
    icon: Mountain,
    name: "Mountain Village",
    description: "High-altitude remote power",
    visual: "Alpine community setting"
  },
  {
    icon: Trees,
    name: "Forest Site",
    description: "Environmental monitoring",
    visual: "Remote forest installation"
  },
  {
    icon: Building,
    name: "Data Center",
    description: "Critical infrastructure backup",
    visual: "Urban data facility"
  },
  {
    icon: Waves,
    name: "Coastal Facility",
    description: "Marine environment resilience",
    visual: "Coastal industrial site"
  }
];

export default function WhyItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Universal Reliability
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Why It Works
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Everywhere
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Built to operate in extreme conditions — from military zones to mountain villages.
          </p>
          
          {/* Intro Copy */}
          <div className="mt-8 p-6 rounded-xl bg-card/50 border border-border">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The AirPower Station was engineered for the harshest environments and the most demanding missions. 
              Unlike solar or diesel systems, it delivers instant, on-demand energy that's reliable, portable, and safe.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              With zero emissions, silent operation, and cold air as its only exhaust — this platform outperforms 
              traditional generators in every category that matters.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Competitive Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="group p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-2xl bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <h4 className="font-bold text-foreground leading-tight">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Environments Section */}
        <div className="border-t border-border pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4">
                  Proven in the Field
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Same Power, Anywhere
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From scorching deserts to freezing mountains, from remote villages to critical infrastructure — 
                  the AirPower Station delivers consistent, reliable energy where traditional systems fail.
                </p>
              </div>

              {/* Environment List */}
              <div className="space-y-4">
                {environments.map((env, index) => {
                  const Icon = env.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-card/30 border border-border/50">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {env.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {env.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {environments.map((env, index) => {
                  const Icon = env.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`overflow-hidden ${index === 4 ? 'col-span-2' : ''}`}
                    >
                      <div className={`aspect-square relative bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center ${index === 4 ? 'aspect-[2/1]' : ''}`}>
                        <div className="text-center">
                          <Icon className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                          <h4 className="font-semibold text-foreground text-sm mb-1">
                            {env.name}
                          </h4>
                          <p className="text-xs text-muted-foreground px-2">
                            {env.visual}
                          </p>
                        </div>
                        
                        {/* Environment overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        
                        {/* Environment indicator */}
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              
              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Badge className="bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-bold">
                  All Environments
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">-40°C</div>
              <div className="text-sm text-muted-foreground">to +50°C Operating Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Continuous Operation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">0</div>
              <div className="text-sm text-muted-foreground">Fuel Requirements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Mission Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 