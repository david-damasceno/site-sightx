
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
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
        >
          <div className="p-6">
            <div className="flex gap-2 mb-3 flex-wrap">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800">{post.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
            <div className="text-sightx-purple font-medium text-sm">Leia mais →</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedPosts;
