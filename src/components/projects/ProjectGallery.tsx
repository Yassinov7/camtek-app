'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Dictionary } from '@/i18n/dictionaries';
import { projects } from '@/data/projects';

interface ProjectGalleryProps {
  dict: Dictionary;
}

export default function ProjectGallery({ dict }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { key: 'all', label: dict.projects.filter.all },
    { key: 'residential', label: dict.projects.filter.residential },
    { key: 'commercial', label: dict.projects.filter.commercial },
    { key: 'industrial', label: dict.projects.filter.industrial },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold min-h-11 transition-colors ${
              filter === f.key
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500 py-12">لا توجد أعمال في هذا التصنيف حالياً.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const projectData = dict.projects[project.id as keyof typeof dict.projects] as
              | {
                  name: string;
                  location: string;
                  system: string;
                  cameras: string;
                  features: string;
                  summary?: string;
                }
              | undefined;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04, duration: 0.25 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={projectData?.name || project.id}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        project.category === 'commercial'
                          ? 'bg-primary'
                          : project.category === 'residential'
                            ? 'bg-gold'
                            : 'bg-green'
                      }`}
                    >
                      {dict.projects.filter[project.category as keyof typeof dict.projects.filter]}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug">
                    {projectData?.name || project.id}
                  </h3>
                  {projectData?.summary && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{projectData.summary}</p>
                  )}
                  <div className="space-y-1.5 text-sm text-gray-600">
                    <p>
                      <span className="font-medium text-gray-800">{dict.projects.details.location}:</span>{' '}
                      {projectData?.location}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">{dict.projects.details.system}:</span>{' '}
                      {projectData?.system}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">{dict.projects.details.cameras}:</span>{' '}
                      {projectData?.cameras}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">{dict.projects.details.features}:</span>{' '}
                      {projectData?.features}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </div>
  );
}
