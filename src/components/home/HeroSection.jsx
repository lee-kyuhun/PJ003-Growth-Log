import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            {/* Background Effects are now handled by global BackgroundGlow component in Home page, 
                but we keep a subtle grid here for texture */}
            <div className="absolute inset-0 bg-grid-slate-800/[0.05] -z-10" />

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-[1px]"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full blur-[1px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
                    <Sparkles size={14} />
                    <span>AI-Native Workflow</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                    <span className="text-white">Meta</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                        -Log
                    </span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-2xl relative z-10"
            >
                <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed">
                    Tracking the evolution of Multi-Agent Systems, <br className="hidden md:block" />
                    <span className="text-blue-200 font-medium">one interaction at a time.</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 relative z-10"
            >
                <Link to="/portfolio" className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1">
                    Explore Portfolio
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/devlog" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all hover:-translate-y-1 backdrop-blur-md">
                    Read DevLogs
                </Link>
            </motion.div>
        </div>
    );
};

export default HeroSection;
