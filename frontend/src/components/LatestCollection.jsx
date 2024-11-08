import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() =>{
        setLatestProducts(products.slice(0, 10));       // 10 products from the beginning of the array
    },[]);

    // console.log(products);

  return (
    <div className='my-10'>
        <div className="text-center py-8 text-3xl">
            <Title text1={'LATEST'} text2={'COLLECTION'} className="" />
            <p className="w-3/4 sm:mt-0 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sint assumenda corporis velit ullam excepturi est itaque voluptates beatae veniam dolorem officia obcaecati nihil, incidunt soluta iure autem et animi. Perferendis facere asperiores eum rerum est earum voluptas, suscipit adipisci?
            </p>
        </div>

        {/* randering products */}


        
    </div>
  )
}

export default LatestCollection