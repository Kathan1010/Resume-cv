"use client";

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

type AnimatedProgressProps = {
  value: number;
};

export function AnimatedProgress({ value }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // A delay to ensure the component is rendered before starting the animation
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  return <Progress value={progress} className="h-3 bg-secondary" />;
}
