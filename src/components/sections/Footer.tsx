import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', contact: '' });

  return (
    <>
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
              <a href="https://vk.com/sadness_kim" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                >
                  <Icon name="Send" className="mr-2" />
                  Связаться в VK
                </Button>
              </a>
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
                <a href="mailto:gavrilowa.nyusya@yandex.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={18} />
                  gavrilowa.nyusya@yandex.ru
                </a>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-6">
                <a href="https://vk.com/princess_arie" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
                    <img 
                      src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/files/0863c3fa-73df-4932-9aaa-1f608836c1c9.jpg" 
                      alt="VK" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
                <a href="https://t.me/senia_miraiy" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
                    <img 
                      src="https://cdn.poehali.dev/projects/b2b70fa7-8bca-4ca7-a35c-a3a86b0a2867/files/19f968a2-dc31-427e-a5c1-2a7383ae631b.jpg" 
                      alt="Telegram" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
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
    </>
  );
};

export default Footer;