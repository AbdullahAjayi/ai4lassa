"use client"

import Image from "next/image"

import Section from "./Section"
import { useCharacterAnimation, useSlideUpAnimation } from "@/hooks/useAnimation"

const Report = () => {
    useCharacterAnimation({ stagger: 0.02 })
    useSlideUpAnimation({ y: 50 })

    return (
        <Section id="report" className="pt-20">
            <h2 className="h2 relative">
                <span className="animate-character">Have You Witnessed or Experienced Symptoms?
                </span>
                {/* rat image */}
                <div className="absolute top-0 -left-4 -translate-y-2/3">
                    <Image src='/assets/images/rat.png' alt="rat-image" width={134} height={134} className="" />
                </div>
            </h2>
            <p className="mt-8 max-w-[550px] animate-slide-up">If you or someone you know is showing symptoms of LASSA fever, don't wait. Report it now to local health authorities</p>
            <form action="" className="max-w-[450px] mt-10">
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-sm font-bold animate-character">Name:</label>
                    <input type="text" id="name" name="name" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none animate-slide-up" placeholder="e.g. Kunle Galadima Eze" required />
                    <label htmlFor="location" className="text-sm font-bold animate-character">Location:</label>
                    <select id="location" name="location" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none animate-slide-up" required>
                        <option value="">Select a state</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                    </select>
                    <label htmlFor="symptoms" className="text-sm font-bold animate-character">Symptoms:</label>
                    <input id="symptoms" type="text" name="symptoms" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none  animate-slide-up" placeholder="e.g headache, fever" required></input>
                    <label htmlFor="number" className="text-sm font-bold animate-character">Phone Number:</label>
                    <input type="tel" id="number" name="number" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none  animate-slide-up" placeholder="+234 812 038 81 57" required />
                    <button type="submit" className="bg-btn font-semibold hover:bg-green-900 transition-colors duration-300 text-white px-4 py-3 rounded-lg md:w-fit mt-6 animate-character">Submit Report</button>
                </div>
            </form>
        </Section>
    )
}

export default Report