"use client";

import React, { useEffect } from "react";
import { Search, Bell, ChevronRight } from "lucide-react";
import { useHeader } from "@/src/application/core/context/HeaderContext";
import { usePathname } from "next/navigation";

// Mapeamento de rotas para breadcrumbs
const routeBreadcrumbMap: Record<
  string,
  { breadcrumb: string[]; title: string }
> = {
  "/dashboard": { breadcrumb: ["Dashboard"], title: "Dashboard" },
  "/clientes": { breadcrumb: ["Dashboard", "Clientes"], title: "Clientes" },
  "/documentos": {
    breadcrumb: ["Dashboard", "Clientes", "Documentos"],
    title: "Documentos",
  },
  "/financiamentos": {
    breadcrumb: ["Dashboard", "Financiamentos"],
    title: "Financiamentos",
  },
  "/simulacao": {
    breadcrumb: ["Dashboard", "Financiamentos", "Simulação"],
    title: "Simulação de Financiamento",
  },
  "/relatorios": {
    breadcrumb: ["Dashboard", "Relatórios"],
    title: "Relatórios",
  },
  "/configuracoes": {
    breadcrumb: ["Dashboard", "Configurações"],
    title: "Configurações",
  },
  "/suporte": { breadcrumb: ["Dashboard", "Suporte"], title: "Suporte" },
  "/comissoes": {
    breadcrumb: ["Dashboard", "Comissões"],
    title: "Comissões e Repasse",
  },
  "/notificacoes": {
    breadcrumb: ["Dashboard", "Notificações"],
    title: "Notificações e Alertas",
  },
  "/veiculos": {
    breadcrumb: ["Dashboard", "Veículos"],
    title: "Gestão de Veículos",
  },
};

function DashboardHeader() {
  const { breadcrumb, setBreadcrumb, setPageTitle } = useHeader();
  const pathname = usePathname();

  // Atualizar breadcrumb automaticamente baseado na rota
  useEffect(() => {
    const routeConfig = routeBreadcrumbMap[pathname];
    if (routeConfig) {
      setBreadcrumb(routeConfig.breadcrumb);
      setPageTitle(routeConfig.title);
    } else {
      // Fallback para rotas não mapeadas
      const segments = pathname.split("/").filter(Boolean);
      const breadcrumbItems = [
        "Dashboard",
        ...segments.map(
          (segment) => segment.charAt(0).toUpperCase() + segment.slice(1)
        ),
      ];
      setBreadcrumb(breadcrumbItems);
      setPageTitle(breadcrumbItems[breadcrumbItems.length - 1]);
    }
  }, [pathname, setBreadcrumb, setPageTitle]);

  return (
    <header className="bg-white border-b border-gray-200 h-16 px-6 flex items-center justify-between shadow-sm">
      {/* Lado Esquerdo - Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm">
        {breadcrumb.map((item, index) => (
          <React.Fragment key={index}>
            <span
              className={`${
                index === breadcrumb.length - 1
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              }`}
            >
              {item}
            </span>
            {index < breadcrumb.length - 1 && (
              <ChevronRight size={16} className="text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Lado Direito - Pesquisa e Notificações */}
      <div className="flex items-center space-x-4">
        {/* Input de Pesquisa */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Ícone de Notificação */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          {/* Badge de notificação */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
