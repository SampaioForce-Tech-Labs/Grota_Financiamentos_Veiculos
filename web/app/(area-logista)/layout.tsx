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
      <div className='flex bg-[#f8f8f8ce]'>
        <BoxSidebar/>
      <main className='flex w-full'>{children}</main>
      </div>
      
    </SidebarProvider>
  );
}