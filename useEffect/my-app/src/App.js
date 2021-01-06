import React, { useEffect, useState } from "react";

const UseBasicEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setText(json));
  }, [resourceType]);

  const ItemJson = (props) => {
    return <pre>{JSON.stringify(props.item)}</pre>;
  };
  return (
    <div className="Main">
      <button className="btn" onClick={() => setResourceType("albums")}>
        Albums
      </button>
      <button className="btn" onClick={() => setResourceType("todos")}>
        Todos
      </button>
      <button className="btn" onClick={() => setResourceType("posts")}>
        Posts
      </button>
      <h1>{resourceType}</h1>
      <div>
        {text.map((item) => (
          <ItemJson key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default UseBasicEffect;
