import Image from "next/image"
import Section from "./Section"

const Partners = () => {
    return (
        <Section className="pt-10">
            <h2 className="h1 text-center">Partners on the project</h2>
            <p className="text-center text-gray-600">We are proud to collaborate with a diverse range of partners who share our vision and values</p>
            <ul className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-12 mx-auto my-20">
                <li className="cursor-pointer">
                    <div className="w-32 h-28 flex items-center">
                        <Image className="w-32 h-auto  mx-auto rounded-xl" width={200} height={1} alt="partner1" src='/assets/images/partners/tetfund.jpg' />
                    </div>
                    <p className="text-center max-w-40 text-gray-500 text-xs mt-4">TERTIARY EDUCATION TRUST FUND (TETFund) </p>
                </li>
                <li className="cursor-pointer">
                    <Image className="w-32 h-32  mx-auto rounded-xl" width={200} height={1} alt="partner1" src='/assets/images/partners/Picture1.png' />
                    <p className="text-center max-w-40 text-gray-500 text-xs mt-4">Federal University of Technology, Minna, Niger State. </p>
                </li>
                <li className="cursor-pointer">
                    <Image className="w-32 h-32  mx-auto rounded-xl" width={200} height={1} alt="partner2" src='/assets/images/partners/Picture2.png' />
                    <p className="text-center max-w-40 text-gray-500 text-xs mt-4">Veritas University, Abuja </p>
                </li>
                <li className="cursor-pointer">
                    <Image className="w-32 h-32  mx-auto rounded-xl" width={200} height={1} alt="partner3" src='/assets/images/partners/Picture3.png' />
                    <p className="text-center max-w-40 text-gray-500 text-xs mt-4">Olabisi Onabanjo University Ago-Iwoye, Ogun State</p>
                </li>
                <li className="cursor-pointer">
                    <Image className="w-32 h-32  mx-auto rounded-xl" width={200} height={1} alt="partner4" src='/assets/images/partners/Picture4.png' />
                    <p className="text-center max-w-40 text-gray-500 text-xs mt-4">University of Jos, Plateau State </p>
                </li>
            </ul>
        </Section>
    )
}

export default Partners