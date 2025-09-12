export const TIPO_OPTIONS = [
  { value: "carro", label: "Carro" },
  { value: "moto", label: "Moto" },
  { value: "caminhao", label: "Caminhão" },
] as const;

export const COMBUSTIVEL_OPTIONS = [
  { value: "Gasolina", label: "Gasolina" },
  { value: "Álcool", label: "Álcool" },
  { value: "Flex", label: "Flex" },
  { value: "Diesel", label: "Diesel" },
  { value: "Elétrico", label: "Elétrico" },
] as const;

export const TRANSMISSAO_OPTIONS = [
  { value: "Manual", label: "Manual" },
  { value: "Automática", label: "Automática" },
  { value: "CVT", label: "CVT" },
] as const;

export const CATEGORIA_OPTIONS = [
  { value: "Sedan", label: "Sedan" },
  { value: "Hatchback", label: "Hatchback" },
  { value: "SUV", label: "SUV" },
  { value: "Pickup", label: "Pickup" },
  { value: "Van", label: "Van" },
  { value: "Esportivo", label: "Esportivo" },
] as const;

export const STATUS_OPTIONS = [
  { value: "disponivel", label: "Disponível" },
  { value: "reservado", label: "Reservado" },
  { value: "vendido", label: "Vendido" },
] as const;
