import React, { useState } from "react";

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

  const onSubmit = () => {
    const categoryCreated = {
      name: categoryName,
      ...location,
    };
    const newcategoris = [...props.categories];
    newcategoris.push(categoryCreated);
    props.setCategories(newcategoris);
    props.setCreateNew(false);
  };

  return (
    <div>
      <button
        className="button close"
        onClick={() =>  props.setCreateNew(false)}
      >
        X
      </button>
      <div>
        <div className="inputContainer">
          <div className="label">Category Name</div>
          <input
            className="input"
            name="categoryName"
            required={true}
            onChange={(e) => setCategory(e.target.value)}
          />
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
            className="input"
            name="cordinates"
            required={true}
            onChange={onChangeLocation}
          />
        </div>
      </div>
      <button onClick={onSubmit} className={"submit"}>
        {" "}
        Submit
      </button>
    </div>
  );
};
export default CreateCategory;
