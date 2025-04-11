
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, MessageSquare, Share2, Bookmark, BookmarkCheck, ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import Markdown from "@/components/Markdown";
import RelatedPosts from "@/components/RelatedPosts";
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.slug === slug);
  const [bookmarked, setBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add dynamic meta tags for SEO
    if (post) {
      document.title = `${post.title} | Blog SightX`;
      
      // This would work in a real application with SSR, 
      // but for our demo it's just to demonstrate the practice
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }

    // Set up scroll event listener for the scroll-to-top button and progress bar
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const headings = document.querySelectorAll('h2, h3');
      let currentSection = "";
      
      headings.forEach(heading => {
        const top = heading.getBoundingClientRect().top;
        if (top < 100) {
          currentSection = heading.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, slug]);
  
  // Handling bookmarking functionality
  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    if (!bookmarked) {
      toast({
        title: "Artigo salvo!",
        description: "Este artigo foi adicionado aos seus favoritos.",
      });
    } else {
      toast({
        title: "Artigo removido",
        description: "Este artigo foi removido dos seus favoritos.",
      });
    }
  };
  
  // Handling share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link deste artigo foi copiado para sua área de transferência.",
      });
    }
  };
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  // Comment submit handler
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        author: "Você",
        text: commentText,
        date: new Date(),
      };
      setComments([newComment, ...comments]);
      setCommentText("");
      toast({
        title: "Comentário enviado!",
        description: "Seu comentário foi publicado com sucesso.",
      });
    }
  };
  
  if (!post) {
    // Redirecting to the blog page if the article is not found
    useEffect(() => {
      navigate("/blog");
    }, [navigate]);
    
    return null;
  }
  
  // Find related posts based on tags
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);
    
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  
  // Calculate reading progress
  const ReadingProgressBar = () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.scrollY;
        const percent = (scrollTop / documentHeight) * 100;
        setProgress(percent);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-sightx-purple to-sightx-green"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgressBar />
      <Header />
      <main className="flex-1 pt-24 md:pt-32">
        <article>
          {/* Hero section with cover image */}
          <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105"
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl font-playfair leading-tight animate-fade-in">{post.title}</h1>
              </div>
            </div>
          </div>
          
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center text-white text-lg font-bold">
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
                {/* Social sharing buttons */}
                <div className="flex gap-2 mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-gray-100"
                    onClick={handleBookmark}
                  >
                    {bookmarked ? <BookmarkCheck size={16} className="text-sightx-purple" /> : <Bookmark size={16} />}
                    {bookmarked ? "Salvo" : "Salvar"}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-gray-100"
                    onClick={handleShare}
                  >
                    <Share2 size={16} />
                    Compartilhar
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-gray-100"
                    onClick={() => setCommentOpen(!commentOpen)}
                  >
                    <MessageSquare size={16} />
                    Comentar
                  </Button>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <Markdown content={post.content} />
                </div>
                
                {/* Comment section */}
                <div className={`mt-10 ${commentOpen ? "block" : "hidden"}`}>
                  <h3 className="text-xl font-semibold mb-4">Deixe seu comentário</h3>
                  <form onSubmit={handleCommentSubmit} className="mb-6">
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sightx-purple/30 focus:border-sightx-purple/50 h-32"
                      placeholder="O que você pensa sobre este artigo?"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Button 
                      type="submit" 
                      className="mt-2 bg-sightx-purple hover:bg-sightx-purple/90"
                    >
                      Publicar comentário
                    </Button>
                  </form>
                  
                  {comments.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">Comentários ({comments.length})</h4>
                      {comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-sightx-purple/80 flex items-center justify-center text-white text-sm">
                                {comment.author[0]}
                              </div>
                              <span className="ml-2 font-medium">{comment.author}</span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(comment.date).toLocaleString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-700">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                <div className="sticky top-24">
                  {/* Author bio card */}
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-6">
                    <h3 className="text-xl font-bold mb-4">Sobre o autor</h3>
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-sightx-purple to-sightx-green flex items-center justify-center text-white text-xl font-bold">
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
                  
                  {/* Newsletter signup */}
                  <div className="bg-gradient-to-r from-sightx-purple/10 to-sightx-green/10 rounded-xl p-6 shadow-sm mb-6">
                    <h3 className="text-xl font-bold mb-3">Newsletter SightX</h3>
                    <p className="text-gray-600 mb-4">
                      Receba novidades, dicas e conteúdos exclusivos sobre análise de dados e IA para negócios.
                    </p>
                    <form className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Seu melhor e-mail" 
                        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sightx-purple/50"
                        required
                      />
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-sightx-purple to-sightx-green text-white hover:opacity-90"
                      >
                        Inscrever-se
                      </Button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">
                      Não enviamos spam. Você pode cancelar a inscrição a qualquer momento.
                    </p>
                  </div>
                  
                  {/* Table of contents */}
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hidden lg:block">
                    <h3 className="text-lg font-bold mb-3">Neste artigo</h3>
                    <nav className="toc">
                      <ol className="space-y-2">
                        {post.content.match(/^## (.*$)/gm)?.map((heading, index) => {
                          const title = heading.replace('## ', '');
                          const slug = title.toLowerCase().replace(/\s+/g, '-');
                          return (
                            <li key={index}>
                              <a 
                                href={`#${slug}`}
                                className={`text-sm hover:text-sightx-purple transition-colors ${
                                  activeSection === slug ? 'text-sightx-purple font-medium' : 'text-gray-600'
                                }`}
                              >
                                {title}
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </nav>
                  </div>
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
        
        {/* Scroll to top button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-sightx-purple text-white p-3 rounded-full shadow-lg hover:bg-sightx-purple/90 transition-all z-20 animate-fade-in"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
