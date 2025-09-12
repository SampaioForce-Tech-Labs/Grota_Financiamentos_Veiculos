import { veiculosMock } from "@/src/application/core/data/veiculos";

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Extrai opções únicas de uma propriedade dos veículos mockados
 */
function extractUniqueOptions(
  property: keyof (typeof veiculosMock)[0]
): SelectOption[] {
  const uniqueValues = [
    ...new Set(veiculosMock.map((veiculo) => veiculo[property])),
  ];
  return uniqueValues
    .filter((value) => value !== undefined && value !== null && value !== "")
    .map((value) => ({
      value: String(value),
      label: String(value),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

/**
 * Gera opções de marcas baseadas nos dados mockados
 */
export function getMarcaOptions(): SelectOption[] {
  return extractUniqueOptions("marca");
}

/**
 * Gera opções de modelos baseadas nos dados mockados
 */
export function getModeloOptions(): SelectOption[] {
  return extractUniqueOptions("modelo");
}

/**
 * Gera opções de cores baseadas nos dados mockados
 */
export function getCorOptions(): SelectOption[] {
  return extractUniqueOptions("cor");
}

/**
 * Gera opções de tipos baseadas nos dados mockados
 */
export function getTipoOptions(): SelectOption[] {
  const tipos = extractUniqueOptions("tipo");
  // Mapeia para labels mais amigáveis
  return tipos.map((option) => ({
    value: option.value,
    label:
      option.value === "carro"
        ? "Carro"
        : option.value === "moto"
        ? "Moto"
        : option.value === "caminhao"
        ? "Caminhão"
        : option.label,
  }));
}

/**
 * Gera opções de combustível baseadas nos dados mockados
 */
export function getCombustivelOptions(): SelectOption[] {
  return extractUniqueOptions("combustivel");
}

/**
 * Gera opções de transmissão baseadas nos dados mockados
 */
export function getTransmissaoOptions(): SelectOption[] {
  return extractUniqueOptions("transmissao");
}

/**
 * Gera opções de categoria baseadas nos dados mockados
 */
export function getCategoriaOptions(): SelectOption[] {
  return extractUniqueOptions("categoria");
}

/**
 * Combina opções dinâmicas com opções padrão
 */
export function combineOptions(
  dynamicOptions: SelectOption[],
  defaultOptions: readonly SelectOption[]
): SelectOption[] {
  const combined = [...dynamicOptions];

  // Adiciona opções padrão que não existem nos dados dinâmicos
  defaultOptions.forEach((defaultOption) => {
    if (!combined.some((option) => option.value === defaultOption.value)) {
      combined.push({ value: defaultOption.value, label: defaultOption.label });
    }
  });

  return combined.sort((a, b) => a.label.localeCompare(b.label));
}
