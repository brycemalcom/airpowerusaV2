"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, FileText, Newspaper } from "lucide-react";

// Placeholder news data - you can replace with real content
const pressReleases = [
  {
    id: 1,
    title: "AirPower USA Announces Revolutionary Compressed Air Engine Technology",
    excerpt: "Company unveils breakthrough clean energy platform capable of generating power from ambient air with zero emissions.",
    date: "2024-01-15",
    category: "Product Launch",
    link: "#"
  },
  {
    id: 2,
    title: "Military Partnership Validates AirPower Technology for Defense Applications",
    excerpt: "Successful field testing demonstrates reliability for critical military operations and remote deployment scenarios.",
    date: "2024-01-08", 
    category: "Partnership",
    link: "#"
  },
  {
    id: 3,
    title: "Investment Round Opens for Clean Energy Innovation",
    excerpt: "Regulation D offering now available for accredited investors to support scaling of containerized power solutions.",
    date: "2024-01-02",
    category: "Investment",
    link: "#"
  }
];

const mediaCoverage = [
  {
    id: 1,
    title: "Clean Energy Breakthrough: Power from Thin Air",
    publication: "Energy Technology Magazine",
    date: "2024-01-20",
    excerpt: "In-depth analysis of AirPower's compressed air engine technology and its potential market impact.",
    link: "#"
  },
  {
    id: 2,
    title: "Military Applications Drive Clean Energy Innovation",
    publication: "Defense Technology Today",
    date: "2024-01-18",
    excerpt: "How AirPower's mobile solutions are addressing critical power needs in remote military operations.",
    link: "#"
  },
  {
    id: 3,
    title: "Off-Grid Power Solutions Gain Investment Interest",
    publication: "CleanTech Investor",
    date: "2024-01-12",
    excerpt: "Market analysis of containerized energy platforms and their role in the clean energy transition.",
    link: "#"
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Press Releases */}
        <div className="mb-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Official Updates
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Press
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Releases
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Latest official announcements and company updates from AirPower USA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release) => (
              <Card key={release.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">
                      {release.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(release.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {release.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {release.excerpt}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FileText className="w-4 h-4 mr-2" />
                    Read Full Release
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              External Coverage
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Media
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
                Coverage
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Industry publications and media outlets covering AirPower's technology and market impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaCoverage.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      External
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {article.publication}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 backdrop-blur-sm">
            <div className="max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Stay Updated with AirPower News
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Get the latest updates on our technology breakthroughs, partnerships, and market developments delivered to your inbox.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500">
                <Newspaper className="w-5 h-5 mr-2" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 