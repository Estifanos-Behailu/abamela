import Hero from "@/components/hero"
import Stats from "@/components/stats"
import WhyChooseUs from "@/components/why-choose-us"
import CtaBanner from "@/components/cta-banner"
import CountriesServed from "@/components/countries-served"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <WhyChooseUs />
      <CountriesServed />
      <CtaBanner />
    </div>
  )
}
