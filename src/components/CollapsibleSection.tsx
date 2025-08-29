import React, { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  children, 
  className = "" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-black bg-opacity-30 border border-white border-opacity-20 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left text-white font-mono text-sm tracking-widest hover:bg-white hover:bg-opacity-5 transition-colors duration-200"
      >
        <span className="flex items-center justify-between">
          {title}
          <span className="text-xs">{isExpanded ? '[-]' : '[+]'}</span>
        </span>
      </button>
      {isExpanded && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  );
};