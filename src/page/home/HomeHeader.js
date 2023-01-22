import React from 'react'
import "./home.css";
import "./header.scss";
import {Link} from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link to="/">
          <span>K:ITe</span>
        </Link>
      </div>
      <div className="header-menu">
        <Link to="/login">LOGIN</Link>
      </div>
    </div>
  );
};

export default HomeHeader;