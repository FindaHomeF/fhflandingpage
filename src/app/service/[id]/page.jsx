import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'
import FooterCta from '@/app/components/global/FooterCta'
import ServiceProviderProfile from './components/ServiceProviderProfile'
import LatestListings from '@/app/components/servicesPage/latest-listings'

const Page = async ({ params }) => {
  const { id } = await params;
  
  return (
    <div className="bg-white w-full overflow-x-hidden 
        scroll-smooth transition-all ease-linear duration-500">
        <main>
        <div className="space-y-10">
            <Header/>

            <div>
              <ServiceProviderProfile serviceId={id} />
              <div className='py-8 md:py-10'>
                  <LatestListings />
              </div>
              <FooterCta/>
            </div>
        </div>
        </main>
        <footer>
        <Footer/>
        </footer>
    </div>
  )
}

export default Page

// Generate metadata
export async function generateMetadata({ params }) {
  return {
    title: `Service Provider - Find-a-Home FUTA`,
    description: 'View service provider details and book services',
  }
}

