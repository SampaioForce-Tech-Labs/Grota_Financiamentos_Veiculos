import BoxNavbar from "@/src/presentation/layout/Navbar/BoxNavbar";
import BoxFooter from "@/src/presentation/layout/Footer/BoxFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BoxNavbar/>
      <main className="flex-grow py-8 px-4 md:px-10">
        {/* Conteúdo principal da página */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Bem-vindo à Grota Financiamentos</h1>
          <p className="mb-4">Sua solução completa para financiamento de veículos.</p>
        </div>
      </main>
      <BoxFooter/>
    </div>
  );
}
