"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "./constants/navLinks";
import { User, X, Menu, Car } from "lucide-react";
import CTAButton from "../shared/CTAButton/CTAButton";

function BoxNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100 shadow-lg mb-2 w-full py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="p-1 bg-orange-500 text-white font-semibold rounded-md mr-2">
              <Car size={42} />
            </div>
            <span className="text-xl font-bold text-black">Logo
              <span className="text-orange-500">Marca</span>
            </span>
            
          </Link>
          {/* Botão Menu Toggle */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:items-center md:gap-x-42 absolute  md:static top-25 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent p-4 md:p-0 z-10 transition-all duration-300 ease-in-out`}
          >
            {/* Links de navegação */}
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-5">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-orange-500 font-semibold md:text-md text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Botão Área do Lojista */}
            <div className="mt-4 md:mt-0">
              <Link href="/area-lojista">
                <CTAButton
                  label="Área do Lojista"
                  Icon={User}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="w-full md:w-36"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BoxNavbar;
