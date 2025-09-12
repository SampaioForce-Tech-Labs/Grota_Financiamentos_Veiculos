export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  dataNascimento: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  rendaMensal: number;
  profissao: string;
  status: "ativo" | "inativo" | "bloqueado";
  dataCadastro: string;
  ultimoContato?: string;
  documentos?: {
    cnh?: string;
    comprovanteRenda?: string;
    comprovanteEndereco?: string;
  };
}

export const clientesMock: Cliente[] = [
  {
    id: "1",
    nome: "João Silva Santos",
    email: "joao.silva@email.com",
    telefone: "(11) 99999-9999",
    cpf: "123.456.789-00",
    dataNascimento: "1985-05-15",
    endereco: {
      rua: "Rua das Flores",
      numero: "123",
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01234-567",
    },
    rendaMensal: 5000,
    profissao: "Professor",
    status: "ativo",
    dataCadastro: "2024-01-10",
    ultimoContato: "2024-02-15",
    documentos: {
      cnh: "/docs/cnh-joao.pdf",
      comprovanteRenda: "/docs/renda-joao.pdf",
    },
  },
  {
    id: "2",
    nome: "Maria Santos Oliveira",
    email: "maria.santos@email.com",
    telefone: "(21) 88888-8888",
    cpf: "987.654.321-00",
    dataNascimento: "1990-08-22",
    endereco: {
      rua: "Av. Brasil",
      numero: "456",
      bairro: "Copacabana",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      cep: "22000-001",
    },
    rendaMensal: 7500,
    profissao: "Engenheira",
    status: "ativo",
    dataCadastro: "2024-01-12",
    ultimoContato: "2024-02-20",
    documentos: {
      cnh: "/docs/cnh-maria.pdf",
      comprovanteRenda: "/docs/renda-maria.pdf",
      comprovanteEndereco: "/docs/endereco-maria.pdf",
    },
  },
  {
    id: "3",
    nome: "Pedro Oliveira Costa",
    email: "pedro.oliveira@email.com",
    telefone: "(85) 77777-7777",
    cpf: "456.789.123-00",
    dataNascimento: "1982-12-03",
    endereco: {
      rua: "Rua do Comércio",
      numero: "789",
      bairro: "Centro",
      cidade: "Fortaleza",
      estado: "CE",
      cep: "60000-123",
    },
    rendaMensal: 6200,
    profissao: "Comerciante",
    status: "ativo",
    dataCadastro: "2024-01-18",
    documentos: {
      cnh: "/docs/cnh-pedro.pdf",
    },
  },
];
