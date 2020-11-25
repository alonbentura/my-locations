import React, { useEffect, useState } from "react";
import Toolbar from "./toolbar";
import ViewCategory from "./viewCategory";
import CategoriesList from "./categoriesList";
import CreateCategory from "./createCategory";
import Footer from "./footer";

const cats = [
  {
    name: "sdfdsf",
    location: {
      name: "barcelona",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "sdfdsf",
    location: {
      name: "madrid",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "sdfdsf",
    location: {
      name: "tel aviv",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "aaa",
    location: {
      name: "austin",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "bka",
    location: {
      name: "los angeles",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "bka",
    location: {
      name: "beyrot",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "sdfdsf",
    location: {
      name: "pangan",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "sdfdsf",
    location: {
      name: "bangkok",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "sdfdsf",
    location: {
      name: "jerusalem",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "sdfdsf",
    location: {
      name: "new york",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "sdfdsf",
    location: {
      name: "valencia",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
  {
    name: "bka",
    location: {
      name: "lisbon",
      address: "asdsad",
      coordinates: "0000142425",
    },
  },
];

const Page = () => {
  const [categories, setCategories] = useState(cats);
  const [locations, setLocations] = useState([]);
  const [selectedCategory, setSelectedCatgeory] = useState(false);
  const [mode, setMode] = useState("");
  const [createNew, setCreateNew] = useState(false);
  const [entity, changeEntity] = useState("categories");

  const switchEntitis = (value) => {
    if (value === "categories") {
      changeEntity(value);
    }
    if (value === "locations") {
      const locations = [];
      categories.map((category) => {
        locations.push(category.location);
      });
      changeEntity(value);
      setLocations(locations);
    }
  };

  const sortList = (sortBy) => {
    console.log(sortBy);
    const sortedList = locations.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (sortBy === "A-Z") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      }
      if (sortBy === "Z-A") {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      }
    });
    setLocations((sortedList) => [...sortedList]);
  };

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
  const entityToShow = entity === "locations" ? locations : categories;
  return (
    <div>
      <Toolbar
        selectedCategory={selectedCategory}
        setCategories={setCategories}
        deleteCat={deleteCat}
        setSelectedCatgeory={setSelectedCatgeory}
        setCreateNew={setCreateNew}
        onClickActionButton={onClickActionButton}
      ></Toolbar>
      <div style={{ display: "flex" }}>
        <CategoriesList
          categories={entityToShow}
          selectCategory={selectCategory}
        />
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
      <button onClick={() => sortList("A-Z")}>sort</button>
      <button onClick={() => sortList("Z-A")}>sortB</button>

      <Footer switchEntitis={switchEntitis} />
    </div>
  );
};
export default Page;
