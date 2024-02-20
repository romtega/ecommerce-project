import { NavLink } from "react-router-dom";
import useItemsContext from "@/hooks/useItemsContext";
import { AuthContext } from "@/context/AuthContext";
import "./navbar.css";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = () => {
  const { isAuth, logout } = useAuthContext();

  const { searchTerm, setSearchTerm } = useItemsContext();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="main-navbar container flex flex-center  bg-accent text-white">
      <div className="main-navbar-brand uppercase letter-spacing-1 fs-500 fw-bold">
        <NavLink to="/">ikomers</NavLink>
      </div>
      <ul className="main-navbar-list flex flex-center">
        <li>
          <NavLink
            to="/shoppingcart"
            className="main-navbar-icon flex text-white"
          >
            <ion-icon name="cart-outline"></ion-icon>
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className="main-navbar-icon flex text-white">
            <ion-icon name="heart-outline"></ion-icon>
          </NavLink>
        </li>
        {isAuth ? (
          <>
            <li>
              <NavLink
                to="/loginform"
                className="main-navbar-icon flex bg-light text-dark"
              >
                <ion-icon name="person"></ion-icon>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={logout}
                className="main-navbar-icon flex bg-warning text-dark"
              >
                <ion-icon name="log-out-outline"></ion-icon>
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to="/loginform"
              className="main-navbar-icon flex text-white"
            >
              <ion-icon name="person-circle-outline"></ion-icon>
            </NavLink>
          </li>
        )}

        <li>
          <div className="main-navbar-search flex flex-center">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="main-navbar-search-btn flex flex-center bg-light text-white">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
