import React, { useState } from "react";
import { categoriesOptions } from "../assets";
import MapChart from "../mapChart";

const ViewLocation = (props) => {
  const { location } = props;
  const [editLocation, setEditLocation] = useState({});
  const viewMode = props.mode === "View" ? true : false;

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setEditLocation((prevCategory) => ({
      ...prevCategory,
      location: { ...prevCategory.location, [name]: value },
    }));
  };

  const setCatName = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setEditLocation((prevCategory) => ({
      ...prevCategory,
      location: { ...prevCategory.location, [name]: value },
    }));
  };

  const clickSave = () => {
    const catIndex = props.categories.findIndex(
      (cat) => cat.name === props.location.categoryName
    );
    const categoryName =
      editLocation.location.categoryName || props.location.categoryName;
    const locationName = editLocation.location.name || location.name;
    const locationAddress = editLocation.location.address || location.address;
    const locationCoordinates =
      editLocation.location.coordinates || location.coordinates;
    const categoryChanged = {
      name: categoryName,
      location: {
        name: locationName,
        address: locationAddress,
        coordinates: locationCoordinates,
        categoryName,
      },
    };
    const catListAfterChange = [...props.categories];
    catListAfterChange[catIndex] = categoryChanged;
    props.setCategories(catListAfterChange);
    const newLocations = [];
    catListAfterChange.map((cat) => newLocations.push(cat.location));
    props.setLocations(newLocations);
    props.onClickActionButton("");
  };
  
  return (
    props.mode &&
    props.location && (
      <div className={"container"}>
        <button
          className="button close"
          onClick={() => props.onClickActionButton("")}
        >
          X
        </button>
        <div>
          <div className="inputContainer">
            <div className="label">Location Name</div>
            <input
              className="input"
              placeholder={location.name}
              name="name"
              disabled={viewMode}
              onChange={onChange}
            />
          </div>
          <div className="inputContainer">
            <div className="label">Location Address</div>
            <input
              className="input"
              placeholder={location.address}
              name="address"
              disabled={viewMode}
              onChange={onChange}
            />
          </div>
          <div className="inputContainer">
            <div className="label">Location Coordinates </div>
            <input
              className="input coordinates"
              name="latitude"
              type="number"
              placeholder={location.latitude}
              disabled={viewMode}
              onChange={onChange}
            />
            <input
              className="input coordinates"
              name="longitude"
              type="number"
              placeholder={location.longitude}
              disabled={viewMode}
              onChange={onChange}
            />
          </div>
          <div className="inputContainer">
            <div className="label">Location Category</div>
            {!viewMode && (
              <select
                name="categoryName"
                className="input select"
                onClick={(e) => setCatName(e)}
                defaultValue={location.categoryName}
              >
                {categoriesOptions.map((category) => {
                  return (
                    <option value={`${category.name}`}>{category.name}</option>
                  );
                })}
              </select>
            )}
            {viewMode && (
              <input
                className="input"
                placeholder={location.categoryName}
                disabled={viewMode}
                name="  Name"
                onChange={onChange}
              />
            )}
          </div>
        </div>
        <MapChart {...location} />
        {!viewMode && (
          <button onClick={clickSave} className="button submit">
            Save
          </button>
        )}
      </div>
    )
  );
};
export default ViewLocation;
