'use client';

import React from 'react';

const ThumbnailGallery = ({ 
  images = [], 
  selectedIndex = 0, 
  onSelect, 
  className = '',
  thumbnailSize = 'w-20 h-20' 
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  // Skip the first image if it's the main/featured image
  const thumbnails = images.length > 1 ? images.slice(1) : images;

  return (
    <div className={`flex gap-3 ${className}`}>
      {thumbnails.map((image, index) => {
        const thumbnailIndex = index + (images.length > thumbnails.length ? 1 : 0);
        const isSelected = selectedIndex === thumbnailIndex;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect && onSelect(thumbnailIndex)}
            className={`${thumbnailSize} rounded-lg overflow-hidden border-2 transition-all ${
              isSelected
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        );
      })}
    </div>
  );
};

export default ThumbnailGallery;
