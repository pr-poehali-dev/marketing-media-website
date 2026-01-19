import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const cases = [
    {
      id: 1,
      title: 'Ребрендинг FinTech',
      category: 'Брендинг',
      description: 'Полное переосмысление визуальной идентичности для стартапа в сфере финансовых технологий',
      metrics: '+340% узнаваемости',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'E-commerce платформа',
      category: 'Веб-разработка',
      description: 'Создание высоконагруженной платформы с AI-рекомендациями для 50К+ пользователей',
      metrics: '+180% конверсии',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 3,
      title: 'Social Media для FMCG',
      category: 'SMM',
      description: 'Вирусная кампания для товаров повседневного спроса в TikTok и Instagram',
      metrics: '12M охвата',
      color: 'from-pink-600 to-orange-600'
    },
    {
      id: 4,
      title: 'AR презентация для авто',
      category: 'Digital',
      description: 'Интерактивное дополненной реальности приложение для автосалона премиум класса',
      metrics: '+250% лидов',
      color: 'from-cyan-600 to-blue-600'
    }
  ];

  const team = [
    { name: 'Алекс Громов', role: 'Креативный директор', emoji: '🎨' },
    { name: 'Марина Светлова', role: 'Стратег', emoji: '📊' },
    { name: 'Денис Код', role: 'Tech Lead', emoji: '⚡' },
    { name: 'Яна Медиа', role: 'SMM Manager', emoji: '📱' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Нейромаркетинг в 2026: как AI меняет правила игры',
      excerpt: 'Искусственный интеллект уже не просто тренд — это инструмент, который позволяет предугадывать желания аудитории...',
      date: '15 янв 2026',
      readTime: '7 мин'
    },
    {
      id: 2,
      title: 'Микроинтеракции: почему детали решают всё',
      excerpt: 'Разбираем 10 примеров микроанимаций, которые повышают конверсию на 40% и создают эмоциональную связь...',
      date: '12 янв 2026',
      readTime: '5 мин'
    },
    {
      id: 3,
      title: 'От TikTok к метавселенным: эволюция контента',
      excerpt: 'Как изменился подход к созданию контента за последние 3 года и куда движется индустрия в эпоху Web3...',
      date: '08 янв 2026',
      readTime: '9 мин'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Как мы создали вирусную кампанию для FinTech',
      type: 'video',
      duration: '12:34',
      thumbnail: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Подкаст: Будущее маркетинга с AI',
      type: 'audio',
      duration: '45:20',
      thumbnail: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Таймлапс: 48 часов ребрендинга',
      type: 'video',
      duration: '08:15',
      thumbnail: 'bg-gradient-to-br from-orange-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Интервью: Секреты креативного мышления',
      type: 'audio',
      duration: '32:10',
      thumbnail: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">NOVA</div>
          <div className="hidden md:flex gap-8">
            {['Кейсы', 'О нас', 'Блог', 'Видео'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm">
            Маркетинговое агенство будущего
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Мы не следуем<br />
            <span className="text-gradient">трендам</span>
            <br />
            Мы их создаём
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Экспериментальные стратегии, смелые решения и результаты, которые меняют рынки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all glow text-lg px-8 py-6"
              onClick={() => scrollToSection('кейсы')}
            >
              Смотреть кейсы
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-6"
            >
              О нас
              <Icon name="Sparkles" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="кейсы" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Кейсы, которые<br />
              <span className="text-gradient">говорят сами</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Каждый проект — это эксперимент. Мы не боимся пробовать новое и ломать шаблоны.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((caseItem, index) => (
              <Card 
                key={caseItem.id}
                className={`group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 cursor-pointer ${
                  index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'
                } hover:scale-105`}
                style={{ 
                  clipPath: index % 3 === 0 ? 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)' : 
                            index % 3 === 1 ? 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)' : 
                            'polygon(0 0, 100% 0, 100% 95%, 0 100%)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="p-8">
                  <Badge className="mb-4 bg-primary/20 text-primary border-0">
                    {caseItem.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-3">{caseItem.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {caseItem.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient">{caseItem.metrics}</span>
                    <Icon name="ArrowUpRight" className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-32 px-6 relative bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Команда<br />
                <span className="text-gradient">экспериментаторов</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Мы не обычное агентство. Мы — лаборатория идей, где каждый проект становится площадкой для инноваций.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                С 2020 года мы помогли 150+ брендам выделиться на рынке через нестандартные маркетинговые решения. 
                Наш подход: 70% креатива, 20% данных, 10% магии.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Узнать больше
                <Icon name="Users" className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {team.map((member, index) => (
                <Card 
                  key={index}
                  className={`p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                  } hover:rotate-0`}
                >
                  <div className="text-5xl mb-4">{member.emoji}</div>
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="блог" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Блог</span> о маркетинге
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Инсайты, тренды и нестандартные взгляды на индустрию
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105"
                style={{
                  clipPath: index === 0 ? 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' : 
                            index === 1 ? 'polygon(0 0, 100% 0, 100% 100%, 0 95%)' :
                            'polygon(0 0, 100% 5%, 100% 100%, 0 100%)'
                }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary group-hover:translate-x-2 transition-transform">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="видео" className="py-32 px-6 relative bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Видеотека</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Смотрите и слушайте наши кейсы, подкасты и инсайты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <Card 
                key={video.id}
                className="group bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105"
              >
                <div className={`h-48 ${video.thumbnail} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Icon 
                    name={video.type === 'video' ? 'Play' : 'Music'} 
                    size={48} 
                    className="text-white z-10 group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <Badge className="mb-2 text-xs">
                    {video.type === 'video' ? '🎬 Видео' : '🎧 Аудио'}
                  </Badge>
                  <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold text-gradient mb-4">NOVA</div>
              <p className="text-muted-foreground">
                Маркетинговое агенство нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@nova.agency</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:border-primary">
                  <Icon name="Instagram" />
                </Button>
                <Button variant="outline" size="icon" className="hover:border-primary">
                  <Icon name="Youtube" />
                </Button>
                <Button variant="outline" size="icon" className="hover:border-primary">
                  <Icon name="Linkedin" />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm pt-8 border-t border-border">
            © 2026 NOVA Agency. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
