"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import DeclutteredBox from '../global/DeclutteredBox'
import { SeeAll } from '../global/Buttons/ButtonGS'
import { CardScroll, CardWrapper } from "@/components/ui/card-grid";

const Declutter = '/declutter1.png'

const DCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Furniture");

  const categories = [
    "Furniture",
    "Electronics",
    "Books & Study Materials",
    "Home Appliances",
    "Kitchen Items",
    "Room Decor",
    "Others"
  ];

  return (
    <div className="full">
        <div className="mx-auto w-[90%] max-w-full md:w-5/6 space-y-7" id="categories">
            <div className="space-y-7">
                <h3 className="section-head text-center">Categories</h3>

                <div className="overflow-x-auto">
                    <div className="flex flex-nowrap justify-center items-center gap-x-3">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`cat-btn ${
                                    activeCategory === category
                                        ? "text-white !bg-secondary"
                                        : ""
                                }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            
            <CardScroll>
                {[...Array(4)].map((_, index)=>(
                    <CardWrapper key={index} minWidth="min-w-[280px] md:min-w-0">
                        <DeclutteredBox image={Declutter} border={true} itemIndex={index + 400} />
                    </CardWrapper>
                ))}
            </CardScroll>
            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll 
                    cta="/decluttering/all"
                    filterType="category"
                    filterValue={activeCategory}
                />
            </div>
        </div>

    </div>
  )
}

export default DCategories