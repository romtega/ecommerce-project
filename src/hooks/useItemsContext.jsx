import { useContext } from "react";
import { ItemsContext } from "@/context/ItemsContext";

function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext debe estar dentro del proveedor ItemsProvider"
    );
  }
  return context;
}

export default useItemsContext;
