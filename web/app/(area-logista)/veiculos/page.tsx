"use client";

import React, { useState, useEffect } from "react";
import { useVeiculos } from "@/src/application/core/hooks/useData";
import {
  useVeiculoForm,
  useVeiculoFilters,
} from "@/src/presentation/layout/pages/area-logista/veiculos/hooks";
import {
  VeiculosStats,
  VeiculosSearch,
  VeiculoFormComponent,
  VeiculosTable,
} from "@/src/presentation/layout/pages/area-logista/veiculos/components";

export default function VeiculosPage() {
  const {
    veiculos,
    createVeiculo,
    updateVeiculo,
    deleteVeiculo,
    getEstatisticas,
  } = useVeiculos();

  const [showForm, setShowForm] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const {
    form,
    editingVeiculo,
    resetForm,
    updateForm,
    loadVeiculoForEdit,
    validateForm,
  } = useVeiculoForm();
  const { searchTerm, filteredVeiculos, updateSearchTerm, clearFilters } =
    useVeiculoFilters(veiculos);

  // Evitar erro de hidratação - só renderizar estatísticas no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const estatisticas = isClient
    ? getEstatisticas()
    : {
        total: 0,
        disponiveis: 0,
        vendidos: 0,
        valorMedio: 0,
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (editingVeiculo) {
      updateVeiculo(editingVeiculo, form);
      resetForm();
    } else {
      createVeiculo(form);
      resetForm();
    }

    setShowForm(false);
  };

  const handleEdit = (veiculo: any) => {
    loadVeiculoForEdit(veiculo);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este veículo?")) {
      deleteVeiculo(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    resetForm();
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Veículos</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {showForm ? "Cancelar" : "+ Novo Veículo"}
        </button>
      </div>

      {/* Estatísticas */}
      <VeiculosStats estatisticas={estatisticas} />

      {/* Formulário */}
      {showForm && (
        <VeiculoFormComponent
          form={form}
          editingVeiculo={editingVeiculo}
          onSubmit={handleSubmit}
          onChange={updateForm}
          onCancel={handleCancel}
        />
      )}

      {/* Busca */}
      <VeiculosSearch
        searchTerm={searchTerm}
        onSearchChange={updateSearchTerm}
        onClear={clearFilters}
      />

      {/* Lista de Veículos */}
      {isClient && (
        <VeiculosTable
          veiculos={filteredVeiculos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
