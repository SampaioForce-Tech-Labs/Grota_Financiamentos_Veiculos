import React from "react";
import Image from "next/image";
import {Mail, Phone, MapPin, ArrowRight, Car} from 'lucide-react'
import Link from 'next/link';
import CTAButton from "../shared/CTAButton/CTAButton";

function BoxFooter() {
  return (
    <footer className="flex flex-col md:flex-row justify-center w-full bg-zinc-800 px-4 md:px-10 py-10 md:py-20 gap-6 md:gap-x-20">
      <div className="flex flex-col w-full md:w-64 gap-y-6 md:gap-y-10">
        {/* Logo */}
        <div className="flex items-center">
          <div className="p-1 bg-orange-500 text-white font-semibold rounded-md mr-2">
            <Car size={32} />
          </div>
          <span className="text-white font-semibold mr-1">Logo</span>
          <span className="text-orange-500 font-semibold">Marca</span>
        </div>
        <div>
            <p className="text-zinc-400 ">A plataforma completa para financiamento de veículos. Conectamos lojistas aos melhores bancos e financeiras do país</p>
        </div>
        <div>
            <ul>
                <li className="flex items-center gap-x-2 text-white font-semibold"><Mail size={16} className="text-orange-500"/> <p>contato@empresa.com.br</p></li>
                <li className="flex items-center gap-x-2 text-white font-semibold"><Phone size={16} className="text-orange-500"/> <p>(11) 99985-9783</p></li>
                <li className="flex items-center gap-x-2 text-white font-semibold"><MapPin size={16} className="text-orange-500"/> <p>São Paulo, SP - Brazil</p></li>
            </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 md:gap-y-5 text-zinc-400 mt-6 md:mt-0">
        <h3 className="text-white font-semibold">Suporte</h3>
        <Link href="#">Central de Ajuda</Link>
        <Link href="#">Documentação</Link>
        <Link href="#">Termos de Uso</Link>
        <Link href="#">Política de Privacidade</Link>
      </div>
      <div className="flex flex-col gap-y-3 md:gap-y-5 text-zinc-500 mt-6 md:mt-0">
        <h3 className="text-white font-semibold">Receba novidades</h3>
        <p>Cadastre seu e-mail e fique por dentro das nossas novidades e ofertas</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-1">
            <input type="email" placeholder="Seu e-mail" className="border-[1px] rounded-[5px] pl-2 py-2 w-full sm:w-auto"/>
            <CTAButton label="Inscrever-se" Icon={ArrowRight}/>
        </div>
      </div>
    </footer>
  );
}

export default BoxFooter;
