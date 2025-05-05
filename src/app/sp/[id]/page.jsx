import Filter from '@/app/components/global/Filter'
import Footer from '@/app/components/global/Footer'
import FooterCta from '@/app/components/global/FooterCta'
import Header from '@/app/components/global/Header'
import React from 'react'
import ImagesAndDescriptionDisplay from '../components/images-and-desc'
import Details from '../components/details'

const Page = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden 
        scroll-smooth transition-all ease-linear duration-500">
        <main className="space-y-16 md:space-y-16">
        <div className="space-y-10">
            <Header/>
            <div className='w-[90%] mx-auto md:w-4/6'>
                <Filter placeholder={'What apartment are you looking for?'}/>
            </div>  

            <div>
            <ImagesAndDescriptionDisplay/>
            <Details/>
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