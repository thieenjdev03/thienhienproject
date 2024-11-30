import Image from "next/image"
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Michael Roberts",
    avatar: "/people-placeholder.png",
    rating: 5,
    text: "Sản phẩm chất lượng, đúng như mong đợi. Tôi rất hài lòng với dịch vụ của Thiết Hiền"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "/people-placeholder.png",
    rating: 5,
    text: "Đội ngũ nhân viên chuyên nghiệp, tư vấn tận tình. Sẽ tiếp tục ủng hộ Thiết Hiền trong tương lai"
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Đánh Giá Của Khách Hàng
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hàng ngàn khách hàng đã tin tưởng và hài lòng với sản phẩm của chúng tôi. Dưới đây là một số đánh giá tiêu biểu.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-gray-600">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
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
      </div>
    </section>
  )
}

