

const About = () => {
  return (
    <div className="w-full">
        <div className="w-[90%] md:w-5/6 mx-auto space-y-7">
            <div className="flex justify-between gap-x-20">
                <h3 className="text-3xl font-bold w-3/6">
                    Transforming Off-Campus Living for FUTA Students with Ease and Convenience
                </h3>

                <p className="text-base font-semibold w-3/6 text-gray">
                    Find-a-Home FUTA transforms the off-campus housing experience for FUTA students. Our all-in-one platform connects you with verified properties, trusted service providers, and a marketplace for affordable student essentials.
                </p>
            </div>

            <div>
                <div className="flex justify-between w-full items-stretch flex-shrink-0">
                    <div className="border-l-2 border-l-black space-y-1 px-5 w-2/6 pt-3">
                        <h3 className="text-4xl font-bold">10+</h3>
                        <h6 className="uppercase font-semibold text-base text-gray ">ITEMS SOLD</h6>
                    </div>
                    <div className="border-l-2 border-l-black space-y-1 px-5 w-2/6 pt-3">
                        <h3 className="text-4xl font-bold">30+</h3>
                        <h6 className="uppercase font-semibold text-base text-gray ">Trusted Agents, Landlords, and Service Providers</h6>
                    </div>
                    <div className="border-l-2  border-l-black space-y-1 px-5 w-2/6 pt-3">
                        <h3 className="text-4xl font-bold">200+</h3>
                        <h6 className="uppercase font-semibold text-base text-gray "> Students Provided with Accommodation Options</h6>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default About