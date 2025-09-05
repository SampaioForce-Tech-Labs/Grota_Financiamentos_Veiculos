"use client";
import { useState } from "react";
import { useTheme } from "@/src/presentation/layout/navbar/hooks/useTheme";
import { useModalManager } from "@/src/presentation/layout/navbar/hooks/useModalManager";
import { useScrollDetection } from "@/src/presentation/layout/navbar/hooks/useScrollDetection";
import { DesktopHeader } from "@/src/presentation/layout/navbar/components/Header/DesktopHeader";
import { MobileHeader } from "@/src/presentation/layout/navbar/components/Header/MobileHeader";
import { MobileMenu } from "@/src/presentation/layout/navbar/components/Header/MobileMenu";
import Footer from "@/src/presentation/layout/Footer/Footer";
import { ModalContainer } from "@/src/presentation/layout/modais/ModalContainer";
import BoxHero from "@/src/presentation/components/contato/Hero/BoxHero";
import BoxMapa from "@/src/presentation/components/contato/Mapa/BoxMapa";
import BoxContatoForm from "@/src/presentation/components/contato/contatoForm/BoxContatoForm";

function Contato() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollDetection(100);
  const modalManager = useModalManager();

  useTheme("dark");

  const handleMobileLoginClick = () => {
    setIsMobileMenuOpen(false);
    modalManager.openLoginModal();
  };

  return (
    <div className="min-h-screen w-full relative bg-white">
      <DesktopHeader
        isScrolled={isScrolled}
        onLoginClick={modalManager.openLoginModal}
      />

      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onLoginClick={handleMobileLoginClick}
      />
      {/* Hero Section */}
      <BoxHero />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contato
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa */}
          <BoxMapa />
          {/* Formulário de Contato */}
          <BoxContatoForm/>
        </div>
      </section>
      <Footer/>
        <ModalContainer {...modalManager} />
    </div>
  );
}

export default Contato;
