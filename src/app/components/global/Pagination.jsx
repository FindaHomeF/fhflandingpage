"use client"
import { Button } from "@/components/ui/button";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (page) => {
    if (page !== '...' && page !== currentPage) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        variant="outline"
        className="h-10 w-10 p-0 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoChevronBack className="text-lg" />
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                ...
              </span>
            );
          }

          return (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              variant={currentPage === page ? "default" : "outline"}
              className={`h-10 w-10 rounded-full ${
                currentPage === page
                  ? "bg-secondary text-white hover:bg-secondary"
                  : ""
              }`}
            >
              {page}
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        variant="outline"
        className="h-10 w-10 p-0 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoChevronForward className="text-lg" />
      </Button>
    </div>
  );
};

export default Pagination;

