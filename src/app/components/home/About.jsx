

const About = () => {
  return (
    <div className="w-full">
        <div className="w-[90%] md:w-5/6 mx-auto space-y-7 " id="transform">
            <div className="md:flex justify-between gap-x-20 space-y-2">
                <h3 className="section-head  md:w-3/6">
                    Transforming Off-Campus Living for FUTA Students with Ease and Convenience
                </h3>

                <p className="section-para md:text-base md:w-3/6 text-gray">
                    Find-a-Home FUTA transforms the off-campus housing experience for FUTA students. Our all-in-one platform connects you with verified properties, trusted service providers, and a marketplace for affordable student essentials.
                </p>
            </div>

            <div>
                <div className="flex justify-between max-w-full gap-x-3 items-stretch flex-shrink-0">
                    <div className="md:border-l-2 border-l border-l-black space-y-1 px-3 md:px-5 hidden md:block md:w-2/6 pt-3">
                        <h3 className="text-2xl md:text-4xl font-bold">10+</h3>
                        <h6 className="uppercase font-semibold text-xs md:text-base text-gray ">ITEMS SOLD</h6>
                    </div>
                    <div className="md:border-l-2 border-l border-l-black space-y-1 px-3 md:px-5 w-3/6 md:w-2/6 pt-3">
                        <h3 className="text-2xl md:text-4xl font-bold">30+</h3>
                        <h6 className="uppercase font-semibold text-xs md:text-base text-gray ">Trusted Agents, Landlords, and Service Providers</h6>
                    </div>
                    <div className="md:border-l-2 border-l  border-l-black space-y-1 px-3 md:px-5 w-3/6 md:w-2/6 pt-3">
                        <h3 className="text-2xl md:text-4xl font-bold">200+</h3>
                        <h6 className="uppercase font-semibold text-xs md:text-base text-gray "> Students Provided with Accommodation Options</h6>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default About