import Home from "@/pages/Home/";
import "./App.css";
import { ItemsProvider } from "@/context/ItemsContext";

function App() {
  return (
    <>
      <ItemsProvider>
        <Home />
      </ItemsProvider>
    </>
  );
}

export default App;
