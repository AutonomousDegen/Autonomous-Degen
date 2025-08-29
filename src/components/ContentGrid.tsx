import React from 'react';
import { dreamContent } from '../content/dreamContent';
import { humorContent } from '../content/humorContent';
import { SocialLinks } from './SocialLinks';
import { CollapsibleSection } from './CollapsibleSection';

export const ContentGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-12 gap-8 min-h-screen">
        
        {/* Hero Section - Title */}
        <div className="col-span-12 lg:col-span-10 lg:col-start-1 relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-16 leading-tight tracking-wider">
            AUTONOMOUS DEGEN
          </h1>
        </div>

        {/* Hero Section - Top Links */}
        <div className="col-span-12 lg:col-span-2 lg:col-start-11 flex items-start justify-end">
          <div className="flex flex-row gap-3 mt-4">
            <a
              href="https://x.com/autodegen_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black bg-opacity-30 border border-white border-opacity-20 px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 font-mono text-xs tracking-wide text-center"
            >
              X.COM/AUTODEGEN_
            </a>
            <a
              href="https://github.com/AutonomousDegen/Autonomous-Degen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black bg-opacity-30 border border-white border-opacity-20 px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 font-mono text-xs tracking-wide text-center"
            >
              GITHUB.COM/AUTONOMOUSDEGEN
            </a>
          </div>
        </div>

        {/* Introduction and Featured Quote Row */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-1 mt-8">
          <p className="text-white font-mono text-sm leading-relaxed text-justify tracking-wide">
            {dreamContent.introduction}
          </p>
        </div>
        
        {/* Floating Gif aligned with introduction */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 -mt-8 flex items-start justify-center">
          <img 
            src="https://res.cloudinary.com/dubelz7md/image/upload/v1756475283/9Cg4-unscreen_fvwmzm.gif" 
            alt="Vitalik's DeFi hamster wheel dream"
            className="w-56 h-auto sm:w-64 lg:w-72 xl:w-80 opacity-80 relative z-0"
          />
        </div>
        
        {/* Core Features Row */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-1 mt-2">
          <h2 className="text-white font-mono text-lg mb-6 tracking-widest">
            THE DREAM MACHINE
          </h2>
          <p className="text-white font-mono text-sm leading-relaxed text-justify tracking-wide">
            {dreamContent.whatItDoes}
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-2">
          <h2 className="text-white font-mono text-lg mb-6 tracking-widest">
            INSIDE THE ALGORITHM
          </h2>
          <p className="text-white font-mono text-sm leading-relaxed text-justify tracking-wide">
            {dreamContent.howItWorks}
          </p>
        </div>

        {/* Experience Section */}
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 mt-6">
          <h2 className="text-white font-mono text-lg mb-6 tracking-widest">
            WHAT YOU GET
          </h2>
          <p className="text-white font-mono text-sm leading-relaxed text-justify tracking-wide">
            {dreamContent.theExperience}
          </p>
        </div>

        {/* Philosophy Row */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-1 mt-6">
          <div className="flex items-center justify-start">
            <img 
              src="https://res.cloudinary.com/dubelz7md/image/upload/v1756475283/9Cg4-unscreen_fvwmzm.gif" 
              alt="Vitalik's DeFi hamster wheel dream"
             className="w-full h-auto max-w-sm"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6 mt-6">
          <p className="text-white font-mono text-sm leading-relaxed text-justify tracking-wide">
            {dreamContent.philosophy}
          </p>
        </div>

        {/* Community Section */}
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 mt-6">
          <h2 className="text-white font-mono text-lg mb-6 tracking-widest">
            THE COMMUNITY
          </h2>
          <p className="text-white font-mono text-sm leading-relaxed text-justify tracking-wide">
            {dreamContent.communityAspect}
          </p>
        </div>

        {/* Vitalik Dream Quote */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-4 mt-2">
          <div className="bg-black bg-opacity-30 p-6 border border-white border-opacity-20">
            <p className="text-white font-serif italic text-sm text-center leading-loose">
              "dreamed that all of defi was just one big game run by vitalik sitting in his basement with a bunch of hamster wheels that looked like ethereum validators. the hamsters were all the people buying eth."
            </p>
          </div>
        </div>

        {/* COLLAPSED SECTIONS */}
        {/* First Row of Collapsed Content */}
        {/* Humorous Dream Stories */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-1 mt-12">
          <CollapsibleSection title="MORE WEIRD DREAMS">
            <div className="space-y-4">
              {humorContent.dreamStories.map((story, index) => (
                <p key={index} className="text-white font-serif italic text-sm leading-relaxed text-justify">
                  "{story}"
                </p>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Final Dream */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-5 mt-12">
          <CollapsibleSection title="FINAL NIGHTMARE">
            <p className="text-white font-serif italic text-sm text-center leading-loose">
              "{dreamContent.finalDream}"
            </p>
          </CollapsibleSection>
        </div>

        {/* Bot Relatability */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-12">
          <CollapsibleSection title="WHY PEOPLE FOLLOW THIS BOT">
            <div className="space-y-3">
              {humorContent.botRelatability.map((reason, index) => (
                <p key={index} className="text-white font-mono text-xs leading-relaxed tracking-wide">
                  {reason}
                </p>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Second Row of Collapsed Content */}
        {/* Trading Fails */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-1 mt-8">
          <CollapsibleSection title="TRADING DISASTERS">
            <div className="space-y-3">
              {humorContent.tradingFails.map((fail, index) => (
                <p key={index} className="text-white font-mono text-xs leading-relaxed tracking-wide">
                  {fail}
                </p>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Crypto Reality */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-8">
          <CollapsibleSection title="CRYPTO LIFE REALITY">
            <div className="space-y-3">
              {humorContent.cryptoReality.map((reality, index) => (
                <p key={index} className="text-white font-mono text-xs leading-relaxed tracking-wide">
                  {reality}
                </p>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Third Row - Full Width Video */}
        {/* Recording Preview */}
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 mt-8">
          <CollapsibleSection title="SEE THE AUTOMATION IN ACTION">
            <div className="w-full">
              <video
                controls
                className="w-full h-auto bg-black"
                preload="metadata"
              >
                <source
                  src="https://res.cloudinary.com/dubelz7md/video/upload/v1756469578/autonomousdegen_recording_dg3n8h.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};