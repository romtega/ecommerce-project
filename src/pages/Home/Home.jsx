import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/";
import LoginForm from "@/components/LoginForm/";
import SignupForm from "@/components/SignupForm/";
import "./home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-json-jwt.onrender.com/items"
        );
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <LoginForm />
      <SignupForm />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Product List</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.product_name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
