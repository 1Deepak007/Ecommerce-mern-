import { createContext } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { products } from "../assets/products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency  = <FaIndianRupeeSign/>;                 // Currency symbol
    const delivaryFee = 10;                                  // Delivery fee


    const value = {
        currency, delivaryFee, products
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;