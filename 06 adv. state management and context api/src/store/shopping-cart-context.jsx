import { createContext } from "react";

// created a context with a default value
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
});