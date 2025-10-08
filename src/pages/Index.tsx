import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const programs = [
    {
      icon: "Target",
      title: "Огневая подготовка",
      description: "Безопасное обращение с оружием и меткая стрельба. Работа с различными видами стрелкового оружия."
    },
    {
      icon: "Heart",
      title: "Тактическая медицина",
      description: "Оказание помощи на поле боя. Практические навыки спасения жизни в экстремальных условиях."
    },
    {
      icon: "Sword",
      title: "Ножевой бой",
      description: "Владение холодным оружием. Техники самообороны и рукопашного боя от ветеранов спецназа."
    },
    {
      icon: "Wifi",
      title: "Управление БПЛА",
      description: "Обучение управлению беспилотниками. Тактическое применение дронов в полевых условиях."
    },
    {
      icon: "Users",
      title: "Боевое слаживание",
      description: "Эффективное взаимодействие в команде. Тактика группового взаимодействия в боевых условиях."
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "18:00 - 21:00", activity: "Огневая подготовка" },
    { day: "Вторник", time: "18:00 - 21:00", activity: "Тактическая медицина" },
    { day: "Среда", time: "18:00 - 21:00", activity: "Ножевой бой" },
    { day: "Четверг", time: "18:00 - 21:00", activity: "Управление БПЛА" },
    { day: "Пятница", time: "18:00 - 21:00", activity: "Боевое слаживание" },
    { day: "Суббота", time: "10:00 - 16:00", activity: "Полевые учения" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-xl font-bold">НВП ТАВРИДА</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#programs" className="hover:text-primary transition-colors">Программы</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-primary/10"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Icon name="Shield" className="text-primary animate-pulse" size={80} />
                <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
              КЛУБ "НВП ТАВРИДА"
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground font-semibold">
              ОБУЧЕНИЕ У ВЕТЕРАНОВ СПЕЦНАЗА И РАЗВЕДКИ
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
              Пройдите подготовку у профессионалов. Получите реальные навыки, отработанные на практике. 
              Наши инструкторы делятся опытом, разбирая реальные боевые сценарии и учат действовать в экстремальных ситуациях.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="UserPlus" className="mr-2" size={20} />
                Записаться на обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">ПРОГРАММЫ ОБУЧЕНИЯ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексная подготовка по всем направлениям военного дела от опытных инструкторов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <div className="mb-4 relative">
                    <Icon name={program.icon as any} className="text-primary group-hover:scale-110 transition-transform" size={48} />
                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">РАСПИСАНИЕ ЗАНЯТИЙ</h2>
            <p className="text-lg text-muted-foreground">
              Регулярные тренировки 6 дней в неделю
            </p>
          </div>
          
          <Card className="bg-card border-border">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {schedule.map((item, index) => (
                  <div key={index} className="p-6 hover:bg-primary/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon name="Calendar" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{item.day}</div>
                        <div className="text-muted-foreground">{item.time}</div>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <div className="font-semibold text-primary">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">КОНТАКТЫ И ЗАПИСЬ</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Форма записи</CardTitle>
                <CardDescription>Заполните форму для записи на обучение</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение (необязательно)"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background border-border min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Симферополь, ул. Военная, 15</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (978) 123-45-67</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <div className="text-muted-foreground">info@nvp-tavrida.ru</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold mb-1">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Сб: 10:00 - 21:00</div>
                      <div className="text-muted-foreground">Вс: выходной</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-background">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Shield" className="text-primary" size={24} />
            <span className="font-bold text-foreground">НВП ТАВРИДА</span>
          </div>
          <p className="text-sm">© 2024 Клуб начальной военной подготовки "Таврида". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
