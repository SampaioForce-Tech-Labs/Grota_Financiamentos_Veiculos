"use client"
import { Button } from "@/src/presentation/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import HeroSection from "@/src/presentation/components/Hero/BoxHero"
import { LoginModal } from "../src/presentation/layout/modais/LoginModal"
import { RegisterModal } from "../src/presentation/layout/modais/RegisterModal"
import { ForgotPasswordModal } from "../src/presentation/layout/modais/ForgotPasswordModal"
import GridList from "@/src/presentation/components/banners/GridList"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false)

  useEffect(() => {
    const handleOpenRegisterModal = () => setIsRegisterModalOpen(true)
    const handleOpenForgotPasswordModal = () => setIsForgotPasswordModalOpen(true)
    const handleOpenLoginModal = () => setIsLoginModalOpen(true)
    
    window.addEventListener('openRegisterModal', handleOpenRegisterModal)
    window.addEventListener('openForgotPasswordModal', handleOpenForgotPasswordModal)
    window.addEventListener('openLoginModal', handleOpenLoginModal)
    
    return () => {
      window.removeEventListener('openRegisterModal', handleOpenRegisterModal)
      window.removeEventListener('openForgotPasswordModal', handleOpenForgotPasswordModal)
      window.removeEventListener('openLoginModal', handleOpenLoginModal)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="min-h-screen w-full relative bg-white">


      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-orange-500 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${isScrolled ? "max-w-5xl px-2" : "max-w-7xl px-6"
          } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <Link
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${isScrolled ? "ml-4" : ""
            }`}
          href="https://v0.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Grota_logo_horizontal_positivo-removebg-preview.png"
            alt="Logo"
            width={150}
            height={150}
            className="filter brightness-0 invert"
          />
        </Link>


        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <Link
            href="#"
            className="relative px-4 py-2 text-white hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="relative z-20">Inicio</span>
          </Link>
          <Link
            href="#"
            className="relative px-4 py-2 text-white hover:text-foreground transition-colors cursor-pointer"

          >
            <span className="relative z-20">Nossa Historia</span>
          </Link>
          <Link
            href="#"
            className="relative px-4 py-2 text-white hover:text-foreground transition-colors cursor-pointer"

          >
            <span className="relative z-20">Soluções</span>
          </Link>
          <Link
            href="#"
            className="relative px-4 py-2 text-white hover:text-foreground transition-colors cursor-pointer"

          >
            <span className="relative z-20">Financiamento</span>
          </Link>

          <Link
            href="#"
            className="relative px-4 py-2 text-white hover:text-foreground transition-colors cursor-pointer"

          >
            <span className="relative z-20">Blog</span>
          </Link>
          <Link
            href="#"
            className="relative px-4 py-2 text-white hover:text-foreground transition-colors cursor-pointer"

          >
            <span className="relative z-20">Contato</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-white text-black shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
          >
            Area do Logista
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-orange-500 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <Link
          className="flex items-center justify-center gap-2"
          href="https://v0.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Grota_logo_horizontal_positivo-removebg-preview.png"
            alt="Logo"
            width={150}
            height={150}
            className="filter brightness-0 invert"
          />
        </Link>

        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white transition-colors cursor-pointer "
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-orange-500 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-orange-500 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-orange-500 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 mt-10 bg-orange-500 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#"
                className="text-left px-4 py-3 text-lg font-medium text-white hover:text-white transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
              >
                Inicio
              </Link>
              <Link
                href="#"
                className="text-left px-4 py-3 text-lg font-medium text-white hover:text-white transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-left px-4 py-3 text-lg font-medium text-white hover:text-white transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
              >
                Testimonials
              </Link>
              <Link
                href="#"
                className="text-left px-4 py-3 text-lg font-medium text-white hover:text-white transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
              >
                FAQ
              </Link>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsLoginModalOpen(true)
                  }}
                  className="px-4 py-3 text-lg font-bold text-center bg-white text-orange-500 rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Area do Logista
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection/>

      {/* Grid List Section */}
      
      
      {/* Area do logista Modals */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
      <ForgotPasswordModal isOpen={isForgotPasswordModalOpen} onClose={() => setIsForgotPasswordModalOpen(false)} />
    </div>
  )
}
