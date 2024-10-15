import Image from "next/image"

import Section from "./Section"
import Button from "./Button"
import LinkBtn from "./LinkBtn"

const Hero = () => {
    return (
        <Section className="pt-24 relative min-h-screen flex items-center overflow-hidden">
            {/* Hero Bg Image (for desktop) */}
            <div className="absolute hidden md:block inset-0 w-full h-full pointer-events-none">
                <Image priority width={1512} height={1065} className="w-full h-full object-cover object-right-bottom opacity-100" src='/assets/images/medical.png' alt="Hero image" />
            </div>
            <div className="relative max-h-fit grid md:grid-cols-2 gap-y-4"> {/* Grid with two sections */}
                {/* Text Section */}
                <div>
                    <div className="h-full my-auto flex flex-col gap-28">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight md:leading-snug mb-6">Together, We Can Stop <span className="text-green-800">LASSA Fever!</span></h1>
                            <p className="md:text-xl md:max-w-[80%]">Stay informed about LASA fever outbreaks, take action by reporting cases, and help prevent the spread of the disease</p>
                        </div>
                        <div>
                            <Button>Check Outbreak Forecast</Button>
                            <LinkBtn link="#" >Report a Case</LinkBtn>
                        </div>
                    </div>
                </div>

                {/* Image or 3D image section */}
                <div className="max-md:absolute inset-0 max-md:opacity-30">
                    <Image width={736} height={736} className="w-auto mx-auto" src='/assets/images/virus.png' alt="virus image" />
                </div>
            </div>
        </Section>
    )
}

export default Hero