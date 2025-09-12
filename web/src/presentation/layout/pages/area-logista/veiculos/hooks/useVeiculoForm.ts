import { useState } from "react";
import type { VeiculoForm } from "@/src/application/core/lib/types";

export function useVeiculoForm() {
  const [form, setForm] = useState<VeiculoForm>({
    marca: "",
    modelo: "",
    ano: new Date().getFullYear(),
    preco: 0,
    quilometragem: 0,
    cor: "",
    tipo: "carro",
    combustivel: "Flex",
    transmissao: "Manual",
    categoria: "Sedan",
    status: "disponivel",
    imagens: [],
    descricao: "",
    placa: "",
    chassi: "",
  });

  const [editingVeiculo, setEditingVeiculo] = useState<string | null>(null);

  const resetForm = () => {
    setForm({
      marca: "",
      modelo: "",
      ano: new Date().getFullYear(),
      preco: 0,
      quilometragem: 0,
      cor: "",
      tipo: "carro",
      combustivel: "Flex",
      transmissao: "Manual",
      categoria: "Sedan",
      status: "disponivel",
      imagens: [],
      descricao: "",
      placa: "",
      chassi: "",
    });
    setEditingVeiculo(null);
  };

  const updateForm = (field: keyof VeiculoForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const loadVeiculoForEdit = (veiculo: any) => {
    setForm({
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      ano: veiculo.ano,
      preco: veiculo.preco,
      quilometragem: veiculo.quilometragem,
      cor: veiculo.cor,
      tipo: veiculo.tipo,
      combustivel: veiculo.combustivel,
      transmissao: veiculo.transmissao,
      categoria: veiculo.categoria,
      status: veiculo.status,
      imagens: veiculo.imagens,
      descricao: veiculo.descricao,
      placa: veiculo.placa,
      chassi: veiculo.chassi,
    });
    setEditingVeiculo(veiculo.id);
  };

  const validateForm = () => {
    if (!form.marca || !form.modelo || !form.cor || !form.tipo) {
      alert("Preencha todos os campos obrigatórios");
      return false;
    }
    return true;
  };

  return {
    form,
    editingVeiculo,
    resetForm,
    updateForm,
    loadVeiculoForEdit,
    validateForm,
  };
}
