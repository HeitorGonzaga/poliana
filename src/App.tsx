import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Textarea } from "./components/ui/textarea";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { CheckCircle2, Instagram, Users, TrendingUp, BarChart3, Heart, Gift, Star, Quote, X, Send, Play, ArrowRight, Zap, Target, Clock, Shield } from "lucide-react";

export default function App() {
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Dados pessoais
    name: "",
    email: "",
    phone: "",
    instagram: "",
    
    // Perguntas do briefing
    objective: "",
    audience: "",
    frequency: "",
    contentType: "",
    visualIdentity: "",
    bioClarity: "",
    interaction: "",
    competitors: "",
    insights: "",
    priority: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitBriefing = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do briefing:", formData);
    setIsFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      instagram: "",
      objective: "",
      audience: "",
      frequency: "",
      contentType: "",
      visualIdentity: "",
      bioClarity: "",
      interaction: "",
      competitors: "",
      insights: "",
      priority: ""
    });
    setIsFormSubmitted(false);
    setIsBriefingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      
      {/* Hero Section */}
      <section className="pt-4 pb-16 px-4 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 bg-gradient-to-r from-teal-100 to-orange-100 text-teal-800 border-0 px-4 py-2">
                ✨ Social Media Estratégica
              </Badge>
              
              <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Transforme seu 
                <span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent"> Instagram </span>
                em uma máquina de vendas
              </h1>
              
              <p className="mb-8 text-xl text-slate-600 leading-relaxed">
                Seu Instagram pode ser muito mais do que curtidas. Pode ser uma máquina de gerar clientes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-gray-900 to-orange-500 hover:from-black hover:to-orange-600 px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
                  onClick={() => setIsBriefingModalOpen(true)}
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Quero meu Briefing Gratuito
                </Button>
                
                {/*<Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 rounded-full border-2 border-slate-200 hover:border-teal-300 text-slate-700 hover:text-teal-700"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver como funciona
                </Button>*/}
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span>+200 empreendedoras</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>4.9/5 de satisfação</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-orange-200 rounded-3xl blur-2xl opacity-30 scale-110"></div>
                <ImageWithFallback 
                  src="/foto01.jpeg"
                  alt="Polianna Moura - Social Media Estratégica"
                  className="relative rounded-3xl w-full mt-10 object-cover shadow-2xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-5 w-5 text-teal-500" />
                    <span className="text-sm font-medium">+150% engajamento</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">+300% vendas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-16 px-4" style={{ backgroundColor: '#809671' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-red-100 text-red-800">
            ⚠️ Você se identifica?
          </Badge>
          
          <h2 className="mb-8 text-3xl font-bold text-white">
            Se você está aqui, provavelmente...
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-l-4 border-l-red-400 bg-white shadow-lg rounded-none" style={{ borderLeft: "4px solid #725c3a" }} >
              <CardContent className="p-6">
                <p className="text-slate-700 text-left">
                  ❌ Posta sempre, mas não vê resultado nas vendas
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-400 bg-white shadow-lg rounded-none" style={{ borderLeft: "4px solid #725c3a" }} >
              <CardContent className="p-6">
                <p className="text-slate-700 text-left">
                  ❌ Não sabe o que postar para atrair clientes
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 bg-white shadow-lg rounded-none" style={{ borderLeft: "4px solid #725c3a" }} >
              <CardContent className="p-6">
                <p className="text-slate-700 text-left">
                  ❌ Perde tempo criando conteúdo que não converte
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-400 bg-white shadow-lg rounded-none" style={{ borderLeft: "4px solid #725c3a" }} >
              <CardContent className="p-6">
                <p className="text-slate-700 text-left">
                  ❌ Sente que está "gritando no vazio" no Instagram
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-xl text-white mb-8 italic">
            Se você se identificou com pelo menos uma dessas situações, 
            <strong className="text-black-500"> tenho a solução para você.</strong>
          </p>
        </div>
      </section>

      {/* Sobre a Poli - Mais Compacta */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="relative mx-auto w-80">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 to-orange-200 rounded-full blur opacity-60"></div>
                <ImageWithFallback 
                  src="/foto02.jpeg"
                  alt="Polianna Moura"
                  className="relative rounded-full w-80 h-80 object-cover shadow-xl"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-teal-100 text-teal-800">
                👋 Prazer, eu sou a Poli
              </Badge>
              
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Polianna Moura
              </h2>
              
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  <strong>Sou Poliana Moura, casada, mãe e especialista em Instagram estratégico.</strong> 
                  Durante a pandemia, descobri no digital o meu propósito e, desde 2023, trabalho com a gestão estratégica de perfis no Instagram.
<p>Já ajudei empreendedores de diferentes áreas a conquistarem visibilidade, engajamento e clientes.
Agora, quero fazer o mesmo por você: transformar o seu Instagram em um canal de vendas e relacionamento.</p>
                </p>
                
              </div>

              {/*<div className="mt-8 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">+200</div>
                  <div className="text-sm text-slate-600">Empreendedoras</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">+300%</div>
                  <div className="text-sm text-slate-600">Aumento em vendas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">4.9★</div>
                  <div className="text-sm text-slate-600">Satisfação</div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Método/Solução */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-teal-100 to-orange-100 text-teal-800">
              🚀 Método Comprovado
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Como eu transformo seu Instagram em uma máquina de vendas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Um processo estratégico em 4 etapas que garante resultados reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">1. Briefing</h3>
                <p className="text-slate-600">Analiso seu perfil e identifico exatamente o que está travando suas vendas</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">2. Estratégia</h3>
                <p className="text-slate-600">Criamos um plano personalizado baseado no seu negócio e público-alvo</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">3. Execução</h3>
                <p className="text-slate-600">Implemento tudo pra você: conteúdo, stories, interação e otimização</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">4. Resultados</h3>
                <p className="text-slate-600">Acompanho os números e otimizo constantemente para máxima performance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Briefing Gratuito - Destaque Principal */}
      <section className="py-20 px-4 text-white relative overflow-hidden" style={{ backgroundColor: '#809671' }}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Gift className="h-20 w-20 mx-auto mb-6 text-orange-400" />
            <Badge className="mb-4 bg-orange-100 text-orange-800 text-lg px-6 py-2">
              🎁 Presente Exclusivo - 100% Gratuito
            </Badge>
          </div>
          
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-white">
            Descubra AGORA o que está travando seu Instagram
          </h2>
          
          <p className="mb-8 text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Responda 10 perguntas estratégicas e receba um <strong className="text-orange-400">Briefing completo e personalizado </strong> 
            do seu perfil em até 24h no seu e-mail.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-10 border border-white/20">
            <h3 className="mb-6 text-2xl font-bold text-white">Com esse Briefing, você vai descobrir:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-white">O que está funcionando no seu instagram</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-white">Onde melhorar de forma simples</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-white">Quais passos seguir para atrair mais clientes</span>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <p className="text-2xl text-orange-300 mb-4">
              ⏰ <strong>Tempo limitado</strong>
            </p>
            <p className="text-lg text-white-300">
              Mais de 200 empreendedoras já receberam e transformaram seus resultados
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 text-xl font-bold"
            onClick={() => setIsBriefingModalOpen(true)}
          >
            <Gift className="mr-3 h-6 w-6" />
            QUERO MEU Briefing GRATUITO AGORA
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>

          <p className="mt-6 text-white text-sm">
            ✅ 100% Gratuito • ✅ Sem compromisso • ✅ Resultado em 24h
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">
              ⭐ Depoimentos Reais
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">O que minhas clientes dizem</h2>
            <p className="text-xl text-slate-600">Resultados que falam por si só</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Em 3 meses, meu faturamento triplicou! A Poli me mostrou estratégias que eu nunca imaginei."
                </p>
                <p className="text-teal-600 font-semibold">– Ana Silva, Coach</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Finalmente entendi como usar o Instagram para vender. Os resultados apareceram em 30 dias!"
                </p>
                <p className="text-orange-600 font-semibold">– Maria Santos, Arquiteta</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Agora meu Instagram trabalha para mim 24h. A Poli é sensacional!"
                </p>
                <p className="text-purple-600 font-semibold">– Julia Costa, Nutricionista</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 text-white " style={{ backgroundColor: '#809671' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Pare de desperdiçar tempo e dinheiro no Instagram
          </h2>
          
          <p className="mb-8 text-xl text-white max-w-3xl mx-auto">
            Enquanto você está tentando descobrir sozinha, suas concorrentes estão vendendo mais.
            <br /><br />
            <strong className="text-white">Não deixe para depois. Comece sua transformação hoje.</strong>
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 text-xl"
            onClick={() => setIsBriefingModalOpen(true)}
          >
            🚀 QUERO TRANSFORMAR MEU INSTAGRAM AGORA
          </Button>
          
          <p className="mt-6 text-white">
            ✅ Briefing completo • ✅ 100% gratuito • ✅ Sem compromisso
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center text-gray-400" style={{ backgroundColor: '#f3f4f6' }}>
        <p>© 2024 Polianna Moura - Social Media Estratégica | Transformando Instagram em máquinas de vendas</p>
      </footer>

      {/* Modal do Briefing */}
      <Dialog open={isBriefingModalOpen} onOpenChange={setIsBriefingModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {!isFormSubmitted ? (
            <>
              <DialogHeader className="text-center pb-6">
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-teal-100 to-orange-100 text-teal-800">
                    📋 Briefing Estratégico Gratuito
                  </Badge>
                </div>
                <DialogTitle className="bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
                  Descubra o que está travando seu Instagram
                </DialogTitle>
                <p className="text-gray-600 mt-2">
                  Responda as perguntas abaixo e receba um Briefing personalizado em até 24h
                </p>
              </DialogHeader>

              <form onSubmit={handleSubmitBriefing} className="space-y-6">
                {/* Dados de Contato */}
                <Card className="border-2 border-teal-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-teal-600">
                      <Users className="h-5 w-5" />
                      Seus Dados de Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="instagram">@ do Instagram *</Label>
                        <Input
                          id="instagram"
                          value={formData.instagram}
                          onChange={(e) => handleInputChange("instagram", e.target.value)}
                          placeholder="@seuinstagram"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Perguntas do Briefing */}
                <Card className="border-2 border-orange-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-600">
                      <Instagram className="h-5 w-5" />
                      Perguntas Estratégicas
                    </CardTitle>
                    <CardDescription>
                      Estas informações nos ajudarão a criar um Briefing personalizado
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Pergunta 1 */}
                    <div>
                      <Label className="text-base">1. Qual é o objetivo principal do seu perfil hoje? *</Label>
                      <Select value={formData.objective} onValueChange={(value) => handleInputChange("objective", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vender">Vender</SelectItem>
                          <SelectItem value="engajar">Engajar</SelectItem>
                          <SelectItem value="autoridade">Aumentar autoridade</SelectItem>
                          <SelectItem value="portfolio">Portfólio</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Pergunta 2 */}
                    <div>
                      <Label className="text-base">2. Quem é o público que você quer alcançar? *</Label>
                      <Textarea
                        value={formData.audience}
                        onChange={(e) => handleInputChange("audience", e.target.value)}
                        placeholder="Descreva idade, interesses, profissão, dores ou desejos do seu público ideal"
                        className="mt-2"
                        rows={3}
                        required
                      />
                    </div>

                    {/* Pergunta 3 */}
                    <div>
                      <Label className="text-base">3. Com qual frequência você publica atualmente? *</Label>
                      <RadioGroup 
                        value={formData.frequency} 
                        onValueChange={(value) => handleInputChange("frequency", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="quase-nunca" id="freq1" />
                          <Label htmlFor="freq1">Quase nunca</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1x-semana" id="freq2" />
                          <Label htmlFor="freq2">1x por semana</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2-3x-semana" id="freq3" />
                          <Label htmlFor="freq3">2-3x por semana</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="todos-dias" id="freq4" />
                          <Label htmlFor="freq4">Todos os dias</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Pergunta 4 */}
                    <div>
                      <Label className="text-base">4. Qual tipo de conteúdo você mais usa? *</Label>
                      <RadioGroup 
                        value={formData.contentType} 
                        onValueChange={(value) => handleInputChange("contentType", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="reels" id="content1" />
                          <Label htmlFor="content1">Reels</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="carrossel" id="content2" />
                          <Label htmlFor="content2">Carrossel</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="stories" id="content3" />
                          <Label htmlFor="content3">Stories</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="foto-simples" id="content4" />
                          <Label htmlFor="content4">Foto simples</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="lives" id="content5" />
                          <Label htmlFor="content5">Lives</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Pergunta 5 */}
                    <div>
                      <Label className="text-base">5. Você já tem uma identidade visual definida? *</Label>
                      <RadioGroup 
                        value={formData.visualIdentity} 
                        onValueChange={(value) => handleInputChange("visualIdentity", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim" id="visual1" />
                          <Label htmlFor="visual1">Sim</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais-ou-menos" id="visual2" />
                          <Label htmlFor="visual2">Mais ou menos</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="visual3" />
                          <Label htmlFor="visual3">Não</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Pergunta 6 */}
                    <div>
                      <Label className="text-base">6. Sua bio explica claramente quem você é e o que oferece? *</Label>
                      <RadioGroup 
                        value={formData.bioClarity} 
                        onValueChange={(value) => handleInputChange("bioClarity", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim" id="bio1" />
                          <Label htmlFor="bio1">Sim</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais-ou-menos" id="bio2" />
                          <Label htmlFor="bio2">Mais ou menos</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="bio3" />
                          <Label htmlFor="bio3">Não</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Pergunta 7 */}
                    <div>
                      <Label className="text-base">7. Você costuma interagir com seu público nos comentários e directs? *</Label>
                      <RadioGroup 
                        value={formData.interaction} 
                        onValueChange={(value) => handleInputChange("interaction", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sempre" id="interact1" />
                          <Label htmlFor="interact1">Sempre</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="as-vezes" id="interact2" />
                          <Label htmlFor="interact2">Às vezes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="quase-nunca" id="interact3" />
                          <Label htmlFor="interact3">Quase nunca</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Pergunta 8 */}
                    <div>
                      <Label className="text-base">8. Quais são seus principais concorrentes ou referências no Instagram?</Label>
                      <Textarea
                        value={formData.competitors}
                        onChange={(e) => handleInputChange("competitors", e.target.value)}
                        placeholder="Liste até 3 perfis que você considera referência ou concorrência (@exemplo1, @exemplo2, @exemplo3)"
                        className="mt-2"
                        rows={2}
                      />
                    </div>

                    {/* Pergunta 9 */}
                    <div>
                      <Label className="text-base">9. Você mede seus resultados pelo Instagram Insights? *</Label>
                      <RadioGroup 
                        value={formData.insights} 
                        onValueChange={(value) => handleInputChange("insights", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim" id="insights1" />
                          <Label htmlFor="insights1">Sim</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="de-vez-em-quando" id="insights2" />
                          <Label htmlFor="insights2">De vez em quando</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="insights3" />
                          <Label htmlFor="insights3">Não</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Pergunta 10 */}
                    <div>
                      <Label className="text-base">10. Se pudesse mudar apenas uma coisa no seu Instagram hoje, qual seria? *</Label>
                      <RadioGroup 
                        value={formData.priority} 
                        onValueChange={(value) => handleInputChange("priority", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais-seguidores" id="priority1" />
                          <Label htmlFor="priority1">Mais seguidores</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais-engajamento" id="priority2" />
                          <Label htmlFor="priority2">Mais engajamento</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais-vendas" id="priority3" />
                          <Label htmlFor="priority3">Mais vendas</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="melhor-estetica" id="priority4" />
                          <Label htmlFor="priority4">Melhor estética</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>

                {/* Botão de Envio */}
                <div className="flex justify-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar e Receber Meu Briefing Gratuito
                  </Button>
                </div>
              </form>
            </>
          ) : (
            /* Tela de Sucesso */
            <div className="text-center py-8">
              <div className="mx-auto mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <Badge className="mb-4 bg-green-100 text-green-800">
                ✅ Briefing Enviado
              </Badge>
              
              <h3 className="mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Obrigada por responder ao Briefing!
              </h3>
              
              <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Seu Briefing personalizado será enviado para o e-mail <strong>{formData.email}</strong> em até 24 horas.
                </p>
                <p className="text-teal-600">
                  Enquanto isso, que tal me seguir no Instagram para não perder nenhuma dica? 💕
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={resetForm}
                  className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  @poliannamoura
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetForm}
                  className="border-teal-200 text-teal-600 hover:bg-teal-50"
                >
                  Fechar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}