import { NavLink, useParams, useNavigate } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  const { id } = useParams();
  const navigate = useNavigate();

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
