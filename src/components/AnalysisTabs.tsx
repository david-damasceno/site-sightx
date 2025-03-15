
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Map, 
  MessageCircle, 
  LineChart, 
  Share2, 
  TrendingUp,
  LayoutDashboard,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  Bot,
  Activity,
  Package,
  Target,
  DollarSign,
  Users,
  Zap,
  CalendarDays,
  ArrowUpRight,
  ShoppingCart,
  CreditCard,
  Search,
  Bell,
  HelpCircle,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartLegend, 
  ChartLegendContent, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const AnalysisTabs = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample data for Dashboard charts
  const revenueData = [
    { month: 'Jan', value: 56000 },
    { month: 'Feb', value: 62000 },
    { month: 'Mar', value: 58000 },
    { month: 'Apr', value: 70000 },
    { month: 'Mai', value: 85000 },
    { month: 'Jun', value: 92000 },
    { month: 'Jul', value: 100000 },
    { month: 'Ago', value: 110000 },
  ];

  const revenueAreaData = [
    { month: 'Jan', revenue: 56000, target: 60000 },
    { month: 'Feb', revenue: 62000, target: 63000 },
    { month: 'Mar', revenue: 58000, target: 65000 },
    { month: 'Apr', revenue: 70000, target: 68000 },
    { month: 'Mai', revenue: 85000, target: 75000 },
    { month: 'Jun', revenue: 92000, target: 85000 },
    { month: 'Jul', revenue: 100000, target: 95000 },
    { month: 'Ago', revenue: 110000, target: 105000 },
  ];

  const salesByChannelData = [
    { name: 'Online', value: 65 },
    { name: 'Loja Física', value: 25 },
    { name: 'Parceiros', value: 10 },
  ];

  const customerData = [
    { month: 'Mar', new: 120, returning: 80 },
    { month: 'Abr', new: 150, returning: 95 },
    { month: 'Mai', new: 180, returning: 110 },
    { month: 'Jun', new: 220, returning: 130 },
    { month: 'Jul', new: 280, returning: 150 },
    { month: 'Ago', new: 310, returning: 170 },
  ];

  const goalData = [
    { name: 'Alcançado', value: 78 },
    { name: 'Restante', value: 22 },
  ];

  const inventoryData = [
    { name: 'Produto A', stock: 124, demand: 150 },
    { name: 'Produto B', stock: 85, demand: 80 },
    { name: 'Produto C', stock: 45, demand: 95 },
    { name: 'Produto D', stock: 72, demand: 60 },
    { name: 'Produto E', stock: 32, demand: 45 },
  ];

  const activitiesData = [
    {
      id: 1,
      action: "Nova venda realizada",
      details: "Pedido #4821 - R$ 450,00",
      time: "Agora mesmo",
      icon: <ShoppingCart size={16} className="text-green-500" />,
      highlight: true
    },
    {
      id: 2,
      action: "Pagamento recebido",
      details: "Pedido #4819 - R$ 1.250,00",
      time: "5 min atrás",
      icon: <CreditCard size={16} className="text-blue-500" />
    },
    {
      id: 3,
      action: "Novo cliente cadastrado",
      details: "Ana Silva (ana.silva@email.com)",
      time: "25 min atrás",
      icon: <Users size={16} className="text-purple-500" />
    },
    {
      id: 4,
      action: "Produto com estoque baixo",
      details: "Produto C (5 unidades)",
      time: "1 hora atrás",
      icon: <AlertCircle size={16} className="text-orange-500" />
    }
  ];

  const COLORS = ['#9b87f5', '#ecebfd'];
  const CHANNEL_COLORS = ['#6366f1', '#a5b4fc', '#818cf8'];
  const INVENTORY_COLORS = {
    stock: '#9b87f5',
    demand: '#33C3F0'
  };
  const CUSTOMER_COLORS = {
    new: '#6366f1',
    returning: '#a5b4fc'
  };

  return (
    <section id="data-analysis" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2>Análise <span className="gradient-text">Inteligente</span> e Integrada</h2>
          <p>Nossa plataforma conecta múltiplas fontes de dados para uma visão completa do seu negócio, 
             ajudando você a identificar padrões, tendências e oportunidades que passariam despercebidos.</p>
        </div>

        <Tabs 
          defaultValue="dashboard" 
          className="w-full mt-12"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 gap-2 bg-gray-100 p-1.5 rounded-xl">
              <TabsTrigger 
                value="dashboard"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "dashboard" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <LayoutDashboard size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="chat-donna"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "chat-donna" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <Bot size={18} />
                <span className="hidden sm:inline">Chat Donna</span>
              </TabsTrigger>
              <TabsTrigger 
                value="google-maps"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "google-maps" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <Map size={18} />
                <span className="hidden sm:inline">Google Maps</span>
              </TabsTrigger>
              <TabsTrigger 
                value="social-media"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "social-media" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <Share2 size={18} />
                <span className="hidden sm:inline">Redes Sociais</span>
              </TabsTrigger>
              <TabsTrigger 
                value="geo-analysis"
                className={`px-4 py-2.5 rounded-lg flex gap-2 items-center ${
                  activeTab === "geo-analysis" ? 
                  "data-[state=active]:bg-white data-[state=active]:shadow-md" : ""
                }`}
              >
                <Map size={18} />
                <span className="hidden sm:inline">Análise Geográfica</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="animate-fade-in">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">Dashboard de Desempenho</h3>
                <p className="text-gray-500">Visão geral dos principais indicadores do seu negócio</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="py-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sightx-purple focus:border-transparent w-40 md:w-64"
                  />
                </div>
                <div className="relative">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative">
                    <Bell className="h-5 w-5 text-gray-600" />
                    <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                  </button>
                </div>
                <div className="relative">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <HelpCircle className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="relative">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Settings className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dashboard Welcome Card */}
            <Card className="mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-100">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <h3 className="text-xl font-bold mb-2">Olá, Carlos! 👋</h3>
                    <p className="text-gray-700 mb-3">Aqui está o resumo do seu negócio para o mês de Agosto.</p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">Faturamento Mensal</p>
                        <div className="flex items-end">
                          <span className="text-lg font-bold">R$ 110.000</span>
                          <span className="ml-2 text-xs text-green-600 flex items-center">
                            <ChevronUp size={12} />
                            10%
                          </span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">Vendas Totais</p>
                        <div className="flex items-end">
                          <span className="text-lg font-bold">481</span>
                          <span className="ml-2 text-xs text-green-600 flex items-center">
                            <ChevronUp size={12} />
                            8%
                          </span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">Meta Mensal</p>
                        <div className="flex items-end">
                          <span className="text-lg font-bold">78%</span>
                          <span className="ml-2 text-xs text-green-600 flex items-center">
                            <ArrowUpRight size={12} />
                            5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-sightx-purple hover:bg-purple-700 text-white">Ver Relatório Completo</Button>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl relative">
                        <div className="absolute inset-0 rounded-full border-4 border-white opacity-30"></div>
                        <div className="flex flex-col items-center">
                          <span className="text-2xl">78%</span>
                          <span className="text-xs font-normal">Meta</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Revenue Chart Card */}
                <Card className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Faturamento Mensal</CardTitle>
                        <CardDescription>Análise de receita vs meta dos últimos 8 meses</CardDescription>
                      </div>
                      <div className="bg-green-50 text-green-600 py-1 px-3 rounded-full text-sm font-medium flex items-center">
                        <ChevronUp size={14} className="mr-1" />
                        14.6%
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueAreaData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                          <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tickFormatter={(value) => `R$ ${value/1000}k`}
                            domain={[40000, 'auto']}
                          />
                          <Tooltip 
                            formatter={(value) => [`R$ ${Number(value).toLocaleString()}`, 'Receita']}
                            contentStyle={{ borderRadius: '8px', border: '1px solid #f0f0f0' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#9b87f5" 
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                            strokeWidth={2}
                            name="Receita"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="target" 
                            stroke="#f97316" 
                            strokeWidth={2} 
                            strokeDasharray="5 5"
                            name="Meta"
                            dot={false}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Acquisition Chart */}
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Aquisição de Clientes</CardTitle>
                        <CardDescription>Novos clientes vs clientes recorrentes</CardDescription>
                      </div>
                      <select className="text-sm border rounded-md p-1">
                        <option>Últimos 6 meses</option>
                        <option>Últimos 12 meses</option>
                        <option>Este ano</option>
                      </select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={customerData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #f0f0f0' }} />
                          <Bar dataKey="new" fill={CUSTOMER_COLORS.new} radius={[4, 4, 0, 0]} name="Novos Clientes" />
                          <Bar dataKey="returning" fill={CUSTOMER_COLORS.returning} radius={[4, 4, 0, 0]} name="Clientes Recorrentes" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 border-t">
                    <div className="w-full bg-blue-50 p-3 rounded-lg flex gap-3 items-start">
                      <Zap size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-700 mb-1">Insight da Donna:</p>
                        <p className="text-sm text-blue-700">Seus clientes recorrentes aumentaram 25% nos últimos 3 meses. Continue com as estratégias de fidelização atuais e considere expandir seu programa de referência.</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>

                {/* Inventory Status */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Status do Estoque</CardTitle>
                    <CardDescription>Análise de estoque vs demanda por produto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart data={inventoryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #f0f0f0' }} />
                          <Bar dataKey="stock" fill={INVENTORY_COLORS.stock} radius={[4, 4, 0, 0]} name="Estoque" />
                          <Bar dataKey="demand" fill={INVENTORY_COLORS.demand} radius={[4, 4, 0, 0]} name="Demanda" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 border-t">
                    <div className="w-full bg-yellow-50 p-3 rounded-lg flex gap-3 items-center">
                      <AlertCircle size={18} className="text-yellow-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-yellow-700 mb-0.5">Alerta de Estoque Crítico:</p>
                        <p className="text-sm text-yellow-700">Produto C tem estoque 53% abaixo da demanda prevista. Recomendamos reabastecer urgentemente para evitar perda de vendas.</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>

              <div className="lg:col-span-1 space-y-6">
                {/* Sales By Channel */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Vendas por Canal</CardTitle>
                      <select className="text-sm border rounded-md p-1">
                        <option>Este mês</option>
                        <option>Último mês</option>
                        <option>Este ano</option>
                      </select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center">
                      <div className="w-[180px] h-[180px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={salesByChannelData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={70}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {salesByChannelData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={CHANNEL_COLORS[index % CHANNEL_COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              formatter={(value) => [`${value}%`, 'Participação']}
                              contentStyle={{ borderRadius: '8px', border: '1px solid #f0f0f0' }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-4">
                      {salesByChannelData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2" 
                              style={{ backgroundColor: CHANNEL_COLORS[index] }}
                            />
                            <span>{item.name}</span>
                          </div>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Monthly Goal */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Meta Mensal</CardTitle>
                    <CardDescription>Progresso para agosto/2023</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="w-[180px] h-[180px] relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={goalData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={0}
                            dataKey="value"
                          >
                            {goalData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={COLORS[index % COLORS.length]} 
                                strokeWidth={index === 0 ? 0 : 0}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-3xl font-bold text-sightx-purple">78%</div>
                        <div className="text-xs text-gray-500">completado</div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-gray-500 text-sm mb-1">Progresso</h3>
                      <p className="text-gray-500 text-sm">R$ 85.800 de R$ 110.000</p>
                    </div>
                    <Button variant="outline" className="mt-4 w-full">Ver detalhes</Button>
                  </CardContent>
                </Card>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-2">
                          <DollarSign size={20} className="text-sightx-purple" />
                        </div>
                        <p className="text-sm text-gray-500">Ticket Médio</p>
                        <h4 className="text-xl font-bold">R$ 178,50</h4>
                        <div className="flex items-center text-green-600 text-xs">
                          <ChevronUp size={14} />
                          <span>12%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                          <Activity size={20} className="text-blue-500" />
                        </div>
                        <p className="text-sm text-gray-500">Vendas</p>
                        <h4 className="text-xl font-bold">481</h4>
                        <div className="flex items-center text-green-600 text-xs">
                          <ChevronUp size={14} />
                          <span>8%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-2">
                          <Package size={20} className="text-green-500" />
                        </div>
                        <p className="text-sm text-gray-500">Produtos</p>
                        <h4 className="text-xl font-bold">24</h4>
                        <div className="flex items-center text-gray-500 text-xs">
                          <span>Estável</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-2">
                          <Target size={20} className="text-red-500" />
                        </div>
                        <p className="text-sm text-gray-500">Conversão</p>
                        <h4 className="text-xl font-bold">24.8%</h4>
                        <div className="flex items-center text-red-600 text-xs">
                          <ChevronDown size={14} />
                          <span>3%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity Card */}
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">Atividades Recentes</CardTitle>
                      <Button variant="ghost" size="sm" className="text-sightx-purple">Ver tudo</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {activitiesData.map(activity => (
                        <div key={activity.id} className={`p-4 ${activity.highlight ? 'bg-purple-50' : ''}`}>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-1">
                              {activity.icon}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{activity.action}</p>
                              <p className="text-gray-500 text-xs">{activity.details}</p>
                              <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Donna Insights Card */}
                <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl gap-2">
                      <Bot size={18} className="text-sightx-purple" />
                      Insights da Donna
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                      <div className="flex gap-2 mb-1">
                        <TrendingUp size={14} className="text-green-500 mt-0.5" />
                        <p className="text-sm font-medium">Oportunidade de Vendas</p>
                      </div>
                      <p className="text-sm">Suas vendas às quintas-feiras são 23% maiores que nos outros dias. Considere aumentar o estoque para esse dia da semana.</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                      <div className="flex gap-2 mb-1">
                        <AlertCircle size={14} className="text-orange-500 mt-0.5" />
                        <p className="text-sm font-medium">Alerta de Estoque</p>
                      </div>
                      <p className="text-sm">O Produto C está prestes a ficar sem estoque, mas possui alta demanda. Recomendamos reabastecer com urgência.</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                      <div className="flex gap-2 mb-1">
                        <Activity size={14} className="text-red-500 mt-0.5" />
                        <p className="text-sm font-medium">Queda na Conversão</p>
                      </div>
                      <p className="text-sm">A conversão caiu 3% este mês. Analisando os dados, percebemos uma correlação com o aumento de 5% no tempo de carregamento do site.</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-100 text-sightx-purple">
                      Ver todos os insights
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chat-donna" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="h-[650px] flex flex-col overflow-hidden border-purple-100">
                  <CardHeader className="flex-shrink-0 border-b pb-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                          <Bot size={18} className="text-white" />
                        </div>
                        <div>
                          <CardTitle>Donna</CardTitle>
                          <CardDescription>Assistente Inteligente</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          Online
                        </div>
                        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                          <Settings size={16} className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                          <Bot size={14} className="text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 max-w-[80%] shadow-sm">
                          <p>Olá Carlos! 👋 Como posso ajudar você hoje?</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-medium text-sm">C</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg rounded-tr-none p-4 max-w-[80%] shadow-sm">
                          <p>Preciso entender por que minhas vendas caíram neste mês.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                          <Bot size={14} className="text-white" />
                        </div>
                        <div className="space-y-4 max-w-[85%]">
                          <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 shadow-sm">
                            <p>Analisei seus dados de vendas e identifiquei algumas causas possíveis para a queda:</p>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                              <p className="font-medium">Análise de Vendas - Julho/2023</p>
                              <CalendarDays size={14} className="text-gray-400" />
                            </div>
                            <ul className="list-disc pl-4 space-y-2 text-sm">
                              <li>Suas vendas caíram <span className="text-red-500 font-medium">8%</span> em relação ao mês anterior</li>
                              <li>O tempo de carregamento do seu site aumentou <span className="text-yellow-500 font-medium">5%</span></li>
                              <li>Seus concorrentes lançaram uma campanha promocional agressiva</li>
                              <li>O produto mais vendido (Produto C) ficou sem estoque por 5 dias</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-sightx-purple shadow-sm">
                            <p className="font-medium mb-2 text-sightx-purple">Recomendação:</p>
                            <p className="text-sm">Sugiro lançar uma campanha promocional focada nos produtos A e B, que têm bom estoque, e otimizar o tempo de carregamento do site para melhorar a experiência do usuário.</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-medium text-sm">C</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg rounded-tr-none p-4 max-w-[80%] shadow-sm">
                          <p>Ótimas sugestões! Como posso otimizar o tempo de carregamento do site?</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                          <Bot size={14} className="text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 max-w-[80%] shadow-sm">
                          <p className="mb-3">Para melhorar o tempo de carregamento do seu site, recomendo estas ações imediatas:</p>
                          <ol className="list-decimal pl-5 space-y-2 text-sm">
                            <li>Otimize as imagens do produto usando formatos WebP</li>
                            <li>Implemente carregamento preguiçoso (lazy loading)</li>
                            <li>Minifique os arquivos CSS e JavaScript</li>
                            <li>Use uma CDN para entrega de ativos estáticos</li>
                          </ol>
                          <p className="mt-3">Analise os dados e posso preparar um relatório mais detalhado. Vejo que estas melhorias podem aumentar suas conversões em até 12% com base em nossos benchmarks.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-medium text-sm">C</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg rounded-tr-none p-4 max-w-[80%] shadow-sm">
                          <p>Perfeito! E quanto à campanha promocional? Tem alguma sugestão específica?</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex-shrink-0 flex items-center justify-center">
                          <Bot size={14} className="text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 max-w-[80%] shadow-sm">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0s" }}></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <div className="flex w-full gap-2 items-center">
                      <div className="w-full relative">
                        <input 
                          type="text" 
                          className="w-full py-3 px-4 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sightx-purple focus:border-transparent pr-12" 
                          placeholder="Digite sua mensagem..."
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <button className="p-1.5 hover:bg-gray-200 rounded-full transition-colors text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                          </button>
                          <button className="p-1.5 bg-sightx-purple text-white rounded-full hover:bg-purple-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>

              <div className="lg:col-span-1 space-y-6">
                {/* Chat Context Card */}
                <Card className="border-purple-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Contexto da Conversa</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg border border-gray-100">
                      <p className="text-sm font-medium mb-1">Dados Disponíveis:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-sightx-purple rounded-full text-xs">Vendas</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">Estoque</span>
                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Marketing</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">Concorrentes</span>
                        <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs">Website</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg border border-gray-100">
                      <p className="text-sm font-medium mb-1">Período Analisado:</p>
                      <div className="flex items-center">
                        <CalendarDays size={14} className="text-gray-400 mr-2" />
                        <p className="text-sm">Julho 2023 (Comparativo com Jun/2023)</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg border border-gray-100">
                      <p className="text-sm font-medium mb-1">Produto em Foco:</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Produto C (Estoque baixo)</p>
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs">Crítico</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Suggested Questions */}
                <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-100">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bot size={16} className="text-sightx-purple" />
                      Perguntas Sugeridas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm border border-purple-100 shadow-sm hover:shadow-md transform transition-transform hover:translate-y-[-2px]">
                      Como posso aumentar as vendas do Produto B?
                    </button>
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm border border-purple-100 shadow-sm hover:shadow-md transform transition-transform hover:translate-y-[-2px]">
                      Quais canais de marketing têm melhor ROI?
                    </button>
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm border border-purple-100 shadow-sm hover:shadow-md transform transition-transform hover:translate-y-[-2px]">
                      Como está o desempenho das redes sociais?
                    </button>
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm border border-purple-100 shadow-sm hover:shadow-md transform transition-transform hover:translate-y-[-2px]">
                      Gere um relatório de vendas semanal
                    </button>
                  </CardContent>
                </Card>

                {/* Recent Conversations */}
                <Card className="border-purple-100">
                  <CardHeader>
                    <CardTitle className="text-lg">Conversas Recentes</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <button className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle size={14} className="text-sightx-purple" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Estratégia de Marketing Q3</p>
                          <div className="flex items-center">
                            <CalendarDays size={12} className="text-gray-400 mr-1" />
                            <p className="text-xs text-gray-500">Ontem às 14:30</p>
                          </div>
                        </div>
                      </button>
                      <button className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle size={14} className="text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Análise de Concorrentes</p>
                          <div className="flex items-center">
                            <CalendarDays size={12} className="text-gray-400 mr-1" />
                            <p className="text-xs text-gray-500">25/07 às 10:15</p>
                          </div>
                        </div>
                      </button>
                      <button className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle size={14} className="text-orange-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Problema de Estoque</p>
                          <div className="flex items-center">
                            <CalendarDays size={12} className="text-gray-400 mr-1" />
                            <p className="text-xs text-gray-500">20/07 às 09:45</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <Button variant="outline" className="w-full hover:bg-gray-50">
                      Ver histórico completo
                    </Button>
                  </CardFooter>
                </Card>

                {/* AI Capabilities */}
                <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-purple-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Zap size={16} className="text-yellow-500" />
                      Capacidades da Donna
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-sm">Análise de dados de vendas e estoque em tempo real</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-sm">Identificação proativa de problemas e oportunidades</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-sm">Recomendações personalizadas baseadas no seu negócio</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-sm">Geração automática de relatórios e visualizações</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="google-maps" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="feature-card">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Análise de Avaliações</h3>
                    <span className="text-sm bg-sightx-purple/10 text-sightx-purple py-1 px-3 rounded-full">4.7 ★</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-100 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                            <span className="text-xs font-medium">JM</span>
                          </div>
                          <span className="font-medium">João Martins</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-600">Ótimo atendimento, mas a entrega demorou um pouco mais do que o esperado.</p>
                      
                      <div className="mt-4 p-3 bg-sightx-purple/5 rounded-lg border border-sightx-purple/10">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-sightx-purple rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">AI</span>
                          </div>
                          <p className="text-sm font-medium text-sightx-purple">Resposta Sugerida:</p>
                        </div>
                        <p className="text-sm text-gray-700">Olá João, agradecemos seu feedback! Estamos felizes que gostou do nosso atendimento. Pedimos desculpas pelo tempo de entrega e já estamos trabalhando para melhorar esse aspecto. Esperamos vê-lo novamente em breve!</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Tempo de Resposta</h4>
                        <div className="text-2xl font-bold text-sightx-purple flex items-end">
                          4.2h
                          <span className="text-sm text-red-500 ml-2 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            +1.5h
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Taxa de Resposta</h4>
                        <div className="text-2xl font-bold text-sightx-purple flex items-end">
                          68%
                          <span className="text-sm text-green-500 ml-2 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                            12%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <TrendingUp size={18} className="text-sightx-purple mr-2" />
                        <h4 className="font-medium">Insights Competitivos</h4>
                      </div>
                      <p className="text-sm text-gray-600">Seus concorrentes respondem em média 3 horas mais rápido. Recomendamos implementar alertas de novas avaliações para melhorar esse indicador.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Maximize sua presença online com análise de avaliações</h3>
                <p className="text-gray-600">
                  Nossa tecnologia analisa automaticamente suas avaliações no Google Maps, identificando tendências, 
                  sentimentos e oportunidades de melhoria. Com a SightX, você pode:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Responder automaticamente</h4>
                      <p className="text-sm text-gray-600">Nossa IA gera respostas personalizadas para cada avaliação, mantendo uma comunicação eficiente com seus clientes.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Identificar tendências</h4>
                      <p className="text-sm text-gray-600">Reconhecemos padrões nas avaliações para destacar pontos fortes e áreas que precisam de melhorias.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Comparar com concorrentes</h4>
                      <p className="text-sm text-gray-600">Benchmarks automáticos com negócios similares para entender seu posicionamento no mercado.</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="btn-primary mt-4">Comece a Analisar</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="social-media" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold">Transforme dados sociais em estratégias vencedoras</h3>
                <p className="text-gray-600 mt-4 mb-6">
                  A SightX analisa automaticamente o desempenho das suas redes sociais e compara com seus concorrentes, 
                  entregando insights estratégicos para maximizar seu alcance e engajamento.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Análise de conteúdo</h4>
                      <p className="text-sm text-gray-600">Identifique quais tipos de conteúdo geram mais engajamento e resultado para seu negócio.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Monitoramento da concorrência</h4>
                      <p className="text-sm text-gray-600">Acompanhe os movimentos dos concorrentes e identifique oportunidades de diferenciação.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Recomendações de otimização</h4>
                      <p className="text-sm text-gray-600">Receba sugestões práticas para melhorar sua estratégia de conteúdo e alcançar mais pessoas.</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="btn-primary mt-6">Analisar Redes Sociais</Button>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="feature-card">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Análise de Redes Sociais</h3>
                    <div className="flex space-x-2">
                      <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                        </svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">Engajamento Total</p>
                        <div className="flex items-end">
                          <span className="text-xl font-bold text-sightx-purple">18.452</span>
                          <span className="text-xs text-green-500 ml-2 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                            24%
                          </span>
                        </div>
                      </div>
                      <LineChart size={40} className="text-sightx-purple opacity-70" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Melhor Plataforma</p>
                        <div className="flex items-center mt-1">
                          <span className="w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white mr-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                            </svg>
                          </span>
                          <span className="font-medium">Instagram</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Melhor Horário</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sightx-purple mr-1">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </span>
                          <span className="font-medium">19:00 - 21:00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-sightx-purple/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart size={18} className="text-sightx-purple" />
                        <h4 className="font-medium">Comparativo com Concorrentes</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Sua Empresa</span>
                            <span className="font-medium">18.452</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-sightx-purple h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Concorrente A</span>
                            <span className="font-medium">24.105</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Concorrente B</span>
                            <span className="font-medium">12.780</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-500 h-2 rounded-full" style={{width: '45%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="geo-analysis" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="feature-card h-full">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Análise Geográfica</h3>
                    <div className="bg-sightx-purple text-white p-1.5 rounded-md">
                      <Map size={18} />
                    </div>
                  </div>
                  
                  <div className="relative h-64 bg-gray-100 rounded-lg mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <Map size={48} className="text-blue-300" />
                    </div>
                    
                    <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-sightx-purple rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-sightx-green rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-500">Raio de Atuação</p>
                      <p className="text-lg font-bold text-sightx-purple">15 km</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-500">Concentração</p>
                      <p className="text-lg font-bold text-sightx-purple">Zona Sul</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-sightx-purple/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-sightx-purple rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                      <p className="font-medium text-sightx-purple">Insight da Donna:</p>
                    </div>
                    <p className="text-sm text-gray-700">
                      85% dos seus clientes estão concentrados na Zona Sul, mas há uma oportunidade inexplorada 
                      na Zona Oeste, onde seu concorrente principal tem apenas 12% de presença. Considere expandir 
                      sua campanha para essa região.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Estratégia territorial inteligente</h3>
                <p className="text-gray-600">
                  Nossa plataforma oferece uma análise geográfica detalhada para ajudar 
                  seu negócio a entender melhor o território onde atua e identificar oportunidades de expansão.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mapeamento de clientes</h4>
                      <p className="text-sm text-gray-600">Entenda onde estão seus clientes e como eles estão distribuídos geograficamente.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Análise de concorrência territorial</h4>
                      <p className="text-sm text-gray-600">Identifique áreas com menor presença de concorrentes e maior potencial de crescimento.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Recomendações de expansão</h4>
                      <p className="text-sm text-gray-600">Receba sugestões personalizadas sobre onde expandir sua atuação com base em dados demográficos e de mercado.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-sightx-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Otimização de campanhas locais</h4>
                      <p className="text-sm text-gray-600">Direcione suas estratégias de marketing com base na distribuição geográfica do seu público-alvo.</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="btn-primary mt-4">Explorar Dados Geográficos</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AnalysisTabs;
