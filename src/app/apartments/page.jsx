import React from 'react'
import Available from '../components/apartmentsPage/Available'
import Categories from '../components/apartmentsPage/Categories'
import Premium from '../components/apartmentsPage/Premium'
import Footer from '../components/global/Footer'
import FooterCta from '../components/global/FooterCta'
import Header from '../components/global/Header'
import Hero from '../components/global/Hero'
import Testimonials from '../components/home/Testimonials'

const page = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
        <Header/>
        <main className="space-y-16 md:space-y-20 pt-3 md:pt-16">
          <Hero 
              placeholder={'Search by location, price, or amenities...'}
              mainText={'Discover Your Ideal Student Apartment'}
              subText={'Browse verified properties near FUTA campus. Quality homes, transparent pricing, trusted landlords.'}
              btn1={'List Your Property'}
              btn2={'Browse Categories'}
              cta2='#categories'
          />
          <Available/>
          <Premium/>
          <Categories/>
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
  title: 'Student Apartments - Find-a-Home FUTA',
  description: 'Discover verified student apartments near FUTA campus. Quality homes, transparent pricing, trusted landlords. Find your perfect accommodation today.',
}