import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const CodeDisplay = () => {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  const files = [
    {
      name: 'Navigation.tsx',
      path: 'src/components/Navigation.tsx',
      description: 'Навигационное меню с адаптивным дизайном',
      lines: 86
    },
    {
      name: 'HeroSection.tsx',
      path: 'src/components/HeroSection.tsx',
      description: 'Главная секция с поиском',
      lines: 73
    },
    {
      name: 'StatsSection.tsx',
      path: 'src/components/StatsSection.tsx',
      description: 'Статистика и топ бомбардиры',
      lines: 112
    },
    {
      name: 'TournamentsSection.tsx',
      path: 'src/components/TournamentsSection.tsx',
      description: 'Раздел турниров',
      lines: 89
    },
    {
      name: 'MatchesSection.tsx',
      path: 'src/components/MatchesSection.tsx',
      description: 'Расписание матчей',
      lines: 104
    },
    {
      name: 'RatingsSection.tsx',
      path: 'src/components/RatingsSection.tsx',
      description: 'Турнирные таблицы',
      lines: 143
    },
    {
      name: 'PlayersSection.tsx',
      path: 'src/components/PlayersSection.tsx',
      description: 'База игроков с поиском и фильтрами',
      lines: 187
    },
    {
      name: 'ContactSection.tsx',
      path: 'src/components/ContactSection.tsx',
      description: 'Контактная форма',
      lines: 137
    },
    {
      name: 'Footer.tsx',
      path: 'src/components/Footer.tsx',
      description: 'Футер сайта',
      lines: 91
    },
    {
      name: 'Index.tsx',
      path: 'src/pages/Index.tsx',
      description: 'Главная страница с навигацией',
      lines: 90
    },
    {
      name: 'index.css',
      path: 'src/index.css',
      description: 'Стили и CSS переменные',
      lines: 104
    },
    {
      name: 'tailwind.config.ts',
      path: 'tailwind.config.ts',
      description: 'Конфигурация Tailwind с анимациями',
      lines: 118
    }
  ];

  const handleCopy = (fileName: string) => {
    setCopiedFile(fileName);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  return (
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Структура проекта
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полный список файлов и компонентов сайта
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="components">Компоненты</TabsTrigger>
              <TabsTrigger value="pages">Страницы</TabsTrigger>
              <TabsTrigger value="config">Конфигурация</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-4">
              {files.filter(f => f.path.includes('components')).map((file, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name="FileCode" className="text-primary" size={24} />
                          <h3 className="font-heading font-bold text-lg text-foreground">
                            {file.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {file.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Code" size={14} />
                            {file.lines} строк
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Folder" size={14} />
                            {file.path}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(file.name)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      >
                        {copiedFile === file.name ? (
                          <>
                            <Icon name="Check" size={16} />
                            <span className="text-sm font-medium">Скопировано</span>
                          </>
                        ) : (
                          <>
                            <Icon name="Copy" size={16} />
                            <span className="text-sm font-medium">Путь</span>
                          </>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="pages" className="space-y-4">
              {files.filter(f => f.path.includes('pages')).map((file, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name="FileCode" className="text-primary" size={24} />
                          <h3 className="font-heading font-bold text-lg text-foreground">
                            {file.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {file.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Code" size={14} />
                            {file.lines} строк
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Folder" size={14} />
                            {file.path}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(file.name)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      >
                        {copiedFile === file.name ? (
                          <>
                            <Icon name="Check" size={16} />
                            <span className="text-sm font-medium">Скопировано</span>
                          </>
                        ) : (
                          <>
                            <Icon name="Copy" size={16} />
                            <span className="text-sm font-medium">Путь</span>
                          </>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="config" className="space-y-4">
              {files.filter(f => !f.path.includes('components') && !f.path.includes('pages')).map((file, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name="Settings" className="text-primary" size={24} />
                          <h3 className="font-heading font-bold text-lg text-foreground">
                            {file.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {file.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Code" size={14} />
                            {file.lines} строк
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Folder" size={14} />
                            {file.path}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(file.name)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      >
                        {copiedFile === file.name ? (
                          <>
                            <Icon name="Check" size={16} />
                            <span className="text-sm font-medium">Скопировано</span>
                          </>
                        ) : (
                          <>
                            <Icon name="Copy" size={16} />
                            <span className="text-sm font-medium">Путь</span>
                          </>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-secondary mt-8">
            <CardHeader>
              <CardTitle className="text-white font-heading flex items-center gap-2">
                <Icon name="Info" size={24} />
                Информация о проекте
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Технологии:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• React 18 + TypeScript</li>
                    <li>• Tailwind CSS + shadcn/ui</li>
                    <li>• Vite для сборки</li>
                    <li>• Lucide Icons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Особенности:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Полностью адаптивный дизайн</li>
                    <li>• Плавные анимации</li>
                    <li>• Поиск и фильтрация</li>
                    <li>• Современный UI/UX</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeDisplay;
