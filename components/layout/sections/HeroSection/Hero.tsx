"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";
import { slides } from "./data";

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/90 to-black/90" />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-3xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
                  {slide.alt}
                </h2>
                <p className="text-white/90 text-base md:text-2xl max-w-2xl mb-8 drop-shadow">
                  Conectamos você aos melhores bancos e financeiras com taxas
                  competitivas e aprovação rápida.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10 ">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6  text-lg shadow-xl transition cursor-pointer">
                    Simule seu financiamento
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                  <Button
                    variant="link"
                    className="text-gray-100 hover:text-gray-200 border border-orange-500 hover:border-orange-600 px-8 py-6 text-lg transitio cursor-pointer"
                  >
                    Fale com um especialista
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-orange-500 mr-2" />
                    Análise Segura
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-8 w-8 text-orange-500 mr-2" />
                    Aprovação Instantânea
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-orange-500 mr-2" />
                    Melhores Taxas
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
