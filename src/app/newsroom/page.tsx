import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsroomHero from "@/components/sections/NewsroomHero";
import VideoGallery from "@/components/sections/VideoGallery";
import NewsSection from "@/components/sections/NewsSection";

export default function NewsroomPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <NewsroomHero />
      <VideoGallery />
      <NewsSection />
      <Footer />
    </main>
  );
} 