import { GetStaticProps } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import { getLatestBlogPost, BlogPost } from '../lib/blog';

interface HomeProps {
  latestPost: BlogPost | null;
  basePath: string;
}

export default function Home({ latestPost, basePath }: HomeProps) {
  // Prepend basePath to image URLs if they're absolute paths
  const getImagePath = (imagePath: string) => {
    if (!imagePath) return imagePath;
    // If it's an absolute path starting with /, prepend basePath
    if (imagePath.startsWith('/') && basePath) {
      return `${basePath}${imagePath}`;
    }
    return imagePath;
  };

  return (
    <Layout>
      <div className="px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to GDMMORPG Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation for the Godot MMORPG Project, including technical design,
            game design, art bible, and audio bible documentation.
          </p>
        </div>

        {latestPost && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Blog Post</h2>
            <div className="border-t pt-4">
              {latestPost.coverImage && (
                <div className="mb-4 relative h-64 w-full">
                  <Image
                    src={getImagePath(latestPost.coverImage)}
                    alt={latestPost.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {latestPost.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{latestPost.date}</p>
              <p className="text-gray-700">{latestPost.description}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Design</h3>
            <p className="text-gray-700">
              Technical specifications, architecture, code standards, and implementation details.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Game Design</h3>
            <p className="text-gray-700">
              Game mechanics, systems design, progression, and gameplay features.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Art Bible</h3>
            <p className="text-gray-700">
              Visual style guide, asset specifications, and artistic direction.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Audio Bible</h3>
            <p className="text-gray-700">
              Sound design principles, music direction, and audio specifications.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latestPost = getLatestBlogPost();
  
  // Get basePath from environment or use default
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = 'docs';
  const customBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const defaultBasePath = isProd ? `/${repoName}` : '';
  const basePath = customBasePath || defaultBasePath;

  return {
    props: {
      latestPost,
      basePath,
    },
  };
};
