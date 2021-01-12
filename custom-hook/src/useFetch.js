import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, [url]);

  return { loading, users };
};
