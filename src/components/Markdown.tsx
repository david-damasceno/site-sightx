
import React from "react";

interface MarkdownProps {
  content: string;
}

/**
 * Um componente aprimorado para renderizar markdown como HTML estilizado
 * com suporte a vários formatos de texto e organização
 */
const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  // Função para converter markdown para HTML com estilos melhorados
  const convertMarkdownToHTML = (markdown: string) => {
    let html = markdown;

    // Converter cabeçalhos com estilos tipográficos mais elegantes
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6 text-gray-900 border-b border-gray-200 pb-2">$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-5 text-gray-800">$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-4 text-gray-800">$1</h3>');
    html = html.replace(/^#### (.*$)/gm, '<h4 class="text-lg font-semibold my-3 text-gray-800">$1</h4>');
    
    // Converter parágrafos com melhor legibilidade e espaçamento
    html = html.replace(/^\s*(\n)?(.+)/gm, function(m) {
      if (m.match(/^<(\/)?(h1|h2|h3|h4|h5|h6|blockquote|table|ul|ol|li|p|pre|code|div|hr)/)) {
        return m;
      }
      return '<p class="mb-4 text-base md:text-lg leading-relaxed text-gray-700">$2</p>';
    });
    
    // Converter elementos de estilo de texto
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-100 text-purple-600 px-1 py-0.5 rounded text-sm font-mono">$1</code>');
    
    // Converter citações com estilo mais destacado
    html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-sightx-purple pl-4 my-6 italic text-gray-700 bg-gray-50 p-3 rounded-r">$1</blockquote>');
    
    // Converter listas não ordenadas com melhor hierarquia visual
    html = html.replace(/^- (.*$)/gm, '<li class="ml-4 mb-2 text-gray-700">$1</li>');
    html = html.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ul class="list-disc my-4 pl-5 space-y-1">$1</ul>');
    
    // Converter listas ordenadas com estilos consistentes
    html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-2 text-gray-700">$1</li>');
    html = html.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ol class="list-decimal my-4 pl-5 space-y-1">$1</ol>');
    
    // Melhorar o estilo das tabelas
    html = html.replace(/^\|(.*)\|$/gm, function(match, content) {
      const cells = content.split('|').map(cell => cell.trim());
      return '<tr>' + cells.map(cell => `<td class="border px-4 py-2 text-sm">${cell}</td>`).join('') + '</tr>';
    });
    html = html.replace(/(<tr>.*<\/tr>\n)(?!<tr>)/g, '<div class="overflow-x-auto my-6"><table class="min-w-full bg-white border-collapse">$1</table></div>');
    
    // Converter divisores horizontais
    html = html.replace(/^---$/gm, '<hr class="my-8 border-t border-gray-300" />');
    
    // Adicionar classes especiais para destaque de conteúdo
    html = html.replace(/:::tip\s(.*?)\s:::/gs, '<div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded-r"><div class="font-bold text-green-700">Dica</div><div>$1</div></div>');
    html = html.replace(/:::info\s(.*?)\s:::/gs, '<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded-r"><div class="font-bold text-blue-700">Informação</div><div>$1</div></div>');
    html = html.replace(/:::warning\s(.*?)\s:::/gs, '<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4 rounded-r"><div class="font-bold text-yellow-700">Atenção</div><div>$1</div></div>');
    
    // Converter quebras de linha
    html = html.replace(/\n/g, '<br>');
    
    return html;
  };

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(content) }}
      className="markdown-content prose-lg max-w-none"
    />
  );
};

export default Markdown;
