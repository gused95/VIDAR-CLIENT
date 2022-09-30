import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        {CONSTS.CAPITALIZED_APP}
        <img src="../hoja.png" width="20vw"/>
      </Link>

      <div className="nav__authLinks">
        {/* Este es el menu que se muestra cuando un user inicio sesion */}
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              {props.user.email}
            </button>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/auth/signup"} className="authLink">
              Registrarse
            </Link>
            <Link to={"/auth/login"} className="authLink">
              Iniciar sesión
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
