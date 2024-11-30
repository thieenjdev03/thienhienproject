import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  return (
    <section className="bg-gray-900 text-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Liên hệ hợp tác</h2>
          <p className="text-gray-400 mb-8">
            Để lại thông tin để được tư vấn chi tiết về sản phẩm và dịch vụ của chúng tôi
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Nhập email của bạn"
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
            <Button type="submit">Gửi</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

