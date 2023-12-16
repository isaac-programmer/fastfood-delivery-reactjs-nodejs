import { useContext } from "react";
import { ShoppingCartContext } from "./provider";

export default function useShoppingCartContext() {
    return useContext(ShoppingCartContext);
}