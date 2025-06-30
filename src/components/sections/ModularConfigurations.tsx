"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Truck,
  Container,
  Move,
  Battery,
  Car,
  Zap,
  Users,
  MapPin,
  Clock
} from "lucide-react";

const configurations = [
  {
    id: 1,
    title: "Truck-Mounted Station",
    subtitle: "Mobile response, military-ready",
    description: "Engine + generator mounted in vehicle or flatbed. Ideal for rapid deployment, off-grid ops.",
    icon: Truck,
    category: "Mobile",
    specifications: [
      { label: "Deployment", value: "< 15 minutes" },
      { label: "Power Output", value: "Up to 50kW" },
      { label: "Range", value: "Unlimited mobility" },
      { label: "Applications", value: "Emergency, Military, Remote" }
    ],
    features: ["Rapid deployment", "Vehicle-integrated", "Military-grade", "Off-grid ready"],
    visual: "Truck with visible mounted engine",
    categoryColor: "bg-red-500"
  },
  {
    id: 2,
    title: "Containerized Station (40ft)",
    subtitle: "Full AirPower Station with integrated BESS",
    description: "1.5MW output, powers up to 400 homes/day. Stationary or truck-portable infrastructure.",
    icon: Container,
    category: "Industrial",
    specifications: [
      { label: "Power Output", value: "1.5MW" },
      { label: "Daily Capacity", value: "400 homes" },
      { label: "Battery Storage", value: "Optional BESS" },
      { label: "Runtime", value: "16+ hours continuous" }
    ],
    features: ["Industrial scale", "BESS integration", "Containerized", "Grid-level power"],
    visual: "Container + battery racks visible",
    categoryColor: "bg-blue-500"
  },
  {
    id: 3,
    title: "Trailer Unit / Mobile Hub",
    subtitle: "Scalable tow-behind solution",
    description: "Suited for rural energy access or event/grid support. Flexible format, drop-and-deploy.",
    icon: Move,
    category: "Portable",
    specifications: [
      { label: "Deployment", value: "Drop-and-deploy" },
      { label: "Power Range", value: "50kW - 500kW" },
      { label: "Mobility", value: "Standard trailer hitch" },
      { label: "Setup Time", value: "< 30 minutes" }
    ],
    features: ["Tow-behind design", "Event support", "Rural access", "Flexible scaling"],
    visual: "Trailer configuration",
    categoryColor: "bg-green-500"
  },
  {
    id: 4,
    title: "BESS-Only Module",
    subtitle: "1.5MW battery storage unit",
    description: "Rechargeable from generator or grid. Enables silent, stored energy on demand.",
    icon: Battery,
    category: "Storage",
    specifications: [
      { label: "Storage Capacity", value: "1.5MW" },
      { label: "Charging Source", value: "CAE or Grid" },
      { label: "Output Mode", value: "Silent operation" },
      { label: "Cycle Life", value: "10,000+ cycles" }
    ],
    features: ["Silent operation", "Grid charging", "Long cycle life", "Modular design"],
    visual: "Separate BESS unit visual",
    categoryColor: "bg-purple-500"
  },
  {
    id: 5,
    title: "Demo Van / CAE Prototype",
    subtitle: "Functional vehicle running CAE",
    description: "Proof of concept for future air-powered mobility. Included as reference visual, not for sale.",
    icon: Car,
    category: "Prototype",
    specifications: [
      { label: "Purpose", value: "Proof of concept" },
      { label: "Technology", value: "CAE-powered vehicle" },
      { label: "Status", value: "Demonstration only" },
      { label: "Future", value: "Air-powered mobility" }
    ],
    features: ["Proof of concept", "CAE-powered", "Future mobility", "Technology demo"],
    visual: "Van GIF or static still",
    categoryColor: "bg-cyan-500"
  }
];

export default function ModularConfigurations() {
  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Flexible Deployment
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Modular Power,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Anywhere You Need It
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Multiple deployment formats. Same breakthrough system.
          </p>
          
          {/* Intro Copy */}
          <div className="mt-8 p-6 rounded-xl bg-background/50 border border-border">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The AirPower Station isn't just one product — it's a flexible energy platform that adapts to your mission. 
              Whether truck-mounted, containerized, or trailer-based, each unit delivers our full CAE + generator system, 
              with optional BESS for battery storage.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              From mobile operations to permanent grid support, AirPower's modular design means clean, scalable power — 
              wherever it's needed most.
            </p>
          </div>
        </div>

        {/* Configurations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {configurations.map((config) => {
            const Icon = config.icon;
            return (
              <Card 
                key={config.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-background/50 backdrop-blur-sm"
              >
                {/* Header */}
                <div className="relative">
                  {/* Visual placeholder */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground px-4">
                          {config.visual}
                        </p>
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${config.categoryColor} text-white border-0`}>
                        {config.category}
                      </Badge>
                    </div>
                    
                    {/* Configuration number */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {config.id}
                      </span>
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Title and description */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-xl leading-tight">
                          {config.title}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {config.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {config.description}
                    </p>
                  </div>
                  
                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-3">
                    {config.specifications.map((spec, index) => (
                      <div key={index} className="space-y-1">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {spec.label}
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {config.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="border-t border-border pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-blue-500/10">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">Deployment Formats</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-green-500/10">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-foreground">400+</div>
              <div className="text-sm text-muted-foreground">Homes Powered Daily</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-purple-500/10">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-foreground">∞</div>
              <div className="text-sm text-muted-foreground">Deployment Locations</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-orange-500/10">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-foreground">15min</div>
              <div className="text-sm text-muted-foreground">Min Setup Time</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground mb-8">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm font-medium">Choose your deployment strategy</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
} 