import Image from "next/image";
import whatsapp from "../assets/WhatsAppButtonGreenLarge.svg"

import { IoIosArrowRoundDown } from "react-icons/io";


export default function Menu() {
    return (
        <div className="menu">
            <div className="menu__items">
                <h1>Menu</h1>
                <div className="menu__item">
                    <p>Papa Rellena</p>
                    <p>S/ 5.00</p>
                </div>
                <div className="menu__item">
                    <p>Chicharon de Pota</p>
                    <p>S/ 7.00</p>
                </div>
                <div className="menu__item">
                    <p>Chicharon de Pescado</p>
                    <p>S/ 8.00</p>
                </div>
            </div>

            <p className="pedir">Pedir Ahora Por Whatsapp</p>


            <div className="arrow-container">
                <IoIosArrowRoundDown/>
            </div>
            <a aria-label="Chat on WhatsApp" target="_blank" className="chatWhatsapp" href="https://wa.me/51979275694?text=Hola%2C%20me%20gustaria%20consultar%20precios.%20"><Image alt="Chat on WhatsApp" src={whatsapp} /></a>
        </div>
    )


} 