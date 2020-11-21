import React from "react";

const Toolbar = (props) => {
  const category = !!props.selectedCategory;
  const title = category ? props.selectedCategory.name : "categoires";

  const onClickNewCAtegory = () => {
    props.setCreateNew(true);
    props.setSelectedCatgeory(false);
    props.onClickActionButton("");
  };

  return (
    <div className="toolbar">
      <button className="button new" onClick={onClickNewCAtegory}>
        New category
      </button>
      <div className="title">{title}</div>
      <div className="toolbarBtns">
        {category && (
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
