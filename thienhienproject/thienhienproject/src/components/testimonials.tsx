import Image from "next/image"
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Michael Roberts",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Sản phẩm chất lượng, đúng như mong đợi. Tôi rất hài lòng với dịch vụ của Thiết Hiền"
  },
  // Add more testimonials...
]

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-4">
        Đánh Giá Của Khách Hàng
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Hàng giá từ khách hàng của chúng tôi sau khi sử dụng
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-4">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

