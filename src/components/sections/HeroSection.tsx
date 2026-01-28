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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
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

      <section className="py-24 px-6 bg-gradient-to-br from-white via-primary/5 to-white">
        <div className="max-w-7xl mx-auto">
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

      <section id="о-нас" className="">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="section-title text-[#31102b]">Агентство для бизнеса, которое хочет большего</h2>
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
              <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-base"></Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-6 py-3 text-base"></Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-3 text-base"></Badge>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8">Наша команда</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/bucket/d57e6187-343e-4153-a376-367bb4110e46.jpg" 
                      alt="Анна Кузнецова" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold mb-1">Елизавета</h4>
                    <p className="text-muted-foreground mb-2">Стратег и аналитик</p>
                    <p className="text-sm text-muted-foreground">15+ лет в маркетинге</p>
                  </div>
                </Card>

                <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/bucket/77d4584e-b776-491d-8561-892ffbfe1132.jpg" 
                      alt="Мария Волкова" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold mb-1">Ксения</h4>
                    <p className="text-muted-foreground mb-2">Креативный директор</p>
                    <p className="text-sm text-muted-foreground">10+ лет в брендинге</p>
                  </div>
                </Card>

                <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/bucket/802d41d8-625a-41c9-bf94-fdd9e23603ed.jpg" 
                      alt="Елена Смирнова" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold mb-1">Анна</h4>
                    <p className="text-muted-foreground mb-2">Digital-специалист</p>
                    <p className="text-sm text-muted-foreground">8+ лет в performance</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;