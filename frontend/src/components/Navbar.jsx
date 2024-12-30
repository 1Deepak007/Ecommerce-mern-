import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-16" alt="Shop Bag Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shop Bag</span>
                </NavLink>

                {/* Toggle button for mobile */}
                <button 
                    className="md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" 
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2z" clipRule="evenodd"></path>
                    </svg>
                </button>

                {/* Main navbar links (hidden on small screens) */}
                <div className="hidden md:flex items-center space-x-8">
                    <CiSearch className="hidden md:inline size-6" />
                    <ul className="flex space-x-8">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-gray-900 dark:text-white hover:text-lime-500"}>HOME</NavLink></li>
                        <li><NavLink to="/collections" className={({ isActive }) => isActive ? "text-red-500" : "text-gray-900 dark:text-white hover:text-lime-500"}>COLLECTIONS</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-gray-900 dark:text-white hover:text-lime-500"}>ABOUT</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-gray-900 dark:text-white hover:text-lime-500"}>CONTACT</NavLink></li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <FaUser className="text-gray-900 dark:text-white size-5" />
                        <Link to="/cart" className="relative">
                            <GiShoppingBag className="text-gray-900 dark:text-white size-5" />
                            <span className="absolute top-[-7px] right-[-7px] bg-red-400 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">5</span>
                        </Link>
                    </div>
                </div>
            </div>
                
            {/* Sidebar menu (shown on mobile screens) */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 p-6 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
                <button  onClick={() => setSidebarOpen(false)} className="text-gray-500 dark:text-gray-400 mb-6">
                    <span className="sr-only">Close sidebar</span>
                    ✕
                </button>
                <ul className="space-y-4 text-gray-900 dark:text-white">
                    <li><NavLink to="/" onClick={() => setSidebarOpen(false)} className="block">HOME</NavLink></li>
                    <li><NavLink to="/collections" onClick={() => setSidebarOpen(false)} className="block">COLLECTIONS</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setSidebarOpen(false)} className="block">ABOUT</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setSidebarOpen(false)} className="block">CONTACT</NavLink></li>
                </ul>
                <div className="mt-6 flex items-center space-x-4">
                    <CiSearch className="text-gray-900 dark:text-white size-6" />
                    <FaUser className="text-gray-900 dark:text-white size-6" />
                    <Link to="/cart" className="relative">
                        <GiShoppingBag className="text-gray-900 dark:text-white size-6" />
                        <span className="absolute top-[-4px] right-[-4px] bg-red-400 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">5</span>
                    </Link>
                </div>
            </div>

            {/* Overlay for sidebar */}
            {isSidebarOpen && (
                <div 
                    onClick={() => setSidebarOpen(false)} 
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
                ></div>
            )}
        </nav>
    );
};

export default Navbar;







// import React, { useState } from 'react';
// import Logo from '../assets/Logo.jpg';
// import { Link, NavLink } from 'react-router-dom';
// import { CiSearch } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";
// import { GiShoppingBag } from "react-icons/gi";

// const Navbar = () => {

//     return (
//         <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                     <img src={Logo} className="h-16" alt="Shop Bag Logo" />
//                     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white sm:text-sm ">Shop Bag</span>
//                 </NavLink>

//                 {/* Toggle button for mobile */}
//                 <button className="md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" data-collapse-toggle="navbar-default"  aria-controls="navbar-default" aria-expanded="false"onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')}>
//                     <span className="sr-only">Open main menu</span>
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2z" clipRule="evenodd"></path>
//                     </svg>
//                 </button>

//                 <div id="navbar-default" className="hidden w-full md:flex md:w-auto">
//                     {/* navbar content */}
//                     <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                         <li>
//                             <NavLink to="/" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? "text-blue-600 md:text-blue-700" : "text-gray-900 md:text-gray-900"}`} aria-current="page">
//                                 HOME
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/collections" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? "text-blue-600 md:text-blue-700" : "text-gray-900 md:text-gray-900"}`} aria-current="page">
//                                 COLLECTIONS
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? "text-blue-600 md:text-blue-700" : "text-gray-900 md:text-gray-900"}`} aria-current="page">
//                                 ABOUT
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 rounded md:p-0 ${isActive ? "text-blue-600 md:text-blue-700" : "text-gray-900 md:text-gray-900"}`} aria-current="page">
//                                 CONTACT
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                     {/* search icon */}
//                     <CiSearch className="hidden md:inline size-6" />
                    
//                     {/* user icon */}
//                     <div className="relative">
//                         <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700">
//                             <FaUser className="size-6 rounded-full" />
//                         </button>
//                         <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//                             <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
//                                 <li>
//                                     <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</Link>
//                                 </li>
//                             </ul>
//                             <div className="py-1">
//                                 <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* cart icon */}
//                     <Link to="/cart" className="relative">
//                         <GiShoppingBag className="size-6" />
//                         <span className="absolute top-[-4px] right-[-4px] bg-red-400 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">5</span>
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;