import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-scale-in">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-medium">Актуальная статистика в реальном времени</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Футбольная статистика
            <br />
            <span className="text-secondary">нового поколения</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Получите доступ к полной статистике игроков, команд, матчей и турниров. 
            Все данные в одном месте для профессионального анализа.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-12">
            <div className="relative flex-1">
              <Icon 
                name="Search" 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
                size={20} 
              />
              <Input
                type="text"
                placeholder="Поиск игроков и команд..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 h-12 bg-white/95 backdrop-blur-sm border-white/20 focus:border-white"
              />
            </div>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8"
              onClick={handleSearch}
            >
              <Icon name="Search" size={18} className="mr-2" />
              Найти
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-secondary" />
              <span>50,000+ игроков</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-secondary" />
              <span>1,000+ команд</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-secondary" />
              <span>100+ турниров</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
