import React from "react";
import CatScroll from "./CatScroll";

function CatHeader() {
  return (
    <div className="flex justify-between py-4">
      <div>
        <h1>Heading</h1>
      </div>
      <CatScroll />
    </div>
  );
}

export default CatHeader;
