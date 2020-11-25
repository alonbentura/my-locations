import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <button
        onClick={() => props.switchEntitis("locations")}
        className="button"
      >
        Locations
      </button>
      <button
        onClick={() => props.switchEntitis("categories")}
        className="button"
      >
        Categories
      </button>
    </div>
  );
};
export default Footer;
