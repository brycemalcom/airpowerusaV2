"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye } from "lucide-react";
import { useState } from "react";

// Video data - you can update these with your actual video files and metadata
const videos = [
  {
    id: 1,
    title: "AirPower Station 20ft Unit Walkthrough",
    description: "Complete walkthrough of the 20-foot AirPower Station showcasing compact setup, easy panel operations, and remarkably quiet generator operation.",
    src: "/media/videos/airpowerstation.mp4",
    thumbnail: "/media/videos/airpowerstation.mp4", // Using video itself for thumbnail
    thumbnailType: "video", // video or image
    duration: "3:45", // Update with actual duration
    category: "Product Demo",
    views: "2.8K"
  },
  {
    id: 2,
    title: "AirPower CAE Start-Up & Power Demonstration",
    description: "Watch the AirPower Compressed Air Engine come online in our controlled test environment. This demo features full system start-up, cold air exhaust venting at -20°C, and sequential activation of high-output industrial lighting—proof of the platform's rapid response, stable output, and clean, reliable power delivery.",
    src: "/media/videos/cae_startup2.mp4",
    thumbnail: "/media/videos/cae_startup2.mp4", // Using video thumbnail - encoding fixed!
    thumbnailType: "video", // video or image
    duration: "4:12", // Update with actual duration
    category: "Technology",
    views: "1.9K"
  },
  {
    id: 3,
    title: "Compact AirPower Unit — Scaled-Down System Demonstration",
    description: "Step inside our French R&D facility for a demonstration of the scaled-down AirPower CAE platform. This compact unit delivers the same zero-emission performance in a reduced footprint—running quietly, powering industrial loads, and producing -35°C cold air exhaust for versatile applications from mobile power to microgrid deployment.",
    src: "/media/videos/cae_rd.mp4",
    thumbnail: "/media/videos/cae_rd.mp4", // Using video thumbnail - encoding fixed!
    thumbnailType: "video", // video or image
    duration: "5:23", // Update with actual duration
    category: "R&D",
    views: "1.5K"
  },
  {
    id: 4,
    title: "AirPower Vehicle Integration — Engine Build & Field Test",
    description: "Go behind the scenes of our prototype vehicle integration. Watch the complete CAE installation process—engine assembly, component integration, and full vehicle rebuild—followed by real-world test drive. See how our zero-emission technology delivers seamless power and whisper-quiet operation on the road.",
    src: "/media/videos/airpower_prototype.mp4",
    thumbnail: "/media/videos/airpower_prototype.mp4", // Using video itself for thumbnail
    thumbnailType: "video", // video or image
    duration: "6:30", // Update with actual duration
    category: "Field Testing",
    views: "3.2K"
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Video Content
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Video
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
              Gallery
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
            Watch our technology in action with full demonstrations, technical overviews, and real-world deployments.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card 
              key={video.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="aspect-video relative bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                {video.thumbnailType === "video" ? (
                  <video
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                    onLoadedMetadata={(e) => {
                      const videoEl = e.currentTarget;
                      const seekTime = video.id === 4 ? 10 : 1;
                      setTimeout(() => {
                        videoEl.currentTime = seekTime;
                      }, 100);
                    }}
                    onSeeked={(e) => {
                      // Force a repaint after seeking
                      const videoEl = e.currentTarget;
                      videoEl.style.opacity = '0.99';
                      setTimeout(() => {
                        videoEl.style.opacity = '1';
                      }, 10);
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                    {video.category}
                  </Badge>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {video.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {video.views} views
                  </div>
                  <div className="text-primary font-medium">
                    Watch Video →
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>

              {/* Video */}
              <div className="aspect-video">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedVideo.description}
                    </p>
                  </div>
                  <Badge variant="outline" className="ml-4">
                    {selectedVideo.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 