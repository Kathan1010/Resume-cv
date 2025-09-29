import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experienceData } from '@/lib/data';
import AnimatedSection from '../animated-section';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl hover-shimmer">
          Work Experience
        </h2>
        <div className="mx-auto max-w-4xl space-y-8">
          {experienceData.map((job, index) => (
            <div key={index} className="flex w-full items-start justify-center">
              <AnimatedSection className="w-full">
                <Card className="w-full print-break-inside-avoid group-data-[state=visible]:animate-lift-and-settle transition-all duration-500 hover:shadow-primary/20 hover:shadow-lg hover:[transform:scale(1.02)] border-0 bg-secondary/50">
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <CardTitle className="font-headline text-xl">{job.company}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {job.date}
                      </CardDescription>
                    </div>
                    <CardDescription className="font-semibold text-accent">{job.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
