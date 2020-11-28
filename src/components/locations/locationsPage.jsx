import React, { useEffect, useState } from "react";
import LocationsList from "./locationsList";
import ViewLocation from "./viewLocation";
import { getLocations } from "../assets";
import CreateCategory from "../categories/createCategory";

const LocationsPage = (props) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations(props.categories, setLocations);
  }, [props.categories]);

  return (
    <div style={{ display: "flex" }}>
      <LocationsList
        locations={locations}
        categories={props.categories}
        setLocations={setLocations}
        selectLocation={props.setSelectedLocation}
      />
      <ViewLocation
        mode={props.mode}
        location={props.selectedLocation}
        onClickActionButton={props.onClickActionButton}
        mode={props.mode}
        setLocations={setLocations}
        categories={props.categories}
        setCategories={props.setCategories}
        category={props.selectedCategory}
      />
      {props.createNew && (
        <CreateCategory
          setLocations={setLocations}
          categories={props.categories}
          setCategories={props.setCategories}
          setCreateNew={props.setCreateNew}
          onClickActionButton={props.onClickActionButton}
        />
      )}
    </div>
  );
};
export default LocationsPage;
