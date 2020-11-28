import React from "react";

const Toolbar = (props) => {
  const selected = !!props.selected;
  const entityToShow =
    props.entity === "locations" ? "Locations" : "Categoires";
  const title = selected ? props.selected.name : entityToShow;
  const buttonTitle = props.entity === "locations" ? "Location" : "category";

  const onClickNewCAtegory = () => {
    props.setCreateNew(true);
    props.setSelectedCatgeory(false);
    props.onClickActionButton("");
  };

  return (
    <div className="toolbar">
      <button className="button new" onClick={onClickNewCAtegory}>
        New {buttonTitle}
      </button>
      <div className="title">{title}</div>
      <div className="toolbarBtns">
        {selected && (
          <React.Fragment>
            <button
              className="button"
              onClick={() => props.onClickActionButton("Edit")}
            >
              edit
            </button>
            <button className=" button delete" onClick={props.deleteCat}>
              delete
            </button>
            <button
              className="button view"
              onClick={() => props.onClickActionButton("View")}
            >
              view
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
export default Toolbar;
