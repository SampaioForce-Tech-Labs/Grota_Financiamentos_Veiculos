import React from "react";

interface VeiculosSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClear: () => void;
}

export function VeiculosSearch({
  searchTerm,
  onSearchChange,
  onClear,
}: VeiculosSearchProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Buscar veículos por marca, modelo, categoria..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}
