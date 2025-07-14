import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "./data";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Tudo que você precisa para
            <span className="text-orange-500"> vender mais veículos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para
            otimizar seu processo de vendas e financiamento de veículos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border border-zinc-700 hover:border-orange-500 
              shadow-md hover:shadow-lg transition duration-300 group"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full 
                flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transform transition">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-white text-lg md:text-xl font-bold group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm md:text-base leading-relaxed">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
