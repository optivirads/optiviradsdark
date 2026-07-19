import React from 'react';

/**
 * Parses a simple HTML string and returns safe React elements.
 * Supports: <strong>, <b>, <em>, <i>, and <a> tags.
 * Bypasses dangerouslySetInnerHTML to prevent XSS vulnerabilities.
 */
export function renderSanitizedHtml(html: string): React.ReactNode[] | string {
  if (!html) return '';

  const tokenRegex = /(<\/?[a-zA-Z0-9]+(?:\s+[^>]*)?>)/g;
  const parts = html.split(tokenRegex);
  
  const result: React.ReactNode[] = [];
  let isStrong = false;
  let isEm = false;
  let currentLinkUrl: string | null = null;
  
  parts.forEach((part, index) => {
    if (part.startsWith('<')) {
      const tag = part.toLowerCase();
      if (tag === '<strong>' || tag === '<b>') {
        isStrong = true;
      } else if (tag === '</strong>' || tag === '</b>') {
        isStrong = false;
      } else if (tag === '<em>' || tag === '<i>') {
        isEm = true;
      } else if (tag === '</em>' || tag === '</i>') {
        isEm = false;
      } else if (tag.startsWith('<a ')) {
        const hrefMatch = part.match(/href=["']([^"']*)["']/i);
        if (hrefMatch) {
          const url = hrefMatch[1].trim().toLowerCase();
          // Filter out javascript: and data: protocols to prevent XSS execution
          if (url.startsWith('javascript:') || url.startsWith('data:')) {
            currentLinkUrl = '#';
          } else {
            currentLinkUrl = hrefMatch[1];
          }
        }
      } else if (tag === '</a>') {
        currentLinkUrl = null;
      }
    } else {
      if (!part) return;
      
      let node: React.ReactNode = part;
      
      if (isStrong) {
        node = <strong key={index} className="font-semibold text-white">{node}</strong>;
      }
      if (isEm) {
        node = <em key={index} className="italic">{node}</em>;
      }
      if (currentLinkUrl) {
        const isExternal = currentLinkUrl.startsWith('http');
        node = (
          <a
            key={index}
            href={currentLinkUrl}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
          >
            {node}
          </a>
        );
      }
      
      result.push(node);
    }
  });
  
  return result;
}
