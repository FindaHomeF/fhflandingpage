// 'use client'
// import { useState } from "react";
import Decluttered from "../components/home/Decluttered";
import Features from "../components/home/Features";
import About from "../components/home/About";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import HeroSection from "../components/home/HeroSection";
import Listings from "../components/home/Listings";
import Testimonials from "../components/home/Testimonials";
import Unlock from "../components/home/Unlock";



const HomePage = () => {
  // const [loading, setLoading] = useState(true);

  return (
      <div className="bg-white w-full overflow-x-hidden scroll-smooth transition-all ease-linear duration-500">
        {/* {loading?
          <Loader container={container} item={item} Logo={Logo}/>
          : */}
        <main className="space-y-14 md:space-y-16">
          <div className="space-y-10">
            <Header/>
            <HeroSection/>
          </div>
          {/* <Features/> */}
          <About/>
          <Listings/>
          <Decluttered/>
          <Testimonials/>
          <Unlock/>
        </main>
        {/* } */}
        <footer>
          <Footer/>
        </footer>
      </div>
  )
}

export default HomePage