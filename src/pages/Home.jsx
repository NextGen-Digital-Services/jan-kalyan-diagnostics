import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import About from "../components/About/About"
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs"
import Appointment from "../components/Appointment/Appointment"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp/FloatingWhatsapp"
import ScrollTop from "../components/ScrollTop/ScrollTop"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Appointment />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <ScrollTop/>
    </>
  )
}

export default Home