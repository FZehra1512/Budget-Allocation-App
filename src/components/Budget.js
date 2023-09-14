import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const {dispatch, budget, currency} = useContext(AppContext);
    const setBudget = (value) => {
        dispatch({
            type: "SET_BUDGET",
            payload: value,
        });
    };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          type="number"
          id="budget"
          value={budget}
          step={10}
          onChange={(event) => setBudget(event.target.value)}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
