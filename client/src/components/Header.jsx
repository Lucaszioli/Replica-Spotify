import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};
