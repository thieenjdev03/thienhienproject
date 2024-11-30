import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
const products = [
  {
    id: 1,
    name: "Tay Pano",
    price: "1,200,000₫",
    image: "/chong.jpeg"
  },
  {
    id: 2,
    name: "Bản Lề Cửa",
    price: "800,000₫",
    image: "/chong.jpeg"
  },
  {
    id: 3,
    name: "Chống Cửa",
    price: "500,000₫",
    image: "/chong.jpeg"
  },
  {
    id: 4,
    name: "Tay Nắm Cửa",
    price: "950,000₫",
    image: "/chong.jpeg"
  }
]

export function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Sản Phẩm Nổi Bật</h2>
        <Button className="white-text" variant="outline">Xem tất cả</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-primary font-bold">{product.price}</p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Liên Hệ
              </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

