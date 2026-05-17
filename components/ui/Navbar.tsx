"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white w-full sticky top-0 z-50 ">
            <div className="w-full flex items-center justify-between max-w-6xl mx-auto py-4 px-6 md:px-16">
                <figure className="flex-shrink-0 z-50 cursor-pointer">
                    <img
                        src="/images/logo-paus-black.png"
                        alt="logo paus"
                        className="h-8 object-contain"
                    />
                </figure>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 text-slate-800 hover:text-black focus:outline-none  cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center space-x-12">
                    <ul className="flex items-center justify-center space-x-12">
                        <li>
                            <a
                                href="#"
                                className="text-slate-800 hover:text-black font-medium"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-slate-800 hover:text-black font-medium"
                            >
                                Brands
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-slate-800 hover:text-black font-medium"
                            >
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button className="bg-[#01223F] text-white px-6 py-2.5 rounded-full font-bold uppercase text-sm tracking-wide hover:bg-opacity-90 transition cursor-pointer">
                        Connect US
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
                >
                    <ul className="flex flex-col items-center space-y-8 text-lg mb-8">
                        <li>
                            <a
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="text-slate-800 hover:text-black font-semibold"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="text-slate-800 hover:text-black font-semibold"
                            >
                                Brands
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="text-slate-800 hover:text-black font-semibold"
                            >
                                About Us
                            </a>
                        </li>
                    </ul>

                    <button className="bg-[#01223F] text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wide w-full max-w-xs mx-auto cursor-pointer">
                        Connect US
                    </button>
                </div>
            </div>
        </nav>
    );
}
