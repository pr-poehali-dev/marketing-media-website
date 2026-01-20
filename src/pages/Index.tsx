import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', contact: '' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const advantages = [
    {
      icon: 'Target',
      title: 'Фокус на ROI',
      description: 'Каждый рубль в бюджете должен работать. Мы считаем окупаемость каждого канала.'
    },
    {
      icon: 'Puzzle',
      title: 'Комплексный подход',
      description: 'От дизайна и контента до настройки аналитики. Все элементы работают как один механизм.'
    },
    {
      icon: 'TrendingUp',
      title: 'Прозрачность и отчетность',
      description: 'Вы всегда видите, как растут ваши ключевые показатели: LTV, CAC, конверсии.'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Над вашим проектом работает слаженная команда стратегов, аналитиков, креаторов и таргетологов.'
    }
  ];

  const services = [
    {
      title: 'Стратегия и аналитика',
      items: ['Аудит маркетинга', 'Разработка стратегии продвижения', 'Внедрение сквозной аналитики'],
      icon: 'LineChart'
    },
    {
      title: 'Digital-продвижение',
      items: ['Контекстная и таргетированная реклама', 'SEO-оптимизация и рост трафика', 'Продвижение в социальных сетях (SMM)'],
      icon: 'Megaphone'
    },
    {
      title: 'Создание и развитие бренда',
      items: ['Разработка айдентики и дизайна', 'Производство контента: текст, фото, видео', 'Создание и поддержка сайтов/лендингов'],
      icon: 'Sparkles'
    },
    {
      title: 'Автоматизация продаж',
      items: ['Настройка CRM-систем', 'Проектирование воронок продаж', 'Email- и мессенджер-маркетинг'],
      icon: 'Zap'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Погружение и анализ',
      description: 'Изучаем ваш бизнес, рынок и аудиторию. Ставим измеримые цели.'
    },
    {
      number: '02',
      title: 'Стратегия и план',
      description: 'Разрабатываем детальный план продвижения с KPI и этапами.'
    },
    {
      number: '03',
      title: 'Реализация и запуск',
      description: 'Воплощаем стратегию в жизнь: креатив, настройка, программирование.'
    },
    {
      number: '04',
      title: 'Мониторинг и оптимизация',
      description: 'Постоянно анализируем данные, тестируем и улучшаем результаты.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Реализованных проектов' },
    { number: '40%', label: 'Средний рост конверсии' },
    { number: '5 лет', label: 'На рынке' },
    { number: '98%', label: 'Довольных клиентов' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">MarketPro</div>
          <div className="hidden md:flex gap-8">
            {['Услуги', 'Процесс', 'О нас'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => scrollToSection('контакт')}
          >
            <Icon name="MessageCircle" className="mr-2" size={18} />
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm">
              Маркетинг, который работает
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Комплексный маркетинг, который увеличивает{' '}
              <span className="text-primary">прибыль</span>, а не просто трафик
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Мы строим системы привлечения и удержания клиентов. От стратегии до реализации. 
              Измеряем успех в вашей выручке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow"
                onClick={() => scrollToSection('контакт')}
              >
                <Icon name="Rocket" className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-6"
                onClick={() => scrollToSection('услуги')}
              >
                <Icon name="Eye" className="mr-2" />
                Смотреть услуги
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="stats-number">{stat.number}</div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Маркетинг как <span className="text-primary">точная наука</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы не верим в «волшебные таблетки». Наша работа строится на анализе, проверенных гипотезах 
              и глубоком понимании вашего бизнеса.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="p-8 border-2 hover:border-primary hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={advantage.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Мы закрываем все задачи <span className="text-primary">digital-маркетинга</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите нужное направление или закажите комплексное решение под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 bg-white border-2 hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="процесс" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Понятный процесс от <span className="text-primary">идеи до результата</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы ценим ваше время и выстроили четкий алгоритм взаимодействия
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="section-title">
              Агентство для бизнесов, которые <span className="text-primary">хотят большего</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mt-8">
              <p>
                Мы — команда практиков, объединенных верой в data-driven подход. Мы не берем 
                абонентскую плату «за воздух», а зарабатываем вместе с вами, достигая поставленных 
                финансовых целей.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Наша миссия — делать маркетинг понятным, измеримым и прибыльным инструментом 
                для каждого нашего клиента.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-base">
                <Icon name="Award" className="mr-2" size={18} />
                Сертифицированные специалисты
              </Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-6 py-3 text-base">
                <Icon name="Shield" className="mr-2" size={18} />
                Гарантия результата
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-3 text-base">
                <Icon name="Zap" className="mr-2" size={18} />
                Быстрый старт
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="контакт" className="py-20 px-6 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы вывести бизнес на новую высоту?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Обсудим ваши задачи и предложим стратегию роста. Первая консультация — бесплатно 
            и ни к чему не обязывает.
          </p>

          <Card className="p-8 bg-white text-foreground max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  placeholder="Телефон или Email"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="h-12 text-lg"
                />
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
              >
                <Icon name="Send" className="mr-2" />
                Обсудить проект
              </Button>
              <p className="text-sm text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-foreground text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold mb-4 text-primary">MarketPro</div>
              <p className="text-gray-400">
                Маркетинговое агенство нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  hello@marketpro.agency
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-gray-600 hover:border-primary hover:bg-primary/10">
                  <Icon name="Instagram" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-600 hover:border-primary hover:bg-primary/10">
                  <Icon name="Youtube" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-600 hover:border-primary hover:bg-primary/10">
                  <Icon name="Linkedin" />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-600 hover:border-primary hover:bg-primary/10">
                  <Icon name="Send" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>© 2026 MarketPro. Все права защищены.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-primary transition-colors">Публичная оферта</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
