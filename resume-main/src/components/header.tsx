"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download, CodeXml } from 'lucide-react';
import { ThemeCustomizer } from '@/components/theme-customizer';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
    <nav className={cn(
      "flex items-center gap-4 lg:gap-6",
      inSheet && "flex-col items-start gap-6 pt-10"
    )}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => inSheet && setIsMobileMenuOpen(false)}
          className="text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary hover:-translate-y-0.5 hover:[text-shadow:0_0_8px_hsl(var(--primary)/0.5)]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow no-print',
      isScrolled ? 'shadow-md' : 'shadow-none'
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold text-primary">
          <CodeXml className="h-6 w-6" />
          <span>Kathan Gajera</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2 ">
          <ThemeCustomizer />
          <Button asChild>
            <a href="/resume.pdf" download="Kathan_Gajera_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold text-primary mb-6">
                  <CodeXml className="h-6 w-6" />
                  <span>Kathan Gajera</span>
                </Link>
                <NavLinks inSheet />
                <div className="mt-auto">
                  <Button asChild>
                    <a href="/resume.pdf" download="Kathan_Gajera_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
