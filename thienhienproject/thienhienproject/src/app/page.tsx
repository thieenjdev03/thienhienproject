import { HeroSection } from "../components/hero-section"
import { ProductCategories } from "../components/product-categories"
import { FeaturedProducts } from "../components/featured-products"
import { FeaturesSection } from "../components/features-section"
import { ProjectGallery } from "../components/project-gallery"
import { Testimonials } from "../components/testimonials"
import { ContactSection } from "../components/contact-section"
import { Layout } from "../components/layout"
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <FeaturesSection />
      <ProjectGallery />
      <Testimonials />
      <ContactSection />
    </Layout>
  )
}

