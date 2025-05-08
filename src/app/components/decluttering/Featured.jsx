import DeclutteredBox from "../global/DeclutteredBox"
import Declutter from '../../../../public/declutter1.png'

const Featured = () => {
  return (
    <div className="full bg-primary py-16">
        <div className="mx-auto w-5/6 space-y-7">
            <h3 className="section-head text-center text-white">Featured Deals</h3>
            <div className="overflow-x-auto">
                <div className="w-full flex flex-shrink-0 gap-y-5 md:grid md:grid-cols-4 gap-3 md:gap-x-5">
                    {[...Array(4)].map((_, index)=>(
                        <div key={index}>
                            <DeclutteredBox image={Declutter}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Featured