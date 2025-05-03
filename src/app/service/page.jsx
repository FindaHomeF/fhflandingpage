import React from 'react'
import Header from '../components/global/Header'
import HeroSection from '../components/service/HeroSection'
import Footer from '../components/global/Footer'

const page = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
    <main className="space-y-16 md:space-y-16">
      <div className="space-y-10">
        <Header/>
        <HeroSection/>
      </div>
    </main>
    {/* } */}
    <footer>
      <Footer/>
    </footer>
  </div>
  )
}

export default page