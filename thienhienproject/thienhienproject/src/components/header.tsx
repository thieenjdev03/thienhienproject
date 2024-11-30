import Link from "next/link"

export function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Thiết Hiền
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-primary">Trang Chủ</Link>
          <Link href="/products" className="hover:text-primary">Sản Phẩm</Link>
          <Link href="/about" className="hover:text-primary">Về Chúng Tôi</Link>
          <Link href="/contact" className="hover:text-primary">Liên Hệ</Link>
        </div>
      </nav>
    </header>
  )
}

