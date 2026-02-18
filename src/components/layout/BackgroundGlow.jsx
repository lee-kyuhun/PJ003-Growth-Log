import React from 'react';

const BackgroundGlow = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Left - Blue */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />

            {/* Bottom Right - Purple */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />

            {/* Center Subtle - Cyan (New Addition) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen" />
        </div>
    );
};

export default BackgroundGlow;
