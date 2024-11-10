"use client"

import { useState } from "react";
import Link from "next/link";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from "split-type";

gsap.registerPlugin(useGSAP)

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    useGSAP(() => {
        const target = new SplitType('.logo-text')

        gsap.set(['.nav-pc', '.logo-text'], { opacity: 1 })

        const tl = gsap.timeline()

        tl.from(target.chars, {
            x: "200%",
            opacity: 0,
            stagger: 0.05,
            ease: "power2.out",
            duration: 0.8,

        }).from('.nav-pc', {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out",
            duration: 0.8,
        }, "<")
    })

    useGSAP(() => {
        if (menuOpen) {
            gsap.from('.nav-mobile', {
                y: 20,
                opacity: 0,
                duration: .2,
                stagger: .1,
                ease: "power1.inOut"
            })
        }
    }, [menuOpen])


    return (
        <header className="px-10 py-5 fixed top-0 w-full left-0 z-10  backdrop-blur-sm">
            <div className="flex max-md:justify-between items-center">
                <div className="font-bold">
                    <a href="#" className="logo-text text-xl">AI4LASSA</a>
                </div>

                <div className="md:hidden relative">
                    <div onClick={() => setMenuOpen(!menuOpen)} className={`hamburger-menu ${menuOpen ? 'active' : ''}`}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>
                    <style jsx>
                        {`
                            .hamburger-menu {
                                cursor: pointer;
                                display: inline-block;
                                position: relative;
                                width: 24px;
                                height: 24px;
                            }
                            .hamburger-line {
                                background-color: #333;
                                display: block;
                                height: 2px;
                                margin-bottom: 5px;
                                transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                                width: 100%;
                            }
                            .hamburger-line:nth-child(2) {
                                margin-bottom: 5px;
                            }
                            .active .hamburger-line:nth-child(1) {
                                transform: rotate(45deg) translate(5px, 5px);
                            }
                            .active .hamburger-line:nth-child(2) {
                                opacity: 0;
                            }
                            .active .hamburger-line:nth-child(3) {
                                transform: rotate(-45deg) translate(5px, -5px);
                            }
                        `}
                    </style>
                    {/* Nav for mobile */}
                    {menuOpen &&
                        (<nav onClick={() => setMenuOpen(false)} className="bg-appBg shadow-xl -z-10 absolute w-[200px] rounded-lg -right-3 -top-3 overflow-hidden pt-10 pb-3">
                            <ul className="flex flex-col gap">
                                {[
                                    { navItem: "About Us", link: 'about' },
                                    { navItem: "Forecast", link: 'forecast' },
                                    { navItem: "Report a Case", link: 'report' },
                                    { navItem: "Resources", link: 'resources' },
                                    { navItem: "Contact Us", link: 'contact' }
                                ].map((item, index) => (
                                    <li key={index} className="nav-mobile cursor-pointer font-semibold text-sm hover:bg-btn hover:text-white p-3 px-4 transition-colors duration-300">
                                        <Link href={item.link} className="block">{item.navItem}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>)
                    }
                </div>
                {/* Nav for larger screens */}
                <nav className="mx-auto hidden md:block">
                    <ul className="flex gap-3 lg:gap-5">
                        {[
                            { navItem: "About Us", link: 'about' },
                            { navItem: "Forecast", link: 'forecast' },
                            { navItem: "Report a Case", link: 'report' },
                            { navItem: "Resources", link: 'resources' },
                            { navItem: "Contact Us", link: 'contact' }
                        ].map((item, index) => (
                            <li key={index} className="nav-pc opacity-0 font-medium text-sm hover:bg-btn hover:text-white rounded-lg p-3 px-4 transition-colors duration-300"><Link href={item.link}>{item.navItem}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header