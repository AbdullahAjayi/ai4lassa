import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitType from "split-type"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface CharacterAnimationConfig {
  selector?: string
  start?: string
  end?: string
  duration?: number
  stagger?: number
  x?: number
  y?: number
}

interface SlideUpAnimationConfig {
  selector?: string
  start?: string
  end?: string
  duration?: number
  y?: number
}

export const useCharacterAnimation = ({
  selector = ".animate-character",
  start = "top 90%",
  end = "top 5%",
  duration = 1,
  stagger = 0.05,
  x = 30,
  y = 0,
}: CharacterAnimationConfig = {}) => {
  useGSAP(() => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      const splitText = new SplitType(element as HTMLElement, { types: "words,chars" })

      gsap.from(splitText.chars, {
        opacity: 0,
        x,
        y,
        duration,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          toggleActions: "play none none reset",
          //   markers: true
        },
      })
    })
  })
}

export const useSlideUpAnimation = ({
  selector = ".animate-slide-up",
  start = "top 90%",
  end = "top 5%",
  duration = 1,
  y = 30,
}: SlideUpAnimationConfig = {}) => {
  useGSAP(() => {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element) => {
      // Set initial state
      gsap.set(element, {
        opacity: 0,
        y: y,
      })

      // Create the animation
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          toggleActions: "play none none reverse",
          // markers: true,
        },
      })
    })
  })
}
