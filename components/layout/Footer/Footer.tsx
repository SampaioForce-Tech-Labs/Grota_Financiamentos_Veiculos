import { Button } from "@/components/ui/button";
import { Car, Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Descrição + Contato */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg shadow-2xl">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Logo<span className="text-orange-500 ml-1">Marca</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm leading-relaxed">
              A plataforma completa para financiamento de veículos. Conectamos
              lojistas aos melhores bancos e financeiras do país.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-500" />
                <span>contato@empresa.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500" />
                <span>(11) 99985-9783</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                "Nossa História",
                "Soluções",
                "Financiamento",
                "Blog",
                "Contato",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              {[
                "Central de Ajuda",
                "Documentação",
                "Termos de Uso",
                "Política de Privacidade",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter ou chamada adicional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Receba novidades</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Cadastre seu e-mail e fique por dentro das nossas novidades e
              ofertas.
            </p>
            <form className="flex rounded-md overflow-hidden shadow-sm border border-zinc-700 focus-within:ring-2 focus-within:ring-orange-500 transition">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 transition-colors"
              >
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Empresa. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
