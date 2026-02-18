import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-16 bg-gray-900/70 backdrop-blur-md border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <div className="flex-shrink-0">
                    <NavLink to="/" className="text-xl font-bold text-indigo-400 hover:text-indigo-300">
                        Meta-Log
                    </NavLink>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                                    : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/devlog"
                            className={({ isActive }) =>
                                isActive
                                    ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                                    : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            }
                        >
                            DevLog
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                isActive
                                    ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                                    : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            }
                        >
                            Portfolio
                        </NavLink>
                        <NavLink // Placeholder for About
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800"
                                    : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            }
                        >
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
