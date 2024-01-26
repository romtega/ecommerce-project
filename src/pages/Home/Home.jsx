import { useState } from "react";
import Navbar from "../../components/Navbar/";
import "./home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="container">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Home;
