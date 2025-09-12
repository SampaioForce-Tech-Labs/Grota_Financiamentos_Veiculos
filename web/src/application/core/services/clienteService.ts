import { Cliente, clientesMock } from "../data/clientes";
import { StorageService } from "./storage";

const STORAGE_KEY = "clientes";

export class ClienteService {
  private storage = StorageService.getInstance();

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    const existingData = this.storage.get<Cliente[]>(STORAGE_KEY);
    if (!existingData || existingData.length === 0) {
      this.storage.set(STORAGE_KEY, clientesMock);
    }
  }

  getAll(): Cliente[] {
    return this.storage.get<Cliente[]>(STORAGE_KEY) || [];
  }

  getById(id: string): Cliente | null {
    const clientes = this.getAll();
    return clientes.find((c) => c.id === id) || null;
  }

  create(cliente: Omit<Cliente, "id" | "dataCadastro">): Cliente {
    const clientes = this.getAll();
    const newCliente: Cliente = {
      ...cliente,
      id: Date.now().toString(),
      dataCadastro: new Date().toISOString().split("T")[0],
    };

    clientes.push(newCliente);
    this.storage.set(STORAGE_KEY, clientes);
    return newCliente;
  }

  update(id: string, updates: Partial<Cliente>): Cliente | null {
    const clientes = this.getAll();
    const index = clientes.findIndex((c) => c.id === id);

    if (index === -1) return null;

    clientes[index] = { ...clientes[index], ...updates };
    this.storage.set(STORAGE_KEY, clientes);
    return clientes[index];
  }

  delete(id: string): boolean {
    const clientes = this.getAll();
    const filteredClientes = clientes.filter((c) => c.id !== id);

    if (filteredClientes.length === clientes.length) return false;

    this.storage.set(STORAGE_KEY, filteredClientes);
    return true;
  }

  search(query: string): Cliente[] {
    const clientes = this.getAll();
    const lowerQuery = query.toLowerCase();

    return clientes.filter(
      (cliente) =>
        cliente.nome.toLowerCase().includes(lowerQuery) ||
        cliente.email.toLowerCase().includes(lowerQuery) ||
        cliente.cpf.includes(query) ||
        cliente.telefone.includes(query)
    );
  }

  getByStatus(status: Cliente["status"]): Cliente[] {
    const clientes = this.getAll();
    return clientes.filter((c) => c.status === status);
  }

  getByCidade(cidade: string): Cliente[] {
    const clientes = this.getAll();
    return clientes.filter(
      (c) => c.endereco.cidade.toLowerCase() === cidade.toLowerCase()
    );
  }

  getByEstado(estado: string): Cliente[] {
    const clientes = this.getAll();
    return clientes.filter((c) => c.endereco.estado === estado);
  }

  getAtivos(): Cliente[] {
    return this.getByStatus("ativo");
  }

  getEstatisticas() {
    const clientes = this.getAll();
    return {
      total: clientes.length,
      ativos: clientes.filter((c) => c.status === "ativo").length,
      inativos: clientes.filter((c) => c.status === "inativo").length,
      bloqueados: clientes.filter((c) => c.status === "bloqueado").length,
      rendaMedia:
        clientes.length > 0
          ? clientes.reduce((sum, c) => sum + c.rendaMensal, 0) /
            clientes.length
          : 0,
    };
  }

  atualizarUltimoContato(id: string): void {
    const hoje = new Date().toISOString().split("T")[0];
    this.update(id, { ultimoContato: hoje });
  }
}
