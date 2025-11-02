'use client'
import { useState, useMemo, useEffect, useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Clock, TrendingUp, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SearchWithHistory = ({
  items,
  placeholder = 'Search...',
  onSearch,
  getSuggestionText
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])
  const [popularSearches] = useState([
    'Single room near gate',
    'Self contain apartment',
    'Cleaning service',
    'Plumbing services',
    'Furnished apartment'
  ])
  const searchRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fhf-search-history')
      if (saved) {
        try {
          setSearchHistory(JSON.parse(saved).slice(0, 5))
        } catch (e) {
          console.error('Error loading search history:', e)
        }
      }
    }
  }, [])

  const saveToHistory = (term) => {
    if (!term.trim()) return
    const updated = [term, ...searchHistory.filter(item => item !== term)].slice(0, 5)
    setSearchHistory(updated)
    if (typeof window !== 'undefined') {
      localStorage.setItem('fhf-search-history', JSON.stringify(updated))
    }
  }

  const clearHistory = () => {
    setSearchHistory([])
    if (typeof window !== 'undefined') {
      localStorage.removeItem('fhf-search-history')
    }
  }

  const suggestions = useMemo(() => {
    if (!searchTerm.trim() || searchTerm.length < 2) return []
    
    const term = searchTerm.toLowerCase()
    const uniqueSuggestions = new Set()
    
    items.forEach(item => {
      const text = getSuggestionText(item).toLowerCase()
      if (text.includes(term)) {
        uniqueSuggestions.add(getSuggestionText(item))
      }
    })
    
    return Array.from(uniqueSuggestions).slice(0, 5)
  }, [searchTerm, items, getSuggestionText])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    setShowSuggestions(true)
    if (onSearch) onSearch(value)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    setShowSuggestions(false)
    saveToHistory(term)
    if (onSearch) onSearch(term)
  }

  const getDidYouMean = () => {
    if (!searchTerm || searchTerm.length < 3) return null
    // Simple typo detection - in production, use a proper library
    const term = searchTerm.toLowerCase()
    const closeMatches = popularSearches.filter(pop => 
      pop.toLowerCase().includes(term.slice(0, 3)) ||
      term.includes(pop.toLowerCase().slice(0, 3))
    )
    return closeMatches.length > 0 ? closeMatches[0] : null
  }

  const didYouMean = getDidYouMean()

  return (
    <div className="relative h-full w-full" ref={searchRef}>
      <div className='relative h-full w-full border overflow-hidden max-lg:py-2 max-lg:rounded-lg border-borderGray lg:rounded-full text-primary shadow-sm shadow-borderGray'>
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

      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {/* Suggestions */}
          {searchTerm && suggestions.length > 0 && (
            <div className="p-2 border-b border-gray-200">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(suggestion)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded text-sm flex items-center gap-2"
                >
                  <IoSearchOutline className="h-4 w-4 text-gray-400" />
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Did You Mean */}
          {didYouMean && (
            <div className="p-2 border-b border-gray-200 bg-blue-50">
              <p className="text-xs text-gray-600 mb-1 px-2">Did you mean?</p>
              <button
                onClick={() => handleSearch(didYouMean)}
                className="w-full text-left px-3 py-2 hover:bg-blue-100 rounded text-sm font-medium text-blue-700"
              >
                {didYouMean}
              </button>
            </div>
          )}

          {/* Search History */}
          {!searchTerm && searchHistory.length > 0 && (
            <div className="p-2 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2 px-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-xs font-medium text-gray-600">Recent Searches</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearHistory}
                  className="h-6 px-2 text-xs"
                >
                  Clear
                </Button>
              </div>
              {searchHistory.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(item)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded text-sm flex items-center gap-2"
                >
                  <Clock className="h-4 w-4 text-gray-400" />
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          {!searchTerm && popularSearches.length > 0 && (
            <div className="p-2">
              <div className="flex items-center gap-2 mb-2 px-2">
                <TrendingUp className="h-4 w-4 text-gray-400" />
                <span className="text-xs font-medium text-gray-600">Popular Searches</span>
              </div>
              <div className="flex flex-wrap gap-2 px-2">
                {popularSearches.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(item)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!searchTerm && suggestions.length === 0 && searchHistory.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <IoSearchOutline className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Start typing to search</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchWithHistory

