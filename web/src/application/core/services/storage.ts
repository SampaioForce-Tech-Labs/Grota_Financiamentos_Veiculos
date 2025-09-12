export class StorageService {
  private static instance: StorageService;

  private constructor() {}

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  get<T>(key: string): T | null {
    if (typeof window === "undefined") return null;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Erro ao ler ${key} do localStorage:`, error);
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  }

  remove(key: string): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Erro ao remover ${key} do localStorage:`, error);
    }
  }

  clear(): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.clear();
    } catch (error) {
      console.error("Erro ao limpar localStorage:", error);
    }
  }

  exists(key: string): boolean {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(key) !== null;
  }
}
