import { Outlet } from "react-router-dom"; //this has to be imported so we tell where the children of the layout component are to be rendered

import Navbar from "../components/Layout/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
