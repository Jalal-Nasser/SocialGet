import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Instagram Growth in 2024",
    excerpt: "Learn the latest strategies to boost your Instagram followers and engagement this year.",
    date: "October 26, 2024",
    image: "https://via.placeholder.com/400x250?text=Instagram+Blog",
  },
  {
    id: 2,
    title: "How to Master YouTube SEO for More Views",
    excerpt: "Discover key techniques to optimize your YouTube videos for higher search rankings.",
    date: "October 20, 2024",
    image: "https://via.placeholder.com/400x250?text=YouTube+Blog",
  },
  {
    id: 3,
    title: "TikTok Trends You Can't Afford to Miss",
    excerpt: "Stay ahead of the curve with these trending TikTok strategies for viral content.",
    date: "October 15, 2024",
    image: "https://via.placeholder.com/400x250?text=TikTok+Blog",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">Our Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Stay updated with the latest social media trends, tips, and news.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">{post.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-brand-primary-500 hover:underline font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;