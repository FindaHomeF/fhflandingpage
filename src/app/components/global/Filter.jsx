"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CiFilter } from "react-icons/ci";
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
import SearchWithSuggestions from './SearchWithSuggestions';
import FilterPanel from './FilterPanel';

const Filter = ({ 
  placeholder = "Search...", 
  items = [],
  filterType = 'apartments',
  onSearchChange,
  onSortChange,
  onFiltersApply,
  getSuggestionText = (item) => item.title || item.name || ''
}) => {
  const [sortBy, setSortBy] = useState('popularity');
  const [isOpen, setIsOpen] = useState(false);
  
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleSortChange = (value) => {
    setSortBy(value);
    if (onSortChange) onSortChange(value);
  };

  const handleFiltersApply = (filters) => {
    if (onFiltersApply) onFiltersApply(filters);
    setIsOpen(false);
  };

  return (
    <div className='w-full'>
      <div className="mx-auto lg:w-5/6 mt-8 lg:mt-16">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className='flex max-lg:flex-col max-lg:gap-2 w-full items-center gap-x-3 lg:h-10'>
              {/* Search Input with Suggestions */}
              <SearchWithSuggestions
                items={items}
                  placeholder={placeholder} 
                onSearch={onSearchChange}
                getSuggestionText={getSuggestionText}
                />

              <div className='flex gap-x-3 max-lg:w-full'>
                {/* Filter Button */}
                {isDesktop ? (
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                      <FilterPanel 
                        filterType={filterType}
                        onApplyFilters={handleFiltersApply}
                      />
                    </SheetContent>
                  </Sheet>
                ) : (
                  <Drawer open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerTrigger asChild>
                      <Button variant="outline" className="gap-2 bg-transparent
                      w-full lg:w-[100px] border-borderGray text-textPrimary hover:bg-primary/5">
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
                      <FilterPanel 
                        filterType={filterType}
                        onApplyFilters={handleFiltersApply}
                      />
                    </DrawerContent>
                  </Drawer>
                )}

                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger 
                    className="w-full lg:w-[100px] 
                    border-borderGray text-textPrimary hover:bg-primary/5
                    data-[placeholder]:text-textPrimary">
                        <SelectValue 
                        className='data-[placeholder]:text-textPrimary' 
                        placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="lowest">Lowest First</SelectItem>
                        <SelectItem value="highest">Highest First</SelectItem>
                        <SelectItem value="popularity">Popularity</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
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
