import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'tournaments', label: 'Турниры', icon: 'Trophy' },
    { id: 'matches', label: 'Матчи', icon: 'Calendar' },
    { id: 'ratings', label: 'Рейтинги', icon: 'TrendingUp' },
    { id: 'players', label: 'Игроки', icon: 'Users' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Trophy" className="text-white" size={24} />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">FootballStats</span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleNavClick(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-up border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => handleNavClick(item.id)}
                  className="justify-start gap-2 w-full"
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
