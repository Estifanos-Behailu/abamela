import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HirePage() {
  // Consolidate the job categories by merging similar ones and add hover effect
  const jobCategories = [
    "Housemaids & Home Support",
    "Cooks & Kitchen Staff",
    "Cleaners & Janitors",
    "Security Guards & Watchmen",
    "Construction & Mason Workers",
    "Tailors & Garment Workers",
    "Gardeners & Landscapers",
    "Babysitters & Childcare",
    "Shop & Retail Assistants",
    "Drivers & Transport Staff",
    "Waiters & Hospitality Staff",
    "Agriculture & Farm Workers",
    "Airport & Logistics Staff",
    "Barbers & Hairdressers",
    "Food Service & Catering",
    "Laundry & Housekeeping",
    "Office Assistants & Clerks",
    "Industrial & Factory Workers",
    "Mechanics & Technical Helpers",
    "Hotel & Resort Staff",
  ]

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Hire Ethiopian Talent</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with skilled, reliable Ethiopian workers ready to contribute to your business success.
        </p>
      </div>

      {/* Why Ethiopian Workers */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Ethiopian Workers?</h2>
          <p className="text-lg text-muted-foreground">
            Ethiopian workers are globally recognized for their exceptional qualities and work ethic. When you hire
            through Abamela, you're getting access to some of the most dedicated and reliable talent available.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Dedication, discipline, and reliability</h3>
                <p className="text-muted-foreground">
                  Ethiopian workers are known for their strong work ethic and commitment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Flexibility and adaptability</h3>
                <p className="text-muted-foreground">
                  Quick to adapt to new environments and diverse cultural settings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Fast learning ability</h3>
                <p className="text-muted-foreground">Eager to learn new skills and quick to master job requirements.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Competitive wage expectations</h3>
                <p className="text-muted-foreground">Excellent value while maintaining high quality of work.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image src="/passport.png?height=500&width=600" alt="Ethiopian workers" fill className="object-cover" />
        </div>
      </div>

      {/* Job Categories */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Job Categories Available</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide workers across a wide range of industries and positions to meet your specific needs.
          </p>
        </div>

        {/* Update the Card component to include orange hover effect */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobCategories.map((job, index) => (
            <Card
              key={index}
              className="border-neutral-200 hover:border-orange-300 transition-all hover:shadow-orange-100 group"
            >
              <CardContent className="p-6">
                <p className="font-medium group-hover:text-orange-500 transition-colors">{job}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Ethiopian Potential */}
      <div className="bg-neutral-900 text-white p-12 rounded-2xl mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Potential of Manpower in Ethiopia</h2>
          <p className="text-neutral-300 mb-4">
            Ethiopia has gained a reputation at a global scale for producing workers that can do any range of work with
            dedication, honesty, efficiency, and effectiveness.
          </p>
          <p className="text-neutral-300 mb-4">
            Ethiopian workers are quick learners, who are focused and yield good results at their tasks. In addition to
            these, Ethiopian manpower or skilled workers are adaptable and flexible, which is one of their biggest
            advantages for working overseas, as working and living conditions vary abroad.
          </p>
          <p className="text-neutral-300">
            We continue to recognize that it is the talent, strength, and resilience of our people that is the
            foundation on which we continue to grow our business.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Find the Right Workers?</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Let us help you find the perfect Ethiopian talent for your business needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-neutral-100">
            Request Workers Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
