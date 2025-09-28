import React, { useState, useEffect } from "react"
import { FaShoppingCart, FaBars, FaTimes, FaCamera, FaChevronDown } from "react-icons/fa";
import { auth, provider } from "/src/firebase.js";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";






const Navbar = ({ cart, onCartClick, onSearch }) => {
    const [searchText, setSearchText] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        onSearch(e.target.value); // send search value to App
    };

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <nav className="bg-gray-900 text-white shadow-md fixed top-0 z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between z-10">
                {/* Logo */}
                <div className="flex items-center space-x-2 text-2xl font-bold">
                    <FaCamera className="text-yellow-400" />
                    <span>CaptureTheMemories</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg font-medium relative">
                    {/* Search */}
                    <div className="flex-1 mx-6 hidden md:block">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchText}
                            onChange={handleSearch}
                            className="w-full px-4 py-2 rounded-md text-black"
                        />
                    </div>
                    <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                    <li className="hover:text-yellow-400 cursor-pointer">Shop</li>
                    <li
                        className="relative cursor-pointer flex items-center space-x-1 z-10"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <span className="hover:text-yellow-400 ">Categories</span>
                        <FaChevronDown className="text-sm mt-1" />
                        {dropdownOpen && (
                            <ul className="absolute top-8 left-0 bg-gray-800 shadow-lg rounded-md py-2 w-40">
                                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-black cursor-pointer">DSLR</li>
                                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-black cursor-pointer">Mirrorless</li>
                                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-black cursor-pointer">Lenses</li>
                                <li className="px-4 py-2 hover:bg-yellow-400 hover:text-black cursor-pointer">Accessories</li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:text-yellow-400 cursor-pointer">About</li>
                    <li>
                        <a href="/contact" className="hover:text-yellow-400 cursor-pointer">
                            Contact
                        </a>
                    </li>


                </ul>

                {/* Cart + Auth */}
                <div className="hidden md:flex items-center space-x-4">
                    <button onClick={onCartClick} className="relative">
                        <FaShoppingCart className="text-2xl hover:text-yellow-400" />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {totalItems}
                        </span>
                    </button>

                    {user ? (
                        <div className="flex items-center space-x-2">
                            <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full border-2 border-yellow-400" />
                            <span>{user.displayName}</span>
                            <button onClick={handleLogout} className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button onClick={handleLogin} className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500">
                            Login
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">
                    <ul className="space-y-3 text-lg">
                        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Shop</li>
                        <li>
                            <details className="group">
                                <summary className="flex items-center justify-between cursor-pointer hover:text-yellow-400">
                                    Categories
                                    <FaChevronDown className="transition-transform group-open:rotate-180" />
                                </summary>
                                <ul className="pl-4 mt-2 space-y-2 text-base">
                                    <li className="px-4 py-2 hover:bg-yellow-400 hover:text-black cursor-pointer">DSLR
                                    </li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Mirrorless</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Lenses</li>
                                    <li className="hover:text-yellow-400 cursor-pointer">Accessories</li>
                                </ul>
                            </details>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">About</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                    </ul>

                    <div className="mt-3">
                        {user ? (
                            <div className="flex items-center space-x-3">
                                <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full border-2 border-yellow-400" />
                                <span>{user.displayName}</span>
                                <button onClick={handleLogout} className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button onClick={handleLogin} className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
