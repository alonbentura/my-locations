import React, { useState } from "react";
import ViewCategory from "./viewCategory";
import CategoriesList from "./categoriesList";
import CreateCategory from "./createCategory";

const CategorisPage = (props) => {
  const selectCategory = (category) => {
    props.setSelectedCatgeory(category);
    props.setCreateNew(false);
  };
  return (
    <div style={{ display: "flex" }}>
      <CategoriesList
        categories={props.categories}
        selectCategory={selectCategory}
      />
      <ViewCategory
        mode={props.mode}
        category={props.selectedCategory}
        onClickActionButton={props.onClickActionButton}
        categories={props.categories}
        setCategories={props.setCategories}
      />
      {props.createNew && (
        <CreateCategory
          categories={props.categories}
          setCategories={props.setCategories}
          setCreateNew={props.setCreateNew}
          onClickActionButton={props.onClickActionButton}
        />
      )}
    </div>
  );
};
export default CategorisPage;
