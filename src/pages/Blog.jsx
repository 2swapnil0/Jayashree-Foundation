import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Meet AutoManage, the best AI management tools',
    date: 'Dec 22, 2023',
    imageUrl: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    title: 'How to earn more money as a wellness coach',
    date: 'Mar 15, 2023',
    imageUrl: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    title: 'The no-fuss guide to upselling and cross selling',
    date: 'Jan 05, 2023',
    imageUrl: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const Blog = () => {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Latest Updates</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <h2 className="text-2xl font-bold text-gray-800 my-2">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;