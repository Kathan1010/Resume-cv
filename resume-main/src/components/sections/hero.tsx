"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://github.com',
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com',
    icon: <Linkedin className="h-5 w-5" />,
    label: 'LinkedIn',
  },
];

const HeroSection = () => {
  const profileImage = placeholderImages.placeholderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="about" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          <div className="relative mx-auto h-72 w-72 animate-float">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={400}
                height={400}
                data-ai-hint={profileImage.imageHint}
                className="rounded-full object-cover shadow-2xl ring-4 ring-primary/20 aspect-square"
                priority
              />
            )}
             <div className="absolute inset-0 rounded-full animate-pulse-slow border-4 border-primary/30"></div>
          </div>
          <div className="text-center md:col-span-2 md:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl hover-shimmer">
              John Doe
            </h1>
            <p className="mt-2 font-headline text-2xl font-medium text-accent md:text-3xl animate-fadeInUp animation-delay-300 hover-glow-accent">
              Engineering Student | Full Stack Developer | Technophile
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fadeInUp animation-delay-500 hover-silver-glow">
              A passionate and forward-thinking developer driven by a love for AI/ML and full-stack development. Skilled at crafting intelligent, scalable, and impactful applications, with a strong focus on logical problem-solving and turning complex challenges into elegant solutions. Enthusiastic about exploring real-world technologies and leveraging them to tackle real-world problems, while blending creativity with technical expertise to deliver innovative, user-centric outcomes.
            </p>
            <div className="mt-8 flex justify-center gap-4 md:justify-start animate-fadeInUp animation-delay-700">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="outline" size="icon" asChild className="transition-transform hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                  <Link href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
