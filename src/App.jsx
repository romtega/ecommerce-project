import { ItemsProvider } from "@/context/ItemsContext";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/";
import ItemDetails from "@/pages/ItemDetails/";
import LoginForm from "@/pages/LoginForm";
import SignupForm from "@/pages/SignupForm";
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
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signupform" element={<SignupForm />} />
        </Routes>
      </ItemsProvider>
    </>
  );
}

export default App;
