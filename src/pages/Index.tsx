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

  const cases = [
    {
      id: 1,
      title: 'TechStore',
      subtitle: 'Интернет-магазин электроники',
      category: 'E-commerce',
      challenge: 'Низкая конверсия сайта (0.8%), высокая стоимость привлечения клиента',
      solution: 'Редизайн воронки продаж, настройка ремаркетинга, внедрение персонализации',
      results: [
        { metric: '+320%', label: 'рост конверсии' },
        { metric: '-45%', label: 'снижение CAC' },
        { metric: '2.8M ₽', label: 'прирост выручки/мес' }
      ],
      duration: '3 месяца',
      image: 'https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/files/57fee522-221a-4fe3-81e8-b45ba8ca07e9.jpg'
    },
    {
      id: 2,
      title: 'FitLife',
      subtitle: 'Сеть фитнес-клубов',
      category: 'B2C Services',
      challenge: 'Падение продаж абонементов, слабое присутствие в соцсетях',
      solution: 'Запуск таргетированной рекламы, контент-стратегия в Instagram и TikTok',
      results: [
        { metric: '+180%', label: 'рост лидов' },
        { metric: '250K', label: 'охват в соцсетях' },
        { metric: '+95%', label: 'продаж абонементов' }
      ],
      duration: '4 месяца',
      image: 'https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/files/db607940-a782-4dba-8401-e10803ea73b3.jpg'
    },
    {
      id: 3,
      title: 'CloudManager',
      subtitle: 'B2B SaaS платформа',
      category: 'B2B Tech',
      challenge: 'Нулевой органический трафик, длинный цикл сделки',
      solution: 'SEO-стратегия, контент-маркетинг, email-nurturing кампании',
      results: [
        { metric: '+540%', label: 'органического трафика' },
        { metric: '85', label: 'квалифицированных лидов/мес' },
        { metric: '-30%', label: 'сокращение цикла сделки' }
      ],
      duration: '6 месяцев',
      image: 'https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/files/6e6d5cc8-e8a6-4b11-9036-43fe3ec6f201.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Алексей Морозов',
      position: 'CEO TechStore',
      company: 'Интернет-магазин электроники',
      text: 'За 3 месяца работы с MarketPro наша выручка выросла на 2.8 млн рублей. Команда не просто запустила рекламу — они перестроили всю воронку продаж. Главное — все решения подкреплены аналитикой.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Мария Светлова',
      position: 'Marketing Director',
      company: 'Сеть фитнес-клубов FitLife',
      text: 'Наконец-то нашли агентство, которое говорит на языке бизнеса, а не креативных абстракций. Каждый месяц получаем отчеты с реальными цифрами ROI. Продажи абонементов выросли почти в 2 раза.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Дмитрий Кодов',
      position: 'Founder',
      company: 'CloudManager SaaS',
      text: 'Скептически относился к агентствам, но MarketPro превзошли ожидания. За полгода вывели нас в топ поисковой выдачи, органический трафик вырос в 5 раз. Теперь лиды приходят сами.',
      rating: 5,
      avatar: '👨‍💻'
    },

  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-primary/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">MarketPro</div>
          <div className="hidden md:flex gap-10">
            {['Кейсы', 'Услуги', 'Отзывы'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/70 hover:text-primary transition-all duration-300 font-bold text-sm uppercase tracking-wider relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => scrollToSection('контакт')}
          >
            <Icon name="MessageCircle" className="mr-2" size={18} />
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-2 text-sm font-bold uppercase tracking-wider shadow-lg">
              Результат, а не обещания
            </Badge>
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

      <section id="кейсы" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Наши <span className="text-primary">кейсы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные результаты наших клиентов — от стартапов до крупного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={caseItem.id}
                className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 bg-white group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md mb-3 text-sm">
                      {caseItem.category}
                    </Badge>
                    <h3 className="text-4xl font-black text-white mb-1 tracking-tight">{caseItem.title}</h3>
                    <p className="text-white/90 text-sm font-medium">{caseItem.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-bold text-sm uppercase tracking-wide text-foreground/60">Задача</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.challenge}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-bold text-sm uppercase tracking-wide text-foreground/60">Решение</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.solution}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="TrendingUp" className="text-primary" size={18} />
                      <span className="font-bold text-xs uppercase tracking-wide">Результаты за {caseItem.duration}</span>
                    </div>
                    <div className="space-y-3">
                      {caseItem.results.map((result, i) => (
                        <div key={i} className="flex items-baseline justify-between">
                          <div className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{result.metric}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            ></Button>
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

      <section id="отзывы" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Что говорят наши <span className="text-primary">клиенты</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Отзывы тех, кто уже получил результаты
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="p-8 border-2 hover:border-primary hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Хотите так же? Начнём с бесплатной консультации</p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('контакт')}
            >
              <Icon name="MessageCircle" className="mr-2" />
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      <section id="о-нас" className="">
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