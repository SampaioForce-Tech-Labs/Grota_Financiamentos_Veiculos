import { VeiculoService } from "./veiculoService";
import { ClienteService } from "./clienteService";
import { FinanciamentoService } from "./financiamentoService";

export class DataService {
  private static instance: DataService;
  public veiculos: VeiculoService;
  public clientes: ClienteService;
  public financiamentos: FinanciamentoService;

  private constructor() {
    this.veiculos = new VeiculoService();
    this.clientes = new ClienteService();
    this.financiamentos = new FinanciamentoService();
  }

  static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }
    return DataService.instance;
  }

  // Método para resetar todos os dados para os valores iniciais
  resetAllData(): void {
    // Limpar localStorage
    if (typeof window !== "undefined") {
      localStorage.clear();
    }

    // Re-inicializar serviços (eles vão carregar os dados mock novamente)
    this.veiculos = new VeiculoService();
    this.clientes = new ClienteService();
    this.financiamentos = new FinanciamentoService();
  }

  // Método para exportar todos os dados
  exportAllData(): {
    veiculos: any[];
    clientes: any[];
    financiamentos: any[];
  } {
    return {
      veiculos: this.veiculos.getAll(),
      clientes: this.clientes.getAll(),
      financiamentos: this.financiamentos.getAll(),
    };
  }

  // Método para importar dados
  importData(data: {
    veiculos?: any[];
    clientes?: any[];
    financiamentos?: any[];
  }): void {
    if (data.veiculos) {
      if (typeof window !== "undefined") {
        localStorage.setItem("veiculos", JSON.stringify(data.veiculos));
      }
    }

    if (data.clientes) {
      if (typeof window !== "undefined") {
        localStorage.setItem("clientes", JSON.stringify(data.clientes));
      }
    }

    if (data.financiamentos) {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "financiamentos",
          JSON.stringify(data.financiamentos)
        );
      }
    }

    // Re-inicializar serviços para recarregar dados
    this.veiculos = new VeiculoService();
    this.clientes = new ClienteService();
    this.financiamentos = new FinanciamentoService();
  }

  // Método para obter estatísticas gerais do sistema
  getEstatisticasGerais() {
    const veiculosStats = this.veiculos.getEstatisticas();
    const clientesStats = this.clientes.getEstatisticas();
    const financiamentosStats = this.financiamentos.getEstatisticas();

    return {
      veiculos: veiculosStats,
      clientes: clientesStats,
      financiamentos: financiamentosStats,
      resumo: {
        totalVeiculos: veiculosStats.total,
        totalClientes: clientesStats.total,
        totalFinanciamentos: financiamentosStats.total,
        financiamentosAtivos: financiamentosStats.ativos,
        taxaInadimplencia:
          financiamentosStats.total > 0
            ? (financiamentosStats.inadimplentes / financiamentosStats.total) *
              100
            : 0,
      },
    };
  }
}
