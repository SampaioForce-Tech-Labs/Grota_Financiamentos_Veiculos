"use client";

import BoxSidebar from "@/src/presentation/layout/Sidebar/BoxSidebar";
import DashboardHeader from "@/src/presentation/layout/Header/DashboardHeader";
import React from "react";
import { ReactNode } from "react";
import {
  SidebarProvider,
  useSidebar,
} from "@/src/application/core/context/SidebarContext";
import { HeaderProvider } from "@/src/application/core/context/HeaderContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardContent({ children }: DashboardLayoutProps) {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex bg-[#f8f8f8ce] min-h-screen">
      <BoxSidebar />
      <div
        className={`flex flex-col w-full transition-all duration-700 ease-in-out ${
          isSidebarOpen ? "ml-[280px]" : "ml-[75px]"
        }`}
      >
        <DashboardHeader />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <HeaderProvider>
        <DashboardContent>{children}</DashboardContent>
      </HeaderProvider>
    </SidebarProvider>
  );
}
