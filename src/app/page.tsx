'use client'

import Image from "next/image";
import Header from "../components/shared/Header";
import { Button } from "@nextui-org/button";
import { Footer } from "@/components/shared/Footer";
import Services from "@/components/shared/Services";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Input } from "@nextui-org/input";
import { MailIcon, Phone, Send, User } from "lucide-react";
import MovingCirclesBackground from "@/components/ui/MovingCirclesBackground";

export default function Home() {
  const [text] = useTypewriter({
    words: ['TU MARCA', 'TU NEGOCIO', 'TU EMPRESA'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="relative">
      <Header />
      <div className="container flex flex-row w-full lg:w-full mx-auto items-center mt-12 lg:mt-5 space-y-10 relative">
      <MovingCirclesBackground />
        <div className="flex flex-col w-full lg:w-1/2 space-y-5 px-4 lg:px-0 z-10"> 
          <h3 className="text-3xl lg:text-5xl font-extrabold leading-tight">
            Es momento de que <br />
            <span className="text-[#104D7E]">{text}</span>
            <Cursor cursorColor="#104D7E" /> <br />
            suba al siguiente nivel
          </h3>
          <span className="text-lg lg:text-xl">
            En Wonder Clouds nos encargamos de diseñar estrategias innovadoras para impulsar tu marca
            hacia nuevos horizontes y conectar con audiencias globales de manera impactante.
          </span>
          <Button className="bg-[#104D7E] text-xl text-white font-medium rounded-2xl w-fit px-5">Contáctanos</Button>
        </div>
        <Image className="hidden lg:block w-4/6 z-10" src="/images/image.png" width={1000} height={1000} alt="Imagen representativa" />
      </div>
      <div className="container flex flex-col w-full lg:w-3/4 mx-auto items-center mt-12 lg:mt-18 space-y-10 relative">
        <h2 className="text-3xl lg:text-4xl font-semibold">Nuestros Servicios</h2>
        <Services />
      </div>
      <div className="container flex flex-col w-full lg:w-3/4 mx-auto items-center mt-12 lg:mt-24 space-y-10">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-10">Comunícate con nosotros</h2>
        <div className="flex flex-row mx-24 justify-center space-x-20">
          <div className="w-1/2 my-auto">
            <span className="text-medium font-semibold">¿Necesitas soluciones digitales?</span>
            <h3 className="text-3xl lg:text-4xl font-semibold mb-5">No dudes en contactarnos</h3>
            <div className="flex flex-col space-y-10">
              <Input
                type="text"
                variant="underlined"
                placeholder="Nombre"
                startContent={
                  <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />

              <Input
                type="email"
                variant="underlined"
                placeholder="Correo"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />

              <Input
                type="number"
                variant="underlined"
                placeholder="Teléfono"
                startContent={
                  <Phone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Button className="bg-[#104D7E] text-white text-base mx-auto p-5" startContent={<Send />}>Enviar</Button>
            </div>
          </div>
          <img className="hidden lg:block w-1/3" src="/images/image02.png" width={500} height={500} alt="Imagen representativa" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
