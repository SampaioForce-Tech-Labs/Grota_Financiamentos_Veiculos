// Re-exportar todos os tipos de dados
export type { Veiculo } from "../data/veiculos";
export type { Cliente } from "../data/clientes";
export type { Financiamento } from "../data/financiamentos";

// Importar tipos para uso interno
import type { Veiculo as VeiculoType } from "../data/veiculos";
import type { Cliente as ClienteType } from "../data/clientes";
import type { Financiamento as FinanciamentoType } from "../data/financiamentos";

// Tipos utilitários
export type StatusVeiculo = VeiculoType["status"];
export type StatusCliente = ClienteType["status"];
export type StatusFinanciamento = FinanciamentoType["status"];

// Tipos para formulários (parciais dos tipos principais)
export type VeiculoForm = Omit<VeiculoType, "id" | "dataCadastro">;
export type ClienteForm = Omit<ClienteType, "id" | "dataCadastro">;
export type FinanciamentoForm = Omit<FinanciamentoType, "id" | "dataCadastro">;

// Tipos para filtros
export interface FiltroVeiculos {
  marca?: string;
  modelo?: string;
  categoria?: StatusVeiculo;
  status?: StatusVeiculo;
  anoMin?: number;
  anoMax?: number;
  precoMin?: number;
  precoMax?: number;
}

export interface FiltroClientes {
  nome?: string;
  email?: string;
  status?: StatusCliente;
  cidade?: string;
  estado?: string;
  rendaMin?: number;
  rendaMax?: number;
}

export interface FiltroFinanciamentos {
  clienteId?: string;
  veiculoId?: string;
  status?: StatusFinanciamento;
  valorMin?: number;
  valorMax?: number;
  dataInicio?: string;
  dataFim?: string;
}

// Tipos para estatísticas
export interface EstatisticasVeiculos {
  total: number;
  disponiveis: number;
  vendidos: number;
  reservados: number;
  valorTotal: number;
  valorMedio: number;
}

export interface EstatisticasClientes {
  total: number;
  ativos: number;
  inativos: number;
  bloqueados: number;
  rendaMedia: number;
}

export interface EstatisticasFinanciamentos {
  total: number;
  ativos: number;
  quitados: number;
  inadimplentes: number;
  cancelados: number;
  valorTotal: number;
  valorMedio: number;
  taxaMedia: number;
}

// Tipos para relatórios
export interface RelatorioVendas {
  periodo: string;
  veiculosVendidos: number;
  valorTotal: number;
  financiamentosAprovados: number;
  taxaConversao: number;
}

export interface RelatorioClientes {
  periodo: string;
  novosClientes: number;
  clientesAtivos: number;
  taxaAtivacao: number;
  distribuicaoPorEstado: Record<string, number>;
}

// Tipos para dashboard
export interface DashboardData {
  indicadores: Array<{
    name: string;
    value: string;
    percentageChange: string;
    changeType: "positive" | "negative";
  }>;
  estatisticasGerais: {
    veiculos: EstatisticasVeiculos;
    clientes: EstatisticasClientes;
    financiamentos: EstatisticasFinanciamentos;
    resumo: {
      totalVeiculos: number;
      totalClientes: number;
      totalFinanciamentos: number;
      financiamentosAtivos: number;
      taxaInadimplencia: number;
    };
  };
}
