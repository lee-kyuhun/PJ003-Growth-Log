import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            {/* Image Section with Overlay */}
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* AI Badge - Floating */}
                <div className="absolute top-3 right-3 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-blue-500/30 shadow-lg">
                        <Cpu className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                        <span className="text-xs font-bold text-blue-100">AI {project.aiContribution}%</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-6 z-20 -mt-10">
                <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-4 border border-white/5 shadow-inner">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white text-gray-400 transition-all duration-300"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Status & Links Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <div className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-md border ${project.status === 'Completed'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                                }`} />
                            {project.status}
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={project.links.github}
                                className="text-gray-400 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View Code"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Live Demo"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
