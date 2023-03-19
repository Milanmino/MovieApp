import { useRouteError } from "react-router-dom";

import Navbar from "../components/Layout/Navbar";
import PageContent from "../components/Layout/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find this page!";
  }

  return (
    <>
      <Navbar />
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </>
  );
}

export default ErrorPage;
