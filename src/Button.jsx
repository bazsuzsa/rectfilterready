import React from "react";

const Button = ({ category, filterItems }) => {
  return (
    <button type="button" className="btn" onClick={() => filterItems(category)}>
      {category}
    </button>
  );
};

export default Button;
