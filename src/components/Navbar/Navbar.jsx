import prueba from "@/assets/prueba.svg";
import "./navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggle_mode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <div className="navbar flex flex-center">
      <img src={prueba} alt="" className="logo" />
      <ul className="flex flex-center">
        <li>Categorias</li>
        <li>Carrito</li>
        <li>Ingresa a tu cuenta</li>
        <li>FAQ</li>
        <li>Sobre este sitio</li>
      </ul>
      <div className="search-box flex flex-center">
        <input type="text" placeholder="Busca un producto" />
        <img
          onClick={() => {
            toggle_mode();
          }}
          src={darkMode == true ? prueba : console.log("funciona")}
          alt=""
          className="toggle-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
