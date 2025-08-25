"use client";

import BoxSidebar from "@/src/presentation/layout/Sidebar/BoxSidebar";
import React from "react";
import { ReactNode } from "react";
import { SidebarProvider } from "@/src/application/core/context/SidebarContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardContent({ children }: DashboardLayoutProps) {
  return (
    <div className="flex bg-[#f8f8f8ce] min-h-screen">
      <BoxSidebar />
      <main className="flex w-full ml-[90px] transition-all duration-500 ease-in-out">
        {children}
      </main>
    </div>
  );
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
