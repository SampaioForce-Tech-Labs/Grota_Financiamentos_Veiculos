'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Home, FileText, Users, Settings } from 'lucide-react';

function Page() {
  const controls = useAnimation();

  const menuItems = [
    { icon: <Home size={24} />, text: 'Home' },
    { icon: <FileText size={24} />, text: 'Documentos' },
    { icon: <Users size={24} />, text: 'Clientes' },
    { icon: <Settings size={24} />, text: 'Configurações' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <motion.div
        initial={{ width: 60 }}
        whileHover={{ width: 200 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-white shadow-md h-full flex flex-col"
      >
        <nav className="flex flex-col mt-4 gap-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-x-5 p-2 px-4 cursor-pointer hover:bg-orange-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='text-orange-500' style={{ width: 24, height: 24, flexShrink: 0 }}>
                {item.icon}
              </div>
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden whitespace-nowrap text-black"
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.text}
              </motion.span>
            </motion.div>
          ))}
        </nav>
      </motion.div>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </main>
    </div>
  );
}

export default Page;
