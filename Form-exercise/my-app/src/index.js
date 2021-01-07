import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setPeople([...people, { name, email }]);
      setName("");
      setEmail("");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="Email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
