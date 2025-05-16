
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Tag, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTag = searchParams.get("tag") || "";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState(initialTag);
  
  // Extrair todas as tags únicas dos posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = activeTag === "" || 
      post.tags.some(tag => tag.toLowerCase() === activeTag.toLowerCase());
    
    return matchesSearch && matchesTag;
  });
  
  const handleTagClick = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag("");
      searchParams.delete("tag");
      setSearchParams(searchParams);
    } else {
      setActiveTag(tag);
      setSearchParams({ tag });
    }
    setSearchTerm("");
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setActiveTag("");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-sightx-purple to-sightx-purple/80 py-16 md:py-24 text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog SightX</h1>
              <p className="text-lg max-w-2xl mx-auto text-white/90">
                Dicas, análises e insights sobre business intelligence, análise de dados
                e como impulsionar seu negócio com decisões baseadas em dados.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 py-12">
          <div className="container-custom">
            <div className="max-w-md mx-auto mb-8 relative">
              <Input
                type="text"
                placeholder="Pesquise por artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 shadow-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Filtrar por tópicos:</h3>
                {(activeTag || searchTerm) && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm flex items-center text-gray-600 hover:text-sightx-purple"
                  >
                    Limpar filtros <X size={16} className="ml-1" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeTag === tag 
                      ? "bg-sightx-purple text-white" 
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Nenhum artigo encontrado</h3>
                <p className="text-gray-500">Tente buscar com outros termos ou explore nossos artigos recentes.</p>
                <Button 
                  onClick={clearFilters}
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
        
        <div className="bg-white py-16">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Não encontrou o que procurava?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e compartilhe suas dúvidas ou sugestões de temas para os próximos artigos.
            </p>
            <Button 
              className="bg-sightx-purple hover:bg-sightx-purple/90"
              size="lg"
            >
              Entrar em contato
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border border-gray-100 h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3 flex-wrap">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-sightx-purple transition-colors text-gray-800">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
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
      <Link 
        to={`/blog/${post.slug}`}
        className="block bg-gray-50 text-center py-3 text-sm font-medium text-sightx-purple hover:bg-gray-100 transition-colors border-t border-gray-100"
      >
        Continuar lendo →
      </Link>
    </div>
  );
};

export default Blog;
