import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/";
import LoginForm from "@/components/LoginForm/";
import SignupForm from "@/components/SignupForm/";
import "./home.css";
import ItemsDashboard from "@/components/ItemsDashboard/";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://ecommerce-json-jwt.onrender.com";
  const fetchItemsData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/items`);
      const data = await response.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchItemsData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <LoginForm />
      <SignupForm /> */}
      <ItemsDashboard items={items} loading={loading} />
    </>
  );
};

export default Home;
