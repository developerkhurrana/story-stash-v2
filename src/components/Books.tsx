import React from "react";

function Books() {
  return (
    <div className="flex flex-col gap-4">
      <div className="image__Cont w-36">
        
        <img
          className=""
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664729357i/62848145.jpg"
          alt="Book Cover"
        />
      </div>
      <div className="book__Info flex flex-col gap-2">
        <h2 className="boot__InfoTitle text-sm font-bold">
          The Housemaid's secret
        </h2>
        <p className="boot__InfoAuthor text-xs">Freida McFadden</p>
      </div>
    </div>
  );
}

export default Books;
