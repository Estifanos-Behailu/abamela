"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // Categories for the gallery - Events category removed
  const categories = [
    { id: "all", label: "All Photos" },
    { id: "workers", label: "Workers" },
    { id: "offices", label: "Office Staff" },
    { id: "training", label: "Training" },
  ]

  // Sample gallery images (using placeholders) - Events images recategorized
  const galleryImages = [
    {
      id: 1,
      src: "/cleaner.png?height=600&width=800",
      alt: "Ethiopian Cleaner",
      category: ["all", "workers"],
      caption: "Ethiopian Cleaner",
    },
    {
      id: 2,
      src: "/staff.png?height=800&width=600",
      alt: "Office Staff",
      category: ["all", "offices"],
      caption: "Office Staff",
    },
    {
      id: 3,
      src: "/Construction5.jpg?height=600&width=800",
      alt: "Construction workers",
      category: ["all", "workers"],
      caption: "Construction workers",
    },
    {
      id: 4,
      src: "training.png?height=800&width=800",
      alt: "Recruitment session",
      category: ["all", "training"],
      caption: "Recruitment assessment",
    },
    {
      id: 5,
      src: "/babySitter.png?height=600&width=800",
      alt: "Baby Sitting",
      category: ["all", "workers"],
      caption: "Baby Sitters",
    },
    {
      id: 6,
      src: "/Staff1.png?height=800&width=600",
      alt: "Office reception area",
      category: ["all", "offices"],
      caption: "Our welcoming reception area",
    },
    {
      id: 7,
      src: "/class.png?height=600&width=800",
      alt: "Training session for housekeeping staff",
      category: ["all", "training"],
      caption: "Professional training for housekeeping",
    },
    {
      id: 8,
      src: "/construction4.jpg?height=800&width=800",
      alt: "Construction Worker",
      category: ["all", "workers",],
      caption: "Construction Worker",
    },
    {
      id: 9,
      src: "/cleaners2.png?height=600&width=800",
      alt: "Ethiopian Cleaners",
      category: ["all", "workers"],
      caption: "Ethiopian Cleaners",
    },
    {
      id: 10,
      src: "/office.png?height=600&width=800",
      alt: "CEO Office",
      category: ["all", "offices"],
      caption: "CEO Office",
    },
    {
      id: 11,
      src: "/wash.png?height=600&width=800",
      alt: "Ethiopian Cleaners",
      category: ["all", "workers"],
      caption: "Ethiopian Cleaners",
    },
    {
      id: 12,
      src: "/workers6.png?height=600&width=800",
      alt: "Professional training for culinary",
      category: ["all", "training"],
      caption: "Professional training for culinary",
    },
    {
      id: 13,
      src: "/Constraction.png?height=600&width=800",
      alt: "Construction Workers",
      category: ["all", "workers"],
      caption: "Construction Workers",
    }, 
    {
      id: 14,
      src: "/bedroom.png?height=600&width=800",
      alt: "Ethiopian Housekeeper",
      category: ["all", "workers"],
      caption: "Ethiopian Housekeeper",
    },
    {
      id: 15,
      src: "/officeworkers2.png?height=600&width=800",
      alt: "Screening",
      category: ["all", "offices", "training"],
      caption: "Screening",
    },
    {
      id: 16,
      src: "/officeworkers.png?height=600&width=800",
      alt: "Reception Area",
      category: ["all", "offices",],
      caption: "Reception Area",
    },
    {
      id: 17,
      src: "/Cleaners.png?height=600&width=800",
      alt: "Ethioian Cleaner",
      category: ["all", "workers"],
      caption: "Ethiopian Cleaner",
    },
    {
      id: 18,
      src: "/construction3.png?height=600&width=800",
      alt: "Construction Workers",
      category: ["all", "workers"],
      caption: "Construction Workers",
    },
    {
      id: 19,
      src: "/signing.png?height=600&width=800",
      alt: "Office",
      category: ["all", "offices"],
      caption: "Office",
    },
    {
      id: 20,
      src: "/staff2.png?height=600&width=800",
      alt: "Office Staff",
      category: ["all", "offices"],
      caption: "Office Staff",
    },
    {
      id: 21,
      src: "/workers.png?height=600&width=800",
      alt: "Training Students",
      category: ["all", "workers", "training"],
      caption: "Training Students",
    },
    {
      id: 22,
      src: "/staff4.png?height=600&width=800",
      alt: "Office Staff",
      category: ["all", "offices"],
      caption: "Office Staff",
    },
    
    {
      id: 23,
      src: "/workers3.png?height=600&width=800",
      alt: "Training Students",
      category: ["all", "workers", "training"],
      caption: "Training Students",
    },
    {
      id: 24,
      src: "/construction2.png?height=600&width=800",
      alt: "Construction Worker",
      category: ["all", "workers"],
      caption: "Construction Worker",
    },

  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!lightboxOpen) return

    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeLightbox()
    }
  }

  return (
    <div className="container mx-auto py-12" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our collection of images showcasing our workers, facilities, and activities.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-flow-col auto-cols-max gap-2 text-orange-500">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-4">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-orange-500">
              {galleryImages
                .filter((image) => image.category.includes(category.id))
                .map((image, index) => (
                  <div
                    key={image.id}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                    onClick={() => openLightbox(galleryImages.findIndex((img) => img.id === image.id))}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-medium transition-all duration-300 group-hover:text-base">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-auto p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative aspect-video">
              <Image
                src={galleryImages[currentImage].src || "/placeholder.svg"}
                alt={galleryImages[currentImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <Button variant="ghost" size="icon" className="text-white" onClick={goToPrevious}>
                <ChevronLeft className="h-8 w-8" />
              </Button>
            </div>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <Button variant="ghost" size="icon" className="text-white" onClick={goToNext}>
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            <div className="text-center text-white mt-4">
              <p className="text-lg font-medium">{galleryImages[currentImage].caption}</p>
              <p className="text-sm text-gray-300">
                {currentImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
