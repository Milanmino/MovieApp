import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage, { movieDetailsLoader } from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "movies",
        id: "movies",
        children: [
          {
            path: "",
            element: <MoviesPage />,
          },
          {
            path: ":id",
            id: "movie-detail",
            element: <MovieDetailsPage />,
            loader: movieDetailsLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
