import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  About,
  Contact,
  Github,
  GithubWithLoader,
  Home,
  User,
} from "./components/index.js";
import { fetchGithubData } from "./components/Github/GithubWithLoader.jsx";

// The below is one of the ways of controlling the router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact-us",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//The below is another way of controlling the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
      <Route
        loader={fetchGithubData}
        path="github-with-loader"
        element={<GithubWithLoader />}
      />
    </Route> //You may observe in page that with loader a small fetch lag is bypassed.
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
