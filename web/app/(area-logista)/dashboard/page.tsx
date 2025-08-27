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
import {
  dashboardPieData,
  dashboardLineDataMeses,
  dashboardLineDataDias,
  dashboardIndicators,
} from "./constants/dashboardCharts";
import { useDashboardBreadcrumb } from "@/src/application/core/hooks/useBreadcrumb";

// Função utilitária para calcular variação percentual
function calcPercent(current: number, previous: number): number {
  if (!previous || previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

// Simulação de valores anteriores para exemplo (em produção, viria do backend)
const previousIndicators = [
  { label: "Total de Propostas", value: 1110 },
  { label: "Aprovadas", value: 800 },
  { label: "Reprovadas", value: 210 },
  { label: "Em Análise", value: 90 },
];
export default function DashboardPage() {
  // Configurar breadcrumb para esta página
  useDashboardBreadcrumb();

  const [periodo, setPeriodo] = useState("meses");
  const lineData =
    periodo === "meses" ? dashboardLineDataMeses : dashboardLineDataDias;

  return (
    <div className="p-4 md:p-8 w-full mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4">Visão Geral</h1>
      {/* Cards de indicadores principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dashboardIndicators.map((indicator) => {
          // Busca valor anterior para o mesmo indicador
          const prev =
            previousIndicators.find((p) => p.label === indicator.label)
              ?.value || 0;
          const percent = calcPercent(indicator.value, prev);
          // Cores e ícones para cada card
          let icon = null;
          let badgeClass = "";
          let percentText = "";
          let valueClass = "";
          if (indicator.label === "Total de Propostas") {
            icon = (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            );
            badgeClass = "bg-blue-100 text-blue-700";
            valueClass = "text-primary";
          } else if (indicator.label === "Aprovadas") {
            icon = (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            );
            badgeClass = "bg-green-100 text-green-700";
            valueClass = "text-green-600";
          } else if (indicator.label === "Reprovadas") {
            icon = (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6" />
                <path d="M9 9l6 6" />
              </svg>
            );
            badgeClass = "bg-red-100 text-red-700";
            valueClass = "text-red-500";
          } else if (indicator.label === "Em Análise") {
            icon = (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#facc15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            );
            badgeClass = "bg-yellow-100 text-yellow-700";
            valueClass = "text-yellow-500";
          }
          percentText =
            percent >= 0
              ? `+${percent.toFixed(1)}% mês`
              : `${percent.toFixed(1)}% mês`;
          // Descrição dinâmica
          let description = "";
          if (indicator.label === "Total de Propostas")
            description = "Comparado ao mês anterior";
          if (indicator.label === "Aprovadas")
            description = "Taxa de aprovação alta";
          if (indicator.label === "Reprovadas")
            description = "Menor que o mês anterior";
          if (indicator.label === "Em Análise")
            description = "Aguardando resposta";
          return (
            <div
              key={indicator.label}
              className="bg-gradient-to-b from-white to-zinc-200 rounded-xl shadow p-6 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                  {icon}
                  {indicator.label}
                </span>
                <span
                  className={`${badgeClass} text-xs px-2 py-1 rounded font-semibold`}
                >
                  {percentText}
                </span>
              </div>
              <span className={`text-3xl font-bold ${valueClass}`}>
                {indicator.value}
              </span>
              <span className="text-xs text-muted-foreground">
                {description}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex w-full gap-x-6">
        {/* Gráfico de status das propostas */}
        <div className="bg-gradient-to-b from-white to-zinc-200 rounded-xl w-1/2 shadow p-6">
          <span className="font-semibold">Status das Propostas</span>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dashboardPieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {dashboardPieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Gráfico de linhas com ajuste de meses/dias */}
        <div className="bg-gradient-to-b from-white to-zinc-200 rounded-xl w-full shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Evolução de Propostas</span>
            <Select value={periodo} onValueChange={setPeriodo}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent className="bg-gradient-to-b from-white to-zinc-200">
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
        <div className="bg-gradient-to-b from-white to-zinc-200 rounded-xl shadow p-6 flex-1">
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
