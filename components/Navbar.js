import { useState } from "react";
import Link from 'next/link';
import { Tooltip } from "flowbite-react";

export default function Navbar(props) {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="bg-white py-2 md:py-0">
            <div className="container px-10 flex flex-wrap items-center justify-between mx-auto">
                <Link href="/">
                    <img src="/logo-title.png" className="h-8 sm:h-10 cursor-pointer" alt="Wagon Logo" />
                </Link>
                <div className="flex md:hidden">
                    <button onClick={() => {setShowMenu(!showMenu)}} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                    </button>
                </div>
                <div className={`items-center md:justify-self-end justify-between ${(!showMenu) ? "hidden" : ""} w-full md:flex md:w-auto`} id="navbar-cta">
                    <ul className="bg-transparent flex items-center flex-col p-4 mt-4 border-y  border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
                        <li className="my-2 md:my-0">
                            <Link href="/" className="block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-gray-700 md:p-0">Home</Link>
                        </li>
                        <li className="my-2 md:my-0">
                            <Link href="/about_us" className="block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-gray-700 md:p-0">About Us</Link>
                        </li>
                        <li className="my-2 md:my-0">
                            <a href="/Whitepaper_Wagon.pdf" target={"blank"} className="block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-gray-700 md:p-0">Whitepaper</a>
                        </li>
                        <li className="my-2 md:my-0">
                            <Link href="/ico" className="block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-gray-700 md:p-0">ICO</Link>
                        </li>
                        <li className="my-2 md:my-0">
                            <Link href="/faq" className="block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-gray-700 md:p-0">FAQ</Link>
                        </li>
                        
                        
                        <li className="my-2 md:my-0">
                            <a href="https://t.me/wagon_network" target={"blank"} className="button-dark">
                                Early Adopter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }