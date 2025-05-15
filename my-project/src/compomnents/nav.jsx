
import React, { useState } from "react";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Hamburger Icon (Top Left) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8"></path>
                        </svg>
                    </button>

                    <div className="text-white text-xl font-bold">Logo</div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-white">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">About</a></li>
                        <li><a href="#" className="hover:text-gray-400">Services</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>

                {/* Mobile Menu (Hidden Initially, Left Side) */}
                <ul className={`fixed top-0 left-0 w-2/3 h-full bg-gray-700 p-6 mt-[3.7rem] transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                    <li><a href="#" className="block text-white py-2 hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="block text-white py-2 hover:text-gray-400">About</a></li>
                    <li><a href="#" className="block text-white py-2 hover:text-gray-400">Services</a></li>
                    <li><a href="#" className="block text-white py-2 hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;

