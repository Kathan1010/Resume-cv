import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['PT Sans', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'shimmer': {
          '0%, 100%': { backgroundPosition: '-100% 0' },
          '50%': { opacity: '1' },
          '100%': { backgroundPosition: '100% 0' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.5' },
        },
        'sparkle': {
          '0%': {
            background: 'radial-gradient(circle at 50% 50%, hsla(var(--primary) / 0.2) 0%, transparent 20%), transparent',
          },
          '25%': {
            background: 'radial-gradient(circle at 20% 80%, hsla(var(--primary) / 0.2) 0%, transparent 20%), radial-gradient(circle at 80% 20%, hsla(var(--accent) / 0.2) 0%, transparent 20%)',
          },
          '50%': {
            background: 'radial-gradient(circle at 80% 80%, hsla(var(--primary) / 0.2) 0%, transparent 20%), radial-gradient(circle at 20% 20%, hsla(var(--accent) / 0.2) 0%, transparent 20%)',
          },
          '75%': {
            background: 'radial-gradient(circle at 50% 20%, hsla(var(--primary) / 0.2) 0%, transparent 20%), radial-gradient(circle at 20% 50%, hsla(var(--accent) / 0.2) 0%, transparent 20%)',
          },
          '100%': {
            background: 'radial-gradient(circle at 50% 50%, hsla(var(--primary) / 0.2) 0%, transparent 20%), transparent',
          }
        },
        'line-draw': {
          'from': { 'stroke-dashoffset': '1000' },
          'to': { 'stroke-dashoffset': '0' },
        },
        'scale-in': {
          'from': { transform: 'scale(0)' },
          'to': { transform: 'scale(1)' },
        },
        'lift-and-settle': {
          '0%': { transform: 'translateY(30px) scale(0.95)', opacity: '0' },
          '50%': { transform: 'translateY(-10px) scale(1.02)', opacity: '1' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shimmer': 'shimmer 5s infinite linear',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 20s ease-in-out infinite',
        'line-draw': 'line-draw 2s ease-out',
        'float-particle': 'float-particle ease-in-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'lift-and-settle': 'lift-and-settle 0.7s ease-out',
      },
      animationDelay: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate'),
    function ({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const newUtilities = {
        '.animation-delay-300': {
          'animation-delay': theme('animationDelay.300'),
        },
        '.animation-delay-500': {
          'animation-delay': theme('animationDelay.500'),
        },
        '.animation-delay-700': {
          'animation-delay': theme('animationDelay.700'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
],
} satisfies Config;
