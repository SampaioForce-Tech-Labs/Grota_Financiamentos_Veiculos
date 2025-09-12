import React from "react";
import type { VeiculoStats } from "../data/types";

interface VeiculosStatsProps {
  estatisticas: VeiculoStats;
}

export function VeiculosStats({ estatisticas }: VeiculosStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Total</h3>
        <p className="text-2xl font-bold text-gray-900">{estatisticas.total}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Disponíveis</h3>
        <p className="text-2xl font-bold text-green-600">
          {estatisticas.disponiveis}
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Vendidos</h3>
        <p className="text-2xl font-bold text-red-600">
          {estatisticas.vendidos}
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Valor Médio</h3>
        <p className="text-2xl font-bold text-blue-600">
          R$ {estatisticas.valorMedio.toLocaleString("pt-BR")}
        </p>
      </div>
    </div>
  );
}
