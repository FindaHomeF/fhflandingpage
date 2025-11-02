"use client"
import { useState, useMemo, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchWithSuggestions = ({ 
  items, 
  placeholder, 
  onSearch,
  getSuggestionText 
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Generate suggestions based on search term
  const suggestions = useMemo(() => {
    if (!searchTerm.trim() || searchTerm.length < 2) return [];
    
    const term = searchTerm.toLowerCase();
    const uniqueSuggestions = new Set();
    
    items.forEach(item => {
      const text = getSuggestionText(item).toLowerCase();
      if (text.includes(term)) {
        uniqueSuggestions.add(getSuggestionText(item));
      }
    });
    
    return Array.from(uniqueSuggestions).slice(0, 5);
  }, [searchTerm, items, getSuggestionText]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(true);
    if (onSearch && typeof onSearch === 'function') {
      onSearch(value);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    if (onSearch && typeof onSearch === 'function') {
      onSearch(suggestion);
    }
  };

  return (
    <div className="relative h-full w-full" ref={searchRef}>
      <div className='relative h-full w-full border overflow-hidden max-lg:py-2 max-lg:rounded-lg
      border-borderGray lg:rounded-full text-primary shadow-sm shadow-borderGray'>
        <IoSearchOutline className='absolute top-[50%] text-base translate-y-[-50%] left-3'/>
        <input 
          type="text" 
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          className="max-w-full w-full pl-10 pr-3 h-full border-none outline-none"
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-borderGray rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2 border-b last:border-b-0"
            >
              <IoSearchOutline className="text-gray-400" />
              <span className="text-sm">{suggestion}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchWithSuggestions;
