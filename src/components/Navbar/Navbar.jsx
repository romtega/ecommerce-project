import SearchIcon from "@/assets/search-icon.svg";
import ShoppingCartIcon from "@/assets/shopping-cart-icon.svg";
import HeartIcon from "@/assets/hearticon.svg";
import HelpIcon from "@/assets/helpicon.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar flex flex-center bg-dark text-accent">
      <img src={ShoppingCartIcon} alt="" className="logo" />
      <ul className="flex flex-center">
        <li>Categorias</li>
        <li>Ingresa a tu cuenta</li>
        <li>
          <a href="">
            <img src={HelpIcon} alt="" className="logo" />
          </a>
        </li>
      </ul>
      <ul className="flex flex-center">
        <li>
          <a href="">
            <img src={ShoppingCartIcon} alt="" className="logo" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={HeartIcon} alt="" className="logo" />
          </a>
        </li>
        <li>
          <div className="search-box flex flex-center">
            <input type="text" placeholder="Busca un producto" />
            <img src={SearchIcon} alt="Search Icon" className="icon" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
