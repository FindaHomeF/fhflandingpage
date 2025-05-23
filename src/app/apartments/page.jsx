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
              placeholder={'What apartment are you looking for?'}
              mainText={'Find Your Perfect Home'}
              subText={'View verified apartments and properties near FUTA'}
              btn1={'list an item'}
              btn2={'browse categories'}
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