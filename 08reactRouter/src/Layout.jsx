/**
 * This file is created to define the base structure of the page
 */

import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  // We can dynamically render components inplace of Outlet.
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
