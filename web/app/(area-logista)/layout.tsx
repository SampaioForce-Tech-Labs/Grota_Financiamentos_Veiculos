"use client";

import BoxSidebar from "@/src/presentation/layout/Sidebar/BoxSidebar";
import DashboardHeader from "@/src/presentation/layout/pages/area-logista/dashboard/header/DashboardHeader";
import { ReactNode } from "react";
import { LayoutProviders } from "../../src/presentation/layout/pages/area-logista/dashboard/providers/LayoutProviders";
import { DashboardLayout as Layout } from "../../src/presentation/layout/pages/area-logista/dashboard/components/DashboardLayout";
import { MainContent } from "../../src/presentation/layout/pages/area-logista/dashboard/components/MainContent";
import { useDashboardLayout } from "../../src/presentation/layout/pages/area-logista/dashboard/hooks/useDashboardLayout";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardContent({ children }: DashboardLayoutProps) {
  const { sidebarWidth } = useDashboardLayout();

  return (
    <Layout sidebarWidth={sidebarWidth}>
      <BoxSidebar />
      <DashboardHeader />
      <MainContent>{children}</MainContent>
    </Layout>
  );
}

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  return (
    <LayoutProviders>
      <DashboardContent>{children}</DashboardContent>
    </LayoutProviders>
  );
}
