import React, { useState } from "react";
import Toolbar from "./toolbar";
import ViewCategory from "./viewCategory";
import CategoriesList from "./categoriesList";
import CreateCategory from "./createCategory";

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCatgeory] = useState(false);
  const [mode, setMode] = useState("");
  const [createNew, setCreateNew] = useState(false);

  const deleteCat = () => {
    const newCat = [...categories];
    const catIndex = categories.findIndex(
      (category) => category == selectedCategory
    );
    newCat.splice(catIndex, 1);
    setCategories(newCat);
    setSelectedCatgeory(false);
  };

  const onClickActionButton = (mode) => {
    setMode(mode);
  };

  const selectCategory = (category) => {
    setSelectedCatgeory(category);
    setCreateNew(false);
  };

  return (
    <div className="bla">
      <Toolbar
        selectedCategory={selectedCategory}
        setCategories={setCategories}
        deleteCat={deleteCat}
        setSelectedCatgeory={setSelectedCatgeory}
        setCreateNew={setCreateNew}
        onClickActionButton={onClickActionButton}
      ></Toolbar>
      <CategoriesList categories={categories} selectCategory={selectCategory} />
      <ViewCategory
        mode={mode}
        category={selectedCategory}
        onClickActionButton={onClickActionButton}
        categories={categories}
        setCategories={setCategories}
      />
      {createNew && (
        <CreateCategory
          categories={categories}
          setCategories={setCategories}
          setCreateNew={setCreateNew}
        />
      )}
    </div>
  );
};
export default Page;
