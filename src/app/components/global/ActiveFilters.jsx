"use client"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ActiveFilters = ({ filters, onRemoveFilter }) => {
  const activeFilters = [];

  if (filters.featured) {
    activeFilters.push({ type: 'featured', label: 'Featured Only', value: 'true' });
  }
  
  if (filters.recent) {
    activeFilters.push({ type: 'recent', label: 'Recent Items', value: 'true' });
  }
  
  if (filters.category) {
    activeFilters.push({ type: 'category', label: filters.category, value: filters.category });
  }

  if (activeFilters.length === 0) return null;

  return (
    <div className="w-[90%] md:w-5/6 mx-auto mt-6">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm font-medium text-gray-600">Active Filters:</span>
        {activeFilters.map((filter) => (
          <Button
            key={filter.type}
            variant="outline"
            size="sm"
            onClick={() => onRemoveFilter(filter.type)}
            className="h-8 rounded-full bg-secondary/10 border-secondary text-secondary hover:bg-secondary/20 flex items-center gap-2"
          >
            {filter.label}
            <X size={14} />
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemoveFilter('all')}
          className="h-8 text-xs text-gray-500 hover:text-gray-700"
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default ActiveFilters;

