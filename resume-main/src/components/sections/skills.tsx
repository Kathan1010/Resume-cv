"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsData } from '@/lib/data';
import { AnimatedProgress } from '../animated-progress';
import AnimatedSection from '../animated-section';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl hover-shimmer">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <AnimatedSection key={index}>
              <Card className="group-data-[state=visible]:animate-lift-and-settle print-break-inside-avoid group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_5px_hsl(var(--primary)/0.2)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-xl">
                    {React.createElement(category.icon, { className: "h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" })}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="mb-1 flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <AnimatedProgress value={skill.level} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
