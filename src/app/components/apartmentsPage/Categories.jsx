"use client"
import { useState } from "react";
import ListingBox from "../global/ListingBox"
import { Button } from "@/components/ui/button";
import { SeeAll } from "../global/Buttons/ButtonGS";

const List1 = '/listing1.png';
const List2 = '/listing2.png';
const List3 = '/listing3.png';
const List4 = '/listing4.png';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("Single Rooms");

  const categories = [
    "Single Rooms",
    "Self-Contain",
    "Flat / Apartments",
    "Shared Apartments",
    "Shop Spaces",
    "Shortlets"
  ];

  return (
    <div className="full">
        <div className="mx-auto w-[90%] md:w-5/6 space-y-7" id="categories">
            <div className="space-y-7">
                <h3 className="section-head text-center">Categories</h3>

                <div className="overflow-x-auto">
                    <div className="flex justify-center items-center gap-x-3">
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
            
            <div className="overflow-x-hidden">
                <div className="w-full flex flex-nowrap md:grid-cols-4 gap-3 md:gap-x-5">
                    {[List1, List2, List3, List4].map((list, index)=>(
                        <div key={index}>
                            <ListingBox image={list} propertyId={`${index + 30}`} itemIndex={index + 800} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto w-full flex justify-center items-center mt-5 md:mt-12">
                <SeeAll 
                    cta="/apartments/all"
                    filterType="category"
                    filterValue={activeCategory}
                />
            </div>
        </div>

    </div>
  )
}

export default Categories