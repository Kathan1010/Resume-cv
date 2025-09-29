"use client";

import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="no-print transition-transform hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Customize Theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 no-print">
        <div className="flex items-center space-x-2">
            <Button 
                onClick={() => setTheme('light')} 
                variant={!isDark ? 'default' : 'outline'}
                className="transition-transform hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
            >
                Light
            </Button>
            <Button 
                onClick={() => setTheme('dark')} 
                variant={isDark ? 'default' : 'outline'}
                className="transition-transform hover:-translate-y-1 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
            >
                Dark
            </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
