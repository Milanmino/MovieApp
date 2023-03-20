import { NavLink, useParams, useNavigate } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  const { id } = useParams(); //getting the id so we can see if there is to be a 'Go back' button
  const navigate = useNavigate(); //this is for the go back button

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
            {/* Dynamically rendering the 'Go back' link if we are in the MovieDeails page */}
        {id && (
          <div className={classes.back}>
            <NavLink onClick={() => navigate(-1)}>Go back</NavLink>
          </div>
        )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
