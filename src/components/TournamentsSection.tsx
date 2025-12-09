import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const TournamentsSection = () => {
  const tournaments = [
    { 
      name: 'Лига Чемпионов УЕФА', 
      status: 'live', 
      teams: 32, 
      stage: '1/8 финала',
      icon: '🏆',
      country: 'Европа'
    },
    { 
      name: 'Английская Премьер-Лига', 
      status: 'active', 
      teams: 20, 
      stage: '28-й тур',
      icon: '⚽',
      country: 'Англия'
    },
    { 
      name: 'Ла Лига', 
      status: 'active', 
      teams: 20, 
      stage: '26-й тур',
      icon: '⚽',
      country: 'Испания'
    },
    { 
      name: 'Бундеслига', 
      status: 'active', 
      teams: 18, 
      stage: '24-й тур',
      icon: '⚽',
      country: 'Германия'
    },
    { 
      name: 'Серия А', 
      status: 'active', 
      teams: 20, 
      stage: '27-й тур',
      icon: '⚽',
      country: 'Италия'
    },
    { 
      name: 'Лига Европы УЕФА', 
      status: 'live', 
      teams: 24, 
      stage: '1/16 финала',
      icon: '🏆',
      country: 'Европа'
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Турниры
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Следите за ведущими футбольными турнирами мира
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-none bg-card animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-4xl">{tournament.icon}</div>
                  <Badge 
                    variant={tournament.status === 'live' ? 'default' : 'secondary'}
                    className={tournament.status === 'live' ? 'bg-red-500 animate-pulse' : ''}
                  >
                    {tournament.status === 'live' ? (
                      <span className="flex items-center gap-1">
                        <Icon name="Radio" size={12} />
                        Live
                      </span>
                    ) : (
                      'Активен'
                    )}
                  </Badge>
                </div>
                <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">
                  {tournament.name}
                </CardTitle>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Icon name="MapPin" size={14} />
                  {tournament.country}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Стадия</span>
                    <span className="font-semibold text-foreground">{tournament.stage}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Команд</span>
                    <span className="font-semibold text-foreground">{tournament.teams}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Подробнее</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
