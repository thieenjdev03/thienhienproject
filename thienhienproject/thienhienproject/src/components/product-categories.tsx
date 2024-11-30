import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Bản Lề Cửa",
    image: "/placeholder.svg",
    href: "/products/hinges"
  },
  {
    title: "Tay Pano",
    image: "/placeholder.svg",
    href: "/products/handles"
  },
  {
    title: "Chống Cửa",
    image: "/placeholder.svg",
    href: "/products/door-stops"
  }
]

export function ProductCategories() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

