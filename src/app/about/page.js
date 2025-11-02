import Hero from "../components/aboutPage/Hero"
import Mad from "../components/aboutPage/Mad"
import Mission from "../components/aboutPage/Mission"
import Revolution from "../components/aboutPage/Revolution"
import Team from "../components/aboutPage/Team"
import Values from "../components/aboutPage/Values"
import Footer from "../components/global/Footer"
import FooterCta from "../components/global/FooterCta"
import Header from "../components/global/Header"
import Testimonials from "../components/home/Testimonials"


const page = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
        <Header/>
        <main className="space-y-16 md:space-y-16 pt-3 md:pt-16">
            <Hero/>
            <Revolution/>
            <Mission/>
            <Values/>
            <Team/>
            <Mad/>
            <Testimonials/>
            <FooterCta/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default page

export const metadata = {
  title: 'About Us - Find-a-Home FUTA',
  description: 'Learn about Find-a-Home FUTA. Built by FUTA students, for FUTA students. Transforming student housing in Akure, one home at a time.',
}