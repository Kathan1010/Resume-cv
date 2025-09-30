
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedSection from '../animated-section';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectsSection = () => {
  const getImageById = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="projects" className="py-16 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl hover-shimmer">
          My Recent Projects
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => {
            const projectImage = getImageById(project.image);
            return (
              <AnimatedSection key={index}>
                <Card className="group/card flex h-full flex-col overflow-hidden print-break-inside-avoid transition-all duration-500 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 border-0 bg-secondary/50">
                  {projectImage && (
                    <div className="overflow-hidden">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        data-ai-hint={projectImage.imageHint}
                        className="w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-6 pt-0">
                    <p className="flex-grow text-muted-foreground">{project.description}</p>
                    <div className="my-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-background/70">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-4 pt-4">
                      <Button asChild variant="outline">
                        <Link href={project.repoLink} target="_blank">
                          <Github /> View Code
                        </Link>
                      </Button>
                      <Button asChild>
                        <Link href={project.liveLink} target="_blank">
                          View Live <ArrowUpRight />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
