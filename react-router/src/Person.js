import React, { useState, useEffect } from "react";
import data from "./data";
import { useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
    //eslint-disable-next-line
  }, []);
  return <h1>{name}</h1>;
};

export default Person;
