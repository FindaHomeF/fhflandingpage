"use client"
import React from 'react'
import ImageGallery from './ImageGallery'
import PropertyDetails from './PropertyDetails'
import AgentProfile from './AgentProfile'

const ImagesAndDescriptionDisplay = () => {
    const imagePaths = [
        '/declutter1.png',
        '/hero-image.jpeg',
        '/declutter1.png',
        '/hero-image.jpeg',
    ];

  return (
        <div className="md:mt-5 w-90p-mx-auto space-y-8">
            {/* Image Gallery and Property Details */}
            <div className='flex flex-col lg:flex-row gap-x-10 lg:mt-8 gap-y-8'>
                <ImageGallery images={imagePaths} />
                <PropertyDetails />
                </div>

            </div>
    );
};

export default ImagesAndDescriptionDisplay;
