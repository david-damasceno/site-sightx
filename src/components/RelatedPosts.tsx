
import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blog-posts";
import { Calendar, ArrowRight } from "lucide-react";

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link 
          key={post.id} 
          to={`/blog/${post.slug}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 group"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
            />
          </div>
          <div className="p-5">
            <div className="flex gap-2 mb-2">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-sightx-purple transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-gray-500">
                <Calendar size={14} className="mr-1" />
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                })}
              </div>
              <span className="text-sightx-purple flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                Ler mais <ArrowRight size={16} className="ml-1" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedPosts;
