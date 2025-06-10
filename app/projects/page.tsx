"use client";

import { useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/projects/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectsPage() {
  // Extract unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Local state for active filter
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter
    ? projects.filter(project => project.tags.includes(activeFilter))
    : projects;
  
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Here's a collection of projects I've worked on. Each demonstrates different skills and technologies.
        </p>
        
        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === tag
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects match the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}