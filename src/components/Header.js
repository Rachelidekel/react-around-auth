import { useState } from "react";
import { Route, Link } from "react-router-dom";
import logo from "../images/Vector.svg";

function Header({ onLogOut, email }) {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsHeaderMenuOpen((open) => !open);
  }

  function handleLogOut() {
    setIsHeaderMenuOpen(false);
    onLogOut();
  }

  return (
    <header className="header">
      <div
        className={
          isHeaderMenuOpen
            ? "header__wrapper header__wrapper-mobile_open"
            : "header__wrapper header__wrapper-mobile"
        }
      >
        <p className="header__user-email">{email}</p>
        <button className="header__logout" onClick={handleLogOut}>
          Log out
        </button>
      </div>
      <img src={logo} alt="Around The U.S." className="logo" />
      <Route exact path="/">
        <button
          className={
            isHeaderMenuOpen ? "header__close-button" : "header__hamburger-menu"
          }
          onClick={handleMenuClick}
        ></button>
        <div className="header__wrapper header__wrapper-desktop">
          <p className="header__user-email">{email}</p>
          <button className="header__logout" onClick={handleLogOut}>
            Log out
          </button>
        </div>
      </Route>
      <Route path="/signup">
        <Link className="header__link" to="/signin">
          Log in
        </Link>
      </Route>
      <Route path="/signin">
        <Link className="header__link" to="/signup">
          Sign up
        </Link>
      </Route>
    </header>
  );
}

export default Header;
