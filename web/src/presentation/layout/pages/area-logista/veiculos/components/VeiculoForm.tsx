import React from "react";
import type { VeiculoForm } from "@/src/application/core/lib/types";
import { SmartSelect } from "./SmartSelect";
import {
  getMarcaOptions,
  getModeloOptions,
  getCorOptions,
  getTipoOptions,
  getCombustivelOptions,
  getTransmissaoOptions,
  getCategoriaOptions,
  combineOptions,
} from "../data/dynamicOptions";
import {
  COMBUSTIVEL_OPTIONS,
  TRANSMISSAO_OPTIONS,
  CATEGORIA_OPTIONS,
  TIPO_OPTIONS,
} from "../data/constants";

interface VeiculoFormProps {
  form: VeiculoForm;
  editingVeiculo: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: keyof VeiculoForm, value: any) => void;
  onCancel: () => void;
}

export function VeiculoFormComponent({
  form,
  editingVeiculo,
  onSubmit,
  onChange,
  onCancel,
}: VeiculoFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        {editingVeiculo ? "Editar Veículo" : "Cadastrar Novo Veículo"}
      </h2>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div>
          <SmartSelect
            value={form.tipo}
            onChange={(value) => onChange("tipo", value)}
            options={combineOptions(getTipoOptions(), TIPO_OPTIONS)}
            label="Tipo"
            placeholder="Digite ou selecione o tipo..."
            required
          />
        </div>{" "}
        <div>
          <SmartSelect
            value={form.marca}
            onChange={(value) => onChange("marca", value)}
            options={getMarcaOptions()}
            label="Marca"
            placeholder="Digite ou selecione a marca..."
            required
          />
        </div>
        <div>
          <SmartSelect
            value={form.modelo}
            onChange={(value) => onChange("modelo", value)}
            options={getModeloOptions()}
            label="Modelo"
            placeholder="Digite ou selecione o modelo..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ano
          </label>
          <input
            type="number"
            value={form.ano}
            onChange={(e) => onChange("ano", Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preço (R$)
          </label>
          <input
            type="number"
            value={form.preco}
            onChange={(e) => onChange("preco", Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quilometragem
          </label>
          <input
            type="number"
            value={form.quilometragem}
            onChange={(e) => onChange("quilometragem", Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <SmartSelect
            value={form.cor}
            onChange={(value) => onChange("cor", value)}
            options={getCorOptions()}
            label="Cor"
            placeholder="Digite ou selecione a cor..."
            required
          />
        </div>
        <div>
          <SmartSelect
            value={form.combustivel}
            onChange={(value) => onChange("combustivel", value)}
            options={combineOptions(
              getCombustivelOptions(),
              COMBUSTIVEL_OPTIONS
            )}
            label="Combustível"
            placeholder="Digite ou selecione o combustível..."
          />
        </div>
        <div>
          <SmartSelect
            value={form.transmissao}
            onChange={(value) => onChange("transmissao", value)}
            options={combineOptions(
              getTransmissaoOptions(),
              TRANSMISSAO_OPTIONS
            )}
            label="Transmissão"
            placeholder="Digite ou selecione a transmissão..."
          />
        </div>
        <div>
          <SmartSelect
            value={form.categoria}
            onChange={(value) => onChange("categoria", value)}
            options={combineOptions(getCategoriaOptions(), CATEGORIA_OPTIONS)}
            label="Categoria"
            placeholder="Digite ou selecione a categoria..."
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descrição
          </label>
          <textarea
            value={form.descricao}
            onChange={(e) => onChange("descricao", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Descrição do veículo..."
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3 flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {editingVeiculo ? "Atualizar" : "Cadastrar"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
