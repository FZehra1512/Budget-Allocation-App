import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    let currencyname;
    switch (currency) {
      case "$":
        currencyname = "Dollar";
        break;
      case "£":
        currencyname = "Pound";
        break;
      case "€":
        currencyname = "Euro";
        break;
      case "₹":
        currencyname = "Ruppee";
        break;
      default:
        currencyname = "Unknown"
    }

    const changeCurrency = (curr) => {
        dispatch({
          type: "CHG_CURRENCY",
          payload: curr,
        });
    }

    return (
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ background: "lightgreen", color: "#fff" }}
        >
          Currency {"("}
          {currency} {currencyname}
          {")"}
        </button>
        <ul className="dropdown-menu" style={{ background: "lightgreen" }}>
          <li>
            <button
              className="dropdown-item"
              value="$"
              onClick={(event) => changeCurrency(event.target.value)}
            >
              $ Dollar
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              value="£"
              onClick={(event) => changeCurrency(event.target.value)}
            >
              £ Pound
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              value="€"
              onClick={(event) => changeCurrency(event.target.value)}
            >
              € Euro
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              value="₹"
              onClick={(event) => changeCurrency(event.target.value)}
            >
              ₹ Ruppee
            </button>
          </li>
        </ul>
      </div>
    );
};

export default Currency;
