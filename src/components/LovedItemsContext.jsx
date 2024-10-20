import React, { createContext, useState } from "react";

// Create Context
export const LovedItemsContext = createContext();

// Create a Provider Component
export const LovedItemsProvider = ({ children }) => {
  const [lovedItemsCount, setLovedItemsCount] = useState(0);

  // Function to handle the toggling of love
  const toggleLove = (isLoved) => {
    setLovedItemsCount((prevCount) => (isLoved ? prevCount + 1 : prevCount - 1));
  };

  return (
    <LovedItemsContext.Provider value={{ lovedItemsCount, toggleLove }}>
      {children}
    </LovedItemsContext.Provider>
  );
};
