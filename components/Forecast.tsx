import Image from "next/image"
import Section from "./Section"
import LinkBtn from "./LinkBtn"

const Forecast = () => {
    return (
        <Section className="relative pt-20 md:pt-40">
            <div
                style={{
                    backgroundImage: `url('/assets/images/mapbg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }}
                className="absolute inset-0 w-full h-full pointer-events-none -z-10">
            </div>
            <h2 className="h2">Current Forecast for LASSA Fever Outbreaks</h2>
            <div className="flex justify-center">
                <Image src='/assets/images/forecast_map.png' alt='forecase map' width={1241} height={1241} className="md:w-1/2" />
            </div>
            <div className="flex flex-wrap-reverse gap-6 justify-between items-end">
                <LinkBtn link="#">View Full Forecast</LinkBtn>
                <div className="text-sm font-bold"> {/* Lengend */}
                    <div className="flex gap-3 items-center">
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