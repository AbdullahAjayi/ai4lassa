'use client'

import { useEffect, useState } from "react"
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyTacklingLassa from "@/components/WhyTacklingLassa";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadDomContent = async () => {
      await new Promise<void>(resolve => {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
          resolve();
        } else {
          document.addEventListener('DOMContentLoaded', () => resolve());
        }
      });
      setIsLoading(false)
    }

    loadDomContent()
  }, [])

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhyTacklingLassa />
      <Footer />
    </>
  )
}
