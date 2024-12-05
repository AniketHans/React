import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [githubData, setGithubData] = useState({});
  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, githubData, setGithubData }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
