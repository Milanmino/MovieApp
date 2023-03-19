import { Link, useSearchParams } from "react-router-dom";

import classes from "./Pagination.module.css";

function Pagination(props) {
  const [searchParams] = useSearchParams(); //get the page from the URL
  const currentPage = parseInt(searchParams.get("page"), 10); // parse it because it is not a number

  const totalPages = 5;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      const isCurrentPage = i === currentPage;
      pageNumbers.push(
        <li key={i} className={isCurrentPage ? classes.active : undefined}>
          <Link to={`?page=${i}`} onClick={() => props.onPageChange(i)}>
            {i}
          </Link>
          {/*onClick is sending the data for the page to be rendered to MoviesPage.js file */}
        </li>
      );
    }
    return pageNumbers;
  };

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  return (
    <div className={classes.pagination}>
      {currentPage === 1 ? (
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
      {currentPage === 5 ? (
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
