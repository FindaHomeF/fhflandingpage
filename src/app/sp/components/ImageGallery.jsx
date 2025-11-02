"use client"
import Image from 'next/image'
import { useState } from 'react'
import AgentProfile from './AgentProfile';

const ImageGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className='flex-itc-juc w-full lg:w-3/6 !items-start'>
            <div className='w-full mx-auto'>
                <div className='w-full'>
                    {/* Main Image */}
                    <div className='w-full lg:basis-[55%] h-[18rem] lg:h-[30rem] rounded-2xl'>
                        <Image
                            src={images[activeImage]}
                            width={600}
                            height={600}
                            alt='property-main-image'
                            className="object-cover w-full h-[18rem] lg:h-[30rem] group-hover:scale-105 
                            transition-all ease-linear duration-300 rounded-2xl"
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className='max-lg:pl-2 h-[10rem] no-scrollbar flex gap-x-3 mt-5'>
                        {images.map((path, index) => (
                            <div 
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`
                                    w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem]
                                    flex-shrink-0 cursor-pointer transition-all duration-200 ${
                                    activeImage === index 
                                        ? 'ring-4 ring-secondary' 
                                        : 'hover:ring-2 hover:ring-secondary'
                                } rounded-2xl`}
                            >
                                <Image
                                    src={path}
                                    width={300}
                                    height={200}
                                    alt={`property-thumbnail-${index + 1}`}
                                    className="w-full h-full
                                    object-cover group-hover:scale-105 transition-all ease-linear duration-300 rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <AgentProfile />
            </div>
        </div>
    );
};

export default ImageGallery;

