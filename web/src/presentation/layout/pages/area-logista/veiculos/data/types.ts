import type { VeiculoForm } from "@/src/application/core/lib/types";

export interface VeiculoFormData extends VeiculoForm {
  // Extensões específicas da página se necessário
}

export interface VeiculoStats {
  total: number;
  disponiveis: number;
  vendidos: number;
  valorMedio: number;
}

export interface VeiculoFilters {
  searchTerm: string;
  status?: string;
  categoria?: string;
}
