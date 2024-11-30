import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Vững chắc từng chi tiết, hoàn thiện từng công trình
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Chúng tôi mang đến giải pháp hoàn thiện cho các công trình xây dựng với chất lượng tốt nhất, đảm bảo độ bền và tính thẩm mỹ cao cho từng sản phẩm.
        </p>
        <Button size="lg">Xem thêm</Button>
      </div>
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src="/nhadep.jpg"
          alt="Modern house"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}

