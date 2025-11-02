import Header from '@/app/components/global/Header'
import Footer from '@/app/components/global/Footer'
import FooterCta from '@/app/components/global/FooterCta'
import ItemImagesAndDetails from './components/ItemImagesAndDetails'
import DeclutteredItems from '@/app/components/home/Decluttered'

const Page = ({ params }) => {
  return (
    <div className="bg-white w-full overflow-x-hidden 
        scroll-smooth transition-all ease-linear duration-500">
        <main>
        <div className="space-y-10">
            <Header/>

            <div>
              <ItemImagesAndDetails itemId={params.id} />
              <div className='py-8 md:py-10'>
                  <DeclutteredItems />
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
    title: `Item Details - Find-a-Home FUTA`,
    description: 'View details for this decluttered item',
  }
}

