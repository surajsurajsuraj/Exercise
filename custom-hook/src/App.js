import React from "react";
import User from "./Users";
import { useFetch } from "./useFetch";
const url = "https://api.github.com/users";
const App = () => {
  const { users } = useFetch(url);

  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </section>
  );
};

export default App;
