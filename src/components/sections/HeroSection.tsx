import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const stats = [
    { number: '150+', label: 'Реализованных проектов' },
    { number: '40%', label: 'Средний рост конверсии' },
    { number: '5 лет', label: 'На рынке' },
    { number: '98%', label: 'Довольных клиентов' }
  ];

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

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-2 text-sm font-bold uppercase tracking-wider shadow-lg">РЕЗУЛЬТАТ, А НЕ ОБЩЕНИЕ</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              Комплексный маркетинг, который увеличивает{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">прибыль</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              Мы строим системы привлечения и удержания клиентов. От стратегии до реализации. 
              Измеряем успех в вашей выручке.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg px-10 py-7 font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('контакт')}
              >
                <Icon name="Rocket" className="mr-2" size={24} />
                Бесплатная консультация
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-10 py-7 font-bold shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                onClick={() => scrollToSection('услуги')}
              >
                <Icon name="Eye" className="mr-2" size={24} />
                Смотреть услуги
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-foreground/60 mt-3 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--secondary)) 0%, transparent 50%)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Почему мы <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">эффективны</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto font-medium">
              Наша работа строится на данных, проверенных гипотезах и глубоком понимании вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="p-8 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-primary/5"
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

      <section id="услуги" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-blue-50 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
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

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Как мы <span className="text-primary">работаем</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Прозрачный процесс от знакомства до результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card 
                key={index}
                className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-8xl font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-300">{step.number}</div>
                <div className="relative z-10">
                  <div className="text-4xl font-black text-primary mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Наша <span className="text-primary">команда</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессионалы, которые работают над вашим успехом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a 
              href="https://vk.com/e0ardasheva"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/bucket/56a95dc5-ab28-4d00-8d63-c3ca3da1ed94.jpg" 
                    alt="Александра Новикова" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h4 className="text-xl font-bold mb-1">Александра</h4>
                  <p className="text-muted-foreground mb-2">Основатель & Стратег</p>
                  <p className="text-sm text-muted-foreground mb-3">15+ лет в маркетинге</p>
                  <div className="flex justify-center gap-2">
                    <Icon name="ExternalLink" className="text-primary" size={20} />
                    <span className="text-sm text-primary font-semibold">VK профиль</span>
                  </div>
                </div>
              </Card>
            </a>

            <a 
              href="https://vk.com/sadness_kim"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/bucket/77d4584e-b776-491d-8561-892ffbfe1132.jpg" 
                    alt="Мария Волкова" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h4 className="text-xl font-bold mb-1">Ксения</h4>
                  <p className="text-muted-foreground mb-2">Креативный директор</p>
                  <p className="text-sm text-muted-foreground mb-3">10+ лет в брендинге</p>
                  <div className="flex justify-center gap-2">
                    <Icon name="ExternalLink" className="text-primary" size={20} />
                    <span className="text-sm text-primary font-semibold">VK профиль</span>
                  </div>
                </div>
              </Card>
            </a>

            <a 
              href="https://vk.com/e0ardasheva"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/bucket/802d41d8-625a-41c9-bf94-fdd9e23603ed.jpg" 
                    alt="Елена Смирнова" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h4 className="text-xl font-bold mb-1">Анна</h4>
                  <p className="text-muted-foreground mb-2">Digital-специалист</p>
                  <p className="text-sm text-muted-foreground mb-3">8+ лет в performance</p>
                  <div className="flex justify-center gap-2">
                    <Icon name="ExternalLink" className="text-primary" size={20} />
                    <span className="text-sm text-primary font-semibold">VK профиль</span>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
