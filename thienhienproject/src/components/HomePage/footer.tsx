import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'
export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Thiện Hiền</h3>
            <p className="text-sm text-gray-600">
              Vững chắc từng chi tiết, hoàn thiện từng công trình
            </p>
            <p className="text-sm text-gray-600 font-bold">
              Đ/c: 738 Quốc lộ 1a - Phường Bình Hưng Hòa B - Quận Bình Tân - TP.HCM
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Phân Loại</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Pano Cửa Sắt</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Bản Lể</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Chông Sắt</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Mâm Cầu Thang</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Liên Hệ</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <Link href="#" className="text-gray-600 hover:text-primary">
              <span className="">SĐT / Zalo: 0947111191</span>
            </Link>
          </div>
          <div style={{
            textDecoration: 'none',
            overflow: 'hidden',
            maxWidth: '100%',
            width: '500px',
            height: '200px'
          }}>
            <div id="display-google-map" style={{
              height: '100%',
              width: '100%',
              maxWidth: '100%'
            }}>
              <iframe
                style={{
                  height: '100%',
                  width: '100%',
                  border: '0'
                }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=738+Quốc+lộ+1A,+Bình+Hưng+Hòa+B,+Bình+Tân,+Hồ+Chí+Minh,+Việt+Nam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
              ></iframe>
            </div>
            <a className="embedded-map-code" href="https://www.bootstrapskins.com/themes" id="enable-maps-data">
              premium bootstrap themes
            </a>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-600">
          © 2024 Thiện Development. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

