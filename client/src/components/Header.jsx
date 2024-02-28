import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logos/logo_white.png'

const links = [
    { name: 'Home', to: '/' },
    // { name: 'Gift Ideas', to: '/gifts' },
    { name: 'Specials', to: '/specials' },
    { name: 'Custom Jewelry', to: '/custom' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="">
            <nav className="flex items-center justify-between py-1 pl-3 pr-3">
                <NavLink to="/"><img src={logo} alt="Ski Jewelers Logo" /></NavLink>

                {/* Hamburger menu icon for medium screens and below */}
                <div className="lg:hidden py-3">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <svg
                                className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6 transition-transform duration-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation links for large screens and above */}
                <div className="hidden lg:flex lg:items-center font-semibold my-4 text-sm sm:text-md lg:text-lg">
                    {links.map((link, i) => (
                        <NavLink key={i} to={link.to}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </nav>

            {/* Navigation links dropdown menu for medium screens and below */}
            <nav className={`${isOpen ? 'flex flex-col' : 'hidden'} dropdown lg:hidden p-3`}>
                {links.map((link, i) => (
                    <NavLink key={i} to={link.to} className="py-1" onClick={toggleMenu}>
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Header;
