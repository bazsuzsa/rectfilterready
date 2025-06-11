import React from "react";
import Button from "./Button";

const Buttons = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <Button
            key={category}
            category={category}
            filterItems={filterItems}
          />
        );
      })}
    </div>
  );
};

export default Buttons;
