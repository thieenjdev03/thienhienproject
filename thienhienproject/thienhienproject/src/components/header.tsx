import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Thiện Hiền
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary">Trang Chủ</Link>
          <Link href="/products" className="text-gray-600 hover:text-primary">Sản Phẩm</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">Về Chúng Tôi</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">Liên Hệ</Link>
        </nav>
      </div>
    </header>
  )
}

