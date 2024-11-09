import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() =>{
        setLatestProducts(products.slice(0, 10));       // 10 products from the beginning of the array
    },[products]);

    // console.log(products);

  return (
    <div className='sm:py-[5px] rounded-2xl md:py-5 bg-gray-200'>
        <div className="text-center md:mt-0 mt-8 text-3xl">
            <Title text1={'LATEST'} text2={'COLLECTION'} className="" />
            <p className="w-3/4 mb-3 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Our latest collection of products and services available for you. We will update this collection regularly. You can also browse our products by category or search for specific products.
            </p>
        </div>

        {/* randering products */}
        <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 gap-y-6">
            {latestProducts.map((item) => (
                <ProductItem key={item._id}  id={item._id} image={item.imageUrl} name={item.name} price={item.price} />
            ))}

            {/* <div key={index} className="flex flex-col items-center">
                <img src={product.imageUrl} alt={product.title} className="w-60 h-60 sm:w-30 sm:h-30 object-cover object-center"/>
                <p className="text-sm text-gray-600">{product.title}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
            </div> */}
        </div>

    </div>
  )
}

export default LatestCollection