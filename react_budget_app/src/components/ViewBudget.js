import React from "react";

const ViewBudget = (props) => {
  return (
    <div>
      <span>Budget: ${props.budget}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleEditClick}
        style={{ marginLeft: "100px" }}
      >
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
