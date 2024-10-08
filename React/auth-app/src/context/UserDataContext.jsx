import React, { useState } from "react";
import { createContext } from "react";

// Crear mi contexto

export const UserContext = createContext(null);

// Crear mi proveedor
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const objUser = {
    user,
    setUser
  };
  return <UserContext.Provider value={objUser}>{children}</UserContext.Provider>;
};
