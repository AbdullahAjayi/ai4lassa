"use client"

import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { HiCursorClick } from "react-icons/hi";

import Section from "./Section"
import Button from "./Button"
import { useCharacterAnimation, useSlideUpAnimation } from "@/hooks/useAnimation"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const About = () => {
    useCharacterAnimation({ x: 30 })
    useSlideUpAnimation()

    return (
        <Section id="about" className="pt-20 relative">
            <h2 className="h2 relative">
                <span className="animate-character">About AI4Lassa</span>
                {/* rat image */}
                <div className="absolute top-0 -left-4 -translate-y-2/3">
                    <Image src='/assets/images/rat.png' alt="rat-image" width={134} height={134} />
                </div>
            </h2>
            {/* dot patterns bg */}
            <div className="absolute -z-10 inset-0 top-36 overflow-hidden">
                <Image src='/assets/images/dot-patterns.png' alt="dot-patterns" width={1832} height={838} />
            </div>
            {/* about detail */}
            <div>
                <p className="animate-slide-up">The Development of an AI solution User Application to Raise Early Alarm to Improve Urban Health awareness, preparedness and Quick Response to Lassa Fever Outbreaks Project (AI4Lassa) is a project funded by the Tertiary Education Trust Fund (TETFUND) under the National Research Fund (NRF) in 2024.</p>
                <p className="animate-slide-up mt-6"><strong>AI4Lassa</strong> is a pioneering initiative developed to address the persistent challenge of Lassa fever outbreaks in Nigeria through the power of artificial intelligence (AI). Our solution focuses on enhancing early detection capabilities, enabling rapid response, and fostering community health awareness. With a targeted approach, AI4Lassa seeks to revolutionize Nigeria’s healthcare infrastructure by empowering public health stakeholders and communities to respond more effectively to health crises. This project stands as a significant public health milestone and invites collaboration and support to ensure sustainable and successful implementation.</p>
                <Link href='/about'>
                    <Button className="mt-6 animate-character flex justify-center items-center gap-3">
                        <span> Learn more</span> <HiCursorClick />
                    </Button>
                </Link>
            </div>
            {/* ai4lassa features */}
            <h2 className="h2 mt-12 animate-character">Framework</h2>
            <div className="grid md:grid-cols-2 gap-y-28 md:gap-y-32 mt-16 md:mt-12 md:px-10 mb-10">
                <div className="col-start-1 relative">
                    <h3 className="h3 relative w-fit">
                        <span className="animate-character">Outbreak Forcasting</span>
                        <div className="absolute -top-16 -right-20">{/* lassa image */}
                            <Image src='/assets/images/lassaGreen.png' alt="lassa-image" width={153} height={153} className="opacity-60 -z-10 scale-[.6]" />
                        </div>
                    </h3>
                    <p className="animate-slide-up">Our advanced algorithms predict potential LASSA fever outbreaks based on real-time data, allowing communities to prepare</p>
                    {/* map vector image */}
                    <div className="absolute -bottom-16 max-sm:-bottom-12 left-[35%] -translate-x-1/2">
                        <Image className="scale-[.6]" src='/assets/images/map-vector-1.png' alt='map-vector-image' width={121} height={121} />
                    </div>
                </div>
                <div className="md:col-start-2 row-start-2 relative">
                    <h3 className="h3 relative w-fit">
                        <span className="animate-character">Case Reporting</span>
                        {/* arrow vector image */}
                        <div className="absolute -top-[7rem] -right-[10rem] sm:-right-[20rem] max-sm:rotate-45 max-md:rotate-[70deg] max-md:scale-[.7] md:-top-[8.4rem] md:-left-10">
                            <Image src='/assets/images/arrow-vector-1.png' alt="arrow-image" width={137} height={181} />
                        </div>
                        <div className="absolute -top-16 -right-20">{/* lassa image */}
                            <Image src='/assets/images/lassaGreen.png' alt="lassa-image" width={153} height={153} className="opacity-60 -z-10 scale-[.6]" />
                        </div>
                    </h3>
                    <p className="animate-slide-up">Suspect a case? Easily report it to health officials through our secure platform. Quick action can save lives</p>
                    {/* map vector image */}
                    <div className="absolute -bottom-16 max-sm:-bottom-10 left-0">
                        <Image className="scale-[.6]" src='/assets/images/map-vector-2a.png' alt='map-vector-image' width={107} height={114} />
                    </div>
                    <div className="absolute top-10 right-4">
                        <Image className="scale-[.6]" src='/assets/images/map-vector-2b.png' alt='map-vector-image' width={74} height={41} />
                    </div>
                </div>
                <div className="col-start-1 row-start-3 relative">
                    <h3 className="h3 relative w-fit">
                        <span className="animate-character">Real-time Alerts</span>
                        {/* arrow vector image */}
                        <div className="absolute max-md:rotate-[330deg] -top-24 md:-top-[9rem] md:-right-24">
                            <Image className="scale-[.8] md:scale-[1.2]" src='/assets/images/arrow-vector-2.png' alt="arrow-image" width={123.85} height={217.06} />
                        </div>
                        <div className="absolute -top-16 -right-20">
                            <Image src='/assets/images/lassaGreen.png' alt="lassa-image" width={153} height={153} className="opacity-60 -z-10 scale-[.6]" />
                        </div>
                    </h3>
                    <p className="animate-slide-up">Receive immediate alerts on outbreaks in your area to stay safe and informed</p>
                    {/* map vector image */}
                    <div className="absolute -bottom-16 -left-8">
                        <Image className="scale-[.6]" src='/assets/images/map-vector-3a.png' alt='map-vector-image' width={107} height={114} />
                    </div>
                    <div className="absolute top-10 right-10">
                        <Image className="scale-[.6]" src='/assets/images/map-vector-3b.png' alt='map-vector-image' width={74} height={41} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About