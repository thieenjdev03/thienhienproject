import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">LOGO</h3>
            <p className="text-sm text-gray-600">
              Quality that lasts in the plating and Specialty Industry
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Category</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Living Room</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Kitchen</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Bedroom</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Popular Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary">Single Sofa Black</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Wooden Chair</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary">Luxury White Bed</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
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
          </div>
        </div>
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-600">
          © 2024 All rights reserved.
        </div>
      </div>
    </footer>
  )
}

