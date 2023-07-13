import Main from "@/components/Main"
import About from "@/components/About"
import Services from "@/components/Services"
import Footer from "@/components/Footer"
import AppointmentForm from "@/components/AppointmentForm"
import Testimonials from "@/components/Testimonials"
import Features from "@/components/Features"

export default function Home() {
  return (
    <>
      <Main />
      <AppointmentForm />
      <Services />
      <Testimonials />
      <Features />
      <About />
      <Footer />

    </>

  )
}
