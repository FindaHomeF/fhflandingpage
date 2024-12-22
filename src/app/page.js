import Decluttered from "./components/Decluttered";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Listings from "./components/Listings";
import Testimonials from "./components/Testimonials";
import Unlock from "./components/Unlock";

export default function Home() {
  return (
    <div className="bg-white w-screen">
      <main className="space-y-14 md:space-y-16">
        <div className="space-y-10">
          <Header/>
          <HeroSection/>
        </div>
        <Features/>
        <Listings/>
        <Decluttered/>
        <Testimonials/>
        <Unlock/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
