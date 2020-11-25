import React, { useState } from "react";

const ViewCategory = (props) => {
  const { location } = props.category;
  const { category } = props;
  const [editCategory, setEditCategory] = useState({});
  const viewMode = props.mode === "View" ? true : false;

  console.log(props);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setEditCategory((prevCategory) => ({
      ...prevCategory,
      location: { ...prevCategory.location, [name]: value },
    }));
  };

  const clickSave = () => {
    const catIndex = props.categories.findIndex((cat) => cat == category);
    const categoryName = editCategory.location.categoryName || category.name;
    const locationName = editCategory.location.name || location.name;
    const locationAddress = editCategory.location.address || location.address;
    const locationCoordinates =
      editCategory.location.coordinates || location.coordinates;

    const categoryChanged = {
      name: categoryName,
      location: {
        name: locationName,
        address: locationAddress,
        coordinates: locationCoordinates,
      },
    };

    const catListAfterChange = [...props.categories];
    catListAfterChange[catIndex] = categoryChanged;
    props.setCategories(catListAfterChange);
    props.onClickActionButton("");
  };
  return (
    props.mode &&
    props.category && (
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
              className="input"
              name="coordinates"
              type="number"
              placeholder={location.coordinates}
              disabled={viewMode}
              onChange={onChange}
            />
          </div>
          <div className="inputContainer">
            <div className="label">Location Category</div>
            <input
              className="input"
              placeholder={category.name}
              disabled={viewMode}
              name="categoryName"
              onChange={onChange}
            />
          </div>
        </div>
        {!viewMode && (
          <button onClick={clickSave} className="button submit">
            Save
          </button>
        )}
      </div>
    )
  );
};
export default ViewCategory;
