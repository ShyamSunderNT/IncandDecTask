import React, { useReducer } from "react";
import ReducerAction from "./ReducerAction";

const Counter = () => {
  const [state, dispatch] = useReducer(ReducerAction, 0);

  return (
    <div className="container">
      <h1>Counter: {state.count}</h1>
      <div >
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>

        <br />
      </div>
      <div >
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch({ type: "INCREMENT_TEN" })}
        >
          Increment 10
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch({ type: "DECREMENT_TEN" })}
        >
          Decrement 10
        </button>
        <br />
      </div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
