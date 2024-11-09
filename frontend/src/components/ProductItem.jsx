import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaIndianRupeeSign } from "react-icons/fa6";


const ProductItem = ({ id, image, name, price }) => {

  const currency = useContext(ShopContext);       // get currency symbol from context

  return (
    <>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img src={image} className="h-40 w-44 md:h-56 md:w-64 hover:scale-110 transition ease-in-out" alt={name} />
        </div>
        <div className="flex">
          <div className="">
            <p className="pt-3 pb-1 text-sm ms-auto">{name.slice(0,15)}</p>
          </div>
          <div className="flex ms-auto">
            <p className="flex mt-2"><span className='mt-1'>{<FaIndianRupeeSign />}</span>{price}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductItem

