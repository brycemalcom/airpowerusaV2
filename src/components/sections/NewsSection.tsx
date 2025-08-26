"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, FileText } from "lucide-react";

// Placeholder news data - professional "coming soon" placeholders
const pressReleases = [
  {
    id: 1,
    title: "Press Releases",
    excerpt: "Official company announcements, product launches, and major milestones will be featured here.",
    date: "Coming Soon",
    category: "Official Updates",
    link: "#",
    isPlaceholder: true
  },
  {
    id: 2,
    title: "Company News", 
    excerpt: "Stay updated on AirPower USA's latest developments, partnerships, and breakthrough achievements.",
    date: "Coming Soon",
    category: "Company News",
    link: "#",
    isPlaceholder: true
  },
  {
    id: 3,
    title: "Product Announcements",
    excerpt: "Be the first to know about new product releases, technical innovations, and deployment updates.",
    date: "Coming Soon",
    category: "Product Updates",
    link: "#",
    isPlaceholder: true
  }
];

const mediaCoverage = [
  {
    id: 1,
    title: "Industry Publications",
    publication: "Coming Soon",
    date: "Stay Tuned",
    excerpt: "Coverage from leading energy and technology publications will be featured here as our story unfolds.",
    link: "#",
    isPlaceholder: true
  },
  {
    id: 2,
    title: "Expert Analysis",
    publication: "Coming Soon", 
    date: "Stay Tuned",
    excerpt: "In-depth analysis and commentary from industry experts and thought leaders in clean energy.",
    link: "#",
    isPlaceholder: true
  },
  {
    id: 3,
    title: "Media Interviews",
    publication: "Coming Soon",
    date: "Stay Tuned", 
    excerpt: "Interviews with our leadership team and technical experts as featured in various media outlets.",
    link: "#",
    isPlaceholder: true
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
              <Card key={release.id} className={`group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${release.isPlaceholder ? 'bg-muted/30 border-dashed border-2' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={release.isPlaceholder ? "secondary" : "outline"} className={release.isPlaceholder ? "opacity-60" : ""}>
                      {release.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {release.date}
                    </div>
                  </div>
                  <CardTitle className={`line-clamp-2 transition-colors ${release.isPlaceholder ? 'text-muted-foreground' : 'group-hover:text-primary'}`}>
                    {release.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {release.excerpt}
                  </CardDescription>
                  {release.isPlaceholder ? (
                    <div className="flex items-center text-sm text-muted-foreground font-medium">
                      <FileText className="w-4 h-4 mr-2" />
                      Coming Soon
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FileText className="w-4 h-4 mr-2" />
                      Read Full Release
                    </Button>
                  )}
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
              <Card key={article.id} className={`group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${article.isPlaceholder ? 'bg-muted/30 border-dashed border-2' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={`${article.isPlaceholder ? 'bg-purple-500/5 text-purple-400/60 border-purple-500/10 opacity-60' : 'bg-purple-500/10 text-purple-400 border-purple-500/20'}`}>
                      External
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className={`line-clamp-2 transition-colors ${article.isPlaceholder ? 'text-muted-foreground' : 'group-hover:text-primary'}`}>
                    {article.title}
                  </CardTitle>
                  <CardDescription className={`font-medium ${article.isPlaceholder ? 'text-muted-foreground/60' : 'text-primary'}`}>
                    {article.publication}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  {article.isPlaceholder ? (
                    <div className="flex items-center text-sm text-muted-foreground font-medium">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Stay Tuned
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Article
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
} 