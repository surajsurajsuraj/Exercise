import React from "react";

const User = ({ login }) => {
  return (
    <div className="user">
      <p>{login}</p>
    </div>
  );
};

export default User;
