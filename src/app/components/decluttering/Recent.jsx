import Declutter from '/public/declutter1.png'
import DeclutteredBox from "../global/DeclutteredBox"

const Recent = () => {
  return (
    <div className="full">
        <div className="mx-auto w-5/6 space-y-7">
            <h3 className="section-head text-center">latest declutered Items</h3>
            
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

export default Recent