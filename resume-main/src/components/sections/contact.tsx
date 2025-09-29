import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from '../animated-section';

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-accent" />,
    label: 'Location',
    value: 'San Francisco, CA',
  },
  {
    icon: <Mail className="h-6 w-6 text-accent" />,
    label: 'Email',
    value: 'john.doe@example.com',
    href: 'mailto:john.doe@example.com',
  },
  {
    icon: <Phone className="h-6 w-6 text-accent" />,
    label: 'Phone',
    value: '(123) 456-7890',
    href: 'tel:+11234567890',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-white/5 backdrop-blur-md overflow-hidden">
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl hover-shimmer">
            Get In Touch
          </h2>
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-headline hover-shimmer">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_5px_hsl(var(--primary)/0.2)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
