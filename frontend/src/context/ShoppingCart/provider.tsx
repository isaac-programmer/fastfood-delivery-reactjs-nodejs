import { createContext, useState } from "react";
import { ShoppingCartContextProps, ShoppingCartContextType } from "../../types";

const INITIAL_VALUES_SHOPPINGCART_CONTEXT = {
    qtdProductsInCart: 0,
    insertProductsInCart: () => {}
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(INITIAL_VALUES_SHOPPINGCART_CONTEXT);

export default function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
    const [qtdProductsInCart, setQtdProductsInCart] = useState<number>(INITIAL_VALUES_SHOPPINGCART_CONTEXT.qtdProductsInCart);

    const insertProductsInCart = () => {
        setQtdProductsInCart(qtdProductsInCart+1);
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                qtdProductsInCart,
                insertProductsInCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}