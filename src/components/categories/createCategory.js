import React, { useState } from "react";
import { getLocations, categoriesOptions } from "../assets";

const CreateCategory = (props) => {
  const [location, setLocation] = useState({});
  const [categoryName, setCategory] = useState({
    categoryName: "",
  });

  const onChangeLocation = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLocation((prevCategory) => ({
      ...prevCategory,
      location: { ...prevCategory.location, [name]: value },
    }));
  };

  const setCatName = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCategory(value);
    setLocation((prevCategory) => ({
      ...prevCategory,
      location: { ...prevCategory.location, [name]: value },
    }));
  };

  const onSubmit = () => {
    const categoryCreated = {
      name: categoryName,
      ...location,
    };
    const newcategoris = [...props.categories];
    newcategoris.push(categoryCreated);
    props.setCategories(newcategoris);
    props.setCreateNew(false);
    if (!!props.setLocations) {
      getLocations(newcategoris, props.setLocations);
    }
  };

  return (
    <div className={"container"}>
      <button
        className="button close"
        onClick={() => props.setCreateNew(false)}
      >
        X
      </button>
      <div>
        <div className="inputContainer">
          <div className="label">Category Name</div>
          <select
            name="categoryName"
            className="input select"
            onClick={(e) => setCatName(e)}
          >
            {categoriesOptions.map((category) => {
              return (
                <option value={`${category.name}`}>{category.name}</option>
              );
            })}
          </select>
        </div>
        <div className="inputContainer">
          <div className="label">Location Name</div>
          <input
            className="input"
            onChange={onChangeLocation}
            name="name"
            required={true}
          />
        </div>
        <div className="inputContainer">
          <div className="label">Location Address</div>
          <input
            className="input"
            name="address"
            required={true}
            onChange={onChangeLocation}
          />
        </div>
        <div className="inputContainer">
          <div className="label">Location Coordinates </div>
          <input
            className="input coordinates"
            name="latitude"
            placeholder="Latitude"
            type="number"
            required={true}
            onChange={onChangeLocation}
          />
          <input
            className="input coordinates"
            name="longitude"
            type="number"
            placeholder="Longitude"
            required={true}
            onChange={onChangeLocation}
          />
        </div>
      </div>
      <button onClick={onSubmit} className=" button submit">
        Submit
      </button>
    </div>
  );
};
export default CreateCategory;
