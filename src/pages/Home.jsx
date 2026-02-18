import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatCard from '../components/dashboard/StatCard';
import BackgroundGlow from '../components/layout/BackgroundGlow';
import { Activity, Layers, Code, Zap } from 'lucide-react';

const Home = () => {
    // Mock Data for Phase 2
    const stats = [
        { title: 'Total Tasks', value: '12', icon: Layers, trend: 15 },
        { title: 'Active Agents', value: '3', icon: Zap, trend: null },
        { title: 'Dev Logs', value: '5', icon: Code, trend: 8 },
    ];

    const activities = [
        { id: 1, date: '2026-02-18', agent: 'PM Agent', message: 'Phase 1 Planning Completed' },
        { id: 2, date: '2026-02-18', agent: 'Designer Agent', message: 'Design Specs V1.0 Released' },
        { id: 3, date: '2026-02-18', agent: 'Developer Agent', message: 'Core Components Implemented' },
    ];

    return (
        <div className="min-h-screen relative text-slate-100 overflow-hidden">
            <BackgroundGlow />

            {/* Hero Section */}
            <HeroSection />

            {/* Dashboard Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                {/* Activity Feed */}
                <div className="bg-slate-800/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-900/20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                            <Activity size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">System Activity</h2>
                            <p className="text-slate-400 text-sm">Real-time updates from the agent swarm</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {activities.map((act) => (
                            <div key={act.id} className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-blue-500/30">
                                <span className="font-mono text-xs text-slate-500 bg-slate-900/50 px-2 py-1 rounded">{act.date}</span>
                                <div className="flex items-center gap-2 min-w-[140px]">
                                    <div className={`w-2 h-2 rounded-full ${act.agent.includes('PM') ? 'bg-purple-400' :
                                            act.agent.includes('Designer') ? 'bg-pink-400' : 'bg-blue-400'
                                        }`} />
                                    <span className={`text-sm font-semibold ${act.agent.includes('PM') ? 'text-purple-300' :
                                            act.agent.includes('Designer') ? 'text-pink-300' : 'text-blue-300'
                                        }`}>
                                        {act.agent}
                                    </span>
                                </div>
                                <span className="text-slate-300 group-hover:text-white transition-colors">{act.message}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
