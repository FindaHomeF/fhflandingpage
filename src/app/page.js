import Decluttered from "./components/Decluttered";
import Features from "./components/Features";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Listings from "./components/Listings";

export default function Home() {
  return (
    <div className="bg-white w-screen">
      <main className="space-y-16">
        <div className="space-y-10">
          <Header/>
          <HeroSection/>
        </div>
        <Features/>
        <Listings/>
        <Decluttered/>
      </main>
    </div>
  );
}
