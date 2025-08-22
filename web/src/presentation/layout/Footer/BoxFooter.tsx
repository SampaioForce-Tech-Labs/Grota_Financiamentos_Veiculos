import React from "react";
import { Mail, Phone, MapPin, ArrowRight, Car } from "lucide-react";
import Link from "next/link";
import CTAButton from "../shared/CTAButton";

function BoxFooter() {
  return (
    <footer
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      className="bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2">
          <div className="col-span-1 md:col-span-1 space-y-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="p-1 bg-orange-500 text-white font-semibold rounded-md mr-2">
                <Car size={42} />
              </div>
              <span className="text-xl font-bold text-black">
                Logo
                <span className="text-orange-500">Marca</span>
              </span>
            </Link>
            <div>
              <p className="text-gray-500 ">
                A plataforma completa para financiamento de veículos. Conectamos
                lojistas aos melhores bancos e financeiras do país
              </p>
            </div>
            <div>
              <ul>
                <li className="flex items-center gap-x-2 text-black font-semibold">
                  <Mail size={16} className="text-orange-500" />{" "}
                  <p>contato@empresa.com.br</p>
                </li>
                <li className="flex items-center gap-x-2 text-black font-semibold">
                  <Phone size={16} className="text-orange-500" />{" "}
                  <p>(11) 99985-9783</p>
                </li>
                <li className="flex items-center gap-x-2 text-black font-semibold">
                  <MapPin size={16} className="text-orange-500" />{" "}
                  <p>São Paulo, SP - Brazil</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:gap-y-5 text-gray-500 mt-6 md:mt-0">
            <h3 className="text-black font-semibold">Links Rápidos</h3>
            <Link href="#">Nossa História</Link>
            <Link href="#">Soluções</Link>
            <Link href="#">Financiamento</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contato</Link>
          </div>
          <div className="flex flex-col gap-y-3 md:gap-y-5 text-gray-500 mt-6 md:mt-0">
            <h3 className="text-black font-semibold">Suporte</h3>
            <Link href="#">Central de Ajuda</Link>
            <Link href="#">Documentação</Link>
            <Link href="#">Termos de Uso</Link>
            <Link href="#">Política de Privacidade</Link>
          </div>
          <div className="flex flex-col gap-y-3 md:gap-y-5 text-gray-500 mt-6 md:mt-0">
            <h3 className="text-black font-semibold">Receba novidades</h3>
            <p>
              Cadastre seu e-mail e fique por dentro das nossas novidades e
              ofertas
            </p>
            <div className="relative w-full max-w-xs">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="border-[1px] rounded-[5px] pl-4 py-2 pr-36 w-full"
              />
              <div className="absolute right-0 top-0 h-full">
                <CTAButton
                  label="Inscrever-se"
                  Icon={ArrowRight}
                  iconSize={16}
                  className="h-full font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BoxFooter;
