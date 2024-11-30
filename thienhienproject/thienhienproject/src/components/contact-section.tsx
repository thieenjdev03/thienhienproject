import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export function ContactSection() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Liên hệ hợp tác</h2>
          <p className="text-gray-400 mb-8">
            Để lại thông tin để được tư vấn chi tiết
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border-white/20"
            />
            <Button>Gửi</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

