"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Dictionary } from '@/i18n/dictionaries';
import { projects } from '@/data/projects';

interface ProjectGalleryProps {
  locale: string;
  dict: Dictionary;
}

export default function ProjectGallery(props: ProjectGalleryProps) {
  const { dict } = props;
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { key: 'all', label: dict.projects.filter.all },
    { key: 'residential', label: dict.projects.filter.residential },
    { key: 'commercial', label: dict.projects.filter.commercial },
    { key: 'industrial', label: dict.projects.filter.industrial },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === f.key
                ? 'bg-primary text-white shadow-lg shadow-blue-500/25'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const projectData = dict.projects[project.id as keyof typeof dict.projects] as {
            name: string;
            location: string;
            system: string;
            cameras: string;
            features: string;
          } | undefined;

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={projectData?.name || project.id}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    project.category === 'commercial' ? 'bg-primary' :
                    project.category === 'residential' ? 'bg-gold' : 'bg-green'
                  }`}>
                    {dict.projects.filter[project.category as keyof typeof dict.projects.filter]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {projectData?.name || project.id}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="font-medium">{dict.projects.details.location}:</span> {projectData?.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{dict.projects.details.system}:</span> {projectData?.system}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{dict.projects.details.cameras}:</span> {projectData?.cameras}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">{dict.projects.details.features}:</span> {projectData?.features}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
