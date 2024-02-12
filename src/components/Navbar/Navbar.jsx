import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar flex flex-center container bg-accent text-white">
      <div className="main-navbar-brand uppercase letter-spacing-1 fs-500 fw-bold">
        <Link to="/">ikomers</Link>
      </div>
      <ul className="main-navbar-list flex flex-center">
        <li>
          <a className="main-navbar-icon flex text-white" href="">
            <ion-icon name="person-circle-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a className="main-navbar-icon flex text-white" href="">
            <ion-icon name="cart-outline"></ion-icon>
          </a>
        </li>
        <li>
          <a className="main-navbar-icon flex text-white" href="">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
        </li>
        <li>
          <div className="main-navbar-search flex flex-center">
            <input type="text" placeholder="Buscar..." />
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
