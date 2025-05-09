"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [counts, setCounts] = useState({
    workers: 0,
    countries: 0,
    years: 0,
    retention: 0,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const interval = 20
      const steps = duration / interval

      const workersIncrement = 15000 / steps
      const countriesIncrement = 5 / steps
      const yearsIncrement = 15 / steps
      const retentionIncrement = 100 / steps

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++

        setCounts({
          workers: Math.min(Math.round(workersIncrement * currentStep), 15000),
          countries: Math.min(Math.round(countriesIncrement * currentStep), 5),
          years: Math.min(Math.round(yearsIncrement * currentStep), 15),
          retention: Math.min(Math.round(retentionIncrement * currentStep), 100),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [inView])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-orange-500">{counts.workers.toLocaleString()}+</p>
            <p className="text-neutral-600 font-medium">Workers Deployed</p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-orange-500">{counts.countries}+</p>
            <p className="text-neutral-600 font-medium">Countries Served</p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-orange-500">{counts.years}+</p>
            <p className="text-neutral-600 font-medium">Years of Excellence</p>
          </div>

          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-orange-500">{counts.retention}%</p>
            <p className="text-neutral-600 font-medium">Client Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
