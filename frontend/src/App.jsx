import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Features from './components/Features'
import ShoppingLayout from './pages/shopping-view/Layout'
import ShoppingHome from './pages/shopping-view/Home'
import ShoppingAccount from './pages/shopping-view/Account'
import ShoppingCheckout from './pages/shopping-view/Checkout'
import ShoppingListing from './pages/shopping-view/Listing'
import Footer from './components/Footer'
// import SearchBar from './components/SearchBar'



const App = () => {
  return (
    <div className="px-[2vw] md:px-[0vw] lg:px-[2vw]">
      <Navbar />
      {/* <SearchBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/features' element={<Features />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Routes path='/shop' element={<ShoppingLayout />}>
        <Route path='/home' element={<ShoppingHome />} />
        <Route path='/account' element={<ShoppingAccount />} />
        <Route path='/checkout' element={<ShoppingCheckout />} />
        <Route path='/listing' element={<ShoppingListing />} />
      </Routes>



      <Footer />

    </div>
  )
}

export default App

