import { Shield, Clock, Award } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12">
          Hơn 20 năm đồng hành cùng chất lượng và uy tín
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <Shield className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Sản Phẩm Chất Lượng</h3>
              <p className="text-gray-400">Đã được tin dùng bởi nhiều dự án và khách hàng tin cậy</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Gía Cạnh Nhanh Chóng</h3>
              <p className="text-gray-400">Đội ngũ tư vấn luôn sẵn sàng phục vụ quý khách</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Award className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Uy Tín Hàng Đầu</h3>
              <p className="text-gray-400">Chất lượng được khẳng định, cam kết hài lòng khách hàng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

