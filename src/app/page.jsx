"use client"

import papaRellena from "./assets/papa-rellena.jpg";
import chiPescado from "./assets/chi-pescado.jpg";
import deco1 from "./assets/deco1.jpg"
import yape from "./assets/yape.png"
import Image from "next/image";
import Link from "next/link";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




export default function Home() {


  useGSAP(
    () => {
      const contenido = gsap.utils.toArray('.contenido')
      // gsap code here...

      contenido.forEach((contenido, i) => {
        gsap.fromTo(contenido, {
          opacity: 0.2,
          x: -200
        },
          {
            scrollTrigger: {
              trigger: contenido,
              toggleActions: "restart none restart none",
              start: "top bottom",
            },
            opacity: 1,
            duration: 2,
            x: 0

          })

      }); // <-- automatically reverted
    },
  );

  return (
    <div className="home">
      <main>
        <div className="home__anuncios">
        </div>
        <div className="home__entrada">
          <div className="wrapper">
            <div className="contenido">
              <h1>¿HAMBRE?</h1>
              <p>Somos papavecos estamos localizados en Carmen de la Legua.</p>
            </div>
            <Image src={papaRellena} width={500} height={450} alt="papa rellena" />
          </div>
        </div>
        <div className="home__menu">
          <h1>MENU</h1>
          <div className="wrapper">
            <Image src={chiPescado} width={500} height={450} alt="chicharon de pescado" />
            <div className="contenido">
              <div className="platos">
                <div className="plato">
                  <p>Papa Rellena</p>
                  <p>S/ 5.00</p>
                </div>
                <div className="plato">
                  <p>Chicharon de Pescado</p>
                  <p>S/ 8.00</p>
                </div>
                <div className="plato">
                  <p>Chicharon de Pota</p>
                  <p>S/ 7.00</p>
                </div>
              </div>
              <Link className="btn" href="/menu">Ver Menu</Link>
            </div>
          </div>
        </div>
        <Image src={deco1} className="deco1" />
        <div className="home__delivery">
          <div className="wrapper">
            <div className="contenido">
              <h1>Horas de Delivery</h1>
              <p>1pm - 10pm</p>
              <p>Solo Delivery en Carmen de la Legua</p>
              <p>Paga con Yape</p>
              <p>979-275-694</p>
              <Image src={yape} className="yape" alt="yape" />
            </div>
          </div>
        </div>
        <div className="home__local">
          <div className="wrapper">
            <div className="contenido">
              <h1>Local</h1>
              <p>Recoge tu pedido en nuestro local</p>
              <p>Julio C Tello 670</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.1597733216112!2d-77.092601553914!3d-12.04113795270473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cead76eedb5b%3A0x9c68fa9b64e09eb9!2sAv.%20Julio%20C%C3%A9sar%20Tello%20670%2C%20Carmen%20de%20La%20Legua%20-%20Reynoso%2007006!5e0!3m2!1sen!2spe!4v1723522382761!5m2!1sen!2spe" width={600} height={450} style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
          </div>
        </div>
      </main >
    </div >
  );
} 
