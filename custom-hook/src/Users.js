import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const User = ({ avatar_url, login, html_url, price }) => {
  return (
    <div className="user">
      <img src={avatar_url} alt={login} />
      <div className="content">
        <p>{login.charAt(0).toUpperCase() + login.slice(1, login.length)}</p>
        <a href={html_url}>Profile</a>
        <p>${price}</p>
      </div>
    </div>
  );
};

User.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

User.defaultProps = {
  avatar_url:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2FA193eKmo7Gyq%2Fwhite-question-mark&psig=AOvVaw3k-BIsnTdguJ7ylMcmxvE5&ust=1610642060928000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCs_7mrme4CFQAAAAAdAAAAABAO",
  login: "name missing",
  html_url: "#",
  price: 0.99,
};

export default User;
