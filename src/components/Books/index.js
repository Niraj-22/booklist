import React from "react";

function Books({ books }) {
  return (
    <>
      <div
        className="layout-row wrap w-100 justify-content-center"
        data-testid="book-list"
      >
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className="card layout-column w-20 ma-10 px-8"
              data-testid="book-item"
            >
              <h5 className="my-2">Name: {book.book_name}</h5>
              <h5 className="my-2">Author: {book.author}</h5>
              <h5 className="my-2">Genre: {book.genre}</h5>
              <h5 className="my-2">
                Rating: {book.rating} <span>⭐️</span>
              </h5>
            </div>
          ))
        ) : (
          <div style={{ color: "red" }} data-testid="no-results">
            No Results found!
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
