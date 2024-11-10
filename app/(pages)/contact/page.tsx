"use client"

import Link from "next/link"
import { FaAddressCard } from "react-icons/fa6";

import Button from "@/components/Button"
import { useCharacterAnimation, useSlideUpAnimation } from "@/hooks/useAnimation"

const Footer = () => {
    useCharacterAnimation({ stagger: 0.02 })
    useCharacterAnimation({ selector: '.animate-character-left', x: -30, stagger: 0.02 })
    useSlideUpAnimation()

    return (
        <main className="pt-24 max-w-[1500px] mx-auto">
            <h1 className="px-10 text-3xl md:text-4xl font-bold mb-10">Reach out to us via email... <br /> or through social media</h1>
            <div className="px-10 sm:flex justify-between">
                <div>
                    <small className="font-semibold mb-6 sm:mb-10 block animate-character">Quick navigate our pages</small>
                    <ul className="text-lg font-bold">
                        <li><Link href="about">About Us</Link></li>
                        <li><Link href="forecast">Forecast</Link></li>
                        <li><Link href="report">Report a Case</Link></li>
                        <li><Link href="resources">Resources</Link></li>
                        <li><Link href="contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="max-sm:mt-8">
                    <small className="font-semibold mb-6 sm:mb-10 block animate-character-left">Contact us on our social handles</small>
                    <ul className="text-lg font-bold sm:text-right">
                        <li>Facebook</li>
                        <li>X</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            {/* Adress */}
            <div className="mt-10 px-10 sm:flex justify-between">
                <div className="max-sm:mb-6">
                    <div className="text-sm font-bold mb-2 animate-character">Address</div>
                    <p className="text-[.7rem] text-blue-700 font-semibold max-w-[400px] animate-slide-up">Room 215, SEET building, FUT-Minna Main campus, Minna-Bida road, Gidan Kwano</p>
                </div>
                <div className="sm:text-right">
                    <div className="text-sm font-bold mb-2 animate-character-left">Email</div>
                    <div className="text-[.7rem] font-semibold block animate-slide-up">
                        <span>Send us an email at</span><a className=" text-blue-700 " href="mailto:aidevg_24@futminna.edu.ng"> aidevg_24@futminna.edu.ng</a>
                    </div>
                </div>
            </div>
            <form className="flex flex-col sm:flex-row px-10 my-10 gap-6 sm:gap-8 items-end">
                <div className="flex flex-col gap-3 w-full sm:max-w-[300px]">
                    <label htmlFor="email" className="text-sm font-bold animate-character">Subscribe to our newsletter</label>
                    <input type="email" id="email" name="email" className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none animate-slide-up" placeholder="e.g. kunlegaladima@gmail.com" required />
                </div>
                <Button className="max-sm:w-full min-w-[200px] animate-character flex items-center justify-center gap-3">
                    <span>Subscribe</span> <FaAddressCard />
                </Button>
            </form>
        </main>
    )
}

export default Footer