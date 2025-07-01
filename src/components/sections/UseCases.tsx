"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { 
  Leaf,
  Server,
  Heart,
  Home,
  Ship,
  HardHat,
  Car
} from "lucide-react";

const applications = [
  {
    id: 1,
    title: "Grow Facilities",
    subtitle: "Climate-controlled indoor agriculture",
    description: "Continuous power and cold air output ideal for high-efficiency grow operations and environmental control.",
    icon: Leaf,
    category: "Agriculture",
    visual: {
      type: "image",
      src: "/media/images/grow-op.png",
      alt: "Indoor grow facility with AirPower Station providing climate control"
    },
    categoryColor: "bg-green-500"
  },
  {
    id: 2,
    title: "Data Centers",
    subtitle: "Always-on infrastructure for AI, crypto, and cloud computing",
    description: "Delivers resilient off-grid power with integrated cooling to support energy-intensive workloads including AI labs, crypto mining operations, and high-performance computing clusters.",
    icon: Server,
    category: "Technology",
    visual: {
      type: "image",
      src: "/media/images/data_center.png",
      alt: "Data center facility powered by AirPower Station technology"
    },
    categoryColor: "bg-blue-500"
  },
  {
    id: 3,
    title: "Disaster Relief",
    subtitle: "Mobile deployment in critical zones",
    description: "Power up emergency operations with off-grid, mobile-ready energy that can be deployed by truck or dropped on-site.",
    icon: Heart,
    category: "Emergency",
    visual: {
      type: "image",
      src: "/media/images/disaster-relief.png",
      alt: "Emergency response operation powered by mobile AirPower Station"
    },
    categoryColor: "bg-red-500"
  },
  {
    id: 4,
    title: "Remote Communities",
    subtitle: "Independence from unreliable grids",
    description: "Ideal for tribal lands, island nations, and rural sites where clean, independent energy matters most.",
    icon: Home,
    category: "Community",
    visual: {
      type: "image",
      src: "/media/images/off-grid.png",
      alt: "Remote off-grid community powered by AirPower Station"
    },
    categoryColor: "bg-purple-500"
  },
  {
    id: 5,
    title: "Marine Applications",
    subtitle: "Power on water",
    description: "Compressed air engine proves real-world marine viability — scalable for outboard or vessel propulsion.",
    icon: Ship,
    category: "Marine",
    visual: "Pontoon with outboard CAE",
    categoryColor: "bg-cyan-500"
  },
  {
    id: 6,
    title: "Off-Grid Construction",
    subtitle: "Jobsite-ready, plug-and-play energy",
    description: "Portable, rugged, and always-on. Perfect for microgrids, utility installations, or energy-as-a-service models.",
    icon: HardHat,
    category: "Industrial",
    visual: "Container + construction site",
    categoryColor: "bg-orange-500"
  },
  {
    id: 7,
    title: "EV Infrastructure",
    subtitle: "Future-forward charging solutions",
    description: "Deployable systems to power EV charging hubs — without waiting for grid expansion.",
    icon: Car,
    category: "Transportation",
    visual: {
      type: "image",
      src: "/media/images/ev-charging.png",
      alt: "EV charging station powered by AirPower Station technology"
    },
    categoryColor: "bg-emerald-500"
  }
];

const categories = [...new Set(applications.map(app => app.category))];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Real-World Applications
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Powering Real-World
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Possibilities
            </span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            From farms to AI labs — clean power, anywhere it&apos;s needed.
          </p>
          
          {/* Intro Copy */}
          <div className="mt-8 p-6 rounded-xl bg-card/50 border border-border">
            <p className="text-lg leading-relaxed text-muted-foreground">
              AirPower delivers high-capacity, zero-emission energy across industries. Whether powering 
              infrastructure, operations, or innovation, the AirPower Station makes clean energy accessible 
              in places traditional power can&apos;t reach.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            All Industries
          </Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2 text-sm font-medium">
              {category}
            </Badge>
          ))}
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <Card 
                key={app.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border bg-card/50 backdrop-blur-sm"
              >
                {/* Visual Header */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Conditional rendering for image vs placeholder */}
                  {typeof app.visual === 'object' && app.visual.type === 'image' ? (
                    <Image
                      src={app.visual.src}
                      alt={app.visual.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground px-4">
                          {typeof app.visual === 'string' ? app.visual : 'Coming Soon'}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`${app.categoryColor} text-white border-0`}
                    >
                      {app.category}
                    </Badge>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* ID number */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {app.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg leading-tight">
                        {app.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {app.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                  
                  {/* Benefits indicator */}
                  <div className="flex items-center space-x-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-xs text-muted-foreground">Zero Emissions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-xs text-muted-foreground">Cold Air Cooling</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm font-medium">Ready to deploy clean energy?</span>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
} 