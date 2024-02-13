import { createContext, useState, useEffect } from "react";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemSelected, setItemSelected] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const BASE_URL = "https://ecommerce-json-jwt.onrender.com";
  const fetchItemsData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/items`);
      const data = await res.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al recuperar datos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemsData();
  }, []);

  const dataContext = {
    items,
    loading,
    itemSelected,
    setItemSelected,
    searchTerm,
    setSearchTerm,
  };

  return (
    <ItemsContext.Provider value={dataContext}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsProvider };
