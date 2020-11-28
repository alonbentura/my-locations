import React, { useState, useEffect } from "react";
import Toolbar from "./toolbar";
import Footer from "./footer";
import CategorisPage from "../categories/categorisPage";
import { Switch, Redirect, Route } from "react-router-dom";
import LocationsPage from "../locations/locationsPage";
import { switchEntitis } from "../assets";
import { useHistory } from "react-router-dom";

// const cats = [
//   {
//     name: "Vaction",
//     location: {
//       name: "barcelona",
//       address: "asdsad",
//       coordinates: "0000142425",
//       categoryName: "Vaction",
//     },
//   },
//   {
//     name: "Job",
//     location: {
//       name: "madrid",
//       address: "asdsad",
//       coordinates: "0000142425",
//       categoryName: "Job",
//     },
//   },
//   {
//     name: "Trip",
//     location: {
//       name: "tel aviv",
//       address: "jjjjj",
//       coordinates: "0000142425",
//       categoryName: "Trip",
//     },
//   },
//   {
//     name: "life style",
//     location: {
//       name: "austin",
//       address: "ggggg",
//       coordinates: "0000142425",
//       categoryName: "life style",
//     },
//   },

//   {
//     name: "bka",
//     location: {
//       name: "beyrot",
//       address: "fffff",
//       coordinates: "0000142425",
//       categoryName: "bka",
//     },
//   },
//   {
//     name: "sdfdsf",
//     location: {
//       name: "pangan",
//       address: "ddddd",
//       coordinates: "0000142425",
//       categoryName: "sdfdsf",
//     },
//   },
//   {
//     name: "football",
//     location: {
//       name: "bangkok",
//       address: "cccc",
//       coordinates: "0000142425",
//       categoryName: "football",
//     },
//   },
//   {
//     name: "basketball",
//     location: {
//       name: "jerusalem",
//       address: "bbbb",
//       coordinates: "0000142425",
//       categoryName: "football",
//     },
//   },
//   {
//     name: "handball",
//     location: {
//       name: "new york",
//       address: "aaaa",
//       coordinates: "0000142425",
//       categoryName: "handball",
//     },
//   },
// ];

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCatgeory] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [mode, setMode] = useState("");
  const [createNew, setCreateNew] = useState(false);
  const [entity, changeEntity] = useState("categories");
  const selectedEntity =
    entity === "categories" ? selectedCategory : selectedLocation;
  const history = useHistory();

  const deleteCat = () => {
    const array = [...categories];
    const locationIndex = categories.findIndex(
      (category) => category.location === selectedLocation
    );
    array.splice(locationIndex, 1);
    setCategories(array);
    setSelectedLocation(false);
  };

  const onClickActionButton = (mode) => {
    setMode(mode);
  };

  return (
    <Switch>
      <div>
        <Toolbar
          selected={selectedEntity}
          setCategories={setCategories}
          deleteCat={deleteCat}
          setSelectedCatgeory={setSelectedCatgeory}
          setCreateNew={setCreateNew}
          onClickActionButton={onClickActionButton}
          entity={entity}
        ></Toolbar>
        <Route         
          path="/"
          render={() => {
            <Redirect to="/categories" />;
          }}
        />
        <Route exact path="/categories">
          <CategorisPage
            selectedCategory={selectedCategory}
            setSelectedCatgeory={setSelectedCatgeory}
            mode={mode}
            createNew={createNew}
            setCreateNew={setCreateNew}
            onClickActionButton={onClickActionButton}
            categories={categories}
            setCategories={setCategories}
          />
        </Route>
        <Route  exact path="/locations">
          <LocationsPage
            setSelectedLocation={setSelectedLocation}
            selectedLocation={selectedLocation}
            onClickActionButton={onClickActionButton}
            selectedCategory={selectedCategory}
            createNew={createNew}
            setCreateNew={setCreateNew}
            mode={mode}
            categories={categories}
            setCategories={setCategories}
          />
        </Route>
        <Footer
          switchEntitis={(value) =>
            switchEntitis(value, changeEntity, categories, history)
          }
        />
      </div>
    </Switch>
  );
};
export default Page;
