import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Users,
  Bell,
  Settings,
  ChevronDown,
  LogOut,
  Car,
  DollarSign,
  Calculator,
  HelpCircle,
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
    icon: DollarSign,
    items: [{ text: "Comissões e Repasse", href: "/comissoes" }],
  },
  {
    title: "Notificações",
    icon: Bell,
    items: [{ text: "Notificações e Alertas", href: "/notificacoes" }],
  },
  {
    title: "Veículos",
    icon: Car,
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
    icon: Calculator,
    items: [
      { text: "Todos", href: "/financiamentos" },
      { text: "Simulação", href: "/simulacao" },
    ],
  },
  {
    title: "Configurações",
    icon: Settings,
    items: [{ text: "Preferências", href: "/configuracoes" }],
  },
  {
    title: "Suporte",
    icon: HelpCircle,
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

  // Estado do sistema - será atualizado pelo backend
  const [systemStatus, setSystemStatus] = useState({
    version: "1.0.0",
    status: "offline", // "online", "offline", "maintenance"
    type: "Stable",
  });

  // Função para obter a cor do status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-red-500";
      case "maintenance":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

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
      initial={{ width: 75 }}
      animate={{ width: sidebarOpen ? 280 : 75 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="bg-orange-500 shadow-md z-50 flex flex-col group/sidebar rounded-r-xl fixed left-0 top-0 h-screen"
      onHoverStart={handleSidebarHoverStart}
      onHoverEnd={handleSidebarHoverEnd}
    >
      <nav className="flex flex-col mt-4 gap-2 h-screen">
        <div className="flex items-center justify-center w-full mb-6 px-3">
          <div className="p-2 rounded-full border-2 border-orange-300 bg-white shadow-lg">
            <LogoMarca
              size={24}
              withText={false}
              className="transition-all duration-300"
              iconBgColor="bg-white"
              iconTextColor="text-orange-500"
            />
          </div>
          <motion.span
            initial={false}
            animate={{
              opacity: sidebarOpen ? 1 : 0,
              width: sidebarOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden whitespace-nowrap flex items-center ml-1 text-2xl font-extrabold text-white font-montserrat tracking-tight drop-shadow-sm"
            style={{ display: "inline-block" }}
          >
            Logo<span className="text-orange-200">Marca</span>
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
                  className={`transition text-base font-montserrat tracking-tight text-white font-normal hover:bg-orange-600 rounded-xl relative ${
                    sidebarOpen
                      ? "flex items-center gap-3 px-5 py-3 w-[90%] justify-start"
                      : "w-[85%] h-14 flex items-center justify-center"
                  }`}
                  onClick={() =>
                    setOpenMenu(openMenu === group.title ? null : group.title)
                  }
                  tabIndex={-1}
                  type="button"
                >
                  <Icon
                    size={24}
                    className={`text-white flex-shrink-0 ${
                      !sidebarOpen ? "absolute" : ""
                    }`}
                  />
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: sidebarOpen ? 1 : 0,
                      width: sidebarOpen ? "auto" : 0,
                    }}
                    transition={{ duration: 0.2, delay: sidebarOpen ? 0.3 : 0 }}
                    className="overflow-hidden whitespace-nowrap flex items-center text-base font-normal font-montserrat flex-1"
                  >
                    {group.title}
                  </motion.span>
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: sidebarOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, delay: sidebarOpen ? 0.3 : 0 }}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </motion.div>
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
                            className={`flex items-center gap-x-4 p-3 w-full pl-10 cursor-pointer rounded-lg transition-colors text-[15px] font-normal font-montserrat tracking-tight ${
                              isActive
                                ? "bg-white text-orange-600 font-normal shadow-md hover:bg-white hover:text-orange-700"
                                : "text-white hover:bg-orange-600 hover:text-white"
                            }`}
                            initial={false}
                            animate={{
                              opacity: isOpen ? 1 : 0,
                              width: isOpen ? "auto" : 0,
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: "hidden" }}
                          >
                            <span className="font-normal whitespace-nowrap overflow-hidden">
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
        <div className="flex flex-col items-center mb-2 mt-2">
          <button
            className={`flex items-center transition text-base font-montserrat tracking-tight shadow-sm text-white font-normal hover:bg-red-500 rounded-xl ${
              sidebarOpen
                ? "gap-3 px-5 py-3 w-[90%] justify-start"
                : "gap-0 px-4 py-4 w-[85%] justify-center"
            }`}
            onClick={() => {
              /* ação de logout aqui */
            }}
            type="button"
          >
            <LogOut size={24} className="text-white flex-shrink-0" />
            <motion.span
              initial={false}
              animate={{
                opacity: sidebarOpen ? 1 : 0,
                width: sidebarOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap flex items-center text-base font-normal font-montserrat"
            >
              Sair
            </motion.span>
          </button>
        </div>

        {/* Container de Status do Sistema */}
        <div className="flex flex-col items-center mb-4 border-t border-white/30 pt-3">
          <div
            className={`flex items-center transition text-xs font-montserrat tracking-tight text-white/80 font-normal rounded-lg ${
              sidebarOpen
                ? "gap-2 px-3 py-2 w-[90%] justify-between"
                : "gap-0 px-2 py-2 w-[85%] justify-center"
            }`}
          >
            <motion.span
              initial={false}
              animate={{
                opacity: sidebarOpen ? 1 : 0,
                width: sidebarOpen ? "auto" : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap flex items-center text-xs font-normal font-montserrat"
            >
              Versão {systemStatus.type} {systemStatus.version}
            </motion.span>

            <div className="flex items-center gap-1">
              <motion.span
                initial={false}
                animate={{
                  opacity: sidebarOpen ? 1 : 0,
                  width: sidebarOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden whitespace-nowrap flex items-center text-xs font-normal font-montserrat"
              >
                {systemStatus.status === "online"
                  ? "Online"
                  : systemStatus.status === "offline"
                  ? "Offline"
                  : "Manutenção"}
              </motion.span>
              <motion.div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor(
                  systemStatus.status
                )}`}
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration:
                    systemStatus.status === "online"
                      ? 2
                      : systemStatus.status === "maintenance"
                      ? 1
                      : 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default BoxSidebar;
