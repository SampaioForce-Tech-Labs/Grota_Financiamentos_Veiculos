import { Financiamento, financiamentosMock } from "../data/financiamentos";
import { StorageService } from "./storage";

const STORAGE_KEY = "financiamentos";

export class FinanciamentoService {
  private storage = StorageService.getInstance();

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    const existingData = this.storage.get<Financiamento[]>(STORAGE_KEY);
    if (!existingData || existingData.length === 0) {
      this.storage.set(STORAGE_KEY, financiamentosMock);
    }
  }

  getAll(): Financiamento[] {
    return this.storage.get<Financiamento[]>(STORAGE_KEY) || [];
  }

  getById(id: string): Financiamento | null {
    const financiamentos = this.getAll();
    return financiamentos.find((f) => f.id === id) || null;
  }

  create(
    financiamento: Omit<Financiamento, "id" | "dataCadastro">
  ): Financiamento {
    const financiamentos = this.getAll();
    const newFinanciamento: Financiamento = {
      ...financiamento,
      id: Date.now().toString(),
      dataCadastro: new Date().toISOString().split("T")[0],
    };

    financiamentos.push(newFinanciamento);
    this.storage.set(STORAGE_KEY, financiamentos);
    return newFinanciamento;
  }

  update(id: string, updates: Partial<Financiamento>): Financiamento | null {
    const financiamentos = this.getAll();
    const index = financiamentos.findIndex((f) => f.id === id);

    if (index === -1) return null;

    financiamentos[index] = { ...financiamentos[index], ...updates };
    this.storage.set(STORAGE_KEY, financiamentos);
    return financiamentos[index];
  }

  delete(id: string): boolean {
    const financiamentos = this.getAll();
    const filteredFinanciamentos = financiamentos.filter((f) => f.id !== id);

    if (filteredFinanciamentos.length === financiamentos.length) return false;

    this.storage.set(STORAGE_KEY, filteredFinanciamentos);
    return true;
  }

  getByClienteId(clienteId: string): Financiamento[] {
    const financiamentos = this.getAll();
    return financiamentos.filter((f) => f.clienteId === clienteId);
  }

  getByVeiculoId(veiculoId: string): Financiamento[] {
    const financiamentos = this.getAll();
    return financiamentos.filter((f) => f.veiculoId === veiculoId);
  }

  getByStatus(status: Financiamento["status"]): Financiamento[] {
    const financiamentos = this.getAll();
    return financiamentos.filter((f) => f.status === status);
  }

  getAtivos(): Financiamento[] {
    return this.getByStatus("ativo");
  }

  getInadimplentes(): Financiamento[] {
    return this.getByStatus("inadimplente");
  }

  getQuitados(): Financiamento[] {
    return this.getByStatus("quitado");
  }

  calcularValorTotalPago(financiamento: Financiamento): number {
    return financiamento.parcelasPagas * financiamento.valorParcela;
  }

  calcularSaldoDevedor(financiamento: Financiamento): number {
    return (
      financiamento.valorFinanciado - this.calcularValorTotalPago(financiamento)
    );
  }

  calcularParcelasRestantes(financiamento: Financiamento): number {
    return financiamento.numeroParcelas - financiamento.parcelasPagas;
  }

  registrarPagamento(id: string): boolean {
    const financiamento = this.getById(id);
    if (!financiamento || financiamento.status !== "ativo") return false;

    const novasParcelasPagas = financiamento.parcelasPagas + 1;
    const novoValorTotalPago = this.calcularValorTotalPago({
      ...financiamento,
      parcelasPagas: novasParcelasPagas,
    });

    const updates: Partial<Financiamento> = {
      parcelasPagas: novasParcelasPagas,
      valorTotalPago: novoValorTotalPago,
      ultimaParcelaPaga: new Date().toISOString().split("T")[0],
    };

    // Se todas as parcelas foram pagas, marcar como quitado
    if (novasParcelasPagas >= financiamento.numeroParcelas) {
      updates.status = "quitado";
    }

    return this.update(id, updates) !== null;
  }

  getEstatisticas() {
    const financiamentos = this.getAll();
    const ativos = this.getAtivos();
    const inadimplentes = this.getInadimplentes();
    const quitados = this.getQuitados();

    return {
      total: financiamentos.length,
      ativos: ativos.length,
      quitados: quitados.length,
      inadimplentes: inadimplentes.length,
      cancelados: financiamentos.filter((f) => f.status === "cancelado").length,
      valorTotal: financiamentos.reduce((sum, f) => sum + f.valorFinanciado, 0),
      valorMedio:
        financiamentos.length > 0
          ? financiamentos.reduce((sum, f) => sum + f.valorFinanciado, 0) /
            financiamentos.length
          : 0,
      taxaMedia:
        ativos.length > 0
          ? ativos.reduce((sum, f) => sum + f.taxaJuros, 0) / ativos.length
          : 0,
    };
  }
}
