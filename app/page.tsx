'use client'

import { useEffect, useState } from "react"
import About from "@/components/About";
import Footer from "@/components/Footer";
import Forecast from "@/components/Forecast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Report from "@/components/Report";
import Resources from "@/components/Resources";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadDomContent = async () => {
      await Promise.all([document.addEventListener('DOMContentLoaded', () => { })])
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
      <Forecast />
      <Report />
      <Resources />
      <Footer />
    </>
  )
}
