import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span
          style={{
            background: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            fontWeight: "600",
            padding: "3px",
            marginRight: "25px",
          }}
        >
          ${props.cost}
        </span>
        <TiDelete
          size="1.5em"
          style={{ color: "#ef256d", cursor: "pointer" }}
          onClick={handleDeleteExpense}
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
