import React from "react";

const LocationsList = (props) => {
  return (
    <div className="listContainer">
      <ul>
        {props.locations.map((category, index) => {
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
    </div>
  );
};
export default CategoriesList;
