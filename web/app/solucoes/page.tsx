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
import BoxHero from "@/src/presentation/components/solucoes/Hero/BoxHero";
import BoxServices from "@/src/presentation/components/solucoes/Services/BoxServices";
import BoxNewsletter from "@/src/presentation/components/solucoes/Newsletter/BoxNewsletter";
import BoxTestimonials from "@/src/presentation/components/solucoes/Testimonials/BoxTestimonials";


function Solucoes() {
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
      <section className="py-16 w-full mx-auto">
        <BoxServices/>
        {/* Newsletter Section */}
       <BoxNewsletter/>
        {/* Testimonials Section */}
        <BoxTestimonials/>
      </section>
      <Footer />
      <ModalContainer {...modalManager} />
    </div>
  );
}

export default Solucoes;
