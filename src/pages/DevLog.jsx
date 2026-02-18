import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, ArrowRight } from 'lucide-react';

const DevLog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const allPosts = await getAllPosts();
                setPosts(allPosts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                    Development Log
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Documenting the journey of building this platform.
                    Raw thoughts, technical challenges, and milestones.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/devlog/${post.slug}`}
                            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-blue-400 text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                                    Read Log <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DevLog;
