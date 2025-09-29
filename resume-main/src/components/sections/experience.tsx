import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import { experienceData } from '@/lib/data';
import { Badge } from '../ui/badge';
import AnimatedSection from '../animated-section';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24 bg-white/5 backdrop-blur-md overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl hover-shimmer">
          Work Experience
        </h2>
        <div className="mx-auto max-w-4xl space-y-8">
          {experienceData.map((job, index) => (
            <AnimatedSection key={index}>
              <Collapsible asChild>
                <Card className="group-data-[state=visible]:animate-lift-and-settle print-break-inside-avoid transition-all duration-500 hover:shadow-[0_0_20px_5px_hsl(var(--primary)/0.2)] hover:[transform:scale(1.02)]">
                  <CollapsibleTrigger asChild>
                    <div className="cursor-pointer">
                      <CardHeader>
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <CardTitle className="font-headline text-xl">{job.company}</CardTitle>
                          <CardDescription className="text-sm font-medium text-primary">{job.date}</CardDescription>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                          <CardDescription className="font-semibold text-accent">{job.role}</CardDescription>
                          <Button variant="ghost" size="sm" className="w-full justify-center gap-2 rounded-md transition-colors sm:w-auto collapsible-trigger-btn text-muted-foreground hover:text-primary">
                            <span>Details</span>
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </div>
                      </CardHeader>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="collapsible-content">
                    <CardContent>
                      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="transition-transform hover:scale-110">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
