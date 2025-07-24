'use client';

import BoxSidebar from '@/src/presentation/layout/Sidebar/BoxSidebar';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Brush } from 'recharts';

// Dados do gráfico
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

function Page() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <BoxSidebar/>
      <main className="flex-1 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Dashboard</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-orange-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-orange-600">Total Financiamentos</h2>
            <p className="text-3xl font-bold text-orange-700">120</p>
          </div>
          <div className="p-4 bg-orange-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-orange-600">Clientes Ativos</h2>
            <p className="text-3xl font-bold text-orange-700">85</p>
          </div>
          <div className="p-4 bg-orange-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-orange-600">Novos Pedidos</h2>
            <p className="text-3xl font-bold text-orange-700">15</p>
          </div>
        </section>
        <div className='flex gap-x-5'>
          <section className="mt-6 p-4 bg-orange-100 rounded-lg shadow w-1/2">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Estatísticas Adicionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-orange-600">Receita Total</h3>
              <p className="text-2xl font-bold text-orange-700">R$ 1.250.000</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-orange-600">Taxa de Conversão</h3>
              <p className="text-2xl font-bold text-orange-700">68%</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-orange-600">Tempo Médio de Aprovação</h3>
              <p className="text-2xl font-bold text-orange-700">2.5 dias</p>
            </div>
          </div>
        </section>
        <section className="mt-6 p-4 bg-orange-100 rounded-lg shadow w-1/2">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Desempenho</h2>
          <div className="flex flex-col gap-6 ">
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  syncId="dashboardCharts"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#1f2937" />
                  <YAxis stroke="#1f2937" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      color: '#1f2937',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#f97316"
                    fill="#f97316"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  syncId="dashboardCharts"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#1f2937" />
                  <YAxis stroke="#1f2937" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      color: '#1f2937',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#fb923c"
                    fill="#fb923c"
                    strokeWidth={2}
                  />
                  <Brush />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  syncId="dashboardCharts"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#1f2937" />
                  <YAxis stroke="#1f2937" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      color: '#1f2937',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#fb923c"
                    fill="#fb923c"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
        </div>
        
      </main>
    </div>
  );
}

export default Page;