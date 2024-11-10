"use client"

import Image from "next/image"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'

import Section from "./Section"
import Button from "./Button"
import LinkBtn from "./LinkBtn"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

const Hero = () => {
    const heroSection = useRef<HTMLElement | null>(null)

    useGSAP(() => {
        const target = new SplitType('h1')

        const tl = gsap.timeline()

        gsap.set(
            heroSection.current, {
            opacity: 1
        })

        tl.from(
            target.words, {
            y: 50, opacity: 0, stagger: .1, delay: .4
        }
        ).from(
            'p', {
            opacity: 0, y: 50,
        }, ">-=0.35"
        ).from(
            'button', {
            x: -20, opacity: 0, duration: .5,
        }
        ).from(
            '.link-btn', {
            y: 30, opacity: 0, duration: 0.5,
        }, ">-=0.3"
        ).from(
            '.bg-image', {
            opacity: 0, duration: 1.6
        }, "0"
        ).from(
            '.lassa-virus', {
            scale: .5, opacity: 0, duration: 1.6
        }, "1"
        )

    }, { scope: heroSection, dependencies: [] })

    return (
        <Section ref={heroSection} id='#' className=" opacity-0 pt-24 relative min-h-screen flex items-center overflow-hidden">
            {/* Hero Bg Image (for desktop) */}
            <div className="bg-image absolute hidden md:block inset-0 w-full h-full pointer-events-none">
                <Image priority width={1512} height={1065} className="w-full h-full object-cover object-right-bottom opacity-100" src='/assets/images/medical.png' alt="Hero image" />
            </div>
            <div className="relative max-h-fit grid md:grid-cols-2 gap-y-4"> {/* Grid with two sections */}
                {/* Text Section */}
                <div>
                    <div className="h-full my-auto flex flex-col gap-28">
                        <div>
                            <h1 className="h1">Together, We Can Stop <span className="text-green-800">LASSA Fever!</span></h1>
                            <p className="body-1 md:max-w-[80%] max-md:font-medium">Stay informed about LASA fever outbreaks, take action by reporting cases, and help prevent the spread of the disease</p>
                        </div>
                        <div className="md:-translate-y-8">
                            <a href="#forecast">
                                <Button>Check Outbreak Forecast</Button>
                            </a>
                            <div className="link-btn">
                                <LinkBtn link="report">Report a Case</LinkBtn>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image or 3D image section */}
                <div className="max-md:absolute inset-0 max-md:opacity-50 -z-10">
                    <Image width={736} height={736} className="lassa-virus w-auto mx-auto md:scale-[1.2] md:translate-y-16 lg:translate-y-8" src='/assets/images/lassaGreen.png' alt="virus image" />
                </div>
            </div>
            {/* Gradient to blend image with next section */}
            <div className="absolute w-full h-[100px] left-0 bottom-0 pointer-events-none bg-gradient-to-b from-appBg/0 to-appBg"></div>
        </Section>
    )
}

export default Hero