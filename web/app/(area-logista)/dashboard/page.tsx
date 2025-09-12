"use client";

import { useState } from "react";
import { useDashboardBreadcrumb } from "@/src/application/core/hooks/useBreadcrumb";
import {
  dashboardPieData,
  dashboardLineDataMeses,
  dashboardLineDataDias,
} from "../../../src/presentation/layout/pages/area-logista/dashboard/data/dashboardCharts";
import { useDashboardData } from "../../../src/application/core/hooks/useDashboardData";
import { IndicatorCard } from "../../../src/presentation/layout/pages/area-logista/dashboard/cards/IndicatorCard";
import { StatusChart } from "../../../src/presentation/layout/pages/area-logista/dashboard/cards/StatusChart";
import { EvolutionChart } from "../../../src/presentation/layout/pages/area-logista/dashboard/cards/EvolutionChart";
import { FinancingRateCard } from "../../../src/presentation/layout/pages/area-logista/dashboard/cards/FinancingRateCard";
import { useEstatisticasGerais } from "@/src/application/core/hooks/useData";

export default function DashboardPage() {
  useDashboardBreadcrumb();

  const [periodo, setPeriodo] = useState("meses");
  const { indicators, getChartData } = useDashboardData();
  const { estatisticas } = useEstatisticasGerais();
  const lineData =
    periodo === "meses" ? dashboardLineDataMeses : dashboardLineDataDias;

  return (
    <div className="p-4 md:p-8 w-full mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4">Visão Geral</h1>

      {/* Indicadores Principais */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indicators.map((item, index) => (
          <IndicatorCard
            key={item.name}
            name={item.name}
            value={item.value}
            percentageChange={item.percentageChange}
            changeType={item.changeType}
            chartData={getChartData(item.name)}
            colorIndex={index}
          />
        ))}
      </div>

      {/* Estatísticas dos Dados Globais */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">
            Total de Veículos
          </h3>
          <p className="text-3xl font-bold text-blue-600">
            {estatisticas.resumo.totalVeiculos}
          </p>
          <div className="mt-2 text-sm text-gray-600">
            <p>Disponíveis: {estatisticas.veiculos.disponiveis}</p>
            <p>Vendidos: {estatisticas.veiculos.vendidos}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">
            Total de Clientes
          </h3>
          <p className="text-3xl font-bold text-green-600">
            {estatisticas.resumo.totalClientes}
          </p>
          <div className="mt-2 text-sm text-gray-600">
            <p>Ativos: {estatisticas.clientes.ativos}</p>
            <p>
              Renda Média: R${" "}
              {estatisticas.clientes.rendaMedia.toLocaleString("pt-BR")}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">
            Financiamentos
          </h3>
          <p className="text-3xl font-bold text-orange-600">
            {estatisticas.resumo.totalFinanciamentos}
          </p>
          <div className="mt-2 text-sm text-gray-600">
            <p>Ativos: {estatisticas.financiamentos.ativos}</p>
            <p>
              Taxa Média: {estatisticas.financiamentos.taxaMedia.toFixed(2)}%
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Valor Total</h3>
          <p className="text-3xl font-bold text-purple-600">
            R$ {estatisticas.financiamentos.valorTotal.toLocaleString("pt-BR")}
          </p>
          <div className="mt-2 text-sm text-gray-600">
            <p>
              Veículos: R${" "}
              {estatisticas.veiculos.valorTotal.toLocaleString("pt-BR")}
            </p>
            <p>
              Médio: R${" "}
              {estatisticas.veiculos.valorMedio.toLocaleString("pt-BR")}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusChart data={dashboardPieData} />
        <EvolutionChart
          data={lineData}
          periodo={periodo}
          onPeriodoChange={setPeriodo}
        />
      </div>

      <FinancingRateCard rate="1,45% a.m." />
      {/* Atividades Recentes */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Estatísticas de Veículos */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Estatísticas de Veículos
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Total de Veículos</p>
                <p className="text-sm text-gray-600">
                  Todos os veículos cadastrados
                </p>
              </div>
              <span className="px-3 py-1 text-lg font-bold text-blue-600">
                {estatisticas.veiculos.total}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Disponíveis</p>
                <p className="text-sm text-gray-600">
                  Veículos prontos para venda
                </p>
              </div>
              <span className="px-3 py-1 text-lg font-bold text-green-600">
                {estatisticas.veiculos.disponiveis}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Vendidos</p>
                <p className="text-sm text-gray-600">
                  Veículos já comercializados
                </p>
              </div>
              <span className="px-3 py-1 text-lg font-bold text-red-600">
                {estatisticas.veiculos.vendidos}
              </span>
            </div>
          </div>
        </div>

        {/* Estatísticas de Clientes */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Estatísticas de Clientes
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Total de Clientes</p>
                <p className="text-sm text-gray-600">Clientes cadastrados</p>
              </div>
              <span className="px-3 py-1 text-lg font-bold text-green-600">
                {estatisticas.clientes.total}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Clientes Ativos</p>
                <p className="text-sm text-gray-600">
                  Clientes com financiamentos ativos
                </p>
              </div>
              <span className="px-3 py-1 text-lg font-bold text-blue-600">
                {estatisticas.clientes.ativos}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">Renda Média</p>
                <p className="text-sm text-gray-600">
                  Renda mensal média dos clientes
                </p>
              </div>
              <span className="px-3 py-1 text-lg font-bold text-purple-600">
                R$ {estatisticas.clientes.rendaMedia.toLocaleString("pt-BR")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas de Financiamentos */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Estatísticas de Financiamentos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">
              {estatisticas.financiamentos.total}
            </p>
            <p className="text-sm text-gray-600">Total de Financiamentos</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">
              {estatisticas.financiamentos.ativos}
            </p>
            <p className="text-sm text-gray-600">Financiamentos Ativos</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-2xl font-bold text-red-600">
              {estatisticas.financiamentos.inadimplentes}
            </p>
            <p className="text-sm text-gray-600">Inadimplentes</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-lg font-bold text-blue-600">
              R${" "}
              {estatisticas.financiamentos.valorTotal.toLocaleString("pt-BR")}
            </p>
            <p className="text-sm text-gray-600">Valor Total Financiado</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-lg font-bold text-purple-600">
              {estatisticas.financiamentos.taxaMedia.toFixed(2)}%
            </p>
            <p className="text-sm text-gray-600">Taxa de Juros Média</p>
          </div>
        </div>
      </div>
    </div>
  );
}
