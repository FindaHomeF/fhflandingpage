"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useMediaQuery } from '@/app/hooks/use-media-query';

const Filter = ({ placeholder }) => {
  const [priceRange, setPriceRange] = useState([5000, 120000]);
  const [rooms, setRooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');
  const [propertyType, setPropertyType] = useState([]);
  const [furnishing, setFurnishing] = useState([]);
  const [timeFromGate, setTimeFromGate] = useState('Any');
  const [areas, setAreas] = useState([]);
  const [amenities, setAmenities] = useState([]);
  
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const toggleSelection = (array, value, setter) => {
    if (array.includes(value)) {
      setter(array.filter(item => item !== value));
    } else {
      setter([...array, value]);
    }
  };

  const FilterContent = () => (
    <div className="space-y-8 p-4 max-lg:max-h-[70vh] overflow-y-auto">
      {/* Property Specification */}
        <div>
            <h3 className="font-bold mb-4">Property Specification</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="text-sm mb-2">Price Range</h4>
                    <div className="flex items-center gap-2">
                        <input 
                            type="number" 
                            value={priceRange[0]} 
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                            className="border p-2 rounded w-full"
                        />
                        <span>→</span>
                        <input 
                            type="number" 
                            value={priceRange[1]} 
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="border p-2 rounded w-full"
                        />
                    </div>
                </div>
            <div>

            <h4 className="text-sm mb-2">Rooms</h4>
            <div className="flex flex-wrap gap-2">
              {['Any', '1', '2', '3', '4', '5+'].map((option) => (
                <Button
                  key={option}
                  variant={rooms === option ? 'default' : 'outline'}
                  onClick={() => setRooms(option)}
                  className="rounded-full"
                >
                  {option}
                </Button>
              ))}
            </div>

        </div>
          
        <div>
            <h4 className="text-sm mb-2">Bathrooms</h4>
            <div className="flex flex-wrap gap-2">
            {['Any', '1', '2', '3', '4', '5+'].map((option) => (
                <Button
                key={option}
                variant={bathrooms === option ? 'default' : 'outline'}
                onClick={() => setBathrooms(option)}
                className="rounded-full"
                >
                {option}
                </Button>
            ))}
            </div>
        </div>
        
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h3 className="font-bold mb-4">Property Type</h3>
        <div className="flex flex-wrap gap-2">
          {['Single Rooms', 'Shared Apartments', 'Shortlets', 
          'Self Contain', 'Shop Spaces', 'Flat / Apartments'].map((type) => (
            <Button
              key={type}
              variant={propertyType.includes(type) ? 'default' : 'outline'}
              onClick={() => toggleSelection(propertyType, type, setPropertyType)}
              className="rounded-full"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Furnishing Options */}
      <div>
        <h3 className="font-bold mb-4">Furnishing Options</h3>
        <div className="flex flex-wrap gap-2">
          {['Furnished', 'Unfurnished'].map((option) => (
            <Button
              key={option}
              variant={furnishing.includes(option) ? 'default' : 'outline'}
              onClick={() => toggleSelection(furnishing, option, setFurnishing)}
              className="rounded-full"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Location Details */}
      <div>
        <h3 className="font-bold mb-4">Location Details</h3>
        <div>
          <h4 className="text-sm mb-2">Time From The Gate</h4>
          <div className="flex flex-wrap gap-2">
            {['Any', '1', '2', '3', '4', '5+'].map((option) => (
              <Button
                key={option}
                variant={timeFromGate === option ? 'default' : 'outline'}
                onClick={() => setTimeFromGate(option)}
                className="rounded-full"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Specific Areas */}
      <div>
        <h3 className="font-bold mb-4">Specific Areas</h3>
        <div className="flex flex-wrap gap-2">
          {['North Gate', 'South Gate', 'West Gate'].map((area) => (
            <Button
              key={area}
              variant={areas.includes(area) ? 'default' : 'outline'}
              onClick={() => toggleSelection(areas, area, setAreas)}
              className="rounded-full"
            >
              {area}
            </Button>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-bold mb-4">Amenities</h3>
        <div className="flex flex-wrap gap-2">
          {['Water Supply', 'Security', 'Parking Space', 'Electricity Stability'].map((amenity) => (
            <Button
              key={amenity}
              variant={amenities.includes(amenity) ? 'default' : 'outline'}
              onClick={() => toggleSelection(amenities, amenity, setAmenities)}
              className="rounded-full"
            >
              {amenity}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" className="w-full" onClick={() => {
          setPriceRange([5000, 120000]);
          setRooms('Any');
          setBathrooms('Any');
          setPropertyType([]);
          setFurnishing([]);
          setTimeFromGate('Any');
          setAreas([]);
          setAmenities([]);
        }}>
          CLEAR ALL
        </Button>
        <Button className="w-full">
          SHOW {24} HOUSES
        </Button>
      </div>
    </div>
  );

  return (
    <div className='w-full'>
      <div className="mx-auto lg:w-5/6 mt-8 lg:mt-16">
        <form action='#'>
          <div>
            <div className='flex max-lg:flex-col max-lg:gap-2 w-full items-center gap-x-3 lg:h-10'>
              <div className='relative h-full w-full border overflow-hidden max-lg:py-2 max-lg:rounded-lg
              border-[#CED4DA] lg:rounded-full text-primary shadow-sm shadow-[#CED4DA]'>
                <IoSearchOutline className='absolute top-[50%] text-base translate-y-[-50%] left-3'/>
                <input 
                  type="text" 
                  placeholder={placeholder} 
                  className="max-w-full w-full pl-10 pr-3 h-full border-none"
                />
              </div>
              <div className='flex gap-x-3 max-lg:w-full'>
                {isDesktop ? (
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <CiFilter className='text-base'/>
                        Filter
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" 
                    className="w-[400px] sm:w-[540px] overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <FilterContent />
                    </SheetContent>
                  </Sheet>
                ) : (
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline" className="gap-2 bg-transparent
                      w-full lg:w-[100px] border-[#CED4DA] text-[#212529] hover:bg-darkBlue/5">
                        <CiFilter className='text-base'/>
                        Filter
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className={`text-left`}>
                        <DrawerTitle>
                            Filters
                        </DrawerTitle>
                      </DrawerHeader>
                      <FilterContent />
                    </DrawerContent>
                  </Drawer>
                )}

                <Select>
                    <SelectTrigger 
                    className="w-full lg:w-[100px] 
                    border-[#CED4DA] text-[#212529] hover:bg-darkBlue/5
                    data-[placeholder]:text-[#212529]">
                        <SelectValue 
                        className='data-[placeholder]:text-[#212529]' 
                        placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="lowest">Lowest First</SelectItem>
                        <SelectItem value="highest">Highest First</SelectItem>
                        <SelectItem value="popularity">Popularity</SelectItem>
                    </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;