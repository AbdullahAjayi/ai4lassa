"use client"

import { useCharacterAnimation, useSlideUpAnimation } from "@/hooks/useAnimation"

const Footer = () => {
    useCharacterAnimation({ stagger: 0.02 })
    useCharacterAnimation({ selector: '.animate-character-left', x: -30, stagger: 0.02 })
    useSlideUpAnimation()

    return (
        <footer id="contact" className="max-w-[1500px] mx-auto">
            <div className="border-t border-black py-6 px-10 flex justify-center items-center font-semibold">
                <small>© 2024 AI4LASSA Fever. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer