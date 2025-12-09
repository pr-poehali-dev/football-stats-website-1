import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const StatsSection = () => {
  const topScorers = [
    { name: 'Криштиану Роналду', team: 'Аль-Наср', goals: 28, assists: 8, matches: 25, img: '⚽' },
    { name: 'Лионель Месси', team: 'Интер Майами', goals: 26, assists: 12, matches: 23, img: '⚽' },
    { name: 'Килиан Мбаппе', team: 'Реал Мадрид', goals: 24, assists: 10, matches: 24, img: '⚽' },
    { name: 'Эрлинг Холанд', team: 'Манчестер Сити', goals: 22, assists: 6, matches: 22, img: '⚽' },
  ];

  const stats = [
    { label: 'Всего матчей', value: '12,543', icon: 'Calendar', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Забито голов', value: '35,821', icon: 'Target', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Активных команд', value: '1,248', icon: 'Users', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Турниров', value: '156', icon: 'Trophy', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Статистика сезона
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Актуальные данные и рейтинги лучших игроков текущего сезона
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={stat.icon as any} className={stat.color} size={24} />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <Icon name="TrendingUp" className="text-primary" size={24} />
              Топ бомбардиры сезона
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topScorers.map((player, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="text-2xl font-heading font-bold text-muted-foreground w-8">
                    #{index + 1}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center text-2xl">
                    {player.img}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {player.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {player.team}
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-foreground">{player.goals}</div>
                      <div className="text-muted-foreground">Голы</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-foreground">{player.assists}</div>
                      <div className="text-muted-foreground">Пасы</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-foreground">{player.matches}</div>
                      <div className="text-muted-foreground">Матчи</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-32">
                    <Progress value={(player.goals / 30) * 100} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatsSection;
