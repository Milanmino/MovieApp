import { Link } from "react-router-dom";

import classes from "./Pagination.module.css";

function Pagination(props) {
  const totalPages = 5;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) { //rendering 5 links for pages
      const isCurrentPage = i === props.currentPage;
      pageNumbers.push(
        <li key={i} className={isCurrentPage ? classes.active : undefined}>
          {/*onClick is sending the data for the page to be rendered to MoviesPage.js file */}
          <Link to={`?page=${i}`} onClick={() => props.onPageChange(i)}>
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };

  const nextPage = props.currentPage + 1;
  const prevPage = props.currentPage - 1;

  return (
    <div className={classes.pagination}>
      {props.currentPage === 1 ? (
        <span className={classes.disabled}>Previous Page</span>
      ) : (
        <Link
          to={`?page=${prevPage}`}
          onClick={() => props.onPageChange(prevPage)}
          className={classes.prevNext}
        >
          Previous Page
        </Link>
      )}
      {renderPageNumbers()}
      {props.currentPage === 5 ? (
        <span className={classes.disabled}>Next Page</span>
      ) : (
        <Link
          to={`?page=${nextPage}`}
          onClick={() => props.onPageChange(nextPage)}
          className={classes.prevNext}
        >
          Next Page
        </Link>
      )}
    </div>
  );
}

export default Pagination;
