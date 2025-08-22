import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Users,
  BarChart2,
  Bell,
  Settings,
  ChevronDown,
  LogOut,
} from "lucide-react";
import LogoMarca from "../shared/LogoMarca";

// Definição do menu lateral
const sidebarMenu = [
  {
    title: "Dashboard",
    icon: Home,
    items: [
      { text: "Visão Geral", href: "/dashboard" },
      { text: "Relatórios", href: "/relatorios" },
    ],
  },
  {
    title: "Comissões",
    icon: BarChart2,
    items: [{ text: "Comissões e Repasse", href: "/comissoes" }],
  },
  {
    title: "Notificações",
    icon: Bell,
    items: [{ text: "Notificações e Alertas", href: "/notificacoes" }],
  },
  {
    title: "Veículos",
    icon: BarChart2,
    items: [{ text: "Gestão de Veículos", href: "/veiculos" }],
  },
  {
    title: "Clientes",
    icon: Users,
    items: [
      { text: "Lista de Clientes", href: "/clientes" },
      { text: "Documentos", href: "/documentos" },
    ],
  },
  {
    title: "Financiamentos",
    icon: BarChart2,
    items: [{ text: "Todos", href: "/financiamentos" }],
  },
  {
    title: "Configurações",
    icon: Settings,
    items: [{ text: "Preferências", href: "/configuracoes" }],
  },
  {
    title: "Suporte",
    icon: Bell,
    items: [{ text: "Central de Suporte", href: "/suporte" }],
  },
];

function BoxSidebar() {
  // Handlers para hover da sidebar
  const handleSidebarHoverStart = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSidebarOpen(true);
  };
  const handleSidebarHoverEnd = () => {
    timeoutRef.current = setTimeout(() => setSidebarOpen(false), 150);
  };
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Abre automaticamente o grupo do menu da página ativa ao abrir a sidebar
  React.useEffect(() => {
    if (sidebarOpen) {
      const group = sidebarMenu.find((group) =>
        group.items.some((item) => item.href === pathname)
      );
      if (group) setOpenMenu(group.title);
    }
  }, [sidebarOpen, pathname]);

  return (
    <motion.div
      initial={{ width: 60 }}
      animate={{ width: sidebarOpen ? 220 : 60 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-gradient-to-b from-orange-50 to-white shadow-md z-1 flex flex-col group/sidebar"
      onHoverStart={handleSidebarHoverStart}
      onHoverEnd={handleSidebarHoverEnd}
    >
      <nav className="flex flex-col mt-4 gap-2 h-screen">
        <div className="flex items-center justify-center w-full mb-4">
          <LogoMarca
            size={22}
            withText={false}
            className="transition-all duration-300"
          />
          <motion.span
            initial={false}
            animate={{
              opacity: sidebarOpen ? 1 : 0,
              width: sidebarOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden whitespace-nowrap flex items-center ml-1 text-2xl font-extrabold text-orange-600 font-sans tracking-tight drop-shadow-sm"
            style={{ display: "inline-block" }}
          >
            Logo<span className="text-orange-500">Marca</span>
          </motion.span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          {sidebarMenu.map((group) => {
            const Icon = group.icon;
            const isOpen = sidebarOpen && openMenu === group.title;
            return (
              <div
                key={group.title}
                className="mb-1 flex flex-col justify-center items-center"
              >
                <button
                  className="flex items-center gap-2 px-4 py-2 w-[92%] text-orange-600 font-semibold hover:bg-orange-100 rounded-xl transition text-base font-sans tracking-tight shadow-sm"
                  onClick={() =>
                    setOpenMenu(openMenu === group.title ? null : group.title)
                  }
                  tabIndex={-1}
                  type="button"
                >
                  <Icon size={22} className="text-orange-500 flex-shrink-0" />
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: sidebarOpen ? 1 : 0,
                      width: sidebarOpen ? "auto" : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden whitespace-nowrap flex items-center text-base font-semibold font-sans"
                  >
                    {group.title}
                    <ChevronDown
                      size={18}
                      className={`ml-1 transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      style={{
                        opacity: sidebarOpen ? 1 : 0,
                        transition: "opacity 0.2s",
                      }}
                    />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden w-[92%]"
                >
                  <div className="flex flex-col">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          href={item.href}
                          key={item.text}
                          className="block"
                        >
                          <motion.div
                            className={`flex items-center gap-x-4 p-2 w-full pl-8 cursor-pointer rounded-lg transition-colors text-[15px] font-medium font-sans tracking-tight ${
                              isActive
                                ? "bg-orange-100 text-orange-700 font-bold shadow"
                                : "hover:bg-orange-200 text-gray-700"
                            }`}
                            initial={false}
                            animate={{
                              opacity: isOpen ? 1 : 0,
                              width: isOpen ? "auto" : 0,
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: "hidden" }}
                          >
                            <span className="font-medium whitespace-nowrap overflow-hidden">
                              {item.text}
                            </span>
                          </motion.div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        {/* Botão de sair */}
        <div className="flex flex-col items-center mb-4 mt-2">
          <button
            className="flex items-center gap-2 px-4 py-2 w-[92%] text-red-600 font-semibold hover:bg-red-50 rounded-xl transition text-base font-sans tracking-tight shadow-sm"
            onClick={() => {
              /* ação de logout aqui */
            }}
            type="button"
          >
            <LogOut size={22} className="text-red-500 flex-shrink-0" />
            <motion.span
              initial={false}
              animate={{
                opacity: sidebarOpen ? 1 : 0,
                width: sidebarOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap flex items-center text-base font-semibold font-sans"
            >
              Sair
            </motion.span>
          </button>
        </div>
      </nav>
    </motion.div>
  );
}

export default BoxSidebar;
