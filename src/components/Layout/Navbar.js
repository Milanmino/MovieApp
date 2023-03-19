import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
            </li>
            <li>
            <NavLink
              to="movies?page=1"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Browse Movies
            </NavLink>
          </li>
          </ul>
        </nav>
      </header>
      {/* <div className={classes["main-image"]}>
        <img src={cinemaImage} alt="Cinema" />
      </div> */}
    </>
  );
}

export default Navbar;
