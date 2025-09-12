import React from "react";

interface Veiculo {
  id: string;
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
  cor: string;
  categoria: string;
  combustivel: string;
  status: string;
}

interface VeiculosTableProps {
  veiculos: Veiculo[];
  onEdit: (veiculo: Veiculo) => void;
  onDelete: (id: string) => void;
}

export function VeiculosTable({
  veiculos,
  onEdit,
  onDelete,
}: VeiculosTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "disponivel":
        return "bg-green-100 text-green-800";
      case "reservado":
        return "bg-yellow-100 text-yellow-800";
      case "vendido":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "disponivel":
        return "Disponível";
      case "reservado":
        return "Reservado";
      case "vendido":
        return "Vendido";
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Veículo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ano/Cor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preço
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
            {veiculos.map((veiculo) => (
              <tr key={veiculo.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {veiculo.marca} {veiculo.modelo}
                    </div>
                    <div className="text-sm text-gray-500">
                      {veiculo.categoria} • {veiculo.combustivel}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{veiculo.ano}</div>
                  <div className="text-sm text-gray-500">{veiculo.cor}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  R$ {veiculo.preco.toLocaleString("pt-BR")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      veiculo.status
                    )}`}
                  >
                    {getStatusLabel(veiculo.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onEdit(veiculo)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(veiculo.id)}
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

      {veiculos.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Nenhum veículo encontrado.
        </div>
      )}
    </div>
  );
}
