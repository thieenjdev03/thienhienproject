import Image from "next/image"

const projects = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "Project 1"
  },
  // Add more projects...
]

export function ProjectGallery() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-4">
        Công trình tự có sở chúng tôi
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Explore Our Gallery of Amazing Projects
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

