'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { projects } from '@/data/projects';
import { COMPANY } from '@/lib/constants';
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
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={projectData?.name || project.id}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
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
                    <p className="mb-3 text-sm leading-relaxed text-gray-600">{projectData.summary}</p>
                  )}

                  <div className="space-y-1.5 border-t border-gray-100 pt-3 text-sm text-gray-600">
                    <p>
                      <span className="font-medium text-gray-800">{dict.projects.details.location}:</span>{' '}
                      {projectData?.location}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">{dict.projects.details.cameras}:</span>{' '}
                      {projectData?.cameras}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
                    <span className="text-xs font-medium text-gray-500">تواصل مباشر</span>
                    <a
                      href={COMPANY.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </motion.article>
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
