export const getLocations = (categories, setLocations) => {
  const locationsArr = [];
  categories.map((category) => {
    locationsArr.push(category.location);
  });
  setLocations(locationsArr);
};

export const sortList = (e, locations, setLocations) => {
  e.preventDefault();
  const sortBy = e.target.value;
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
  setLocations((prevState) => [...sortedList]);
};

export const getFilterdLocations = (categories, setLocations, value) => {
  const filteredCategories = categories.filter(
    (category) => category.location.categoryName === value
  );
  const locations = filteredCategories.map((category) => category.location);
  setLocations(locations);
};

export const categoriesOptions = [
  {
    name: "Vaction",
  },
  {
    name: "Job",
  },
  {
    name: "Trip",
  },
  {
    name: "life style",
  },
  {
    name: "bka",
  },
  {
    name: "sdfdsf",
  },
  {
    name: "football",
  },
  {
    name: "basketball",
  },
  {
    name: "handball",
  },
];

export const switchEntitis = (value, changeEntity, categories, history) => {
  if (value === "categories") {
    history.push(value);
    changeEntity(value);
  }
  if (value === "locations") {
    const locations = [];
    categories.map((category) => {
      locations.push(category.location);
    });
    changeEntity(value);
    history.push("locations");
  }
};
