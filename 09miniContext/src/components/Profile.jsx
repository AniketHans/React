import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext); //This is how you access the context data.
  if (!user)
    return (
      <div>
        <h1>Please login</h1>
      </div>
    );

  return <h1>Welcome! {user.username}</h1>;
}

export default Profile;
