import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center space-x-2 mt-4">
    <button
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      Previous
    </button>
    <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
    <button
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      Next
    </button>
  </div>
);

export default Pagination;
