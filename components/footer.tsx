import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 bg-white rounded-full p-1">
                <Image
                  src="/icon.png"
                  alt="Abamela Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">Abamela</span>
            </div>
            <p className="text-neutral-400">
              Connecting qualified Ethiopian workers with respected employers around the world since 2011.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://wa.me/251910911440" className="text-white hover:text-orange-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/hire" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Job Categories
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-400">+251 989 92 99 85</p>
                  <p className="text-neutral-400">+251 911 21 59 12</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500 flex-shrink-0 mt-0.5"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <p className="text-neutral-400">+251 910 91 14 40</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-400 break-all">abamelaagency2011@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-400">
                  Lamberet, in front of TVET Ethio China College, 3rd Floor, Addis Ababa, Ethiopia
                </p>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-neutral-400">Monday - Friday:</span>
                <span className="text-neutral-400">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-400">Saturday:</span>
                <span className="text-neutral-400">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-400">Sunday:</span>
                <span className="text-neutral-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; 2011 Abamela Foreign Employment Service PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
