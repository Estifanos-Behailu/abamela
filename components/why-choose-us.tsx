"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Workflow } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: "Rigorous Screening & Training",
      description:
        "Our comprehensive vetting process ensures only the most qualified and reliable candidates are presented to you.",
    },
    {
      icon: <Workflow className="h-8 w-8 text-orange-500" />,
      title: "Flexible Recruitment",
      description:
        "Tailored solutions for your industry, whether you need hospitality staff, construction workers, or domestic help.",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Ethical & Compliant Hiring",
      description: "We handle all legal requirements and ensure fair treatment of workers throughout the process.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Multilingual Support",
      description:
        "Our team provides ongoing assistance to both employers and employees to ensure successful placements.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Abamela?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to connecting you with the best Ethiopian talent while making the process seamless and
            reliable.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-black border-[1.5px] border-orange-500 hover:border-orange-300 transition-all hover:shadow-orange-100 ${
                inView ? `animate-fade-in [animation-delay:${index * 150}ms]` : "opacity-0"
              }`}
            >
              <CardContent className="p-6 text-center text-white">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
