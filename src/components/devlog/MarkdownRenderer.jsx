import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; // or any other style

const MarkdownRenderer = ({ content }) => {
    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    // Customize components if needed
                    a: ({ node, ...props }) => <a {...props} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" />,
                    h1: ({ node, ...props }) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-white" />,
                    h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3 text-white" />,
                    h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold mt-4 mb-2 text-white" />,
                    ul: ({ node, ...props }) => <ul {...props} className="list-disc list-inside my-4 space-y-2" />,
                    ol: ({ node, ...props }) => <ol {...props} className="list-decimal list-inside my-4 space-y-2" />,
                    li: ({ node, ...props }) => <li {...props} className="text-gray-300" />,
                    blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-4 border-gray-500 pl-4 italic my-4 text-gray-400" />,
                    code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        ) : (
                            <code className="bg-gray-800 rounded px-1 py-0.5 text-sm font-mono text-pink-400" {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
