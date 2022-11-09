import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpanseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary" style={{padding: '23px'}}>
      <span>Spent so far ${totalExpenses}</span>
    </div>
  );
};

export default ExpanseTotal;
