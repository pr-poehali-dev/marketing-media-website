import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import CasesSection from '@/components/sections/CasesSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <CasesSection scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
};

export default Index;
