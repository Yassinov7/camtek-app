'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { projects } from '@/data/projects';
import type { Dictionary } from '@/i18n/dictionaries';

interface ProjectsPreviewProps {
  dict: Dictionary;
}

export default function ProjectsPreview({ dict }: ProjectsPreviewProps) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <Container>
        <SectionTitle title={dict.home.projects.title} subtitle={dict.home.projects.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {featuredProjects.map((project, index) => {
            const projectData = dict.projects[project.id as keyof typeof dict.projects] as {
              name: string;
              location: string;
              cameras: string;
              summary?: string;
            } | undefined;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
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
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {projectData?.name || project.id}
                  </h3>
                  {projectData?.summary && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{projectData.summary}</p>
                  )}
                  <p className="text-sm text-gray-500">{projectData?.location}</p>
                  <p className="text-sm text-gray-500 mt-1">{projectData?.cameras}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button href="/projects" variant="primary" size="lg" className="w-full sm:w-auto min-h-12">
            {dict.home.projects.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
