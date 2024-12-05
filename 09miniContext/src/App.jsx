import { useContext, useEffect, useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  /**
   * The bleow code will not work as App does not have access to the UserContext.
   * If you want the App to have the access then wrap App in the main.jsx file.
   * All the children components of App will get access to the UserContext
   */
  // const { setGithubData } = useContext(UserContext);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/anikethans")
  //     .then((res) => res.json())
  //     .then((res) => setGithubData(res));
  // });
  //Here below Login and Profile components will get access to the UserContext
  return (
    <>
      <UserContextProvider>
        <h1>Whats up!!</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
