import React from 'react';
import { Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ValueProps from '@/components/ValueProps';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import FeatureGrid from '@/components/FeatureGrid';
import IndustryCarousel from '@/components/IndustryCarousel';
import PlatformSection from '@/components/PlatformSection';
import PlatformShowcase from '@/components/PlatformShowcase';
import SuccessStory from '@/components/SuccessStory';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <InteractiveShowcase />
        <ValueProps />
        <IndustryCarousel />

        <Pricing />

        {/* Final CTA */}
        <section className="relative py-32 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
          {/* Grain Background */}
          <div className="absolute inset-0 -z-10 opacity-[0.2] dark:opacity-[0.1] grayscale pointer-events-none">
            <img
              src="/images/premium-hero.png"
              alt=""
              className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay"
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 leading-[1.1]">
              Ready to modernize your <br className="hidden md:block" /> learning infrastructure?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-primary px-12 py-5 text-xl shadow-2xl shadow-indigo-500/30">Get Started Now</button>
              <button className="btn-ghost px-12 py-5 text-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
