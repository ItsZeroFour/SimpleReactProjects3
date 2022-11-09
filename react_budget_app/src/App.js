import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpanseTotal from "./components/ExpanseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpanseForm from "./components/AddExpanseForm";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="container">
          <h1 className="mt-3">My Budget Planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <ExpanseTotal />
            </div>
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <h3 className="mt-3">Add Expense</h3>
          <div className="mt-3">
            <div className="col-sm">
              <AddExpanseForm />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
