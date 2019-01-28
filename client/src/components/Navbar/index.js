import React from "react";
import { Link } from "react-router-dom";

function Nav() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="/">Bookle!</a>
         <ul className="navbar-nav">
            <li className={window.location.pathname === "/" ? "nav-item active" : "nav-item"}>
               <Link to="/" className="nav-link">Search</Link>
            </li>
            <li className={window.location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
               <Link to="/saved" className="nav-link">Saved</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Nav;