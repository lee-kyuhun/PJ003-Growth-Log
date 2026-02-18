import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon, trend }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-slate-800/50 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10 flex items-start justify-between">
                <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">{title}</p>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 group-hover:from-blue-100 group-hover:to-blue-300 transition-all">
                        {value}
                    </h3>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                </div>
            </div>

            {trend !== null && (
                <div className="relative z-10 mt-4 flex items-center text-xs">
                    <span className={`font-bold px-2 py-1 rounded-md border ${trend > 0
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}>
                        {trend > 0 ? '+' : ''}{trend}%
                    </span>
                    <span className="ml-2 text-slate-500">vs last week</span>
                </div>
            )}
        </motion.div>
    );
};

export default StatCard;
