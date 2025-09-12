export interface Veiculo {
  id: string;
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
  quilometragem: number;
  cor: string;
  tipo: "carro" | "moto" | "caminhao";
  combustivel: "Gasolina" | "Álcool" | "Flex" | "Diesel" | "Elétrico";
  transmissao: "Manual" | "Automática" | "CVT";
  categoria: "Sedan" | "Hatchback" | "SUV" | "Pickup" | "Van" | "Esportivo";
  status: "disponivel" | "vendido" | "reservado";
  imagens: string[];
  descricao: string;
  dataCadastro: string;
  placa?: string;
  chassi?: string;
}

export const veiculosMock: Veiculo[] = [
  {
    id: "1",
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    preco: 95000,
    quilometragem: 15000,
    cor: "Prata",
    tipo: "carro",
    combustivel: "Flex",
    transmissao: "Automática",
    categoria: "Sedan",
    status: "disponivel",
    imagens: ["/images/corolla-1.jpg"],
    descricao: "Corolla 2022 em excelente estado, único dono, revisões em dia.",
    dataCadastro: "2024-01-15",
    placa: "ABC-1234",
    chassi: "9BWZZZ377VT004251",
  },
  {
    id: "2",
    marca: "Honda",
    modelo: "Civic",
    ano: 2021,
    preco: 88000,
    quilometragem: 25000,
    cor: "Preto",
    tipo: "carro",
    combustivel: "Gasolina",
    transmissao: "Manual",
    categoria: "Sedan",
    status: "disponivel",
    imagens: ["/images/civic-1.jpg"],
    descricao: "Honda Civic 2021, baixo km, mecânica perfeita.",
    dataCadastro: "2024-01-20",
    placa: "DEF-5678",
    chassi: "JH4KA8260MC000000",
  },
  {
    id: "3",
    marca: "Volkswagen",
    modelo: "Golf",
    ano: 2023,
    preco: 120000,
    quilometragem: 5000,
    cor: "Branco",
    tipo: "carro",
    combustivel: "Gasolina",
    transmissao: "Automática",
    categoria: "Hatchback",
    status: "reservado",
    imagens: ["/images/golf-1.jpg"],
    descricao: "Golf 2023 seminovo, completo, garantia de fábrica.",
    dataCadastro: "2024-02-01",
    placa: "GHI-9012",
    chassi: "WVWZZZ1JZ3W000000",
  },
  {
    id: "4",
    marca: "BMW",
    modelo: "X3",
    ano: 2022,
    preco: 280000,
    quilometragem: 12000,
    cor: "Azul",
    tipo: "carro",
    combustivel: "Gasolina",
    transmissao: "Automática",
    categoria: "SUV",
    status: "disponivel",
    imagens: ["/images/bmw-x3-1.jpg"],
    descricao: "BMW X3 2022, completo, revisão em dia.",
    dataCadastro: "2024-02-05",
    placa: "JKL-3456",
    chassi: "WBAWZ51050L000000",
  },
  {
    id: "5",
    marca: "Yamaha",
    modelo: "MT-07",
    ano: 2023,
    preco: 45000,
    quilometragem: 3000,
    cor: "Vermelho",
    tipo: "moto",
    combustivel: "Gasolina",
    transmissao: "Manual",
    categoria: "Esportivo",
    status: "disponivel",
    imagens: ["/images/mt07-1.jpg"],
    descricao: "Yamaha MT-07 2023, baixa quilometragem, estado impecável.",
    dataCadastro: "2024-02-10",
    placa: "MNO-7890",
    chassi: "JYARN32E0PA000000",
  },
];
