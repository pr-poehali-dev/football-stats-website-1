import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Есть вопросы или предложения? Мы всегда рады помочь
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Отправить сообщение
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Имя
                  </label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Тема
                  </label>
                  <Input placeholder="О чем вы хотите написать?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Ваше сообщение..." 
                    rows={5}
                  />
                </div>
                <Button className="w-full gap-2" size="lg">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground mb-1">info@footballstats.com</p>
                    <p className="text-muted-foreground">support@footballstats.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Телефон</h4>
                    <p className="text-muted-foreground mb-1">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Icon name="MapPin" className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Адрес</h4>
                    <p className="text-muted-foreground mb-1">г. Москва</p>
                    <p className="text-muted-foreground">ул. Примерная, д. 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-secondary">
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold text-white mb-3">
                  Социальные сети
                </h4>
                <div className="flex gap-3">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
