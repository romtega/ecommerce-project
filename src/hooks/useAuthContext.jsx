import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext debe estar dentro del proveedor AuthProvider"
    );
  }
  return context;
}

export default useAuthContext;
