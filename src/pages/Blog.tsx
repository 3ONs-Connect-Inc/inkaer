
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Engineering Hiring: Skills Over Degrees",
      excerpt: "Exploring how the engineering industry is shifting towards skill-based hiring and what it means for both engineers and employers.",
      date: "December 15, 2024",
      category: "Industry Insights"
    },
    {
      title: "Building a Strong Engineering Portfolio: Best Practices",
      excerpt: "Learn how to showcase your engineering projects effectively to stand out to potential employers.",
      date: "December 10, 2024",
      category: "Career Advice"
    },
    {
      title: "Peer Review in Engineering: Quality Through Collaboration",
      excerpt: "Understanding the importance of peer review in engineering project evaluation and professional development.",
      date: "December 5, 2024",
      category: "Best Practices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-sora font-bold text-gray-900 mb-6">
                Engineering Insights
              </h1>
              <p className="text-xl text-gray-600 font-sora max-w-3xl mx-auto">
                Latest insights, trends, and best practices in engineering and career development.
              </p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white/70 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-inkaer-blue/10 text-inkaer-blue px-3 py-1 rounded-full text-sm font-sora font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 font-sora text-sm">
                      {post.date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-sora font-bold text-gray-900 mb-3 hover:text-inkaer-blue transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 font-sora leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-inkaer-blue font-sora font-medium hover:underline">
                    Read More →
                  </button>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 font-sora">
                More articles coming soon. Stay tuned for the latest insights!
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Blog;
