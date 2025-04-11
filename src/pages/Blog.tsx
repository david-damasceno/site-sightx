
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog SightX</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dicas, análises e insights sobre business intelligence, análise de dados
                e como impulsionar seu negócio com decisões baseadas em dados.
              </p>
            </div>
            
            <div className="max-w-md mx-auto mb-12 relative">
              <Input
                type="text"
                placeholder="Pesquise por artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 shadow-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Nenhum artigo encontrado</h3>
                <p className="text-gray-500">Tente buscar com outros termos ou explore nossos artigos recentes.</p>
                <Button 
                  onClick={() => setSearchTerm("")}
                  className="mt-4 bg-sightx-purple hover:bg-sightx-purple/90"
                >
                  Limpar pesquisa
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <Link to={`/blog/${post.slug}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-sightx-purple transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-sightx-purple rounded-full flex items-center justify-center text-white">
              {post.author.name.charAt(0)}
            </div>
            <span className="text-sm font-medium text-gray-700 ml-2">
              {post.author.name}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
