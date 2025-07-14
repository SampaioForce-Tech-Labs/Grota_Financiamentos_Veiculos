"use client";
import Link from "next/link";
import { Car, Menu, User, Facebook, Instagram, Linkedin } from "lucide-react";
import { navItems } from "./links";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LogoMarca */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-orange-500 p-2 rounded-lg shadow-2xl">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Logo<span className="text-orange-500 ml-1">Marca</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-orange-500 transition-colors duration-200
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
                  after:bg-orange-500 after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            {/* Redes sociais desktop */}
            <div className="flex space-x-4 ml-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-orange-500 transition-colors" />
              </Link>
            </div>
          </nav>

          {/* User Profile */}
          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              className="text-gray-100 bg-orange-500 p-2 hover:bg-orange-600 hover:text-gray-200 cursor-pointer shadow-2xl"
            >
              <User className="h-5 w-5" /> Área do Logista
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="md:hidden bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
              >
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-zinc-900 border-l border-zinc-700 rounded-l-2xl shadow-3xl p-6 animate-slide-in"
            >
              {/* Logo no mobile */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="bg-orange-500 p-2 rounded-lg shadow-2xl">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Logo<span className="text-orange-500 ml-1">Marca</span>
                </span>
              </div>

              <nav className="flex flex-col space-y-6 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-100 text-lg font-medium 
                      focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 
                      transition-colors duration-200
                      after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 
                      after:bg-orange-500 after:transition-all after:duration-300 
                      hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex justify-center mt-10">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-gray-100 w-full max-w-xs bg-orange-500 
                      hover:bg-orange-600 hover:text-gray-200 transition-all p-3 rounded-lg shadow-lg"
                  >
                    <User className="h-5 w-5" />
                    Área do Logista
                  </Button>
                </div>

                {/* Redes sociais mobile */}
                <div className="flex space-x-4 justify-center mt-6">
                  <Link href="https://facebook.com" target="_blank">
                    <Facebook className="h-6 w-6 text-gray-300 hover:text-orange-500 transition-colors" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <Instagram className="h-6 w-6 text-gray-300 hover:text-orange-500 transition-colors" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-6 w-6 text-gray-300 hover:text-orange-500 transition-colors" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
