import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./button.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/RegPage"
            className={activeLink === 0 ? "active" : ""}
            onClick={() => handleLinkClick(0)}
          >
            Registration + Eligibility
          </Link>
        </li>
        <li>
          <Link
            to="/PlanPage"
            className={activeLink === 1 ? "active" : ""}
            onClick={() => handleLinkClick(1)}
          >
            Plan to Vote
          </Link>
        </li>
        <li>
          <Link
            to="/CivicPage"
            className={activeLink === 2 ? "active" : ""}
            onClick={() => handleLinkClick(2)}
          >
            Civic Engagement
          </Link>
        </li>
      </ul>
      <div
        className="underline"
        style={{ transform: `translateX(${activeLink * 33.33}%)` }}
      ></div>
    </nav>
  );
}

export default NavBar;
