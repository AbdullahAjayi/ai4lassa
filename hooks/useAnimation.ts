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

interface ParagraphAnimationConfig {
  selector?: string
  start?: string
  end?: string
  duration?: number
  y?: number
  x?: number
}

export const useCharacterAnimation = ({
  selector = ".animate-heading",
  start = "top 90%",
  end = "top 5%",
  duration = 1,
  stagger = 0.05,
  x = 0,
  y = 0,
}: CharacterAnimationConfig = {}) => {
  useGSAP(() => {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element) => {
      const splitText = new SplitType(element as HTMLElement, { types: "chars" })

      gsap.from(splitText.chars, {
        opacity: 0,
        x,
        y,
        duration,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          //   markers: true,
          trigger: element,
          start,
          end,
          toggleActions: "play none none reverse",
        },
      })
    })
  })
}

export const useParagraphAnimation = ({
  selector = ".animate-paragraph",
  start = "top 90%",
  end = "top 5%",
  duration = 1,
  x = 0,
  y = 30,
}: ParagraphAnimationConfig = {}) => {
  useGSAP(() => {
    const paragraphs = document.querySelectorAll(selector)

    paragraphs.forEach((paragraph) => {
      gsap.from(paragraph, {
        opacity: 0,
        x,
        y,
        duration,
        scrollTrigger: {
          trigger: paragraph,
          start,
          end,
          toggleActions: "play none none reverse",
          // markers: true, // Remove in production
        },
      })
    })
  })
}
