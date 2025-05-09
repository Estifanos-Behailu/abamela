"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobRoles: "",
    country:"",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        jobRoles: "",
        country:"",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send email, please try again');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to find the perfect Ethiopian talent for your business? Get in touch with our team today.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <Card className="border-neutral-200">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : null}

            {submitError ? (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
                <p className="font-medium">Error sending message</p>
                <p>{submitError}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobRoles">Job Role(s) Needed</Label>
                  <Input
                    id="jobRoles"
                    name="jobRoles"
                    value={formData.jobRoles}
                    onChange={handleChange}
                    placeholder="e.g., Housemaids, Drivers, etc."
                  />
                </div>
              </div>

              <div className="space-y-2">
  <Label htmlFor="country">Country *</Label>
  <select
    id="country"
    name="country"
    value={formData.country}
    onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
    required
    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-white"
  >
    <option value="">Select a country</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Qatar">Qatar</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Jordan">Jordan</option>
    <option value="Oman">Oman</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Other">Other</option>
  </select>
</div>


              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
              <h2 className="font-bold text-orange-600">Warning:</h2>
              <p className="text-orange-600">Please ensure all information entered in the form is accurate. Any mistakes may prevent us from being able to contact you.</p>
                
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Your Request
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Have questions or need more information? Reach out to us using any of the methods below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+251 989 92 99 85</p>
                  <p className="text-muted-foreground">+251 911 21 59 12</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <p className="text-muted-foreground">+251 910 91 14 40</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">abamelaagency2011@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium">Office Address</h3>
                  <p className="text-muted-foreground">
                    Lamberet, in front of TVET Ethio China College, 3rd Floor, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
            <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
            <p className="text-muted-foreground">
              We understand that your staffing needs are time-sensitive. Our team is committed to responding to all
              inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
