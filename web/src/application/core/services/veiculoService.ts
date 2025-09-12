import { Veiculo, veiculosMock } from "../data/veiculos";
import { StorageService } from "./storage";

const STORAGE_KEY = "veiculos";

export class VeiculoService {
  private storage = StorageService.getInstance();

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    const existingData = this.storage.get<Veiculo[]>(STORAGE_KEY);
    if (!existingData || existingData.length === 0) {
      this.storage.set(STORAGE_KEY, veiculosMock);
    }
  }

  getAll(): Veiculo[] {
    return this.storage.get<Veiculo[]>(STORAGE_KEY) || [];
  }

  getById(id: string): Veiculo | null {
    const veiculos = this.getAll();
    return veiculos.find((v) => v.id === id) || null;
  }

  create(veiculo: Omit<Veiculo, "id" | "dataCadastro">): Veiculo {
    const veiculos = this.getAll();
    const newVeiculo: Veiculo = {
      ...veiculo,
      id: Date.now().toString(),
      dataCadastro: new Date().toISOString().split("T")[0],
    };

    veiculos.push(newVeiculo);
    this.storage.set(STORAGE_KEY, veiculos);
    return newVeiculo;
  }

  update(id: string, updates: Partial<Veiculo>): Veiculo | null {
    const veiculos = this.getAll();
    const index = veiculos.findIndex((v) => v.id === id);

    if (index === -1) return null;

    veiculos[index] = { ...veiculos[index], ...updates };
    this.storage.set(STORAGE_KEY, veiculos);
    return veiculos[index];
  }

  delete(id: string): boolean {
    const veiculos = this.getAll();
    const filteredVeiculos = veiculos.filter((v) => v.id !== id);

    if (filteredVeiculos.length === veiculos.length) return false;

    this.storage.set(STORAGE_KEY, filteredVeiculos);
    return true;
  }

  search(query: string): Veiculo[] {
    const veiculos = this.getAll();
    const lowerQuery = query.toLowerCase();

    return veiculos.filter(
      (veiculo) =>
        veiculo.marca.toLowerCase().includes(lowerQuery) ||
        veiculo.modelo.toLowerCase().includes(lowerQuery) ||
        veiculo.categoria.toLowerCase().includes(lowerQuery) ||
        veiculo.cor.toLowerCase().includes(lowerQuery) ||
        veiculo.placa?.toLowerCase().includes(lowerQuery)
    );
  }

  getByStatus(status: Veiculo["status"]): Veiculo[] {
    const veiculos = this.getAll();
    return veiculos.filter((v) => v.status === status);
  }

  getByCategoria(categoria: string): Veiculo[] {
    const veiculos = this.getAll();
    return veiculos.filter((v) => v.categoria === categoria);
  }

  getByMarca(marca: string): Veiculo[] {
    const veiculos = this.getAll();
    return veiculos.filter(
      (v) => v.marca.toLowerCase() === marca.toLowerCase()
    );
  }

  getDisponiveis(): Veiculo[] {
    return this.getByStatus("disponivel");
  }

  getEstatisticas() {
    const veiculos = this.getAll();
    return {
      total: veiculos.length,
      disponiveis: veiculos.filter((v) => v.status === "disponivel").length,
      vendidos: veiculos.filter((v) => v.status === "vendido").length,
      reservados: veiculos.filter((v) => v.status === "reservado").length,
      valorTotal: veiculos.reduce((sum, v) => sum + v.preco, 0),
      valorMedio:
        veiculos.length > 0
          ? veiculos.reduce((sum, v) => sum + v.preco, 0) / veiculos.length
          : 0,
    };
  }
}
