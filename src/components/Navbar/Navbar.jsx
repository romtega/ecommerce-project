import searchicon from "@/assets/search-icon.svg";
import shoppingcarticon from "@/assets/shopping-cart-icon.svg";
import hearticon from "@/assets/hearticon.svg";
import helpicon from "@/assets/helpicon.svg";
import prueba from "@/assets/prueba.svg";
import "./navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggle_mode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <div className="navbar flex flex-center bg-dark text-accent">
      <img src={shoppingcarticon} alt="" className="logo" />
      <ul className="flex flex-center">
        <li>Categorias</li>

        <li>Ingresa a tu cuenta</li>
        <li>
          <a href="">
            <img src={shoppingcarticon} alt="" className="logo" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={hearticon} alt="" className="logo" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={helpicon} alt="" className="logo" />
          </a>
        </li>
      </ul>
      <div className="search-box flex flex-center">
        <input type="text" placeholder="Busca un producto" />
        <img
          onClick={() => {
            toggle_mode();
          }}
          src={darkMode == true ? searchicon : console.log("funciona")}
          alt=""
          className="toggle-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
