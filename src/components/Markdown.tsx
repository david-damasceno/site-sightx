
import React from "react";

interface MarkdownProps {
  content: string;
}

/**
 * Um componente simples para renderizar markdown como HTML estilizado
 * Em produção, você usaria uma biblioteca como react-markdown,
 * mas para evitar adicionar dependências, estamos usando uma implementação básica
 */
const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  // Função para converter markdown para HTML
  const convertMarkdownToHTML = (markdown: string) => {
    let html = markdown;

    // Converter cabeçalhos
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6">$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-5">$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-4">$1</h3>');
    
    // Converter parágrafos
    html = html.replace(/^\s*(\n)?(.+)/gm, function(m) {
      if (m.match(/^<(\/)?(h1|h2|h3|h4|h5|h6|blockquote|table|ul|ol|li|p|pre|code|div)/)) {
        return m;
      }
      return '<p class="mb-4 text-base md:text-lg text-gray-700">' + m + '</p>';
    });
    
    // Converter negrito
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Converter itálico
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Converter citações
    html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-600">$1</blockquote>');
    
    // Converter listas não ordenadas
    html = html.replace(/^- (.*$)/gm, '<li class="ml-4 mb-2">$1</li>');
    html = html.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ul class="list-disc my-4 pl-5">$1</ul>');
    
    // Converter listas ordenadas
    html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-2">$1</li>');
    html = html.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ol class="list-decimal my-4 pl-5">$1</ol>');
    
    // Converter tabelas (implementação básica)
    html = html.replace(/^\|(.*)\|$/gm, function(match, content) {
      const cells = content.split('|').map(cell => cell.trim());
      return '<tr>' + cells.map(cell => `<td class="border px-4 py-2">${cell}</td>`).join('') + '</tr>';
    });
    html = html.replace(/(<tr>.*<\/tr>\n)(?!<tr>)/g, '<table class="table-auto w-full my-4 border-collapse border">$1</table>');
    
    // Converter quebras de linha
    html = html.replace(/\n/g, '<br>');
    
    return html;
  };

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(content) }}
      className="markdown-content"
    />
  );
};

export default Markdown;
