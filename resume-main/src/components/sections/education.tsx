import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { educationData } from '@/lib/data';
import AnimatedSection from '../animated-section';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl hover-shimmer">
          Education
        </h2>
        <div className="mx-auto max-w-4xl space-y-8">
          {educationData.map((edu, index) => (
            <AnimatedSection key={index}>
              <Card className="group-data-[state=visible]:animate-lift-and-settle print-break-inside-avoid transition-all duration-500 hover:shadow-[0_0_20px_5px_hsl(var(--primary)/0.2)] hover:[transform:scale(1.02)]">
                <CardHeader>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <CardTitle className="font-headline text-xl">{edu.institution}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {edu.date}
                    </CardDescription>
                  </div>
                  <CardDescription className="font-semibold text-accent">{edu.degree}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
