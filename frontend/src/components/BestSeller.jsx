import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import Carousel from './Carousel';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const bestSeller = products.filter(product => product.bestseller);
        setLoading(false);
        // setBestSeller(bestSeller.slice(0, 5));
        setBestSeller(bestSeller);
    }, [products]);

  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Best selling products on our platform. Check out our top sellers below.</p>
        </div>

        <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map((item,product) => (
                    <ProductItem key={item._id} id={item._id} name={item.name} image={item.imageUrl} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller
