import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

  const currency = useContext(ShopContext);       // get currency symbol from context

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>             {/* send use to product page */}
      <div className='overflow-hidden'>
        <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className=''>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem