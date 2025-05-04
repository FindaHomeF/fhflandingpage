import React from 'react'
import Header from '../components/global/Header'
import HeroSection from '../components/service/HeroSection'
import Footer from '../components/global/Footer'
import Filter from '../components/global/Filter'

const page = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
    <main className="space-y-16 md:space-y-16">
      <div className="space-y-10">
        <Header/>
        <HeroSection/>
          <div className='w-[90%] mx-auto md:w-4/6'>
            <Filter  placeholder={'What apartment are you looking for?'}/>
          </div>  
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