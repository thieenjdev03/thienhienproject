import { HeroSection } from "../components/HomePage/hero-section"
import { ProductCategories } from "../components/HomePage/product-categories"
import { FeaturedProducts } from "../components/HomePage/featured-products"
import { FeaturesSection } from "../components/HomePage/features-section"
import { ProjectGallery } from "../components/HomePage/project-gallery"
import { Testimonials } from "../components/HomePage/testimonials"
import { ContactSection } from "../components/HomePage/contact-section"
import { Layout } from "../components/HomePage/layout"
import '../styles/global.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

