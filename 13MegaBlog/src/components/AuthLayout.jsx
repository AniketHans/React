/**
 * This is a mechanism to protect the pages and routes.
 * We make a container which is empty but decides whether we should display the content to the user or not.
 * The below component is used to know if a user when trying to access a post or any information which should have been available only if he/she is logged in.
 * The Protected component will be used at the time of routing.
 * For some routes like /login,/signup etc we will be setting the authentication variable value as false.
 *  - This is obvious as for these routes, if a user is landing on them, we will consider him as logged out.
 *  - But if in store, we have status as true and we also have userData value, then the user should not be logged in again even if authentication value is false.
 *
 * For other routes like /post/{postid}, /all-posts etc, we will be setting the authentication variable value as true.
 *  - This is obvious as for these routes, if a user is landing on them, we will consider him as logged in.
 *  - But if in store, we have status as false with userData value as null, then the user needs to login even if the authentication value is true.
 */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Protected({ children, authentication = true }) {
  //The authentication variable value is passed by the user which decided if the user is authenticated according to him
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.status);

  useEffect(() => {
    //Here below, if user sent authentication value as true but the authStatus that we store in store has a value of false. It means the user is not logged actually in but it is sending the authentication as true, pretending to be a logged in user.
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      //If the user is not considering himself as logged in but in store, we have his/her status as logged in so user dont have to login again as we already have his/her session stored in store so we just navigate him/her to home displaying the loggedin content.
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  /**
   * We have put 3 dependencies for above useEffect()
   *    1. If authStatus is changed then run the useEffect.
   *    2. If the user landed on the page from some navigation, done using navigate, then run the useEffect
   *    3. If the authentication value is changed by the user then run the useEffect
   */

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
