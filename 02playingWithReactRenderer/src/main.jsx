import { createRoot } from "react-dom/client";
import React from "react";
// function MyApp() {
//   return <a href="https://www.google.com">Google link | Custom App</a>;
// }
// createRoot(document.getElementById("root")).render(<MyApp />);

// const customObject = <a href="https://www.google.com">Google link | Direct string</a>;
// createRoot(document.getElementById("root")).render(customObject);

const duniyaVariable = "Yes, duniya";
const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "Google Link | React Element",
  duniyaVariable
);
createRoot(document.getElementById("root")).render(reactElement);
