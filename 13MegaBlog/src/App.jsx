import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true); //This loading state is important for showing the loading we are performing some operation which is taking some time.
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setIsLoading(false));
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
          {/* <Outlet /> We need to handle it after the react router dom is configured*/}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
