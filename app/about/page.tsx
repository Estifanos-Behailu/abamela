import Image from "next/image"
import { ArrowRight, Award, Target, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Abamela</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connecting qualified Ethiopian workers with respected employers around the world since 2011.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-lg text-muted-foreground">
            Formed in 2011, Abamela Foreign Employment Agency PLC has rapidly become one of Ethiopia's leading providers
            of recruitment services. Our high profile attracts a stream of quality employment from various international
            companies.
          </p>
          <p className="text-lg text-muted-foreground">
            Abamela functions with only one aspiration: to supply a quality and innovative service to all our client's
            specific needs. We focus on your goals and your objectives, and we cast our services around them to prompt
            effective results for you.
          </p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image src="/staff4.png?height=400&width=600" alt="Abamela team" fill className="object-cover" />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-8 w-8 text-orange-500" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-muted-foreground">
            To be a top-performing manpower agency in Ethiopia by connecting qualified workers with respected employers
            around the world.
          </p>
          <p className="text-muted-foreground mt-4">
            ABAMELA AGENCY aims to create an honest, sincere and mutually contributive relationship with foreign
            employers in order to assure and sustain a high level of competency, professionalism, and satisfaction of
            both Ethiopian workers and Employers.
          </p>
        </div>
        <div className="bg-neutral-900 text-white p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-8 w-8 text-orange-500" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-neutral-300">
            To manage talent for sustainable growth and always use the best Human Resources practices, in order to build
            intimate relationships of enduring value.
          </p>
          <p className="text-neutral-300 mt-4">
            We endeavor to be considered a trusted and valuable company. We will continue to acquire relevant
            information and expand our knowledge and expertise to ensure this.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ABAMELA AGENCY revolves around three main principles that guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-neutral-200 hover:border-orange-300 transition-all hover:shadow-orange-100">
            <h3 className="text-xl font-bold mb-3 text-orange-600">Amiability</h3>
            <p className="text-muted-foreground">
              Enhances work relationships towards having or displaying a friendly and pleasant manner. Amiability
              creates an effective and educated workforce, leading to a sense of community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-neutral-200 hover:border-orange-300 transition-all hover:shadow-orange-100">
            <h3 className="text-xl font-bold mb-3 text-orange-600">Teamwork</h3>
            <p className="text-muted-foreground">
              "Alone we can do so little, together we can do so much". We consider this imperative to success. We work
              together as a team, while also working closely with clients and candidates.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-neutral-200 hover:border-orange-300 transition-all hover:shadow-orange-100">
            <h3 className="text-xl font-bold mb-3 text-orange-600">Customer Service</h3>
            <p className="text-muted-foreground">
              Abamela guarantees exceptional customer service. We hold client's requests at the core of our recruiting
              practice. Customer satisfaction is vital to everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Objectives</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to excellence in every aspect of our business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Generate Employment</h3>
              <p className="text-muted-foreground">
                Generate employment to enthusiastic Ethiopian workers in the international market.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Value Client Needs</h3>
              <p className="text-muted-foreground">Value client's needs with utmost professionalism.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Find Competent Candidates</h3>
              <p className="text-muted-foreground">
                Find honest, tidy, healthy and competent candidates as suitable for client's requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">International Relationships</h3>
              <p className="text-muted-foreground">
                Encourage international acquaintanceship, and take it to a new level of business and friendship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Work with Abamela?</h2>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
          Let us help you find the perfect Ethiopian talent for your business needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
