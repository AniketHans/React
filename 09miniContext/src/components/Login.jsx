import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); //The UserContext is giving access to 2 values {user,setUser} when we defined its provider.

  const handleSubmit = () => {
    setUser({ username, password }); //This is how you set data to your context variables.
    /**
     * You need to send both the variable and setVariable method in the context so the set method can be used
     * to set data and the variable can be used to get the data.
     */
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
