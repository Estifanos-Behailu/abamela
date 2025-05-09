import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to find the right workers?</h2>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
          Let us help you connect with skilled, reliable Ethiopian talent that will help your business thrive.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Hire with Abamela Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
