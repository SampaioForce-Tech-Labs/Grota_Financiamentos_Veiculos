import React from "react";
import Image from "next/image";
import {Mail, Phone, MapPin, ArrowRight} from 'lucide-react'
import Link from 'next/link';
import CTAButton from "../shared/CTAButton/CTAButton";

function BoxFooter() {
  return (
    <div className="flex justify-center absolute w-full bottom-0 bg-zinc-800 gap-x-20 py-20">
      <div className="flex flex-col w-64 gap-y-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dm8vb9gkj/image/upload/v1742745497/logo_cn8jdk.svg"
            alt="logo"
            width={100}
            height={100}
            priority
          />
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
      <div className="flex flex-col gap-y-5 text-zinc-400">
        <h3 className="text-white font-semibold">Suporte</h3>
        <Link href="#">Central de Ajuda</Link>
        <Link href="#">Documentação</Link>
        <Link href="#">Termos de Uso</Link>
        <Link href="#">Política de Privacidade</Link>
      </div>
      <div className="flex flex-col gap-y-5 text-zinc-500">
        <h3 className="text-white font-semibold">Receba novidades</h3>
        <p>Cadastre seu e-mail e fique por dentro das nossas novidades e ofertas</p>
        <div className="flex gap-x-1">
            <input type="email" placeholder="Seu e-mail" className="border-[1px] rounded-[5px] pl-1"/>
            <CTAButton label="Inscrever-se" Icon={ArrowRight}/>
        </div>
      </div>
    </div>
  );
}

export default BoxFooter;
