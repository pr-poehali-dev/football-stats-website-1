import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Icon name="Trophy" className="text-white" size={24} />
              </div>
              <span className="font-heading font-bold text-xl">FootballStats</span>
            </div>
            <p className="text-white/80 text-sm">
              Профессиональная футбольная статистика для анализа и прогнозирования результатов.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#home" className="hover:text-secondary transition-colors">Главная</a></li>
              <li><a href="#stats" className="hover:text-secondary transition-colors">Статистика</a></li>
              <li><a href="#tournaments" className="hover:text-secondary transition-colors">Турниры</a></li>
              <li><a href="#matches" className="hover:text-secondary transition-colors">Матчи</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#ratings" className="hover:text-secondary transition-colors">Рейтинги</a></li>
              <li><a href="#players" className="hover:text-secondary transition-colors">Игроки</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">О проекте</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Подписка</h4>
            <p className="text-sm text-white/80 mb-3">
              Получайте последние новости и обновления
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-secondary"
              />
              <button className="px-4 py-2 bg-secondary hover:bg-secondary/90 rounded-lg transition-colors">
                <Icon name="Send" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2024 FootballStats. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
