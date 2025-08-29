import React from 'react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <div className="text-sm font-mono tracking-wider">
        CONNECT WITH THE VOID
      </div>
      <div className="flex flex-col gap-2">
        <a
          href="https://x.com/autodegen_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200 font-mono text-sm tracking-wide"
        >
          X.COM/AUTODEGEN_
        </a>
        <a
          href="https://github.com/AutonomousDegen/Autonomous-Degen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200 font-mono text-sm tracking-wide"
        >
          GITHUB.COM/AUTONOMOUSDEGEN
        </a>
      </div>
    </div>
  );
};