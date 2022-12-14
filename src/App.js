import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";

import Navbar2 from "./components/Navbar2/Navbar2";
import Location from "./pages/Location";
import AddCollection from "./pages/AddCollection";
import MyCollection from "./pages/MyCollection";
import DetailsCollection from "./pages/DetailsCollection";
import EditCollection from "./pages/EditCollection";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }


  return (
    <div>
      <Navbar2 handleLogout={handleLogout} user={user}/>
      <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>} />
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>} />
        
        <Route path="/location" element={<Location />} />
        <Route path="/add" element={<AddCollection />} />
        <Route path="/myCollection" element={<MyCollection />} />
        <Route path="/myCollection/:id" element={<DetailsCollection />} />
        <Route path='/myCollection/edit/:id' element={<EditCollection />} />
      </Routes>
    </div>
  );
}
