import Footer from './Footer.tsx'
import './HeroSection.tsx'
import HeroSection from './HeroSection.tsx'
import ServicesSection from './ServiceSection.tsx'
import Testimonial from './Testimonial.tsx'
import './WhyChooseUs.tsx'
import WhyChooseUs from './WhyChooseUs.tsx'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <ServicesSection/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
