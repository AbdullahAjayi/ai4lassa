"use client"

import Link from "next/link"
import Button from "./Button"
import { useCharacterAnimation, useSlideUpAnimation } from "@/hooks/useAnimation"

const Footer = () => {
    useCharacterAnimation({ stagger: 0.02 })
    useCharacterAnimation({ selector: '.animate-character-left', x: -30, stagger: 0.02 })
    useSlideUpAnimation()

    return (
        <footer id="contact" className="pt-20 max-w-[1500px] mx-auto">
            <div className="px-10 sm:flex justify-between">
                <div className="">
                    <small className="font-semibold mb-6 sm:mb-10 block animate-character">Quick navigate our pages</small>
                    <ul className="text-lg font-bold">
                        <li className="animate-slide-up"><Link href="about-us">About Us</Link></li>
                        <li className="animate-slide-up"><a href="#forecast">Forecast</a></li>
                        <li className="animate-slide-up"><a href="#report">Report a Case</a></li>
                        <li className="animate-slide-up"><a href="#resources">Resources</a></li>
                        <li className="animate-slide-up"><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="max-sm:mt-8">
                    <small className="font-semibold mb-6 sm:mb-10 block animate-character-left">Contact us on our social handles</small>
                    <ul className="text-lg font-bold sm:text-right">
                        <li className="animate-slide-up">Facebook</li>
                        <li className="animate-slide-up">X</li>
                        <li className="animate-slide-up">Instagram</li>
                        <li className="animate-slide-up">LinkedIn</li>
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
            <form className="flex flex-col sm:flex-row px-10 mt-10 gap-6 sm:gap-8 items-end">
                <div className="flex flex-col gap-3 w-full sm:max-w-[300px]">
                    <label htmlFor="email" className="text-sm font-bold animate-character">Subscribe to our newsletter</label>
                    <input type="email" id="email" name="email" className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none animate-slide-up" placeholder="e.g. kunlegaladima@gmail.com" required />
                </div>
                <Button className="max-sm:w-full min-w-[200px] animate-character">Subscribe</Button>
            </form>
            <div className="border-t border-black py-6 px-10 mt-10 flex justify-center items-center font-semibold">
                <small>© 2024 AI4LASSA Fever. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer