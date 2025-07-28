import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, FileText, Users, Settings } from "lucide-react";
import { useSidebar } from "@/src/application/core/context/SidebarContext";

function BoxSidebar() {
 
  const menuItems = [
    { icon: <Home size={24} />, text: "Home", href: "/dashboard" },
    {
      icon: <FileText size={24} />,
      text: "Documentos",
      href: "/documentos",
    },
    {
      icon: <Users size={24} />,
      text: "Clientes",
      href: "/clientes",
    },
    {
      icon: <Settings size={24} />,
      text: "Configurações",
      href: "/configuracoes",
    },
    {
      icon: <Users size={24} />,
      text: "Financiamentos",
      href: "/financiamentos",
    },
    {
      icon: <FileText size={24} />,
      text: "Relatórios",
      href: "/relatorios",
    },
    {
      icon: <Settings size={24} />,
      text: "Suporte",
      href: "/suporte",
    },
  ];
  return (
    <aside>
      <motion.div
        initial={{ width: 60 }}
        whileHover={{ width: 200 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white shadow-md z-1 flex flex-col"
      >
        <nav className="flex flex-col mt-4 gap-2 h-screen">
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <motion.div
                className="flex items-center gap-x-5 p-2 px-4 cursor-pointer hover:bg-orange-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="text-orange-500"
                  style={{ width: 24, height: 24, flexShrink: 0 }}
                >
                  {item.icon}
                </div>
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden whitespace-nowrap font-semibold text-black"
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.text}
                </motion.span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </motion.div>
    </aside>
  );
}

export default BoxSidebar;
