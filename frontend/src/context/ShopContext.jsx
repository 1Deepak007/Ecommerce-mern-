import { createContext } from "react";
import { products } from "../assets/products";
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const delivaryFee = 10;                                  // Delivery fee
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);

    const value = {
        delivaryFee, products,
        search, setSearch,
        showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;