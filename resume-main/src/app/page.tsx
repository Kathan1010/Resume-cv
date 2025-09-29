import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import ExperienceSection from '@/components/sections/experience';
import SkillsSection from '@/components/sections/skills';
import EducationSection from '@/components/sections/education';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import AnimatedSection from '@/components/animated-section';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Header />
      <main className="flex-1 print:pt-8">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
