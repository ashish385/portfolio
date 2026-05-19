import React from "react";
import MotionOnScroll from "./MotionOnScroll";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = ({ item }) => {
  return (
    <MotionOnScroll
      // Card bg changes to your configuration's 'secondary' panel with 'accent' tint on hover
      className="flex flex-col group h-full rounded-2xl border border-tertiary bg-secondary p-4 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1"
      delayMs={item.motion?.delayMs ?? 0}
      durationMs={item.motion?.durationMs ?? 550}
      translateY={14}
    >
      {/* 1. Image Container with Premium Zoom Effect */}
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-tertiary w-full mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle black/gold overlay over image on hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      </div>

      {/* 2. Project Metadata (Category & Name with Gold Accents) */}
      <div className="flex flex-col flex-grow px-1 text-left">
        {/* Custom theme font applied for structural identity */}
        <span className="font-body text-xs font-bold uppercase tracking-widest text-accent mb-1.5">
          {item.category}
        </span>
        
        {/* Project title changes to bold gold on hover */}
        <h3 className="font-primary text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors mb-2">
          {item.name}
        </h3>

        {/* Description uses your configuration's exact 'paragraph' color channel */}
        {item.description && (
          <p className="font-body text-sm text-paragraph line-clamp-2 mb-4 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* 3. Action Buttons Section (Bottom Aligned Black & Gold Layout) */}
      <div className="mt-4 pt-3 border-t border-tertiary flex items-center justify-between gap-3 w-full px-1">
        
        {/* GitHub Link Handler using paragraph and text-white hover mappings */}
        {item.github ? (
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2 text-xs font-semibold text-paragraph hover:text-white transition-colors py-1"
          >
            <FiGithub className="h-4 w-4 text-accent" />
            <span>Source Code</span>
          </a>
        ) : (
          <div className="font-body text-[11px] text-paragraph/50 italic">Internal Project</div>
        )}

        {/* Live Preview Button uses exact 'bg-accent' and 'hover:bg-accent-hover' states */}
        <a
          href={item.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center gap-1.5 rounded-xl bg-accent hover:bg-accent-hover text-white px-4 py-2 text-xs font-bold shadow-md shadow-accent/10 transition-all active:scale-95"
        >
          <span>Live Demo</span>
          <FiExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </MotionOnScroll>
  );
};

export default Project;
