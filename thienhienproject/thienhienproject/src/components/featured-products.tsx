import Image from "next/image"
import { Button } from "../components/ui/button"

const products = [
  {
    id: 1,
    name: "Tay Pano",
    price: "1,200,000₫",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Bản Lề Cửa",
    price: "800,000₫",
    image: "/placeholder.svg"
  },
  // Add more products...
]

export function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Sản Phẩm Nổi Bật</h2>
        <Button variant="outline">Xem tất cả</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-primary">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

