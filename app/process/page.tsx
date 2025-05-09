import { Button } from "@/components/ui/button"
import { ArrowRight, ClipboardCheck, FileSearch, Plane, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProcessPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Process</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A streamlined, professional approach to connecting you with the right Ethiopian talent.
        </p>
      </div>

      {/* Process Steps */}
      <div className="relative mb-20">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>

        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-11 mb-16 relative">
          <div className="md:text-right space-y-4">
            <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
              Step 1
            </div>
            <h2 className="text-2xl font-bold">Understanding Your Needs</h2>
            <p className="text-muted-foreground">
              We consult with you to understand your company, job roles, culture, and timelines. This detailed
              assessment ensures we can match you with the perfect candidates.
            </p>
          </div>

          <div className="relative">
            
            <div className="pl-16 md:pl-8">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                <Image
                  src="/office.png?height=250&width=400"
                  alt="Understanding client needs"
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 relative">
          <div className="md:order-2 space-y-4">
            <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
              Step 2
            </div>
            <h2 className="text-2xl font-bold">Candidate Sourcing</h2>
            <p className="text-muted-foreground">
              We recruit from our extensive network of pre-screened, trained workers. Our team has access to a large
              pool of qualified candidates across various industries and skill levels.
            </p>
          </div>

          <div className="relative md:order-1">

            <div className="pl-16 md:pl-0 md:pr-8">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                <Image
                  src="/workers.png?height=250&width=400"
                  alt="Candidate sourcing"
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 relative">
          <div className="md:text-right space-y-4">
            <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
              Step 3
            </div>
            <h2 className="text-2xl font-bold">Screening & Matching</h2>
            <p className="text-muted-foreground">
              Every candidate is tested for skills, health, character, and readiness for international work. We conduct
              thorough background checks and verify all qualifications to ensure only the best candidates are presented
              to you.
            </p>
          </div>

          <div className="relative">
            
            <div className="pl-16 md:pl-8">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                <Image
                  src="/officeworkers2.png?height=250&width=400"
                  alt="Screening candidates"
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="md:order-2 space-y-4">
            <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
              Step 4
            </div>
            <h2 className="text-2xl font-bold">Deployment & Support</h2>
            <p className="text-muted-foreground">
              We assist with documentation, logistics, and post-deployment follow-up to ensure satisfaction. Our support
              doesn't end after placement - we maintain regular contact to ensure both employer and employee are
              satisfied.
            </p>
          </div>

          <div className="relative md:order-1">
            
            <div className="pl-16 md:pl-0 md:pr-8">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
                <Image
                  src="/workers3.png?height=250&width=400"
                  alt="Deployment and support"
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="bg-neutral-900 text-white p-12 rounded-2xl mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Result</h2>
          <p className="text-xl text-neutral-300 mb-8">
            You receive trustworthy, qualified candidates ready to contribute from day one.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Increased Productivity</h3>
              <p className="text-neutral-400">Well trained workers who are committed to helping your business succeed.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Cost Efficiency</h3>
              <p className="text-neutral-400">Competitive rates without compromising on quality or reliability.</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Peace of Mind</h3>
              <p className="text-neutral-400">All legal and logistical aspects handled by our experienced team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selection Procedures */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Selection Procedures</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We have an extensive recruitment program designed to find the very best candidates for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Here at Abamela Foreign Employment Agency PLC, selected candidates meet the required criteria of our
              clients. We evaluate their skill set to match the job description, and their ability and willingness
              towards the new job.
            </p>
            <p className="text-lg text-muted-foreground">
              We focus on adding valuable labor to the client's companies. We are confident in our ability to match the
              right people to the right positions based on careful analysis of their skills, experience, and
              personality.
            </p>
            <p className="text-lg text-muted-foreground">
              Upon receiving an instruction to recruit new employees, we will communicate with the appropriate members
              of your team to obtain a job description and discuss selection criteria. We believe our quality service is
              enhanced through client interaction.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/training.png?height=400&width=600" alt="Selection process" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start the Process?</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Let us help you find the perfect Ethiopian talent for your business needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-neutral-100">
            Start the Process <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}