import Image from "next/image"
import Link from "next/link"
const categories = [
  {
    title: "Bản Lề Cửa",
    image: "/chong.jpeg",
    href: "/products/hinges"
  },
  {
    title: "Tay Pano",
    image: "/chong.jpeg",
    href: "/products/handles"
  },
  {
    title: "Chống Cửa",
    image: "/chong.jpeg",
    href: "/products/door-stops"
  },
  {
    title: "Tay Nắm Cửa",
    image: "/chong.jpeg",
    href: "/products/door-knobs"
  }
]

export function ProductCategories() {
  return (
    <section className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Danh Mục Sản Phẩm</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-square rounded-lg overflow-hidden bg-white shadow-md"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>
             
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

