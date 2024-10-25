import Image from "next/image"

import Section from "./Section"

const Resources = () => {
    return (
        <Section id="resources" className="pt-20 bg-black/10 min-h-screen flex items-center">
            <div>
                <h2 className="h2 relative">
                    <span>Why Curbing LASSA Fever Is Critical</span>
                    {/* rat image */}
                    <div className="absolute top-0 -left-4 -translate-y-2/3">
                        <Image src='/assets/images/rat.png' alt="rat-image" width={134} height={134} className="" />
                    </div>
                </h2>
                <p className="mt-10 md:mt-20 mb-10  max-w-[1000px] md:text-balance">Lassa fever, a viral hemorrhagic illness spread by rodents, has devastating effects on affected communities in Nigeria and West Africa. Outbreaks often lead to loss of lives, overwhelming healthcare systems, and economic disruption, particularly in rural areas where healthcare access is limited. Early detection and prompt reporting of suspected cases are critical to containing the spread of the disease. By quickly identifying infected individuals, healthcare workers can initiate timely treatment, and communities can take preventive measures to protect others. With the right tools, such as real-time reporting platforms and educational infographics on hygiene practices, we can mitigate the impact of Lassa fever and save lives.</p>

            </div>
        </Section>
    )
}

export default Resources