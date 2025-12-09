import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const PlayersSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState('all');
  
  const players = [
    { 
      name: 'Криштиану Роналду', 
      team: 'Аль-Наср', 
      position: 'Нападающий',
      age: 39,
      nationality: '🇵🇹 Португалия',
      rating: 88,
      goals: 28,
      assists: 8,
      icon: '⚽'
    },
    { 
      name: 'Лионель Месси', 
      team: 'Интер Майами', 
      position: 'Нападающий',
      age: 37,
      nationality: '🇦🇷 Аргентина',
      rating: 89,
      goals: 26,
      assists: 12,
      icon: '⚽'
    },
    { 
      name: 'Кевин Де Брёйне', 
      team: 'Манчестер Сити', 
      position: 'Полузащитник',
      age: 33,
      nationality: '🇧🇪 Бельгия',
      rating: 91,
      goals: 6,
      assists: 18,
      icon: '🎯'
    },
    { 
      name: 'Вирджил ван Дейк', 
      team: 'Ливерпуль', 
      position: 'Защитник',
      age: 33,
      nationality: '🇳🇱 Нидерланды',
      rating: 89,
      goals: 3,
      assists: 2,
      icon: '🛡️'
    },
    { 
      name: 'Тибо Куртуа', 
      team: 'Реал Мадрид', 
      position: 'Вратарь',
      age: 32,
      nationality: '🇧🇪 Бельгия',
      rating: 90,
      goals: 0,
      assists: 0,
      icon: '🧤'
    },
    { 
      name: 'Килиан Мбаппе', 
      team: 'Реал Мадрид', 
      position: 'Нападающий',
      age: 25,
      nationality: '🇫🇷 Франция',
      rating: 92,
      goals: 24,
      assists: 10,
      icon: '⚽'
    },
  ];

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.team.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition = positionFilter === 'all' || player.position === positionFilter;
    return matchesSearch && matchesPosition;
  });

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return 'bg-gradient-to-br from-yellow-400 to-orange-500';
    if (rating >= 85) return 'bg-gradient-to-br from-green-400 to-emerald-500';
    return 'bg-gradient-to-br from-blue-400 to-cyan-500';
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            База игроков
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Найдите статистику любого игрока по имени, команде или позиции
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Icon 
                    name="Search" 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
                    size={20} 
                  />
                  <Input
                    type="text"
                    placeholder="Поиск по имени или команде..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={positionFilter} onValueChange={setPositionFilter}>
                  <SelectTrigger className="md:w-48">
                    <SelectValue placeholder="Позиция" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все позиции</SelectItem>
                    <SelectItem value="Вратарь">Вратарь</SelectItem>
                    <SelectItem value="Защитник">Защитник</SelectItem>
                    <SelectItem value="Полузащитник">Полузащитник</SelectItem>
                    <SelectItem value="Нападающий">Нападающий</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="gap-2">
                  <Icon name="SlidersHorizontal" size={18} />
                  Фильтры
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-none animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-3xl">
                          {player.icon}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-8 h-8 ${getRatingColor(player.rating)} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                          {player.rating}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                          {player.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Icon name="Shield" size={14} />
                            {player.team}
                          </span>
                          <span>•</span>
                          <span>{player.nationality}</span>
                          <span>•</span>
                          <span>{player.age} лет</span>
                        </div>
                        <Badge variant="secondary">{player.position}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                      <div className="text-center">
                        <div className="text-2xl font-heading font-bold text-foreground">{player.goals}</div>
                        <div className="text-xs text-muted-foreground">Голы</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-heading font-bold text-foreground">{player.assists}</div>
                        <div className="text-xs text-muted-foreground">Пасы</div>
                      </div>
                      <div className="hidden lg:flex items-center gap-2 text-sm text-primary font-medium">
                        <span>Профиль</span>
                        <Icon name="ArrowRight" size={16} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-none">
              <CardContent className="p-12 text-center">
                <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Игроки не найдены
                </h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры поиска
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;
