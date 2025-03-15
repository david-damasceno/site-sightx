
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart as BarChartIcon, 
  Map, 
  MessageCircle, 
  LineChart as LineChartIcon, 
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
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from 'recharts';

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
                        <BarChart data={inventoryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #f0f0f0' }} />
                          <Bar dataKey="stock" fill={INVENTORY_COLORS.stock} radius={[4, 4, 0, 0]} name="Estoque" />
                          <Bar dataKey="demand" fill={INVENTORY_COLORS.demand} radius={[4, 4, 0, 0]} name="Demanda" />
                        </BarChart>
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
                  <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mr-3">
                        <Bot size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Donna AI</CardTitle>
                        <CardDescription>Sua assistente de negócios</CardDescription>
                      </div>
                      <div className="ml-auto flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 px-2">
                          <HelpCircle size={14} />
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 px-2">
                          <Settings size={14} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                    {/* Bot Message */}
                    <div className="flex items-start max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mr-3 flex-shrink-0">
                        <Bot size={16} />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm">
                        <p>Olá Carlos! Como posso ajudar você com seu negócio hoje?</p>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex items-start flex-row-reverse max-w-[80%] ml-auto">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white ml-3 flex-shrink-0">
                        <span className="text-sm font-medium">C</span>
                      </div>
                      <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm">
                        <p>Preciso analisar o desempenho de vendas do último mês.</p>
                      </div>
                    </div>
                    
                    {/* Bot Message with data card */}
                    <div className="flex items-start max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mr-3 flex-shrink-0">
                        <Bot size={16} />
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm">
                          <p>Claro, Carlos! Aqui está um resumo do desempenho de vendas do último mês:</p>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                          <div className="p-4 border-b bg-gray-50">
                            <h4 className="font-medium">Relatório de Vendas - Agosto 2023</h4>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between mb-3">
                              <span className="text-gray-500 text-sm">Total de Vendas</span>
                              <span className="font-medium">481 pedidos</span>
                            </div>
                            <div className="flex justify-between mb-3">
                              <span className="text-gray-500 text-sm">Faturamento</span>
                              <span className="font-medium">R$ 110.000</span>
                            </div>
                            <div className="flex justify-between mb-3">
                              <span className="text-gray-500 text-sm">Ticket Médio</span>
                              <span className="font-medium">R$ 178,50</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500 text-sm">Crescimento</span>
                              <span className="font-medium text-green-600">+14,6%</span>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-50 flex justify-center">
                            <div className="h-[140px] w-full">
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={revenueData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                  <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                                    </linearGradient>
                                  </defs>
                                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                  <YAxis hide={true} />
                                  <Tooltip />
                                  <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm">
                          <p>Que tal analisarmos quais produtos tiveram o melhor desempenho?</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex items-start flex-row-reverse max-w-[80%] ml-auto">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white ml-3 flex-shrink-0">
                        <span className="text-sm font-medium">C</span>
                      </div>
                      <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm">
                        <p>Sim, mostre-me o top 5 produtos em vendas.</p>
                      </div>
                    </div>
                    
                    {/* Bot Message with chart */}
                    <div className="flex items-start max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mr-3 flex-shrink-0">
                        <Bot size={16} />
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm">
                          <p>Aqui estão os 5 produtos mais vendidos no último mês:</p>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                          <div className="p-4">
                            <div className="h-[200px] w-full">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={[
                                    { name: 'Produto X', vendas: 78 },
                                    { name: 'Produto Y', vendas: 65 },
                                    { name: 'Produto Z', vendas: 52 },
                                    { name: 'Produto W', vendas: 38 },
                                    { name: 'Produto V', vendas: 25 }
                                  ]}
                                  margin={{ top: 20, right: 5, left: 5, bottom: 5 }}
                                  layout="vertical"
                                >
                                  <CartesianGrid horizontal strokeDasharray="3 3" />
                                  <XAxis type="number" axisLine={false} tickLine={false} />
                                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                                  <Tooltip />
                                  <Bar 
                                    dataKey="vendas" 
                                    fill="#6366f1" 
                                    radius={[0, 4, 4, 0]}
                                    barSize={30}
                                  />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm">
                          <p>O Produto X foi seu campeão de vendas, com 78 unidades vendidas. Notei também que os itens que você promoveu nas redes sociais tiveram um aumento médio de 23% nas vendas. Gostaria de ver uma análise de performance dos canais de marketing?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t bg-white">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Digite sua mensagem para a Donna..."
                        className="w-full pl-4 pr-20 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sightx-purple focus:border-transparent"
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                            <Zap size={14} className="text-sightx-purple" />
                          </div>
                        </button>
                        <button className="p-2 rounded-full bg-sightx-purple text-white flex items-center justify-center">
                          <MessageCircle size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Recursos</CardTitle>
                    <CardDescription>O que a Donna pode fazer por você</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg flex gap-3 hover:bg-purple-100 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <BarChartIcon size={20} className="text-sightx-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Análise de Dados</h4>
                        <p className="text-xs text-gray-500">Peça relatórios, análises e insights sobre seus dados</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg flex gap-3 hover:bg-blue-100 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <CalendarDays size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Planejamento</h4>
                        <p className="text-xs text-gray-500">Crie planos de ação e estratégias baseadas em dados</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg flex gap-3 hover:bg-green-100 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <TrendingUp size={20} className="text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Previsões</h4>
                        <p className="text-xs text-gray-500">Obtenha previsões sobre vendas, estoque e tendências</p>
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 p-3 rounded-lg flex gap-3 hover:bg-amber-100 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <AlertCircle size={20} className="text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Alertas</h4>
                        <p className="text-xs text-gray-500">Configure alertas para métricas importantes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Perguntas Sugeridas</CardTitle>
                    <CardDescription>Tente perguntar para a Donna</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-gray-100 p-3 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                      "Qual foi o produto mais vendido este mês?"
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                      "Como estão as vendas comparadas com o mesmo período do ano passado?"
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                      "Quais dias da semana temos mais vendas?"
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                      "Quais produtos estão com estoque baixo?"
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                      "Qual canal de vendas tem o maior ticket médio?"
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Ver mais sugestões</Button>
                  </CardFooter>
                </Card>
                
                <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center mb-3 shadow-sm">
                        <Zap size={24} className="text-sightx-purple" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">Upgrade para Pro</h3>
                      <p className="text-sm text-gray-600 mb-4">Desbloqueie recursos avançados e análises aprofundadas</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <p className="text-sm">Análises preditivas avançadas</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <p className="text-sm">Integração com seu CRM</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <p className="text-sm">Suporte prioritário 24/7</p>
                      </div>
                    </div>
                    <Button className="w-full bg-sightx-purple hover:bg-purple-700">
                      Conheça o Plano Pro
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="google-maps" className="h-[600px] bg-gray-50 flex items-center justify-center rounded-lg animate-fade-in">
            <div className="text-center">
              <Map size={64} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700">Integração com Google Maps</h3>
              <p className="text-gray-500 max-w-md mx-auto mt-2">Visualize dados geográficos, análise de território e comportamento de clientes.</p>
              <Button className="mt-6 bg-sightx-purple hover:bg-purple-700">Configurar Integração</Button>
            </div>
          </TabsContent>

          <TabsContent value="social-media" className="h-[600px] bg-gray-50 flex items-center justify-center rounded-lg animate-fade-in">
            <div className="text-center">
              <Share2 size={64} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700">Análise de Redes Sociais</h3>
              <p className="text-gray-500 max-w-md mx-auto mt-2">Monitore o desempenho de campanhas, engajamento e conversões através das redes sociais.</p>
              <Button className="mt-6 bg-sightx-purple hover:bg-purple-700">Conectar Redes Sociais</Button>
            </div>
          </TabsContent>

          <TabsContent value="geo-analysis" className="h-[600px] bg-gray-50 flex items-center justify-center rounded-lg animate-fade-in">
            <div className="text-center">
              <Map size={64} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700">Análise Geográfica</h3>
              <p className="text-gray-500 max-w-md mx-auto mt-2">Explore dados com base em localização, identifique regiões de alto desempenho e oportunidades.</p>
              <Button className="mt-6 bg-sightx-purple hover:bg-purple-700">Iniciar Análise</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// Helper component for check icon in the upgrade card
const Check = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default AnalysisTabs;
