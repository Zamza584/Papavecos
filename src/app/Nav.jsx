"use client"
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


export default function Nav() {
    const [toggle, setToggle] = useState(false)


    function showMenu() {
        setToggle(() => !toggle)
    }

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
            {toggle ?
                <div className="nav-mobile">
                    <div className="close-button">
                        <IoClose onClick={showMenu} />
                    </div>
                    <ul className="nav-mobile__items">
                        <NavItem url="/" handleClick={showMenu}>Home</NavItem>
                        <NavItem url="/menu" handleClick={showMenu}>Menu</NavItem>
                        <NavItem url="/nosotros" handleClick={showMenu}>Nosotros</NavItem>
                    </ul>
                </div>
                : null}



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