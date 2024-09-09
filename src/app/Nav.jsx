"use client"
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


export default function Nav() {
    const [toggle, setToggle] = useState(false)

    function showMenu() {
        setToggle(() => !toggle)
    }

    useGSAP(() => {
        if (toggle) {
            const tl = gsap.timeline({
                paused: true
            })

            tl.to(".nav-mobile", {
                x: 0, duration: 1, ease: "circ.out", visibility: "visible",
            })
            if (toggle) {
                tl.play()
            }

        } else {
            const tl = gsap.timeline({
                paused: true
            })
            tl.to(".nav-mobile", {
                x: 700
            })
            tl.play()
        }

    }, [toggle])

    return (
        <nav className="nav">
            <ul className="nav__items">
                <NavItem url="/">Home</NavItem>
                <NavItem url="/menu">Menu</NavItem>
                <NavItem url="/nosotros">Nosotros</NavItem>
            </ul>
            <div className="hamburger-menu">
                <RxHamburgerMenu onClick={showMenu} />
            </div>
            {/* mobile view  */}
            <div className={toggle ? "nav-mobile show" : "nav-mobile"} >
                <div className="close-button">
                    <IoClose onClick={showMenu} />
                </div>
                <ul className="nav-mobile__items">
                    <NavItem url="/" handleClick={showMenu}>Home</NavItem>
                    <NavItem url="/menu" handleClick={showMenu}>Menu</NavItem>
                    <NavItem url="/nosotros" handleClick={showMenu}>Nosotros</NavItem>
                </ul>
            </div>
        </nav>
    )
}

function NavItem({ url, handleClick, children }) {
    return (
        <li>
            <Link href={url} className="nav__item" onClick={handleClick}>
                {children}
            </Link>
        </li>
    )
}