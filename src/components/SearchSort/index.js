import React, { useState, useEffect } from "react";
import Books from "../Books";

function SearchSort({ booksList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksList);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const lowerCaseValue = searchTerm.toLowerCase();
      const filtered = booksList.filter((book) =>
        book.genre.toLowerCase().includes(lowerCaseValue)
      );
      setFilteredBooks(filtered.length > 0 ? filtered : null);
    } else {
      setFilteredBooks(booksList);
    }
  }, [searchTerm, booksList]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const sortBooksAsc = () => {
    const sorted = [...filteredBooks].sort((a, b) =>
      a.book_name.localeCompare(b.book_name)
    );
    setFilteredBooks(sorted);
  };

  const sortBooksDesc = () => {
    const sorted = [...filteredBooks].sort((a, b) =>
      b.book_name.localeCompare(a.book_name)
    );
    setFilteredBooks(sorted);
  };

  return (
    <>
      <div className="w-100 layout-row justify-content-center align-items-end pa-20">
        <input
          className="large w-50"
          placeholder="Search for a book genre"
          data-testid="search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="my-0 h-4 mr-0"
          onClick={sortBooksAsc}
          data-testid="sort-asc"
        >
          Sort A to Z
        </button>
        <button
          className="my-0 h-4"
          onClick={sortBooksDesc}
          data-testid="sort-desc"
        >
          Sort Z to A
        </button>
      </div>
      <Books books={filteredBooks} />
    </>
  );
}

export default SearchSort;
