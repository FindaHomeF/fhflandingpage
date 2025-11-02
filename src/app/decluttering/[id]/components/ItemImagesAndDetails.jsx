"use client"
import React from 'react'
import ItemImageGallery from './ItemImageGallery'
import ItemDetails from './ItemDetails'

const ItemImagesAndDetails = ({ itemId }) => {
    const imagePaths = [
        '/declutter1.png',
        '/declutter1.png',
        '/declutter1.png',
        '/declutter1.png',
    ];

    return (
        <div className="md:mt-5 w-90p-mx-auto">
            <div className='flex flex-col lg:flex-row gap-x-10 lg:mt-8 gap-y-8'>
                {/* Image Gallery Component */}
                <ItemImageGallery images={imagePaths} />

                {/* Item Details Component */}
                <ItemDetails itemId={itemId} />
            </div>
        </div>
    );
};

export default ItemImagesAndDetails;

