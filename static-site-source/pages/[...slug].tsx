import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';

interface PageProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    title?: string;
    description?: string;
  };
}

export default function MarkdownPage({ mdxSource, frontMatter }: PageProps) {
  return (
    <Layout>
      <div className="px-4 py-8">
        <article className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          {frontMatter.title && (
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {frontMatter.title}
            </h1>
          )}
          {frontMatter.description && (
            <p className="text-xl text-gray-600 mb-6">
              {frontMatter.description}
            </p>
          )}
          <div className="prose prose-lg">
            <MDXRemote {...mdxSource} />
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  
  function getAllMarkdownFiles(dir: string, baseDir: string = dir): string[] {
    const files: string[] = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...getAllMarkdownFiles(fullPath, baseDir));
      } else if (item.endsWith('.md')) {
        const relativePath = path.relative(baseDir, fullPath);
        files.push(relativePath);
      }
    }

    return files;
  }

  const markdownFiles = getAllMarkdownFiles(pagesDirectory);
  const paths = markdownFiles.map((file) => {
    const slug = file
      .replace(/\.md$/, '')
      .split(path.sep);
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[];
  const filePath = path.join(process.cwd(), 'pages', ...slug) + '.md';

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};
