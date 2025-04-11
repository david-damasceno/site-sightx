
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import Markdown from "@/components/Markdown";
import RelatedPosts from "@/components/RelatedPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    // Rolar para o topo quando o componente montar
    window.scrollTo(0, 0);
    
    // Adicionar meta tags dinâmicas para SEO
    if (post) {
      document.title = `${post.title} | Blog SightX`;
      
      // Isso funcionaria em uma aplicação real com SSR, 
      // mas para nossa demo é apenas para demonstrar a prática
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }
  }, [post, slug]);
  
  if (!post) {
    // Redirecionando para a página de blog se o artigo não for encontrado
    useEffect(() => {
      navigate("/blog");
    }, [navigate]);
    
    return null;
  }
  
  // Encontrar posts relacionados com base nas tags
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);
    
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-32">
        <article>
          {/* Hero section with cover image */}
          <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container-custom">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate("/blog")}
                  className="bg-white/80 backdrop-blur-sm mb-4 hover:bg-white"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Voltar para o blog
                </Button>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">{post.title}</h1>
              </div>
            </div>
          </div>
          
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-12 w-12 rounded-full bg-sightx-purple flex items-center justify-center text-white text-lg font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  {formattedDate}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  {post.readTime} min de leitura
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <Markdown content={post.content} />
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                <div className="sticky top-24 bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Sobre o autor</h3>
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-sightx-purple flex items-center justify-center text-white text-xl font-bold">
                      {post.author.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{post.author.name}</p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Especialista em transformação digital para pequenas e médias empresas, 
                    com foco em análise de dados e inteligência artificial aplicada a negócios.
                  </p>
                  <Button className="w-full bg-sightx-purple hover:bg-sightx-purple/90">
                    Ver todos os artigos
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related posts section */}
          {relatedPosts.length > 0 && (
            <div className="bg-gray-50 py-16">
              <div className="container-custom">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Artigos relacionados</h2>
                <RelatedPosts posts={relatedPosts} />
              </div>
            </div>
          )}
          
          {/* CTA section */}
          <div className="bg-gradient-to-r from-sightx-purple to-sightx-green text-white py-16">
            <div className="container-custom text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Quer transformar os dados da sua empresa em insights valiosos?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Entre para nossa lista de espera e seja um dos primeiros a experimentar 
                a plataforma de análise de dados da SightX.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-sightx-purple hover:bg-gray-100"
                asChild
              >
                <a href="/#waitlist">Entrar para a lista de espera</a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
