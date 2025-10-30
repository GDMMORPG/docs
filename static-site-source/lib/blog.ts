import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: String(data.date || ''),
        coverImage: data.coverImage || '',
        content,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getLatestBlogPost(): BlogPost | null {
  const posts = getBlogPosts();
  return posts.length > 0 ? posts[0] : null;
}
