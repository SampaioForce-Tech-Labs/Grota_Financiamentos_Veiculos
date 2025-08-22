"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/src/presentation/components/ui/select";

const data = [
  { name: "Aprovadas", value: 900, color: "#22c55e" },
  { name: "Reprovadas", value: 200, color: "#ef4444" },
  { name: "Em Análise", value: 100, color: "#facc15" },
];

const lineDataMeses = [
  { name: "Jan", propostas: 120, aprovadas: 90 },
  { name: "Fev", propostas: 140, aprovadas: 100 },
  { name: "Mar", propostas: 160, aprovadas: 120 },
  { name: "Abr", propostas: 180, aprovadas: 130 },
  { name: "Mai", propostas: 200, aprovadas: 150 },
  { name: "Jun", propostas: 170, aprovadas: 140 },
  { name: "Jul", propostas: 210, aprovadas: 160 },
];
const lineDataDias = [
  { name: "01", propostas: 10, aprovadas: 7 },
  { name: "02", propostas: 12, aprovadas: 8 },
  { name: "03", propostas: 15, aprovadas: 10 },
  { name: "04", propostas: 13, aprovadas: 9 },
  { name: "05", propostas: 18, aprovadas: 12 },
  { name: "06", propostas: 16, aprovadas: 11 },
  { name: "07", propostas: 20, aprovadas: 15 },
];

export default function DashboardPage() {
  const [periodo, setPeriodo] = useState("meses");
  const lineData = periodo === "meses" ? lineDataMeses : lineDataDias;

  return (
    <div className="p-4 md:p-8 w-full mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4">Visão Geral</h1>
      {/* Cards de indicadores principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-muted-foreground text-sm">
            Total de Propostas
          </span>
          <span className="text-3xl font-bold text-primary">1.200</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-muted-foreground text-sm">Aprovadas</span>
          <span className="text-3xl font-bold text-green-600">900</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-muted-foreground text-sm">Reprovadas</span>
          <span className="text-3xl font-bold text-red-500">200</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-muted-foreground text-sm">Em Análise</span>
          <span className="text-3xl font-bold text-yellow-500">100</span>
        </div>
      </div>
      <div className="flex w-full gap-x-6">
        {/* Gráfico de status das propostas */}
      <div className="bg-white rounded-xl w-1/2 shadow p-6">
        <span className="font-semibold">Status das Propostas</span>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Gráfico de linhas com ajuste de meses/dias */}
      <div className="bg-white rounded-xl w-full shadow p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">Evolução de Propostas</span>
          <Select value={periodo} onValueChange={setPeriodo}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="meses">Meses</SelectItem>
              <SelectItem value="dias">Dias</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={lineData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="propostas"
                stroke="#2563eb"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="aprovadas"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
      
      {/* Taxa média de financiamento */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="bg-white rounded-xl shadow p-6 flex-1">
          <span className="text-muted-foreground text-sm">
            Taxa Média de Financiamento
          </span>
          <span className="text-2xl font-bold text-primary block mt-2">
            1,45% a.m.
          </span>
        </div>
      </div>
    </div>
  );
}
