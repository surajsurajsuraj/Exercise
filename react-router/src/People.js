import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
const People = () => {
  const people = data;
  return (
    <div>
      <h1>People</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="center-row">
            {person.name}
            <Link to={`/person/${person.id}`} className="right no-decoration">
              Learn More
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
