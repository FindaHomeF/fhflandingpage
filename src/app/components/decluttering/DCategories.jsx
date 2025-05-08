import { Button } from '@/components/ui/button'
import Declutter from '/public/declutter1.png'
import DeclutteredBox from '../global/DeclutteredBox'

const DCategories = () => {
  return (
    <div className="full">
        <div className="mx-auto w-5/6 space-y-7">
            <div className="space-y-7">
                <h3 className="section-head text-center">Categories</h3>

                <div className="overflow-x-auto">
                    <div className="flex justify-center items-center gap-x-3">
                        <Button className="cat-btn text-white !bg-secondary">Furniture</Button>
                        <Button className="cat-btn">Electronics</Button>
                        <Button className="cat-btn">Books & Study Materials</Button>
                        <Button className="cat-btn">Home Appliances</Button>
                        <Button className="cat-btn">Kitchen Items</Button>
                        <Button className="cat-btn">Room Decor</Button>
                        <Button className="cat-btn">Others</Button>
                    </div>
                </div>
            </div>
            
            <div className="overflow-x-auto">
                <div className="w-full flex flex-shrink-0 gap-y-5 md:grid md:grid-cols-4 gap-3 md:gap-x-5">
                    {[...Array(4)].map((_, index)=>(
                        <div key={index}>
                            <DeclutteredBox image={Declutter} border={true}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default DCategories