import { Shield, Clock, Award } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-12 text-yellow-600 text-start">
          Hơn 20 năm đồng hành cùng chất lượng và uy tín
        </h2>
            <p>
            Thiện Hiền không chỉ là nơi cung cấp các sản phẩm sắt bản lề, pano tôn cửa, mà còn là đối tác đáng tin cậy của mọi công trình. Hơn 20 năm qua, chúng tôi đã khẳng định vị thế bằng sự cam kết về chất lượng, sự tận tâm trong từng sản phẩm và dịch vụ chuyên nghiệp. Chúng tôi luôn nỗ lực để mang lại những giá trị vượt trội cho khách hàng.
            </p>
          </div>
          <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-start">
            <Shield className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Sản Phẩm Chất Lượng</h3>
              <p className="text-gray-400">Đã được tin dùng bởi nhiều dự án và khách hàng tin cậy</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Clock className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Gía Cạnh Nhanh Chóng</h3>
              <p className="text-gray-400">Đội ngũ tư vấn luôn sẵn sàng phục vụ quý khách</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Award className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Uy Tín Hàng Đầu</h3>
              <p className="text-gray-400">Chất lượng được khẳng định, cam kết hài lòng khách hàng</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

