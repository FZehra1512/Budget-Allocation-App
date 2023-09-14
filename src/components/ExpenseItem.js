import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import 'boxicons'

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td>
        <box-icon
          name="plus-circle"
          type="solid"
          color="green"
          size="md"
          onClick={(event) => increaseAllocation(props.name)}
          style={{ marginLeft: "40px" }}
        ></box-icon>
      </td>
      <td>
        <box-icon
          type="solid"
          name="minus-circle"
          color="red"
          size="md"
          onClick={(event) => decreaseAllocation(props.name)}
          style={{ marginLeft: "40px" }}
        ></box-icon>
      </td>
      <td>
        <box-icon
          type="solid"
          name="x-circle"
          onClick={handleDeleteExpense}
          size="md"
          style={{ marginLeft: "16px" }}
        ></box-icon>
      </td>
    </tr>
  );
};

export default ExpenseItem;
