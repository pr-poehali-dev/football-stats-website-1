import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import TournamentsSection from '@/components/TournamentsSection';
import MatchesSection from '@/components/MatchesSection';
import RatingsSection from '@/components/RatingsSection';
import PlayersSection from '@/components/PlayersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CodeDisplay from '@/components/CodeDisplay';
import CodeListSection from '@/components/CodeListSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSearch = (query: string) => {
    handleNavigation('players');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'stats', 'tournaments', 'matches', 'ratings', 'players', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main>
        <section id="home">
          <HeroSection onSearch={handleSearch} />
        </section>
        
        <section id="stats">
          <StatsSection />
        </section>
        
        <section id="tournaments">
          <TournamentsSection />
        </section>
        
        <section id="matches">
          <MatchesSection />
        </section>
        
        <section id="ratings">
          <RatingsSection />
        </section>
        
        <section id="players">
          <PlayersSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <CodeDisplay />
      <CodeListSection />
      <Footer />
    </div>
  );
};

export default Index;