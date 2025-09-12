import { useState, useEffect, useCallback } from "react";
import { DataService } from "../services/dataService";

export function useDataService() {
  const [dataService] = useState(() => DataService.getInstance());
  const [, forceUpdate] = useState({});

  const refresh = useCallback(() => {
    forceUpdate({});
  }, []);

  return {
    dataService,
    refresh,
  };
}

// Hook específico para veículos
export function useVeiculos() {
  const { dataService, refresh } = useDataService();

  const createVeiculo = useCallback(
    (veiculo: any) => {
      dataService.veiculos.create(veiculo);
      refresh();
    },
    [dataService, refresh]
  );

  const updateVeiculo = useCallback(
    (id: string, updates: any) => {
      dataService.veiculos.update(id, updates);
      refresh();
    },
    [dataService, refresh]
  );

  const deleteVeiculo = useCallback(
    (id: string) => {
      dataService.veiculos.delete(id);
      refresh();
    },
    [dataService, refresh]
  );

  return {
    veiculos: dataService.veiculos.getAll(),
    createVeiculo,
    updateVeiculo,
    deleteVeiculo,
    searchVeiculos: dataService.veiculos.search.bind(dataService.veiculos),
    getVeiculoById: dataService.veiculos.getById.bind(dataService.veiculos),
    getDisponiveis: dataService.veiculos.getDisponiveis.bind(
      dataService.veiculos
    ),
    getEstatisticas: dataService.veiculos.getEstatisticas.bind(
      dataService.veiculos
    ),
  };
}

// Hook específico para clientes
export function useClientes() {
  const { dataService, refresh } = useDataService();

  const createCliente = useCallback(
    (cliente: any) => {
      dataService.clientes.create(cliente);
      refresh();
    },
    [dataService, refresh]
  );

  const updateCliente = useCallback(
    (id: string, updates: any) => {
      dataService.clientes.update(id, updates);
      refresh();
    },
    [dataService, refresh]
  );

  const deleteCliente = useCallback(
    (id: string) => {
      dataService.clientes.delete(id);
      refresh();
    },
    [dataService, refresh]
  );

  return {
    clientes: dataService.clientes.getAll(),
    createCliente,
    updateCliente,
    deleteCliente,
    searchClientes: dataService.clientes.search.bind(dataService.clientes),
    getClienteById: dataService.clientes.getById.bind(dataService.clientes),
    getAtivos: dataService.clientes.getAtivos.bind(dataService.clientes),
    getEstatisticas: dataService.clientes.getEstatisticas.bind(
      dataService.clientes
    ),
    atualizarUltimoContato: dataService.clientes.atualizarUltimoContato.bind(
      dataService.clientes
    ),
  };
}

// Hook específico para financiamentos
export function useFinanciamentos() {
  const { dataService, refresh } = useDataService();

  const createFinanciamento = useCallback(
    (financiamento: any) => {
      dataService.financiamentos.create(financiamento);
      refresh();
    },
    [dataService, refresh]
  );

  const updateFinanciamento = useCallback(
    (id: string, updates: any) => {
      dataService.financiamentos.update(id, updates);
      refresh();
    },
    [dataService, refresh]
  );

  const deleteFinanciamento = useCallback(
    (id: string) => {
      dataService.financiamentos.delete(id);
      refresh();
    },
    [dataService, refresh]
  );

  const registrarPagamento = useCallback(
    (id: string) => {
      const sucesso = dataService.financiamentos.registrarPagamento(id);
      if (sucesso) refresh();
      return sucesso;
    },
    [dataService, refresh]
  );

  return {
    financiamentos: dataService.financiamentos.getAll(),
    createFinanciamento,
    updateFinanciamento,
    deleteFinanciamento,
    registrarPagamento,
    getFinanciamentoById: dataService.financiamentos.getById.bind(
      dataService.financiamentos
    ),
    getFinanciamentosByCliente: dataService.financiamentos.getByClienteId.bind(
      dataService.financiamentos
    ),
    getFinanciamentosByVeiculo: dataService.financiamentos.getByVeiculoId.bind(
      dataService.financiamentos
    ),
    getAtivos: dataService.financiamentos.getAtivos.bind(
      dataService.financiamentos
    ),
    getInadimplentes: dataService.financiamentos.getInadimplentes.bind(
      dataService.financiamentos
    ),
    getQuitados: dataService.financiamentos.getQuitados.bind(
      dataService.financiamentos
    ),
    calcularSaldoDevedor: dataService.financiamentos.calcularSaldoDevedor.bind(
      dataService.financiamentos
    ),
    calcularParcelasRestantes:
      dataService.financiamentos.calcularParcelasRestantes.bind(
        dataService.financiamentos
      ),
    getEstatisticas: dataService.financiamentos.getEstatisticas.bind(
      dataService.financiamentos
    ),
  };
}

// Hook para estatísticas gerais
export function useEstatisticasGerais() {
  const { dataService } = useDataService();

  return {
    estatisticas: dataService.getEstatisticasGerais(),
    refresh: () => {
      // Força re-render
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    },
  };
}
