'use client';

import React from 'react';

interface AnchorLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
  [key: string]: any;
}

export default function AnchorLink({ href, className, children, ...props }: AnchorLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Extract the target element ID from the href
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Scroll smoothly to the element
      element.scrollIntoView({ behavior: 'smooth' });

      // Update URL without full page reload
      window.history.pushState({}, '', href);
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}