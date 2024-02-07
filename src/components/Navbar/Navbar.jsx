import SearchIcon from "@/assets/search-icon.svg";
import ShoppingCartIcon from "@/assets/shopping-cart-icon.svg";
import HeartIcon from "@/assets/hearticon.svg";
import HelpIcon from "@/assets/helpicon.svg";
import UserIcon from "@/assets/usericon.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar flex flex-center container bg-accent text-white">
      <div className="main-navbar-brand uppercase letter-spacing-1 fs-500 fw-bold">
        ikomers
      </div>
      <ul className="flex flex-center">
        <li>
          <a href="">
            <ion-icon
              name="person-circle-outline"
              className="main-navbar-icon"
            ></ion-icon>
          </a>
        </li>
        <li>
          <a href="">
            <ion-icon
              name="cart-outline"
              className="main-navbar-icon"
            ></ion-icon>
          </a>
        </li>
        <li>
          <a href="">
            <ion-icon
              name="heart-outline"
              className="main-navbar-icon"
            ></ion-icon>
          </a>
        </li>
        <li>
          <div className="search-box flex flex-center">
            <input type="text" placeholder="Busca un producto" />
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
