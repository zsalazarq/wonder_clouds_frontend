import Header from '@/components/shared/Header'
import React from 'react'
import Image from "next/image";
import Breadcrumbs from '@/components/ui/BreadCrumbs';
import { Footer } from '@/components/shared/Footer';
import { CardTeam } from '@/components/ui/Cards';

function Nosotros() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">Nosotros</h1>
        <div className="mt-4">
          <Breadcrumbs />
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/5 mx-auto items-center mt-5 gap-y-10">
        <Image className="hidden lg:block max-w-sm lg:max-w-md mx-auto object-cover" src="/images/image04.png" width={500} height={500} alt="Imagen representativa" />
        <div className="flex flex-col w-full px-4 lg:px-0">
          <p className="text-lg">
            En Wonder Clouds, somos una empresa nueva y emocionante en el mundo del marketing digital.
            Fundada en el corazón del encantador Cusco, nuestra misión es dejar una marca única en la industria y ofrecer
            soluciones digitales innovadoras que impulsen el éxito de nuestros clientes.
            <br />
            <br />
            Con un equipo joven y dinámico, estamos llenos de entusiasmo y creatividad para abordar los desafíos más grandes y llevar tus ideas a nuevas alturas
            en el vasto cielo digital. A pesar de ser nuevos en el mercado, estamos listos para hacer una diferencia significativa y convertirnos en líderes en
            el campo del marketing digital en la región y más allá.
          </p>
        </div>
      </div>
      <div className="container w-full lg:w-3/5 mx-auto mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardTeam
          name="Jayo Baez"
          role="Desarrollador de software"
          imageSrc="/images/default_user.webp"
          linkedinUrl="https://linkedin.com/in/cristian-monzon"
          githubUrl="https://github.com/cristian-monzon"
          instagramUrl="https://instagram.com/cristian.monzon"
        />
        <CardTeam
          name="Cristian Monzón"
          role="Desarrollador de software"
          imageSrc="/images/team/monchi.png"
          linkedinUrl="https://linkedin.com/in/cristian-monzon"
          githubUrl="https://github.com/cristian-monzon"
          instagramUrl="https://instagram.com/cristian.monzon"
        />
        <CardTeam
          name="Sergio Salazar"
          role="Desarrollador de software"
          imageSrc="/images/default_user.webp"
          linkedinUrl="https://linkedin.com/in/cristian-monzon"
          githubUrl="https://github.com/cristian-monzon"
          instagramUrl="https://instagram.com/cristian.monzon"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Nosotros
