import Image from "next/image"

const projects = [
  { id: 1, image: "/pr1.jpg", title: "Project 1" },
  { id: 2, image: "/pr2.jpg", title: "Project 2" },
  { id: 3, image: "/pr3.jpg", title: "Project 3" },
  { id: 4, image: "/pr4.jpg", title: "Project 4" },
  { id: 5, image: "/pr5.jpg", title: "Project 5" },
  { id: 6, image: "/pr6.jpg", title: "Project 6" },
]

export function ProjectGallery() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4">
        Công trình tiêu biểu của chúng tôi
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Khám phá bộ sưu tập các dự án ấn tượng mà chúng tôi đã thực hiện, thể hiện sự chuyên nghiệp và chất lượng trong từng chi tiết.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            
          </div>
        ))}
      </div>
    </section>
  )
}
