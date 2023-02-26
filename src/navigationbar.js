import React, { useState } from "react";
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
          <a
            href="#"
            className={activeLink === 0 ? "active" : ""}
            onClick={() => handleLinkClick(0)}
          >
            Registration + Eligibility
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === 1 ? "active" : ""}
            onClick={() => handleLinkClick(1)}
          >
            Plan to Vote
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === 2 ? "active" : ""}
            onClick={() => handleLinkClick(2)}
          >
            Voting Literacy
          </a>
        </li>
      </ul>
      <div
        className="squiggle"
        style={{ transform: `translateX(${activeLink * 33.33}%)` }}
      ></div>
    </nav>
  );
}

export default NavBar;
