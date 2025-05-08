import ListingBox from "../global/ListingBox"
import List1 from '/public/listing1.png';
import List2 from '/public/listing2.png';
import List3 from '/public/listing3.png';
import List4 from '/public/listing4.png';

const Available = () => {
  return (
    <div className="full">
        <div className="mx-auto w-[90%] md:w-5/6 space-y-7">
            <h3 className="section-head text-center">latest Listings</h3>
            <div className="overflow-x-auto">
                <div className="w-full flex flex-nowrap md:grid-cols-4 gap-3 md:gap-x-5">
                    {[List1, List2, List3, List4].map((list, index)=>(
                        <div key={index}>
                            <ListingBox image={list}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Available