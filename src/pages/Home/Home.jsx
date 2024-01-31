import { useState } from "react";
import Navbar from "@/components/Navbar/";
import LoginForm from "@/components/LoginForm/";
import SignupForm from "@/components/SignupForm/";
import "./home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <LoginForm />
      <SignupForm />
    </>
  );
};

export default Home;
