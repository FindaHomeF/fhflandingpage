import Filter from '@/app/components/global/Filter'
import Footer from '@/app/components/global/Footer'
import FooterCta from '@/app/components/global/FooterCta'
import Header from '@/app/components/global/Header'
import React from 'react'
import ImagesAndDescriptionDisplay from '../components/images-and-desc'
import Details from '../components/details'
import Listings from '@/app/components/home/Listings'

const Page = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden 
        scroll-smooth transition-all ease-linear duration-500">
        <main>
        <div className="space-y-10">
            <Header/>

            <div>
              <ImagesAndDescriptionDisplay/>
              <Details/>
              <div className='py-8 md:py-10'>
                  <Listings
                  title='Similar Listings'
                  />
              </div>
              <FooterCta/>
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

export default Page