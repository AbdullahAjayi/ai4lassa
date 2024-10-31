"use client"

import Image from "next/image"
import Section from "./Section"
import LinkBtn from "./LinkBtn"
import { useCharacterAnimation, useSlideUpAnimation } from "@/hooks/useAnimation"

const Forecast = () => {
    useCharacterAnimation({ stagger: .02 })
    useSlideUpAnimation()

    return (
        <Section id="forecast" className="relative pt-20 md:pt-40">
            <div
                style={{
                    backgroundImage: `url('/assets/images/mapbg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }}
                className="absolute inset-0 w-full h-full pointer-events-none -z-10">
            </div>
            <h2 className="h2 relative">
                <span className="animate-character">Current Forecast for LASSA Fever Outbreaks</span>
                {/* rat image */}
                <div className="absolute top-0 -left-4 -translate-y-2/3">
                    <Image src='/assets/images/rat.png' alt="rat-image" width={134} height={134} className="" />
                </div>
            </h2>
            <div className="flex justify-center">
                <Image src='/assets/images/forecast_map.png' alt='forecase map' width={1241} height={1241} className="md:w-1/2" />
            </div>
            <div className="flex flex-wrap-reverse gap-6 justify-between items-end">
                <LinkBtn link="#" className="">View Full Forecast</LinkBtn>
                <div className="text-sm font-bold"> {/* Lengend */}
                    <div className="flex gap-3 items-center animate-character">
                        <div className="rounded-full w-4 h-4 bg-red-500" />
                        <p className="">Affected Areas - 14 States</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="rounded-full w-4 h-4 bg-green-500" />
                        <p className="">Unaffected Areas - 22 States</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Forecast