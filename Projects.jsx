import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

const Projects = ({ projects, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-[#00d9ff]">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent video editing projects across platforms
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant="outline"
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#00d9ff] text-black border-[#00d9ff] hover:bg-[#00b8d9]'
                  : 'border-gray-700 text-gray-300 hover:border-[#00d9ff] hover:text-[#00d9ff]'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-[#1a1a1a] border-gray-800 hover:border-[#00d9ff] transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#00d9ff] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-black fill-black" />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {project.views} views
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-[#00d9ff] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500">• {project.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00d9ff] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-[#1a1a1a] border-gray-800 text-white">
          <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
          {selectedProject && (
            <div className="space-y-4">
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[#00d9ff]">{selectedProject.category}</span>
                <span className="text-sm text-gray-400">{selectedProject.views} views</span>
                <span className="text-sm text-gray-400">{selectedProject.duration}</span>
              </div>
              
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
