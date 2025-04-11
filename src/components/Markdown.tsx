
import React, { useState } from "react";
import { Copy, CheckCheck, ThumbsUp, ThumbsDown, Lightbulb, AlertTriangle, Check } from "lucide-react";

interface MarkdownProps {
  content: string;
}

/**
 * An enhanced component to render markdown as HTML stylized content with interactive elements
 */
const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const [copiedSnippets, setCopiedSnippets] = useState<{[key: string]: boolean}>({});
  const [reactions, setReactions] = useState<{[key: string]: string}>({});

  // Function to handle copying code snippets
  const handleCopyCode = (text: string, snippetId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSnippets({...copiedSnippets, [snippetId]: true});
      setTimeout(() => {
        setCopiedSnippets({...copiedSnippets, [snippetId]: false});
      }, 2000);
    });
  };

  // Handle content reactions
  const handleReaction = (sectionId: string, reaction: string) => {
    setReactions({...reactions, [sectionId]: reaction});
  };

  // Parse and process markdown content with enhanced features
  const processMarkdown = (markdown: string) => {
    let processedContent = markdown;
    let snippetCounter = 0;
    let sectionCounter = 0;
    
    // Process code blocks with copy functionality
    processedContent = processedContent.replace(/```(.*?)\n([\s\S]*?)```/g, (match, language, code) => {
      snippetCounter++;
      const snippetId = `code-${snippetCounter}`;
      const isCopied = copiedSnippets[snippetId];
      
      return `
        <div class="relative my-6 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
          <div class="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm">
            <span class="font-mono text-gray-600 dark:text-gray-300">${language || 'code'}</span>
            <button 
              class="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onclick="document.dispatchEvent(new CustomEvent('copyCode', {detail: {id: '${snippetId}', code: \`${code.replace(/`/g, '\\`')}\`}}))">
              ${isCopied ? 
                `<span class="text-green-500 flex items-center"><CheckCheck size="14" /><span class="ml-1">Copied!</span></span>` : 
                `<span class="flex items-center"><Copy size="14" /><span class="ml-1">Copy</span></span>`
              }
            </button>
          </div>
          <pre class="p-4 overflow-x-auto"><code class="language-${language || 'text'}">${code}</code></pre>
        </div>
      `;
    });
    
    // Process callouts for tips, warnings, etc.
    processedContent = processedContent.replace(/:::tip\s(.*?)\n([\s\S]*?):::/g, (match, title, content) => {
      return `
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r-md">
          <div class="flex items-center">
            <Lightbulb class="text-green-600 mr-2" size={20} />
            <h4 class="font-bold text-green-800">${title}</h4>
          </div>
          <div class="mt-2 text-green-700">${content}</div>
        </div>
      `;
    });
    
    processedContent = processedContent.replace(/:::warning\s(.*?)\n([\s\S]*?):::/g, (match, title, content) => {
      return `
        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-md">
          <div class="flex items-center">
            <AlertTriangle class="text-amber-600 mr-2" size={20} />
            <h4 class="font-bold text-amber-800">${title}</h4>
          </div>
          <div class="mt-2 text-amber-700">${content}</div>
        </div>
      `;
    });
    
    // Add section-by-section reaction functionality
    processedContent = processedContent.replace(/^## (.*$)/gm, (match, title) => {
      sectionCounter++;
      const sectionId = `section-${sectionCounter}`;
      const currentReaction = reactions[sectionId] || '';
      
      return `
        <h2 class="text-2xl font-bold my-5 pt-6 border-t border-gray-100" id="${title.toLowerCase().replace(/\s+/g, '-')}">${title}</h2>
        <div class="flex items-center space-x-2 mb-4" id="${sectionId}-reactions">
          <span class="text-sm text-gray-500">Esta seção foi útil?</span>
          <button 
            class="p-1 rounded-full ${currentReaction === 'helpful' ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100'}"
            onclick="document.dispatchEvent(new CustomEvent('contentReaction', {detail: {id: '${sectionId}', reaction: 'helpful'}}))">
            <ThumbsUp size="16" />
          </button>
          <button 
            class="p-1 rounded-full ${currentReaction === 'not-helpful' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}"
            onclick="document.dispatchEvent(new CustomEvent('contentReaction', {detail: {id: '${sectionId}', reaction: 'not-helpful'}}))">
            <ThumbsDown size="16" />
          </button>
          ${currentReaction ? '<span class="text-xs text-gray-500">Obrigado pelo feedback!</span>' : ''}
        </div>
      `;
    });

    // Standard markdown conversions
    // Convert headings
    processedContent = processedContent.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6 font-playfair">$1</h1>');
    processedContent = processedContent.replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-4">$1</h3>');
    
    // Convert paragraphs with improved typography
    processedContent = processedContent.replace(/^\s*(\n)?(.+)/gm, function(m) {
      if (m.match(/^<(\/)?(h1|h2|h3|h4|h5|h6|blockquote|table|ul|ol|li|p|pre|code|div|button|span)/)) {
        return m;
      }
      return '<p class="mb-5 text-base md:text-lg leading-relaxed text-gray-700">' + m + '</p>';
    });
    
    // Convert bold and italic
    processedContent = processedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    processedContent = processedContent.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert blockquotes with better styling
    processedContent = processedContent.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-sightx-purple pl-4 my-8 py-2 italic text-gray-600 bg-gray-50 rounded-r">$1</blockquote>');
    
    // Convert unordered lists
    processedContent = processedContent.replace(/^- (.*$)/gm, '<li class="ml-4 mb-2 flex items-start"><span class="mr-2 mt-1 text-sightx-purple">•</span><span>$1</span></li>');
    processedContent = processedContent.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ul class="my-4 pl-5 space-y-2">$1</ul>');
    
    // Convert ordered lists
    processedContent = processedContent.replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-2">$1</li>');
    processedContent = processedContent.replace(/(<li.*<\/li>\n)(?!<li)/g, '<ol class="list-decimal my-4 pl-5">$1</ol>');
    
    // Convert tables with better styling
    processedContent = processedContent.replace(/^\|(.*)\|$/gm, function(match, content) {
      const cells = content.split('|').map(cell => cell.trim());
      return '<tr>' + cells.map(cell => `<td class="border px-4 py-2">${cell}</td>`).join('') + '</tr>';
    });
    processedContent = processedContent.replace(/(<tr>.*<\/tr>\n)(?!<tr>)/g, '<table class="w-full my-6 border-collapse border rounded overflow-hidden shadow-sm">$1</table>');
    
    // Add table of contents for longer articles
    if (sectionCounter > 3) {
      const tocPlaceholder = '<div class="toc-placeholder"></div>';
      if (processedContent.includes(tocPlaceholder)) {
        processedContent = processedContent.replace(tocPlaceholder, generateTableOfContents(markdown));
      } else {
        // Add ToC after the first h1
        processedContent = processedContent.replace(/<\/h1>/, '</h1>' + generateTableOfContents(markdown));
      }
    }
    
    // Format images with lightbox effect
    processedContent = processedContent.replace(/!\[(.*?)\]\((.*?)\)/g, 
      '<div class="my-6 hover:shadow-lg transition-shadow duration-300">' +
      '<img src="$2" alt="$1" class="w-full rounded-lg shadow-md hover:opacity-95 transition-opacity cursor-zoom-in" ' +
      'onclick="document.dispatchEvent(new CustomEvent(\'openImageLightbox\', {detail: {src: \'$2\', alt: \'$1\'}}))" />' +
      '<p class="text-sm text-center text-gray-500 mt-2 italic">$1</p></div>'
    );
    
    // Convert line breaks
    processedContent = processedContent.replace(/\n/g, '<br>');
    
    return processedContent;
  };

  // Generate a table of contents from markdown headings
  const generateTableOfContents = (markdown: string) => {
    const headings: {level: number; title: string}[] = [];
    const regex = /^(#{1,3})\s+(.*$)/gm;
    let match;
    
    while ((match = regex.exec(markdown)) !== null) {
      headings.push({
        level: match[1].length,
        title: match[2].trim()
      });
    }
    
    if (headings.length <= 1) return ''; // No need for ToC with just one heading
    
    let toc = '<div class="bg-gray-50 p-5 rounded-lg my-6 border border-gray-200 shadow-sm">';
    toc += '<h3 class="text-lg font-semibold mb-3">Índice do Conteúdo</h3>';
    toc += '<ul class="space-y-1">';
    
    headings.forEach(heading => {
      if (heading.level > 1) { // Skip the main title (h1)
        const indent = heading.level > 2 ? 'ml-4' : '';
        const slug = heading.title.toLowerCase().replace(/\s+/g, '-');
        toc += `<li class="${indent}"><a href="#${slug}" class="text-sightx-purple hover:underline flex items-center">`;
        toc += `<Check size="12" class="mr-2" /> ${heading.title}</a></li>`;
      }
    });
    
    toc += '</ul></div>';
    return toc;
  };

  // Set up event listeners for interactive elements
  React.useEffect(() => {
    const copyCodeHandler = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { id, code } = customEvent.detail;
      handleCopyCode(code, id);
    };

    const reactionHandler = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { id, reaction } = customEvent.detail;
      handleReaction(id, reaction);
    };

    document.addEventListener('copyCode', copyCodeHandler);
    document.addEventListener('contentReaction', reactionHandler);

    return () => {
      document.removeEventListener('copyCode', copyCodeHandler);
      document.removeEventListener('contentReaction', reactionHandler);
    };
  }, []);

  return (
    <>
      <div 
        dangerouslySetInnerHTML={{ __html: processMarkdown(content) }}
        className="markdown-content"
      />
      <div id="image-lightbox" className="hidden fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
        <div className="max-w-4xl max-h-[90vh] relative">
          <img id="lightbox-img" src="" alt="" className="max-w-full max-h-full object-contain" />
          <button 
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            onClick={() => document.getElementById('image-lightbox')?.classList.add('hidden')}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Markdown;
