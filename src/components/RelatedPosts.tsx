
import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blog-posts";

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
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 h-full"
        >
          <div className="p-4 h-full flex flex-col">
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-3">{post.excerpt}</p>
            <div className="mt-auto flex items-center text-xs text-gray-500">
              <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              <span className="mx-1">•</span>
              <span>{post.readTime} min de leitura</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedPosts;
