import { createContext } from "react";
import { products } from "../assets/products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const delivaryFee = 10;                                  // Delivery fee


    const value = {
        delivaryFee, products
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;