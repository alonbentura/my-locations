import React, { useState } from "react";

const ViewCategory = (props) => {
  const { location } = props.category;
  const { category } = props;
  const [editCategory, setEditCategory] = useState({});
  const viewMode = props.mode === "View" ? true : false;

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

    console.log("editCategory", editCategory);
    const categoryChanged = {
      name: editCategory.location.categoryName,
      location: {
        name: editCategory.location.name,
        address: editCategory.location.address,
        coordinates: editCategory.location.coordinates,
      },
    };
    const catListAfterChange = [...props.categories];
    catListAfterChange[catIndex] = categoryChanged;
    props.setCategories(catListAfterChange);
  };

  return (
    props.mode &&
    props.category && (
      <div>
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
