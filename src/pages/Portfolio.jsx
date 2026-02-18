import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/portfolio/ProjectCard';
import { Sparkles } from 'lucide-react';
import projectsData from '../data/projects.json';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    // Background Glow Effect
    const BackgroundGlow = () => (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
        </div>
    );

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.tags.includes(filter));

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            <BackgroundGlow />

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "out" }}
                className="text-center mb-20"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-md rounded-full border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 shadow-lg shadow-blue-500/5">
                    <Sparkles className="w-4 h-4" />
                    <span>AI-Powered Creations</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                    Building with <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                        Superintelligence
                    </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    A curated gallery of projects exploring the symbiotic relationship between
                    human creativity and artificial intelligence.
                </p>
            </motion.div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center text-gray-500 py-32">
                    <p className="text-lg">No projects found. Time to build something new!</p>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
