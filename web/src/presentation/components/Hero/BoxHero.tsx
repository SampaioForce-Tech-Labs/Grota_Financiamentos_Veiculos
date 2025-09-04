import React from "react";

function BoxHero() {
  return (
    <main>
      <section className="relative bg-gray-100 shadow-md py-20 lg:py-32">
        <div className="max-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              A SOLUÇÃO PERFEITA PARA
              <br />
              <span className="text-orange-500">FINANCIAMENTO DE VEÍCULOS</span>
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
              Conecte-se aos maiores bancos e financeiras do país e ofereça as
              melhores opções de financiamento de veículos aos seus clientes com
              análise instantânea por placa!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Seja um Parceiro AutoFinance
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background border h-11 rounded-md border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg">
                Ver Demonstração
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield h-4 w-4 mr-2 text-orange-500"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                Análise Segura
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap h-4 w-4 mr-2 text-orange-500"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                Aprovação Instantânea
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-4 w-4 mr-2 text-orange-500"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                Melhores Taxas
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  className="py-20 bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Tudo que você precisa para
              <span className="text-orange-500"> vender mais veículos</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Nossa plataforma oferece todas as ferramentas necessárias para
              otimizar seu processo de vendas e financiamento de veículos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="rounded-lg border text-card-foreground shadow-2xs bg-white border-gray-300 hover:border-orange-500 transition-colors duration-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search h-6 w-6 text-white"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-black">
                  Análise por Placa
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-500">
                  Consulte instantaneamente dados do veículo apenas com a placa,
                  incluindo valor de mercado, histórico e documentação.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border text-card-foreground shadow-2xs bg-white border-gray-300 hover:border-orange-500 transition-colors duration-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calculator h-6 w-6 text-white"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    <line x1="8" x2="16" y1="6" y2="6"></line>
                    <line x1="16" x2="16" y1="14" y2="18"></line>
                    <path d="M16 10h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M8 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-black">
                  Simulador de Financiamento
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-500">
                  Calcule automaticamente as melhores condições de financiamento
                  com múltiplas instituições financeiras.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border text-card-foreground shadow-2xs bg-white border-gray-300 hover:border-orange-500 transition-colors duration-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-text h-6 w-6 text-white"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-black">
                  Propostas Digitais
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-500">
                  Gere propostas profissionais em segundos com todos os dados do
                  veículo e condições de financiamento.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border text-card-foreground shadow-2xs bg-white border-gray-300 hover:border-orange-500 transition-colors duration-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trending-up h-6 w-6 text-white"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-black">
                  Dashboard Completo
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-500">
                  Acompanhe suas vendas, comissões e performance em tempo real
                  com relatórios detalhados.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border text-card-foreground shadow-2xs bg-white border-gray-300 hover:border-orange-500 transition-colors duration-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield h-6 w-6 text-white"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-black">
                  Segurança Total
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-500">
                  Plataforma segura com criptografia de ponta a ponta e
                  conformidade com LGPD.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border text-card-foreground shadow-2xs bg-white border-gray-300 hover:border-orange-500 transition-colors duration-300"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap h-6 w-6 text-white"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-black">
                  Aprovação Rápida
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-500">
                  Processo de aprovação otimizado que reduz o tempo de espera
                  para seus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      }} className="py-20 bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Números que<span className="text-orange-500"> impressionam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados comprovados que demonstram a eficácia da nossa
              plataforma no mercado de financiamento de veículos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="rounded-2xl bg-card bg-white text-card-foreground text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  50K+
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  Veículos Financiados
                </div>
                <div className="text-gray-600">
                  Mais de 50 mil veículos financiados através da nossa
                  plataforma
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl bg-card bg-white  text-card-foreground text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  200+
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  Parceiros Ativos
                </div>
                <div className="text-gray-600">
                  Rede de lojistas e corretores em todo o Brasil
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl bg-card bg-white  text-card-foreground text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  98%
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  Taxa de Aprovação
                </div>
                <div className="text-gray-600">
                  Alta taxa de aprovação com as melhores condições do mercado
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl bg-card bg-white  text-card-foreground text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-v0-t="card"
            >
              <div className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  24h
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  Aprovação Média
                </div>
                <div className="text-gray-600">
                  Tempo médio para aprovação e liberação do financiamento
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BoxHero;
