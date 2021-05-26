import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStatevalue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStatevalue();

  const handleAuthentication = () => {
    if (user) {
      if (window.confirm("Are you sure to Sign out ?")) {
        auth.signOut();
      }
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "./login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLine1">
              Helow {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLine2">
              {user ? "SignOut" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option header__disable">
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2">& Orders</span>
          </div>
        </Link>

        <div className="header__option header__disable">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLine2 header__basketCount">
              {basket ? basket.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
