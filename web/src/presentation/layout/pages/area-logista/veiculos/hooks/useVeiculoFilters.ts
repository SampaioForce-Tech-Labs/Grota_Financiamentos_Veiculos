import { useState, useMemo } from "react";
import type { VeiculoFilters } from "../data/types";

export function useVeiculoFilters(veiculos: any[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVeiculos = useMemo(() => {
    if (!searchTerm) return veiculos;

    return veiculos.filter((veiculo) =>
      `${veiculo.marca} ${veiculo.modelo} ${veiculo.categoria} ${veiculo.combustivel}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [veiculos, searchTerm]);

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  const clearFilters = () => {
    setSearchTerm("");
  };

  return {
    searchTerm,
    filteredVeiculos,
    updateSearchTerm,
    clearFilters,
  };
}
