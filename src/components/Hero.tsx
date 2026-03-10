"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-background">
      {/* Custom Abstract Grain Background */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-full opacity-60 dark:opacity-40 blur-3xl rounded-full bg-linear-to-b from-indigo-500/10 to-transparent" />
        <img
          src="/images/premium-hero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-soft-light"
        />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400 mb-10"
        >
          <Sparkles size={14} className="text-indigo-600" />
          <span>Announcing TeachGrid Spark for Enterprises</span>
          <ArrowRight size={14} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Your next breakthrough,<br />powered by AI
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            TeachGrid is where powerful AI meets practical educational solutions — so you can teach smarter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">
              Request a demo
            </button>
            <button className="text-slate-900 dark:text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border-b border-transparent hover:border-slate-200">
              Explore products
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 relative max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row h-full min-h-[450px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50">
            {/* Left Panel: Branded TeachGrid ROI Analysis (2/3 Width) */}
            <div className="flex-[2] relative overflow-hidden border-r border-slate-200/10 dark:border-slate-800/10">
              <img
                src="/images/hero_roi_branded.png"
                alt="TeachGrid AI Metrics"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Right Panel: Branded Educator Success Portrait (1/3 Width) */}
            <div className="flex-[1] relative overflow-hidden">
              <img
                src="/images/hero_portrait_branded.png"
                alt="TeachGrid Educator Success"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
