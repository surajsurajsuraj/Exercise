import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const App = () => {
//   const [person, setPerson] = useState({ name: "", email: "", age: "" });
//   const [people, setPeople] = useState([]);

//   const handleChanges = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setPerson({ ...person, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (person.name && person.email && person.age) {
//       setPeople([...people, { person }]);
//       setPerson({ name: "", email: "", age: "" });
//     }
//   };

//   return (
//     <div className="SimpleForm">
//       <form className="form">
//         <div className="field">
//           <label htmlFor="Name">Name : </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={person.name}
//             onChange={handleChanges}
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="Email">Email : </label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={person.email}
//             onChange={handleChanges}
//           />
//         </div>
//         <div className="field">
//           <label htmlFor="age">Age : </label>
//           <input
//             type="text"
//             id="age"
//             name="age"
//             value={person.age}
//             onChange={handleChanges}
//           />
//         </div>

//         <button className="btn" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

const App = () => {
  const initialState = {
    name: "",
    email: "",
    age: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "text":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "reset":
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [people, setPeople] = useState([]);

  const handleChanges = (e) => {
    e.preventDefault();
    dispatch({
      type: "text",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name && state.email && state.age) {
      setPeople([...people, { state }]);
      dispatch({ type: "reset" });
    }
  };

  return (
    <div className="SimpleForm">
      <form className="form">
        <div className="field">
          <label htmlFor="Name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={(e) => handleChanges(e)}
          />
        </div>
        <div className="field">
          <label htmlFor="Email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={state.email}
            onChange={(e) => handleChanges(e)}
          />
        </div>
        <div className="field">
          <label htmlFor="age">Age : </label>
          <input
            type="text"
            id="age"
            name="age"
            value={state.age}
            onChange={(e) => handleChanges(e)}
          />
        </div>

        <button className="btn" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
