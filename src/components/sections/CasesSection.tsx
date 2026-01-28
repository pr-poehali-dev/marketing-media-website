import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CasesSectionProps {
  scrollToSection: (id: string) => void;
}

const CasesSection = ({ scrollToSection }: CasesSectionProps) => {
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
    <>
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
            {cases.map((caseItem) => (
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
    </>
  );
};

export default CasesSection;