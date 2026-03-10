"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PlatformShowcase = () => {
    return (
        <section className="relative py-20 bg-background overflow-hidden">
            {/* Grain Background */}
            <div className="absolute inset-0 -z-10 opacity-[0.1] dark:opacity-[0.05] grayscale pointer-events-none">
                <img
                    src="/images/premium-hero.png"
                    alt=""
                    className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay"
                />
            </div>

            <div className="container mx-auto px-6">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] min-h-[500px] border border-slate-200 dark:border-slate-800 shadow-2xl">
                    {/* Visual Background */}
                    <img
                        src="/images/teachgrid_part1.png"
                        alt="TeachGrid Platform"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Grain Filter Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                </div>
            </div>
        </section>
    );
};

export default PlatformShowcase;
