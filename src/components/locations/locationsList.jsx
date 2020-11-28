import React from "react";
import { sortList, getFilterdLocations, getLocations } from "../assets";

const LocationsList = (props) => {
  const filterList = (event) => {
    const value = event.target.value;
    if (value === "all") {
      return getLocations(props.categories, props.setLocations);
    }
    getFilterdLocations(props.categories, props.setLocations, value);
  };

  return (
    <div>
      <label>Sort Location </label>
      <select
        placeholder={"Sort List"}
        onClick={(e) => sortList(e, props.locations, props.setLocations)}
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <label>Filter By Categories</label>
      <select placeholder={"Sort List"} onClick={(e) => filterList(e)}>
        <option value="all">All</option>
        {props.categories.map((category) => {
          return <option value={`${category.name}`}>{category.name}</option>;
        })}
      </select>

      <div className="listContainer">
        <ul>
          {props.locations.map((location, index) => {
            return (
              <li
                key={`index-${index}`}
                onClick={() => props.selectLocation(location)}
                className="category"
              >
                {location.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default LocationsList;
