import { ItemsProvider } from "@/context/ItemsContext";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/";
import ItemDetails from "./pages/ItemDetails/";
import Navbar from "@/components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <ItemsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itemdetails/:id" element={<ItemDetails />} />
        </Routes>
      </ItemsProvider>
    </>
  );
}

export default App;
