import Image from "next/image"
import Section from "./Section"

const About = () => {
    return (
        <Section className="pt-20">
            <h2 className="h2 relative">
                <span>How Does Our System Help?</span>
                <div className="absolute top-0 -left-4 -translate-y-2/3">
                    <Image src='/assets/images/rat.png' alt="rat-image" width={134} height={134} className="" />
                </div>
            </h2>
            <div className="grid md:grid-cols-2 gap-y-20 md:gap-y-32 mt-16 md:mt-24 md:px-10">
                <div className="col-start-1">
                    <h3 className="h3 relative w-fit">
                        <span>Outbreak Forcasting</span>
                        <div className="absolute -top-16 -right-20">
                            <Image src='/assets/images/lassaGreen.png' alt="lassa-image" width={153} height={153} className="opacity-60 -z-10 scale-[.6]" />
                        </div>
                    </h3>
                    <p className="">Our advanced algorithms predict potential LASSA fever outbreaks based on real-time data, allowing communities to prepare</p>
                </div>
                <div className="md:col-start-2 row-start-2">
                    <h3 className="h3 relative w-fit">
                        <span>Case Reporting</span>
                        <div className="absolute -top-16 -right-20">
                            <Image src='/assets/images/lassaGreen.png' alt="lassa-image" width={153} height={153} className="opacity-60 -z-10 scale-[.6]" />
                        </div>
                    </h3>
                    <p className="">Suspect a case? Easily report it to health officials through our secure platform. Quick action can save lives</p>
                </div>
                <div className="col-start-1 row-start-3">
                    <h3 className="h3 relative w-fit">
                        <span>Real-time Alerts</span>
                        <div className="absolute -top-16 -right-20">
                            <Image src='/assets/images/lassaGreen.png' alt="lassa-image" width={153} height={153} className="opacity-60 -z-10 scale-[.6]" />
                        </div>
                    </h3>
                    <p className="">Receive immediate alerts on outbreaks in your area to stay safe and informed</p>
                </div>
            </div>
        </Section>
    )
}

export default About