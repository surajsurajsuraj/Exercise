import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const TYPE = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.DECREMENT:
      return { count: state.count - 1 };
    case TYPE.INCREMENT:
      return { count: state.count + 1 };
    default:
      return { count: state.count };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="main">
      <button onClick={() => dispatch({ type: TYPE.DECREMENT })}>-</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: TYPE.INCREMENT })}>+</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
