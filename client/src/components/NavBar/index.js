import React from "react";
import Jumbotron from "../Jumbotron";

function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="navbar-brand" id="homeLink" href="/">
        Search Books
      </a>
     <ul className="navbar-nav">
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">Library Saved</a>
     </li>
   </ul>
 </nav>
 <Jumbotron/>
 </div>
  );
}

export default NavBar;
