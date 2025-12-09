import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const RatingsSection = () => {
  const leagueTable = [
    { position: 1, team: 'Манчестер Сити', flag: '🇬🇧', played: 28, won: 21, draw: 4, lost: 3, points: 67, form: ['W', 'W', 'W', 'D', 'W'] },
    { position: 2, team: 'Арсенал', flag: '🇬🇧', played: 28, won: 20, draw: 5, lost: 3, points: 65, form: ['W', 'W', 'D', 'W', 'W'] },
    { position: 3, team: 'Ливерпуль', flag: '🇬🇧', played: 28, won: 19, draw: 6, lost: 3, points: 63, form: ['W', 'D', 'W', 'W', 'D'] },
    { position: 4, team: 'Тоттенхэм', flag: '🇬🇧', played: 28, won: 17, draw: 5, lost: 6, points: 56, form: ['W', 'L', 'W', 'W', 'W'] },
    { position: 5, team: 'Челси', flag: '🇬🇧', played: 28, won: 16, draw: 6, lost: 6, points: 54, form: ['D', 'W', 'W', 'L', 'W'] },
  ];

  const getFormIcon = (result: string) => {
    if (result === 'W') return <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">В</div>;
    if (result === 'D') return <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">Н</div>;
    return <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">П</div>;
  };

  const getPositionColor = (position: number) => {
    if (position <= 3) return 'bg-green-500';
    if (position === 4) return 'bg-blue-500';
    return 'bg-muted';
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Рейтинги команд
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Турнирные таблицы и актуальные позиции команд
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  Английская Премьер-Лига
                </div>
                <Badge variant="secondary">Сезон 2024/25</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border text-sm text-muted-foreground">
                      <th className="text-left py-3 px-2 font-medium">#</th>
                      <th className="text-left py-3 px-2 font-medium">Команда</th>
                      <th className="text-center py-3 px-2 font-medium hidden md:table-cell">И</th>
                      <th className="text-center py-3 px-2 font-medium hidden lg:table-cell">В</th>
                      <th className="text-center py-3 px-2 font-medium hidden lg:table-cell">Н</th>
                      <th className="text-center py-3 px-2 font-medium hidden lg:table-cell">П</th>
                      <th className="text-center py-3 px-2 font-medium">О</th>
                      <th className="text-left py-3 px-2 font-medium hidden sm:table-cell">Форма</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leagueTable.map((team, index) => (
                      <tr 
                        key={index}
                        className="border-b border-border hover:bg-muted/50 transition-colors group"
                      >
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-1 h-8 rounded-full ${getPositionColor(team.position)}`}></div>
                            <span className="font-semibold text-foreground">{team.position}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{team.flag}</span>
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {team.team}
                            </span>
                          </div>
                        </td>
                        <td className="text-center py-4 px-2 text-sm text-muted-foreground hidden md:table-cell">
                          {team.played}
                        </td>
                        <td className="text-center py-4 px-2 text-sm text-muted-foreground hidden lg:table-cell">
                          {team.won}
                        </td>
                        <td className="text-center py-4 px-2 text-sm text-muted-foreground hidden lg:table-cell">
                          {team.draw}
                        </td>
                        <td className="text-center py-4 px-2 text-sm text-muted-foreground hidden lg:table-cell">
                          {team.lost}
                        </td>
                        <td className="text-center py-4 px-2">
                          <span className="font-heading font-bold text-lg text-foreground">
                            {team.points}
                          </span>
                        </td>
                        <td className="py-4 px-2 hidden sm:table-cell">
                          <div className="flex items-center gap-1">
                            {team.form.map((result, i) => (
                              <div key={i}>{getFormIcon(result)}</div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Лига Чемпионов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">Квалификация ЛЧ</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
