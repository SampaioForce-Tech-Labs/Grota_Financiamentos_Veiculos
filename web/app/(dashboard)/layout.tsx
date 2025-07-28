'use client';

import BoxSidebar from '@/src/presentation/layout/Sidebar/BoxSidebar';
import React from 'react';
import { ReactNode } from 'react';
import { SidebarProvider } from '@/src/application/core/context/SidebarContext';

interface DashboardLayoutProps {
  children:ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps){

  return (
    <SidebarProvider>
      <div className='flex'>
        <BoxSidebar/>
      <main className='flex'>{children}</main>
      </div>
      
    </SidebarProvider>
  );
}