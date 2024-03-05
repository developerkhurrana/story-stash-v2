import React from "react";
import CatHeader from "./CatHeader";
import Books from "./Books";

function CatSection() {
  return (
    <div className="p-4 ">
      <CatHeader />
      <div className="books_Container focus:overscroll-y-auto flex gap-4">
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
      </div>
    </div>
  );
}

export default CatSection;
