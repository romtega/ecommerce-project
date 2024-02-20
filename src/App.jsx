import { ItemsProvider } from "@/context/ItemsContext";
import { AuthProvider } from "@/context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/";
import ItemDetails from "@/pages/ItemDetails/";
import LoginForm from "@/pages/LoginForm";
import SignupForm from "@/pages/SignupForm";
import ShoppingCart from "@/pages/ShoppingCart";
import Wishlist from "@/pages/Wishlist";
import Navbar from "@/components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <ItemsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itemdetails/:id" element={<ItemDetails />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/signupform" element={<SignupForm />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </ItemsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
