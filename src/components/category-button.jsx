import React from "react";

const CategoryButton = ({ category, sortProjects }) => {
  return (
    <div
      onClick={() => sortProjects(category)}
      role="button"
      tabIndex={0}
      onKeyDown={() => sortProjects(category)}
    >
      {category}
    </div>
  );
};

export default CategoryButton;
