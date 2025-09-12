"use client";

import React, { useState } from "react";
import { useClientes } from "@/src/application/core/hooks/useData";
import type { ClienteForm } from "@/src/application/core/lib/types";

export default function ClientesPage() {
  const {
    clientes,
    createCliente,
    updateCliente,
    deleteCliente,
    searchClientes,
    getAtivos,
    getEstatisticas,
    atualizarUltimoContato,
  } = useClientes();

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCliente, setEditingCliente] = useState<string | null>(null);

  const [form, setForm] = useState<ClienteForm>({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    endereco: {
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
    },
    rendaMensal: 0,
    profissao: "",
    status: "ativo",
  });

  const estatisticas = getEstatisticas();
  const clientesFiltrados = searchTerm ? searchClientes(searchTerm) : clientes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.cpf) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    if (editingCliente) {
      updateCliente(editingCliente, form);
      setEditingCliente(null);
    } else {
      createCliente(form);
    }

    setForm({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      dataNascimento: "",
      endereco: {
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
      },
      rendaMensal: 0,
      profissao: "",
      status: "ativo",
    });
    setShowForm(false);
  };

  const handleEdit = (cliente: any) => {
    setForm({
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      cpf: cliente.cpf,
      dataNascimento: cliente.dataNascimento,
      endereco: cliente.endereco,
      rendaMensal: cliente.rendaMensal,
      profissao: cliente.profissao,
      status: cliente.status,
    });
    setEditingCliente(cliente.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
      deleteCliente(id);
    }
  };

  const handleChange = (field: string, value: any) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setForm((prev: any) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setForm((prev: any) => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Clientes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {showForm ? "Cancelar" : "+ Novo Cliente"}
        </button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total</h3>
          <p className="text-2xl font-bold text-gray-900">
            {estatisticas.total}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Ativos</h3>
          <p className="text-2xl font-bold text-green-600">
            {estatisticas.ativos}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Inativos</h3>
          <p className="text-2xl font-bold text-red-600">
            {estatisticas.inativos}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Renda Média</h3>
          <p className="text-2xl font-bold text-blue-600">
            R$ {estatisticas.rendaMedia.toLocaleString("pt-BR")}
          </p>
        </div>
      </div>

      {/* Formulário */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            {editingCliente ? "Editar Cliente" : "Cadastrar Novo Cliente"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="text"
                value={form.telefone}
                onChange={(e) => handleChange("telefone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CPF *
              </label>
              <input
                type="text"
                value={form.cpf}
                onChange={(e) => handleChange("cpf", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data de Nascimento
              </label>
              <input
                type="date"
                value={form.dataNascimento}
                onChange={(e) => handleChange("dataNascimento", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profissão
              </label>
              <input
                type="text"
                value={form.profissao}
                onChange={(e) => handleChange("profissao", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Renda Mensal (R$)
              </label>
              <input
                type="number"
                value={form.rendaMensal}
                onChange={(e) =>
                  handleChange("rendaMensal", Number(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="bloqueado">Bloqueado</option>
              </select>
            </div>

            {/* Endereço */}
            <div className="md:col-span-2 lg:col-span-3">
              <h3 className="text-lg font-medium mb-2">Endereço</h3>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rua
              </label>
              <input
                type="text"
                value={form.endereco.rua}
                onChange={(e) => handleChange("endereco.rua", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número
              </label>
              <input
                type="text"
                value={form.endereco.numero}
                onChange={(e) =>
                  handleChange("endereco.numero", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bairro
              </label>
              <input
                type="text"
                value={form.endereco.bairro}
                onChange={(e) =>
                  handleChange("endereco.bairro", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <input
                type="text"
                value={form.endereco.cidade}
                onChange={(e) =>
                  handleChange("endereco.cidade", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <select
                value={form.endereco.estado}
                onChange={(e) =>
                  handleChange("endereco.estado", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CEP
              </label>
              <input
                type="text"
                value={form.endereco.cep}
                onChange={(e) => handleChange("endereco.cep", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2 lg:col-span-3 flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                {editingCliente ? "Atualizar" : "Cadastrar"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingCliente(null);
                }}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Busca */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Buscar clientes por nome, email, CPF..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setSearchTerm("")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Lista de Clientes */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contato
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Localização
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {cliente.nome}
                      </div>
                      <div className="text-sm text-gray-500">
                        CPF: {cliente.cpf}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{cliente.email}</div>
                    <div className="text-sm text-gray-500">
                      {cliente.telefone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {cliente.endereco.cidade}/{cliente.endereco.estado}
                    </div>
                    <div className="text-sm text-gray-500">
                      Renda: R$ {cliente.rendaMensal.toLocaleString("pt-BR")}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        cliente.status === "ativo"
                          ? "bg-green-100 text-green-800"
                          : cliente.status === "inativo"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {cliente.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(cliente)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(cliente.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {clientesFiltrados.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhum cliente encontrado.
          </div>
        )}
      </div>
    </div>
  );
}
