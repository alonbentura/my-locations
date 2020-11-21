import React from "react";

const CategoriesList = (props) => {
  return (
    <ul>
      {props.categories.map((category, index) => {
        return (
          <li
            key={`index-${index}`}
            onClick={() => props.selectCategory(category)}
            className="category"
          >
            {category.name}
          </li>
        );
      })}
    </ul>
  );
};
export default CategoriesList;
