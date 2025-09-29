"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsData } from '@/lib/data';
import AnimatedSection from '../animated-section';
import { Badge } from '../ui/badge';
import {
    Code,
    Cpu,
    GitCommit,
    Database,
    Cloud,
    BrainCircuit,
    Layers,
    Bot,
    GitBranch,
    Cog,
    BarChart,
    Server,
    Paintbrush,
  } from 'lucide-react';
  

const iconMap: Record<string, React.ElementType> = {
    Code,
    Cpu,
    GitCommit,
    Database,
    Cloud,
    BrainCircuit,
    Layers,
    Bot,
    GitBranch,
    Cog,
    BarChart,
    Server,
    Paintbrush,
  };

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
              <Card className="h-full group-data-[state=visible]:animate-lift-and-settle print-break-inside-avoid group transition-all duration-500 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 border-0 bg-secondary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-xl">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = iconMap[skill.icon] || Code;
                      return (
                      <Badge key={skillIndex} variant="outline" className="flex items-center gap-2 transition-transform hover:scale-110 bg-background/30 border-primary/30 text-primary hover:bg-primary/10">
                        <Icon className="h-4 w-4" />
                        <span>{skill.name}</span>
                      </Badge>
                    )})}
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
