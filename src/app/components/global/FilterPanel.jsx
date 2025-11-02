"use client"
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { getFilterConfig } from '@/lib/filterConfigs';

const FilterPanel = ({ filterType = 'apartments', onApplyFilters, currentFilters = {} }) => {
  const config = getFilterConfig(filterType);
  
  const [priceRange, setPriceRange] = useState(
    currentFilters.priceRange || config.priceRange?.default || [0, 100000]
  );
  const [selectedFilters, setSelectedFilters] = useState({
    rooms: currentFilters.rooms || 'Any',
    bathrooms: currentFilters.bathrooms || 'Any',
    propertyType: currentFilters.propertyType || [],
    furnishing: currentFilters.furnishing || [],
    timeFromGate: currentFilters.timeFromGate || 'Any',
    areas: currentFilters.areas || [],
    amenities: currentFilters.amenities || [],
    // Decluttering specific
    categories: currentFilters.categories || [],
    condition: currentFilters.condition || [],
    availability: currentFilters.availability || [],
    // Services specific
    rating: currentFilters.rating || 'Any',
    responseTime: currentFilters.responseTime || 'Any',
  });

  const toggleSelection = (key, value) => {
    setSelectedFilters(prev => {
      const current = prev[key];
      if (Array.isArray(current)) {
        return {
          ...prev,
          [key]: current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value]
        };
      }
      return { ...prev, [key]: value };
    });
  };

  const handleClearAll = () => {
    setPriceRange(config.priceRange?.default || [0, 100000]);
    setSelectedFilters({
      rooms: 'Any',
      bathrooms: 'Any',
      propertyType: [],
      furnishing: [],
      timeFromGate: 'Any',
      areas: [],
      amenities: [],
      categories: [],
      condition: [],
      availability: [],
      rating: 'Any',
      responseTime: 'Any',
    });
  };

  const handleApply = () => {
    onApplyFilters({
      priceRange,
      ...selectedFilters
    });
  };

  // Count active filters using useMemo
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) count += value.length;
      else if (!Array.isArray(value) && value !== 'Any' && value) count++;
    });
    return count;
  }, [selectedFilters]);

  return (
    <div className="space-y-8 p-4 max-lg:max-h-[70vh] overflow-y-auto">
      {/* Price Range - Common to all types */}
      {config.priceRange && (
        <div>
          <h3 className="font-bold mb-4">Price Range</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="border p-2 rounded w-full"
                placeholder="Min"
              />
              <span>→</span>
              <input 
                type="number" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="border p-2 rounded w-full"
                placeholder="Max"
              />
            </div>
            <p className="text-xs text-gray-500">
              ₦{priceRange[0].toLocaleString()} - ₦{priceRange[1].toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Apartments Specific Filters */}
      {filterType === 'apartments' && (
        <>
          {/* Rooms */}
          <div>
            <h4 className="font-bold mb-3">Rooms</h4>
            <div className="flex flex-wrap gap-2">
              {config.specifications.rooms.map((option) => (
                <Button
                  key={option}
                  variant={selectedFilters.rooms === option ? 'default' : 'outline'}
                  onClick={() => toggleSelection('rooms', option)}
                  className={`rounded-full ${
                    selectedFilters.rooms === option ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <h4 className="font-bold mb-3">Bathrooms</h4>
            <div className="flex flex-wrap gap-2">
              {config.specifications.bathrooms.map((option) => (
                <Button
                  key={option}
                  variant={selectedFilters.bathrooms === option ? 'default' : 'outline'}
                  onClick={() => toggleSelection('bathrooms', option)}
                  className={`rounded-full ${
                    selectedFilters.bathrooms === option ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <h3 className="font-bold mb-3">Property Type</h3>
            <div className="flex flex-wrap gap-2">
              {config.propertyTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedFilters.propertyType.includes(type) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('propertyType', type)}
                  className={`rounded-full ${
                    selectedFilters.propertyType.includes(type) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Furnishing */}
          <div>
            <h3 className="font-bold mb-3">Furnishing</h3>
            <div className="flex flex-wrap gap-2">
              {config.furnishing.map((option) => (
                <Button
                  key={option}
                  variant={selectedFilters.furnishing.includes(option) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('furnishing', option)}
                  className={`rounded-full ${
                    selectedFilters.furnishing.includes(option) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Time From Gate */}
          <div>
            <h4 className="font-bold mb-3">Time From Gate</h4>
            <div className="flex flex-wrap gap-2">
              {config.timeFromGate.map((option) => (
                <Button
                  key={option}
                  variant={selectedFilters.timeFromGate === option ? 'default' : 'outline'}
                  onClick={() => toggleSelection('timeFromGate', option)}
                  className={`rounded-full ${
                    selectedFilters.timeFromGate === option ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold mb-3">Areas</h3>
            <div className="flex flex-wrap gap-2">
              {config.areas.map((area) => (
                <Button
                  key={area}
                  variant={selectedFilters.areas.includes(area) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('areas', area)}
                  className={`rounded-full ${
                    selectedFilters.areas.includes(area) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-bold mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {config.amenities.map((amenity) => (
                <Button
                  key={amenity}
                  variant={selectedFilters.amenities.includes(amenity) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('amenities', amenity)}
                  className={`rounded-full ${
                    selectedFilters.amenities.includes(amenity) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {amenity}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Decluttering Specific Filters */}
      {filterType === 'decluttering' && (
        <>
          {/* Categories */}
          <div>
            <h3 className="font-bold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {config.categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilters.categories.includes(category) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('categories', category)}
                  className={`rounded-full ${
                    selectedFilters.categories.includes(category) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Condition */}
          <div>
            <h3 className="font-bold mb-3">Condition</h3>
            <div className="flex flex-wrap gap-2">
              {config.condition.map((cond) => (
                <Button
                  key={cond}
                  variant={selectedFilters.condition.includes(cond) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('condition', cond)}
                  className={`rounded-full ${
                    selectedFilters.condition.includes(cond) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {cond}
                </Button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="font-bold mb-3">Availability</h3>
            <div className="flex flex-wrap gap-2">
              {config.availability.map((status) => (
                <Button
                  key={status}
                  variant={selectedFilters.availability.includes(status) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('availability', status)}
                  className={`rounded-full ${
                    selectedFilters.availability.includes(status) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Services Specific Filters */}
      {filterType === 'services' && (
        <>
          {/* Categories */}
          <div>
            <h3 className="font-bold mb-3">Service Categories</h3>
            <div className="flex flex-wrap gap-2">
              {config.categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilters.categories.includes(category) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('categories', category)}
                  className={`rounded-full ${
                    selectedFilters.categories.includes(category) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h4 className="font-bold mb-3">Minimum Rating</h4>
            <div className="flex flex-wrap gap-2">
              {config.rating.map((option) => (
                <Button
                  key={option}
                  variant={selectedFilters.rating === option ? 'default' : 'outline'}
                  onClick={() => toggleSelection('rating', option)}
                  className={`rounded-full ${
                    selectedFilters.rating === option ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div>
            <h4 className="font-bold mb-3">Response Time</h4>
            <div className="flex flex-wrap gap-2">
              {config.responseTime.map((option) => (
                <Button
                  key={option}
                  variant={selectedFilters.responseTime === option ? 'default' : 'outline'}
                  onClick={() => toggleSelection('responseTime', option)}
                  className={`rounded-full ${
                    selectedFilters.responseTime === option ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold mb-3">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {config.areas.map((area) => (
                <Button
                  key={area}
                  variant={selectedFilters.areas.includes(area) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('areas', area)}
                  className={`rounded-full ${
                    selectedFilters.areas.includes(area) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="font-bold mb-3">Availability</h3>
            <div className="flex flex-wrap gap-2">
              {config.availability.map((status) => (
                <Button
                  key={status}
                  variant={selectedFilters.availability.includes(status) ? 'default' : 'outline'}
                  onClick={() => toggleSelection('availability', status)}
                  className={`rounded-full ${
                    selectedFilters.availability.includes(status) ? 'bg-secondary hover:bg-secondary' : ''
                  }`}
                  size="sm"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 sticky bottom-0 bg-white pb-4">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleClearAll}
        >
          CLEAR ALL
        </Button>
        <Button 
          className="w-full bg-secondary hover:bg-secondary/90" 
          onClick={handleApply}
        >
          APPLY FILTERS {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;


