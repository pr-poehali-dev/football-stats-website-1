import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const MatchesSection = () => {
  const matches = [
    {
      date: '15 дек, 20:00',
      tournament: 'Лига Чемпионов',
      homeTeam: 'Реал Мадрид',
      awayTeam: 'Манчестер Сити',
      homeScore: 2,
      awayScore: 1,
      status: 'finished',
      homeFlag: '🇪🇸',
      awayFlag: '🇬🇧'
    },
    {
      date: '16 дек, 22:45',
      tournament: 'Лига Чемпионов',
      homeTeam: 'Бавария',
      awayTeam: 'ПСЖ',
      homeScore: null,
      awayScore: null,
      status: 'upcoming',
      homeFlag: '🇩🇪',
      awayFlag: '🇫🇷'
    },
    {
      date: 'Сейчас',
      tournament: 'Премьер-Лига',
      homeTeam: 'Ливерпуль',
      awayTeam: 'Арсенал',
      homeScore: 1,
      awayScore: 1,
      status: 'live',
      minute: 67,
      homeFlag: '🇬🇧',
      awayFlag: '🇬🇧'
    },
    {
      date: '17 дек, 18:00',
      tournament: 'Ла Лига',
      homeTeam: 'Барселона',
      awayTeam: 'Атлетико',
      homeScore: null,
      awayScore: null,
      status: 'upcoming',
      homeFlag: '🇪🇸',
      awayFlag: '🇪🇸'
    },
  ];

  const getStatusBadge = (status: string, minute?: number) => {
    if (status === 'live') {
      return (
        <Badge variant="default" className="bg-red-500 animate-pulse">
          <Icon name="Radio" size={12} className="mr-1" />
          {minute}'
        </Badge>
      );
    }
    if (status === 'finished') {
      return <Badge variant="secondary">Завершен</Badge>;
    }
    return <Badge variant="outline">Скоро</Badge>;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Матчи
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Результаты последних матчей и расписание предстоящих игр
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {matches.map((match, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-none animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Trophy" size={14} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{match.tournament}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{match.date}</span>
                      {getStatusBadge(match.status, match.minute)}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{match.homeFlag}</span>
                          <span className="font-semibold text-foreground">{match.homeTeam}</span>
                        </div>
                        {match.status !== 'upcoming' && (
                          <span className="text-2xl font-heading font-bold text-foreground">
                            {match.homeScore}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{match.awayFlag}</span>
                          <span className="font-semibold text-foreground">{match.awayTeam}</span>
                        </div>
                        {match.status !== 'upcoming' && (
                          <span className="text-2xl font-heading font-bold text-foreground">
                            {match.awayScore}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="md:pl-6 md:border-l border-border">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Детали матча</span>
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

export default MatchesSection;
