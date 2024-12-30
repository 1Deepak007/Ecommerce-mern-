import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { MdArrowDropDown, MdFilterList } from "react-icons/md";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"


const Collection = () => {

  // get data of all products in the collection
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const [filterOptions, setFilterOptions] = useState({
    category: [],
    subCategory: []
  });


  const toggleCategory = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
    setFilterOptions({ ...filterOptions, category: newCategory });
  };

  const toggleSubCategory = (e) => {
    const newSubCategory = [...subCategory];
    if (newSubCategory.includes(e.target.value)) {
      newSubCategory.splice(newSubCategory.indexOf(e.target.value), 1);
    } else {
      newSubCategory.push(e.target.value);
    }
    setSubCategory(newSubCategory);
    setFilterOptions({ ...filterOptions, subCategory: newSubCategory }); // Update filterOptions
  };

  const applyFilter = () => {
    let filteredProducts = products.slice();
    // Filter by category
    if (filterOptions.category.length > 0) {
      filteredProducts = filteredProducts.filter(product => filterOptions.category.includes(product.category));
    }
    // Filter by subCategory
    if (filterOptions.subCategory.length > 0) {
      filteredProducts = filteredProducts.filter(product => filterOptions.subCategory.includes(product.subCategory));
    }
    if (sortType === 'relevant') {
      filteredProducts = shuffle(filteredProducts); // Shuffle the filtered products
    } else {
      // Sort by price (if selected)
      filteredProducts.sort((a, b) => {
        if (sortType === 'low-high') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
    setFilterProducts(filteredProducts);
  };


  const sortProducts = () => {
    let PCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(PCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(PCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there are elements remaining to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  useEffect(() => {
    sortProducts()
  }, [sortType, filterOptions])

  useEffect(() => {
    applyFilter();
  }, [filterOptions]); // Apply filter whenever filter options change

  useEffect(() => {
    console.log(filterOptions); // Log filter options for debugging (optional)
  }, [filterOptions]);

  useEffect(() => {
    applyFilter();
    console.log(category)
    console.log(subCategory)
  }, [category, subCategory]);


  return (
    <div className="flex flex-col gap-1 sm:gap-10 pt-3 md:pt-0  border-t">
      <div className="sm:w-full">
        <div className="flex flex-col gap-1 sm:gap-10 md:pt-10 sm:pt-0">
          <div id="main" className="flex flex-row">
            {/* Sidebar */}
            <div
              className={`fixed top-0 left-0 h-screen z-50 
                transition-transform duration-300 ease-in-out bg-black text-white
                md:w-1/5 sm:w-1/4 p-4 overflow-y-auto 
                ${showFilter ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-medium">Filters</p>
                <button
                  className="text-lg font-bold text-red-600 hover:text-orange-200"
                  onClick={() => setShowFilter(false)}
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="mb-2 text-sm font-medium mt-4">CATEGORIES</p>
                  <div className="flex flex-col gap-2 text-sm font-light text-white">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="men"
                        onChange={(e) => toggleCategory(e)}
                        className="w-4 h-4"
                      />
                      Men
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="women"
                        onChange={(e) => toggleCategory(e)}
                        className="w-4 h-4"
                      />
                      Women
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="children"
                        onChange={(e) => toggleCategory(e)}
                        className="w-4 h-4"
                      />
                      Kids
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="girls"
                        onChange={(e) => toggleCategory(e)}
                        className="w-4 h-4"
                      />
                      Girls
                    </label>
                  </div>
                </div>

                <div className="mt-3 rounded-lg">
                  <p className="mb-2 text-sm font-medium">TYPE</p>
                  <div className="flex flex-col gap-2 text-sm font-light ">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="Topwear"
                        onChange={(e) => toggleSubCategory(e)}
                        className="w-4 h-4"
                      />
                      Topwear
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="Bottomwear"
                        onChange={(e) => toggleSubCategory(e)}
                        className="w-4 h-4"
                      />
                      Bottomwear
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="Winterwear"
                        onChange={(e) => toggleSubCategory(e)}
                        className="w-4 h-4"
                      />
                      Winterwear
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full sm:w-9/10">
              <div className="flex justify-between text-base sm:text-2xl mb-4">
                <button
                  className="my-2 text-xl flex items-center cursor-pointer gap-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <MdFilterList className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-4">
                  <p className="md:text-lg font-normal sm:text-xs sm:md-0 sm:ps-0">ALL COLLECTIONS</p>
                  <select
                    className="flex overflow-y-auto border-2 border-gray-200 text-sm px-2 py-1 rounded-full"
                    // value={priceSort}
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option className="text-sm px-2 py-1 rounded-full" value="relevent">Relevent</option>
                    <option className="text-sm px-2 py-1 rounded-full" value="low-high">Price: Low to High</option>
                    <option className="text-sm px-2 py-1 rounded-full" value="high-low">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection

