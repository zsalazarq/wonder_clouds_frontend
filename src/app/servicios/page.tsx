import Header from '@/components/shared/Header'
import React from 'react'
import Image from "next/image";
import { Footer } from '@/components/shared/Footer';
import Services from '@/components/shared/Services';
import Breadcrumbs from '@/components/ui/BreadCrumbs';

function Servicios() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">Servicios</h1>
        <div className="mt-4">
          <Breadcrumbs />
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/5 mx-auto items-center mt-5 gap-y-10">
        <Image className="hidden lg:block max-w-sm lg:max-w-md mx-auto object-contain" src="/images/image03.png" width={500} height={500} alt="Imagen representativa" />

        <div className="flex flex-col w-full px-4 lg:px-0">
          <span className="text-medium font-semibold">¿Necesitas soluciones digitales?</span>
          <h3 className="text-3xl lg:text-4xl font-semibold mb-5">Nuestros expertos listos para ayudarte</h3>
          <p>
            Impulsa tu presencia digital con nuestras soluciones integrales. Desde páginas web cautivadoras y marketing digital estratégico hasta software personalizado,
            diseño gráfico impactante y chatbots inteligentes. Nuestro equipo de expertos está listo para transformar tu visión en realidad digital, potenciando tu negocio
            en el mundo online. ¿Listo para destacar en el mercado digital?
          </p>
        </div>
      </div>
      <div className="container flex flex-col w-full lg:w-3/5 mx-auto items-center mt-12 lg:mt-24 space-y-10">
        <Services />
      </div>
      <Footer />
    </div>
  )
}

export default Servicios