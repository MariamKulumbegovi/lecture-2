import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as route from '../../constants/routes';
import { AuthContext } from '../providers/AuthProvider';
import Earth from '../../img/earth.png';
import styles from './Header.module.css';
export const Header = () => {
  const { loggedIn, logOut } = useContext(AuthContext);

  const renderGuest = () => {
    return (
      <div className="navbar-menu is-justify-content-flex-end pr-4">
        <div className="buttons justify-content-flex-end">
          <NavLink className="button is-danger" to={route.REGISTER_PATH}>
            <strong>Sign up</strong>
          </NavLink>
          <NavLink className=" button is-dark" to={route.LOGIN_PATH}>
            Log in
          </NavLink>
        </div>
      </div>
    );
  };
  const renderUser = () => {
    return (
      <div className="navbar-menu is-justify-content-space-between pr-4">
        <div className=" is-flex">
          <NavLink className="navbar-item" to={route.PRODUCTS_PATH}>
            Products
          </NavLink>

          <NavLink className="navbar-item" to={route.ALL_COUNTRIES_PATH}>
            Countries
          </NavLink>
        </div>

        <div className="buttons">
          <button className="button is-danger" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <nav
        className={`navbar ${styles[`navbar-color`]}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={Earth} width="auto" height="auto" />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          {loggedIn ? renderUser() : renderGuest()}
        </div>
      </nav>
    </div>
  );
};
