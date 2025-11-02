import { Suspense } from 'react';
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import FooterCta from "@/app/components/global/FooterCta";
import HeroSection from "@/app/components/service/HeroSection";
import ApartmentsFilterWrapper from "@/app/components/global/ApartmentsFilterWrapper";
import { mockApartments } from "@/lib/mockData";

// Server Component - Data fetched on server
export default function AllApartmentsPage() {
  // This runs on the server
  const mockListings = mockApartments;

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <div className="mt-10 md:mt-0">
        <HeroSection showScrollDownButton={false} />
      </div>

      {/* Filter and Grid Wrapper - Client Component with Suspense */}
      <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
        <ApartmentsFilterWrapper items={mockListings} />
      </Suspense>

      <FooterCta />
      <Footer />
    </div>
  );
}

// Optional: Add metadata
export const metadata = {
  title: "All Apartments - Find-a-Home FUTA",
  description: "Browse all available apartments near FUTA with filters for price, location, and amenities.",
};
