import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SiteGallery from '../../components/feature/SiteGallery';

// Gallery: albums in src/content/gallery.json, field-journal strip layout in forest green + lime.
export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery | Edwards Hamlet Regeneration Centre';
  }, []);
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <section className="pt-36 pb-16 px-4 bg-[#081C15] text-white">
        <div className="max-w-6xl mx-auto">
          <p className="font-display uppercase tracking-[0.3em] text-sm text-[#70E000]">Field journal</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 max-w-3xl">The Hamlet in pictures</h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">Soil, seeds and the people regenerating Busoga. Tap any photo to see it full size.</p>
        </div>
      </section>
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <SiteGallery
            note="These pictures are illustrations until the Centre's own photos are added."
            theme={{ layout: 'strip', ink: '#081C15', muted: '#2D6A4F', accent: '#1B4332', accentInk: '#ffffff', tabBg: '#d8f3dc', radius: '0.5rem', headingClass: 'font-display' }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
