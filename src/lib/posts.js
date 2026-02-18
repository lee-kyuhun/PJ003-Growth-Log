import grayMatter from 'gray-matter';

export async function getAllPosts() {
    const modules = import.meta.glob('../../tasks/**/*.md', { query: '?raw', import: 'default' });
    const posts = [];

    for (const path in modules) {
        const rawContent = await modules[path]();
        const { data, content } = grayMatter(rawContent);

        // Generate slug from file path (remove ../../tasks/ and extension)
        // Example: ../../tasks/01_Init/task.md -> 01_init
        // Example: ../../tasks/03_Home/task.md -> 03_home
        const slug = path
            .replace('../../tasks/', '')
            .replace('/task.md', '') // specialized for task.md files
            .replace('.md', '')
            .replace(/\//g, '_')
            .toLowerCase();

        // Infer title from directory name if not present in frontmatter
        const dirName = path.split('/').slice(-2, -1)[0];
        const inferredTitle = dirName ? dirName.replace(/_/g, ' ') : 'Untitled';

        posts.push({
            slug,
            title: data.title || inferredTitle,
            date: data.date || new Date().toISOString(), // Fallback date
            excerpt: data.excerpt || content.slice(0, 100) + '...',
            content,
            ...data,
        });
    }

    // Sort by name (which usually includes number like 01, 02)
    return posts.sort((a, b) => a.slug.localeCompare(b.slug));
}

export async function getPostBySlug(slug) {
    const posts = await getAllPosts();
    return posts.find((post) => post.slug === slug);
}
