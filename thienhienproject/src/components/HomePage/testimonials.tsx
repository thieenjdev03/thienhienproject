"use client"
import { useState } from "react"
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
  {
    id: 3,
    name: "John Doe",
    avatar: "/people-placeholder.png",
    rating: 4,
    text: "Rất hài lòng với chất lượng sản phẩm, nhưng có một số điểm cần cải thiện."
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/people-placeholder.png",
    rating: 5,
    text: "Dịch vụ nhanh chóng, giao hàng đúng hẹn và sản phẩm chất lượng. Tôi sẽ giới thiệu cho bạn bè."
  },
  {
    id: 5,
    name: "Anna Lee",
    avatar: "/people-placeholder.png",
    rating: 5,
    text: "Dịch vụ tuyệt vời! Mọi thứ đều hoàn hảo, tôi rất hài lòng với sự phục vụ."
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const slides = [
    testimonials.slice(currentIndex, currentIndex + 3),
    testimonials.slice(currentIndex + 3, currentIndex + 6),
    testimonials.slice(currentIndex + 6, currentIndex + 9),
  ]

  return (
    <section className="bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Đánh Giá Của Khách Hàng
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hàng ngàn khách hàng đã tin tưởng và hài lòng với sản phẩm của chúng tôi. Dưới đây là một số đánh giá tiêu biểu.
        </p>
        
        {/* Testimonial Slides */}
        <div className="relative flex flex-column align-items-center justify-center">
          <div className="flex space-x-2 overflow-hidden feedback-section-sliders">
            {slides[0].map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-md flex-1 w-1/3">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600 truncate feedback-text">{testimonial.text}</p>
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
          {/* Navigation Buttons */}
          <div className="flex justify-between absolute w-full sliders-button">
            <button
              onClick={prevSlide}
              className="bg-gray-700 text-white p-2 rounded-full sliders-button-back">
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-700 text-white p-2 rounded-full sliders-button-next">
              &#8594;
            </button>
          </div>
        </div>
        {/* Indicator Dots */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? "bg-yellow-400" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
