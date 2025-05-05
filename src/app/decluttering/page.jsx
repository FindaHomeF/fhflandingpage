import DCategories from '../components/decluttering/DCategories'
import Featured from '../components/decluttering/Featured'
import How from '../components/decluttering/How'
import Recent from '../components/decluttering/Recent'
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
                placeholder={'What items are you looking for?'}
                mainText={'FHF\'s Marketplace'}
                subText={'Buy and sell quality used items within the FUTA community'}
                btn1={'list an item'}
                btn2={'browse categories'}
            />
            <Recent/>
            <Featured/>
            <DCategories/>
            <How/>
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