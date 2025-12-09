import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const CodeListSection = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, fileName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(fileName);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const files = [
    {
      name: 'Navigation.tsx',
      path: 'src/components/Navigation.tsx',
      code: `import { useState } from 'react';
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

export default Navigation;`
    },
    {
      name: 'index.css',
      path: 'src/index.css',
      code: `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 210 20% 98%;
    --foreground: 215 25% 15%;

    --card: 0 0% 100%;
    --card-foreground: 215 25% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 215 25% 15%;

    --primary: 158 70% 20%;
    --primary-foreground: 0 0% 100%;

    --secondary: 142 76% 46%;
    --secondary-foreground: 0 0% 100%;

    --muted: 210 20% 95%;
    --muted-foreground: 215 16% 47%;

    --accent: 142 76% 46%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 214 20% 90%;
    --input: 214 20% 90%;
    --ring: 158 70% 20%;

    --radius: 0.75rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 215 25% 12%;
    --foreground: 210 20% 98%;

    --card: 215 25% 15%;
    --card-foreground: 210 20% 98%;

    --popover: 215 25% 15%;
    --popover-foreground: 210 20% 98%;

    --primary: 142 76% 46%;
    --primary-foreground: 0 0% 100%;

    --secondary: 158 70% 20%;
    --secondary-foreground: 0 0% 100%;

    --muted: 215 20% 20%;
    --muted-foreground: 215 16% 65%;

    --accent: 142 76% 46%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 215 20% 25%;
    --input: 215 20% 25%;
    --ring: 142 76% 46%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
}`
    },
    {
      name: 'tailwind.config.ts',
      path: 'tailwind.config.ts',
      code: `import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
      heading: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'slide-up': 'slide-up 0.4s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;`
    }
  ];

  return (
    <section className="py-16 bg-background border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            📋 Применяемый код проекта
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полные исходные коды всех созданных файлов
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {files.map((file, index) => (
            <Card key={index} className="border-2 border-border">
              <CardHeader className="bg-muted/50">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="font-heading flex items-center gap-2 text-lg">
                    <Icon name="FileCode" className="text-primary" size={24} />
                    <div>
                      <div className="text-foreground">{file.name}</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">
                        {file.path}
                      </div>
                    </div>
                  </CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy(file.code, file.name)}
                    className="gap-2"
                  >
                    {copiedCode === file.name ? (
                      <>
                        <Icon name="Check" size={16} />
                        Скопировано
                      </>
                    ) : (
                      <>
                        <Icon name="Copy" size={16} />
                        Копировать
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <pre className="p-6 overflow-x-auto bg-slate-950 text-slate-50 text-sm leading-relaxed">
                  <code>{file.code}</code>
                </pre>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <Icon name="CheckCircle2" size={48} className="mx-auto text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                Основные файлы проекта
              </h3>
              <p className="text-muted-foreground mb-4">
                Выше представлены ключевые файлы конфигурации и главный компонент навигации. 
                Все остальные компоненты следуют той же структуре и используют те же стили.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">React + TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">shadcn/ui</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Адаптивный дизайн</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeListSection;
