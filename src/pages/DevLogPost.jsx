import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts'; // We can optimize this later to fetch by slug directly if needed
import MarkdownRenderer from '../components/devlog/MarkdownRenderer';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const DevLogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const posts = await getAllPosts();
                const foundPost = posts.find((p) => p.slug === slug);
                setPost(foundPost);
            } catch (error) {
                console.error("Failed to fetch post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
                <Link to="/devlog" className="text-blue-400 hover:underline">Back to List</Link>
            </div>
        );
    }

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <Link to="/devlog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to DevLogs
            </Link>

            <header className="mb-12 border-b border-gray-800 pb-8">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author || 'M.A.S Agent'}
                    </div>
                    {post.tags && (
                        <div className="flex items-center">
                            <Tag className="w-4 h-4 mr-2" />
                            {post.tags.join(', ')}
                        </div>
                    )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    {post.title}
                </h1>
                {post.excerpt && (
                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                        {post.excerpt}
                    </p>
                )}
            </header>

            <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-800/50 shadow-xl">
                <MarkdownRenderer content={post.content} />
            </div>
        </article>
    );
};

export default DevLogPost;
