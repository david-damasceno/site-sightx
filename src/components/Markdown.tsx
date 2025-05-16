
import React from "react";

interface MarkdownProps {
  content: string;
}

/**
 * Um componente aprimorado para renderizar markdown como HTML estilizado
 * Em produção, você usaria uma biblioteca como react-markdown,
 * mas para evitar adicionar dependências, estamos usando uma implementação customizada
 */
const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  // Função para converter markdown para HTML com formatação melhorada
  const convertMarkdownToHTML = (markdown: string) => {
    let html = markdown;

    // Converter cabeçalhos com espaçamento muito reduzido (estilo documento)
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-3 mb-1 pb-1 border-b border-gray-200">$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-2 mb-1 text-gray-800">$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-2 mb-0.5 text-gray-700">$1</h3>');
    html = html.replace(/^#### (.*$)/gm, '<h4 class="text-lg font-bold mt-1.5 mb-0.5 text-gray-700">$1</h4>');
    
    // Converter parágrafos com espaçamento mínimo (estilo documento)
    html = html.replace(/^\s*(\n)?(.+)/gm, function(m) {
      if (m.match(/^<(\/)?(h1|h2|h3|h4|h5|h6|blockquote|table|ul|ol|li|p|pre|code|div)/)) {
        return m;
      }
      return '<p class="mb-0.5 text-base md:text-lg text-gray-700 leading-normal">$2</p>'.replace('$2', m);
    });
    
    // Melhorar formatação de negrito
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
    
    // Melhorar formatação de itálico
    html = html.replace(/\*(.*?)\*/g, '<em class="italic text-gray-800">$1</em>');
    
    // Melhorar formatação de citações (blockquotes) - espaçamento mínimo
    html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-sightx-purple pl-4 py-0 my-1 italic text-gray-600 bg-gray-50 rounded">$1</blockquote>');
    
    // Melhorar formatação de listas não ordenadas - espaçamento mínimo
    html = html.replace(/^- (.*$)/gm, '<li class="ml-4 mb-0 text-gray-700">$1</li>');
    html = html.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ul class="list-disc my-1 pl-5 space-y-0">$1</ul>');
    
    // Melhorar formatação de listas ordenadas - espaçamento mínimo
    html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-0 text-gray-700">$1</li>');
    html = html.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ol class="list-decimal my-1 pl-5 space-y-0">$1</ol>');
    
    // Melhorar formatação de tabelas
    html = html.replace(/^\|(.*)\|$/gm, function(match, content) {
      const cells = content.split('|').map(cell => cell.trim());
      return '<tr>' + cells.map(cell => `<td class="border px-4 py-1 text-gray-700">${cell}</td>`).join('') + '</tr>';
    });
    html = html.replace(/(<tr>.*<\/tr>\n)(?!<tr>)/g, '<table class="table-auto w-full my-2 border-collapse border rounded overflow-hidden">$1</table>');
    
    // Adicionar suporte a blocos de código com espaçamento mínimo
    html = html.replace(/```(.*)\n([\s\S]*?)```/g, '<pre class="bg-gray-100 p-2 rounded my-1 overflow-x-auto"><code class="text-gray-800">$2</code></pre>');
    
    // Adicionar suporte a código inline
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0 rounded text-gray-800 font-mono text-sm">$1</code>');
    
    // Adicionar suporte a links melhorados
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-sightx-purple hover:underline font-medium">$1</a>');
    
    // Substituir quebras de linha por espaços para manter o fluxo do texto
    html = html.replace(/\n(?![<])/g, ' ');
    
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
