import { Cliente } from "./clientes";
import { Veiculo } from "./veiculos";

export interface Financiamento {
  id: string;
  clienteId: string;
  veiculoId: string;
  valorFinanciado: number;
  valorEntrada: number;
  numeroParcelas: number;
  valorParcela: number;
  taxaJuros: number;
  dataInicio: string;
  dataFim: string;
  status: "ativo" | "quitado" | "inadimplente" | "cancelado";
  parcelasPagas: number;
  valorTotalPago: number;
  dataCadastro: string;
  observacoes?: string;
  ultimaParcelaPaga?: string;
}

export const financiamentosMock: Financiamento[] = [
  {
    id: "1",
    clienteId: "1",
    veiculoId: "1",
    valorFinanciado: 76000,
    valorEntrada: 19000,
    numeroParcelas: 60,
    valorParcela: 1450.5,
    taxaJuros: 1.25,
    dataInicio: "2024-01-15",
    dataFim: "2029-01-15",
    status: "ativo",
    parcelasPagas: 2,
    valorTotalPago: 2901.0,
    dataCadastro: "2024-01-15",
    observacoes: "Cliente com bom histórico de pagamento",
    ultimaParcelaPaga: "2024-02-15",
  },
  {
    id: "2",
    clienteId: "2",
    veiculoId: "2",
    valorFinanciado: 70400,
    valorEntrada: 17600,
    numeroParcelas: 48,
    valorParcela: 1580.75,
    taxaJuros: 1.15,
    dataInicio: "2024-01-20",
    dataFim: "2028-01-20",
    status: "ativo",
    parcelasPagas: 1,
    valorTotalPago: 1580.75,
    dataCadastro: "2024-01-20",
    ultimaParcelaPaga: "2024-02-20",
  },
  {
    id: "3",
    clienteId: "3",
    veiculoId: "3",
    valorFinanciado: 96000,
    valorEntrada: 24000,
    numeroParcelas: 72,
    valorParcela: 1525.8,
    taxaJuros: 1.35,
    dataInicio: "2024-02-01",
    dataFim: "2030-02-01",
    status: "ativo",
    parcelasPagas: 0,
    valorTotalPago: 0,
    dataCadastro: "2024-02-01",
    observacoes: "Financiamento aprovado recentemente",
  },
];
